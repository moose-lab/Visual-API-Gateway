"""Third-round documented workflow probes. Keeps credentials in process memory only."""
import argparse
import base64
import datetime as dt
import getpass
import hashlib
import io
import json
import os
from pathlib import Path
import re
import sys
import time
import urllib.parse
import zipfile

import requests

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'research/round3'
CAP = OUT / 'captures'
API = 'https://api.vlm.run'
DENIAL = {401, 402, 403, 429}


def save(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2), encoding='utf-8')


def clean_text(text, secrets=()):
    for value in secrets:
        if value:
            text = text.replace(value, '[REDACTED]')
    text = re.sub(r'("(?:media_token|session_token|access_token|refresh_token)"\s*:\s*")[^"\r\n]*(")', r'\1[REDACTED]\2', text)
    text = re.sub(r'(?i)((?:X-Goog-Signature|X-Goog-Credential|X-Amz-Signature|X-Amz-Credential|Signature|GoogleAccessId)=)[^&"\s]+', r'\1[REDACTED]', text)
    return text


def request(name, url, key='', body=None, headers=None, hidden=(), timeout=90):
    CAP.mkdir(parents=True, exist_ok=True)
    if (CAP / (name + '.meta.json')).exists():
        raise ValueError('Refusing to overwrite preserved capture: ' + name)
    host = urllib.parse.urlparse(url).hostname
    if key and host not in {'api.vlm.run', 'gateway.vlm.run'}:
        raise ValueError('Bearer destination is not an API host')
    secrets = (key, *hidden)
    hdr = {'User-Agent': 'VLM-interface-research/3.0', 'Accept': 'application/json'}
    hdr.update(headers or {})
    if key:
        hdr['Authorization'] = 'Bearer ' + key
    method = 'POST' if body is not None else 'GET'
    record = {'method': method, 'url': url, 'auth': 'Bearer [REDACTED]' if key else 'none',
              'body': body, 'headers': {k: ('[REDACTED]' if k.lower() in {'x-session-token'} else v) for k, v in (headers or {}).items()}}
    save(CAP / (name + '.request.json'), json.loads(clean_text(json.dumps(record), secrets)))
    start = time.monotonic()
    meta = {'evidence': 'RUNTIME', 'captured_at': dt.datetime.now(dt.timezone.utc).isoformat(),
            'url': clean_text(url, secrets), 'method': method}
    response = None
    parsed = None
    try:
        response = requests.request(method, url, headers=hdr, json=body, allow_redirects=False, timeout=timeout)
        raw = response.content
        # Binary artifacts are preserved byte-for-byte; signed URLs in textual responses are redacted.
        content_type = response.headers.get('content-type', '')
        if not raw.startswith(b'PK\x03\x04'):
            try:
                raw = clean_text(raw.decode('utf-8'), secrets).encode('utf-8')
            except UnicodeError:
                pass
        (CAP / (name + '.response.raw')).write_bytes(raw)
        try:
            parsed = json.loads(raw)
            save(CAP / (name + '.response.json'), parsed)
        except (ValueError, UnicodeError):
            if 'text/' in content_type:
                (CAP / (name + '.response.txt')).write_text(raw.decode('utf-8', errors='replace'), encoding='utf-8')
        meta.update(status=response.status_code, response_sha256=hashlib.sha256(raw).hexdigest(), response_bytes=len(raw),
                    headers={k: clean_text(v, secrets) for k, v in response.headers.items() if k.lower() in {
                        'content-type', 'server', 'date', 'x-request-id', 'retry-after', 'location', 'content-disposition'}})
    except Exception as exc:
        meta['error'] = clean_text(str(exc), secrets)
    meta['elapsed_seconds'] = round(time.monotonic() - start, 3)
    save(CAP / (name + '.meta.json'), meta)
    print(json.dumps({'name': name, 'status': meta.get('status'), 'bytes': meta.get('response_bytes'), 'error': meta.get('error')}), flush=True)
    return response, parsed


def download_skills(key):
    listed = json.loads((CAP / 'skills_list_current.response.json').read_text(encoding='utf-8'))
    for skill in listed:
        if skill.get('is_public') is not True:
            continue
        stem = 'public_skill_' + skill['name'].replace('-', '_')
        if (CAP / (stem + '_download.meta.json')).exists():
            continue
        response, data = request(stem + '_download', API + '/v1/skills/' + skill['id'] + '/download', key)
        if response is None or response.status_code in DENIAL:
            break
        raw = response.content
        if not raw.startswith(b'PK\x03\x04'):
            original = response.json() if response.status_code == 200 else {}
            url = response.headers.get('location') or original.get('download_url') or original.get('url')
            if not url:
                continue
            host = urllib.parse.urlparse(url).hostname or ''
            if host not in {'storage.googleapis.com', 'api.vlm.run'} and not host.endswith('.storage.googleapis.com'):
                print('Artifact host requires separate inspection; not fetched.', flush=True)
                continue
            response, _ = request(stem + '_zip', url, key='' if host != 'api.vlm.run' else key)
            if response is None or response.status_code != 200:
                continue
            raw = response.content
        if not raw.startswith(b'PK\x03\x04'):
            continue
        destination = OUT / 'public_skills' / skill['name']
        destination.mkdir(parents=True, exist_ok=True)
        names = []
        with zipfile.ZipFile(io.BytesIO(raw)) as archive:
            if sum(i.file_size for i in archive.infolist()) > 10_000_000:
                raise ValueError('Archive exceeds inspection size')
            for item in archive.infolist():
                target = (destination / item.filename).resolve()
                if not target.is_relative_to(destination.resolve()):
                    raise ValueError('Archive member leaves destination')
                names.append(item.filename)
                if not item.is_dir():
                    target.parent.mkdir(parents=True, exist_ok=True)
                    target.write_bytes(archive.read(item))
        save(destination / 'capture.json', {'evidence': 'RUNTIME', 'skill_id': skill['id'], 'skill_version': skill['skill_version'],
                                           'archive_sha256': hashlib.sha256(raw).hexdigest(), 'members': names})
        print(json.dumps({'skill': skill['name'], 'members': names}), flush=True)


def inline_skill(directory):
    buffer = io.BytesIO()
    with zipfile.ZipFile(buffer, 'w', zipfile.ZIP_DEFLATED) as archive:
        for path in sorted(directory.iterdir()):
            if path.is_file():
                archive.writestr(path.name, path.read_bytes())
    return {'type': 'inline', 'name': directory.name,
            'source': {'type': 'base64', 'media_type': 'application/zip',
                       'data': base64.b64encode(buffer.getvalue()).decode()}}


def artifact_probe(name, execution_id, key):
    query = urllib.parse.urlencode({'execution_id': execution_id, 'limit': 10})
    response, data = request(name + '_artifacts', API + '/v1/artifacts?' + query, key)
    if response is None or response.status_code != 200:
        return
    # Fetch only the filename created by this test's own pipeline.
    query = urllib.parse.urlencode({'execution_id': execution_id, 'filename': 'round3-result.json'})
    response, _ = request(name + '_artifact_get', API + '/v1/artifacts?' + query, key)
    if response is None:
        return
    if response.status_code in {301, 302, 303, 307, 308}:
        url = response.headers.get('location', '')
        host = urllib.parse.urlparse(url).hostname or ''
        if host == 'storage.googleapis.com' or host.endswith('.storage.googleapis.com'):
            request(name + '_artifact_bytes', url)


def synthetic_referral_pdf():
    lines = ['SYNTHETIC TEST REFERRAL', 'Patient: Test Example', 'Date of birth: 2000-01-02',
             'Date of referral: 2026-10-13', 'Reason for referral: Routine vision evaluation',
             'Scheduling priority: Routine']
    stream = b'BT /F1 16 Tf 45 745 Td ' + b' 0 -28 Td '.join(('(' + line + ') Tj').encode() for line in lines) + b' ET'
    objects = [b'<< /Type /Catalog /Pages 2 0 R >>', b'<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
               b'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
               b'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
               b'<< /Length ' + str(len(stream)).encode() + b' >>\nstream\n' + stream + b'\nendstream']
    raw = b'%PDF-1.4\n'
    offsets = [0]
    for number, obj in enumerate(objects, 1):
        offsets.append(len(raw))
        raw += str(number).encode() + b' 0 obj\n' + obj + b'\nendobj\n'
    position = len(raw)
    raw += b'xref\n0 6\n0000000000 65535 f \n' + b''.join(f'{o:010d} 00000 n \n'.encode() for o in offsets[1:])
    raw += f'trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n{position}\n%%EOF\n'.encode()
    target = OUT / 'synthetic_referral.pdf'
    if target.exists():
        raise ValueError('Refusing to overwrite synthetic fixture')
    target.write_bytes(raw)
    save(OUT / 'synthetic_referral.json', {'evidence': 'PROPOSAL', 'scope': 'Locally authored synthetic input, no real patient',
         'text_lines': lines, 'sha256': hashlib.sha256(raw).hexdigest()})
    return raw


def execution_probe(key, mode):
    import uuid
    name = 'execution_' + mode
    if (CAP / (name + '_submit.meta.json')).exists() or (OUT / (name + '.expected.json')).exists():
        raise ValueError('Refusing to overwrite an existing execution experiment: ' + name)
    directory = OUT / 'test_skills' / ('round3-greeting-test' if mode == 'fallback' else 'round3-arithmetic-test')
    skill = inline_skill(directory)
    if mode in {'replay', 'agent'}:
        first = json.loads((CAP / 'execution_program_submit.request.json').read_text(encoding='utf-8'))
        skill = first['body']['config']['skills'][0]
    if mode in {'reference', 'reference_replay'}:
        listed = json.loads((CAP / 'skills_list_current.response.json').read_text(encoding='utf-8'))
        info = next(item for item in listed if item['name'] == 'grounded-document-extraction')
        skill = {'type': 'skill_reference', 'skill_id': info['id'], 'skill_version': info['skill_version']}
        raw = synthetic_referral_pdf() if mode == 'reference_replay' else (ROOT / 'research/round2/native_text.pdf').read_bytes()
        inputs = {'doc_path': {'type': 'file_url', 'file_url': {'url': 'data:application/pdf;base64,' + base64.b64encode(raw).decode()}}}
        prompt = 'Apply the supplied skill to the synthetic test document. Return null for absent fields.'
        selected_mode = 'program'
    elif mode == 'fallback':
        inputs = {'text': 'Return the greeting ROUND3_HELLO.'}
        prompt = 'Return exactly {"response":"ROUND3_HELLO"} using the supplied skill.'
        selected_mode = 'program'
    else:
        inputs = {'left': 17 if mode != 'replay' else 31, 'right': 25 if mode != 'replay' else 19,
                  'marker': 'ROUND3_' + uuid.uuid4().hex}
        prompt = ('Use the supplied arithmetic skill. Execute its pipeline once with the provided inputs, '
                  'write round3-result.json as described in the skill, and return the resulting JSON object.')
        selected_mode = 'agent' if mode == 'agent' else 'program'
    expected = None if mode in {'reference', 'reference_replay'} else ({'response': 'ROUND3_HELLO'} if mode == 'fallback' else
                                                {'marker': inputs['marker'], 'sum': inputs['left'] + inputs['right']})
    save(OUT / (name + '.expected.json'), {'evidence': 'PROPOSAL', 'scope': 'Locally authored test expectation; not server evidence',
         'inputs': inputs, 'expected': expected})
    body = {'name': 'round3-' + mode + '-test', 'model': 'vlmrun-orion-2:auto', 'batch': True,
            'inputs': inputs, 'config': {'mode': selected_mode, 'prompt': prompt, 'skills': [skill]}}
    response, data = request(name + '_submit', API + '/v1/agent/execute', key, body)
    if response is None or response.status_code != 200 or not isinstance(data, dict) or not data.get('id'):
        return
    execution_id = data['id']
    final = data
    for number in range(1, 31):
        if final.get('status') in {'completed', 'failed', 'paused'}:
            break
        time.sleep(5 if number < 4 else 10)
        response, final = request(name + '_poll_' + str(number).zfill(2),
                                  API + '/v1/agent/executions/' + urllib.parse.quote(execution_id, safe=''), key)
        if response is None or response.status_code != 200 or not isinstance(final, dict):
            return
    save(OUT / (name + '.observation.json'), {'evidence': 'RUNTIME', 'execution_id': execution_id,
         'requested_mode': selected_mode, 'final': final})
    print(json.dumps({'execution': name, 'id': execution_id, 'status': final.get('status'),
                      'execution_mode': final.get('execution_mode'), 'response': final.get('response'),
                      'usage': final.get('usage')}, ensure_ascii=False), flush=True)
    if final.get('status') == 'completed' and mode not in {'fallback', 'reference', 'reference_replay'}:
        artifact_probe(name, execution_id, key)
    if final.get('status') == 'completed' and mode in {'reference', 'reference_replay'}:
        request(name + '_artifacts', API + '/v1/artifacts?' + urllib.parse.urlencode({'execution_id': execution_id}), key)


def next_day_read(key):
    for name in ['execution_program', 'execution_reference_replay']:
        observation = json.loads((OUT / (name + '.observation.json')).read_text(encoding='utf-8'))
        execution_id = observation['execution_id']
        response, data = request(name + '_next_day', API + '/v1/agent/executions/' + execution_id, key)
        if response is None or response.status_code in DENIAL:
            return
    observation = json.loads((OUT / 'execution_reference_replay.observation.json').read_text(encoding='utf-8'))
    execution_id = observation['execution_id']
    old_list = json.loads((CAP / 'execution_reference_replay_artifacts.response.json').read_text(encoding='utf-8'))
    item = next(i for i in old_list['items'] if i['filename'].endswith('.pdf'))
    query = urllib.parse.urlencode({'execution_id': execution_id, 'object_id': item['object_id']})
    response, _ = request('reference_pdf_object_get_next_day', API + '/v1/artifacts?' + query, key)
    if response is not None and response.status_code in {301, 302, 303, 307, 308}:
        url = response.headers.get('location', '')
        host = urllib.parse.urlparse(url).hostname or ''
        if host == 'storage.googleapis.com' or host.endswith('.storage.googleapis.com'):
            request('reference_pdf_object_bytes_next_day', url)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('mode', choices=['download-skills', 'program', 'replay', 'agent', 'fallback', 'reference', 'reference_replay', 'next-day-read'])
    args = parser.parse_args()
    key = os.environ.get('VLM_API_KEY') or (getpass.getpass('API key (hidden): ') if sys.stdin.isatty() else sys.stdin.readline().strip())
    if not key:
        raise SystemExit('No credential supplied')
    if args.mode == 'download-skills':
        download_skills(key)
    elif args.mode == 'next-day-read':
        next_day_read(key)
    else:
        execution_probe(key, args.mode)


if __name__ == '__main__':
    main()
