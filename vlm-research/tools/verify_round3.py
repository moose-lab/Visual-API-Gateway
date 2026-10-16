"""Offline verification of third-round evidence and report references."""
import ast
import base64
from decimal import Decimal
import datetime as dt
import hashlib
import io
import json
from pathlib import Path
import re
import sys
from urllib.parse import unquote
import zipfile

ROOT = Path(__file__).resolve().parents[1]
ROUND = ROOT / 'research/round3'
CAP = ROUND / 'captures'
REPORT = ROOT / 'report'
checks = []


def read(path):
    return json.loads(path.read_text(encoding='utf-8'))


def check(name, passed, detail):
    checks.append({'name': name, 'passed': bool(passed), 'detail': detail})


manifests = [read(REPORT / name) for name in ['evidence-manifest.json', 'round2-evidence-manifest.json', 'round3-evidence-manifest.json']]
for number, manifest in enumerate(manifests, 1):
    bad = [e['path'] for e in manifest['files'] if not (ROOT / e['path']).is_file() or
           hashlib.sha256((ROOT / e['path']).read_bytes()).hexdigest() != e['sha256']]
    check(f'第{number}轮归档完整性', not bad, {'files': len(manifest['files']), 'mismatches': bad})

metas = list(CAP.glob('*.meta.json'))
bad = []
for path in metas:
    meta = read(path)
    raw = CAP / (path.name.removesuffix('.meta.json') + '.response.raw')
    if meta.get('response_sha256') and (not raw.exists() or hashlib.sha256(raw.read_bytes()).hexdigest() != meta['response_sha256'] or len(raw.read_bytes()) != meta['response_bytes']):
        bad.append(path.name)
check('第三轮HTTP字节/哈希', not bad, {'requests': len(metas), 'mismatches': bad, 'scope': 'Hashes correspond to archived redacted text or original binary'})

listed = read(CAP / 'skills_list_current.response.json')
packages = list((ROUND / 'public_skills').glob('*/capture.json'))
check('公开Skill目录完整下载', len(listed) == len(packages) == 5 and all(i['is_public'] for i in listed) and
      {i['name'] for i in listed} == {p.parent.name for p in packages}, {'names': sorted(i['name'] for i in listed)})
bad = []
for path in packages:
    capture = read(path)
    raw_path = CAP / ('public_skill_' + path.parent.name.replace('-', '_') + '_zip.response.raw')
    raw = raw_path.read_bytes()
    if hashlib.sha256(raw).hexdigest() != capture['archive_sha256']:
        bad.append(str(raw_path))
    with zipfile.ZipFile(io.BytesIO(raw)) as archive:
        if archive.namelist() != capture['members']:
            bad.append(path.parent.name + ':members')
        for item in archive.infolist():
            if not item.is_dir() and (path.parent / item.filename).read_bytes() != archive.read(item):
                bad.append(path.parent.name + ':' + item.filename)
check('公开ZIP与解包逐字节匹配', not bad, {'packages': len(packages), 'mismatches': bad})

pipelines = list((ROUND / 'public_skills').rglob('pipeline.py'))
signatures = []
for path in pipelines:
    tree = ast.parse(path.read_text(encoding='utf-8'))
    fn = next(n for n in tree.body if isinstance(n, ast.AsyncFunctionDef) and n.name == 'process')
    signatures.append({'path': path.relative_to(ROOT).as_posix(), 'args': [a.arg for a in fn.args.args]})
check('三个公开pipeline入口静态核对', len(signatures) == 3 and all(s['args'][0] == 'ctx' for s in signatures),
      {'signatures': signatures, 'scope': 'AST only; downloaded code not executed locally'})

summary = read(REPORT / 'round3-runtime-summary.json')
executions = {e['name']: e for e in summary['executions']}
ids = {e['id'] for e in executions.values()}
check('六个唯一execution完成', len(executions) == len(ids) == 6 and all(e['status'] == 'completed' for e in executions.values()), {'ids': sorted(ids)})
expected_modes = {'program': 'agent', 'replay': 'agent', 'agent': 'agent', 'fallback': 'agent', 'reference': 'program', 'reference_replay': 'program'}
actual_modes = {n: executions['execution_' + n]['reported_execution_mode'] for n in expected_modes}
check('模式与回包对照', actual_modes == expected_modes, actual_modes)
bundles = [read(CAP / ('execution_' + n + '_submit.request.json'))['body']['config']['skills'][0]['source']['data'] for n in ['program', 'replay', 'agent']]
check('重放与agent使用同一ZIP', len(set(bundles)) == 1, {'sha256': hashlib.sha256(base64.b64decode(bundles[0])).hexdigest()})
check('算术与独立artifact匹配', all(executions['execution_' + n]['exact_expected_match'] and executions['execution_' + n]['artifact_matches_response'] for n in ['program', 'replay', 'agent']), {'cases': 3})
fallback = executions['execution_fallback']
check('fallback结构差异保留', fallback['exact_expected_match'] is False and json.loads(fallback['response']['response']) == fallback['expected'],
      {'observed': fallback['response'], 'expected': fallback['expected'], 'scope': 'Observed mismatch; not a passed task-output conformance test'})
check('program引用steps报告为0', all(executions['execution_' + n]['usage']['steps'] == 0 for n in ['reference', 'reference_replay']), {'scope': 'Does not establish zero downstream model calls'})

total = sum((Decimal(str(e['usage']['cost_dollars'])) for e in executions.values()), Decimal('0'))
audit = read(ROUND / 'execution-audit.json')
check('费用按唯一ID核对', len(ids) == 6 and total == Decimal('0.119482') == Decimal(summary['reported_execution_cost_usd']) == Decimal(audit['total_observed_cost_dollars_exact']),
      {'usage_usd': str(total), 'all_rounds_usage_usd': str(total + Decimal('0.085029')), 'billing_verified': False})
anomalies = [a for e in executions.values() for a in e['nonterminal_completed_at']]
check('非终态时间戳异常已保留', len(anomalies) == 19 and all(a['status'] == 'running' and a['completed_at'] < a['created_at'] for a in anomalies),
      {'snapshots': len(anomalies), 'scope': 'Confirms contradictory fields, not their server-side cause'})

from pypdf import PdfReader
pdf = ROUND / 'synthetic_referral.pdf'
fixture = read(ROUND / 'synthetic_referral.json')
lines = PdfReader(pdf).pages[0].extract_text().splitlines()
check('本地PDF真实文本与输入一致', lines == fixture['text_lines'] and hashlib.sha256(pdf.read_bytes()).hexdigest() == fixture['sha256'], {'lines': lines})
response = executions['execution_reference_replay']['response']
check('转诊字段核对', response['patient']['givenName'] == 'Test' and response['patient']['familyName'] == 'Example' and
      response['patient']['dateOfBirth'] == '2000-01-02' and response['dateOfReferral'] == '2026-10-13' and
      response['reasonForReferral'] == 'Routine vision evaluation' and response['schedulingPriority'] == 'Routine', {'scope': 'One synthetic document'})
metadata = [v for k, v in response.items() if k.endswith('_metadata') and v.get('bboxes')]
metadata += [v for k, v in response['patient'].items() if k.endswith('_metadata') and v.get('bboxes')]
bboxes = [box for m in metadata for box in m['bboxes']]
check('Grounding文本/页号/范围', len(metadata) == 7 and {i for m in metadata for i in m['annotation_ids']} == {f'L{i}' for i in range(6)} and
      all(b['content'] in lines and b['page'] == 0 and all(0 <= v <= 1 for v in b['bbox']['xywh']) and
          b['bbox']['xywh'][0] + b['bbox']['xywh'][2] <= 1 and b['bbox']['xywh'][1] + b['bbox']['xywh'][3] <= 1 for b in bboxes),
      {'populated_metadata_fields': len(metadata), 'boxes': len(bboxes), 'scope': 'Not a pixel alignment or confidence calibration test'})
schema = read(ROUND / 'public_skills/grounded-document-extraction/schema.json')
check('const与metadata扩展区别', schema['properties']['type']['const'] == 'referral' and schema['additionalProperties'] is False and
      'type_metadata' not in schema['properties'] and 'type_metadata' in response and executions['execution_reference']['response']['type'] == 'referral',
      {'scope': 'A schema const response is not evidence of correct document classification'})

next_day_details = []
for name in ['execution_program', 'execution_reference_replay']:
    meta = read(CAP / (name + '_next_day.meta.json'))
    data = read(CAP / (name + '_next_day.response.json'))
    old = read(ROUND / (name + '.observation.json'))['final']
    elapsed = (dt.datetime.fromisoformat(meta['captured_at']) - dt.datetime.fromisoformat(old['completed_at'].replace('Z', '+00:00'))).total_seconds()
    next_day_details.append({'name': name, 'status': meta['status'], 'equal': data == old, 'hours_since_reported_completion': round(elapsed / 3600, 3)})
check('隔日execution回读一致', all(d['status'] == 200 and d['equal'] and d['hours_since_reported_completion'] > 19 for d in next_day_details),
      {'results': next_day_details, 'scope': 'No evidence of intervening restart or maximum TTL'})
downloaded = CAP / 'reference_pdf_object_bytes_next_day.response.raw'
check('隔日object_id PDF完整下载', read(CAP / 'reference_pdf_object_get_next_day.meta.json')['status'] == 307 and
      read(CAP / 'reference_pdf_object_bytes_next_day.meta.json')['status'] == 200 and downloaded.read_bytes() == pdf.read_bytes(),
      {'bytes': len(downloaded.read_bytes()), 'sha256': hashlib.sha256(downloaded.read_bytes()).hexdigest(), 'scope': 'Returned artifact matches original input PDF'})

systemone = read(ROUND / 'systemone_source/offline-verification.json')
source_manifest = read(ROUND / 'systemone_source/source-manifest.json')
bad = [e['path'] for e in source_manifest['files'] if hashlib.sha256((ROUND / 'systemone_source' / e['path']).read_bytes()).hexdigest() != e['sha256']]
check('SystemOne来源及15项离线结果', not bad and systemone['passed'] == systemone['total'] == 15 and all(c['passed'] for c in systemone['checks']),
      {'checks': systemone['total'], 'source_mismatches': bad, 'scope': 'Existing offline MockTransport/template tests, not new remote inference'})

scripts = list((ROOT / 'tools').glob('*.py')) + list(ROUND.glob('*.py'))
bad = []
for path in scripts:
    try:
        ast.parse(path.read_text(encoding='utf-8'))
    except SyntaxError:
        bad.append(path.relative_to(ROOT).as_posix())
check('研究脚本静态语法', not bad, {'scripts': len(scripts), 'failed': bad})

bad = []
mds = [ROOT / 'README.md'] + list(REPORT.glob('*.md')) + [ROUND / 'systemone_source/findings.md']
for path in mds:
    content = re.sub(r'^(`{3,}|~{3,}).*?^\1\s*$', '', path.read_text(encoding='utf-8'), flags=re.M | re.S)
    for link in re.findall(r'\]\(([^)]+)\)', content):
        link = link.strip().strip('<>')
        if link.startswith(('https:', 'http:', 'mailto:', '#')):
            continue
        link = re.sub(r':\d+$', '', unquote(link.split('#')[0]))
        dest = (path.parent / link).resolve()
        if not dest.exists() and dest != (REPORT / 'round3-verification.md').resolve():
            bad.append({'file': path.name, 'target': link})
check('报告与专项本地链接', not bad, {'reports': len(mds), 'missing': bad})

scan_paths = {ROOT / e['path'] for m in manifests for e in m['files']} | set(scripts) | set(REPORT.glob('*')) | {ROOT / 'README.md'}
bad = [p.relative_to(ROOT).as_posix() for p in scan_paths if p.is_file() and re.search(rb'sk-[A-Za-z0-9]{25,}', p.read_bytes())]
check('API Key模式扫描', not bad, {'files': len(scan_paths), 'candidate_files': bad, 'scope': 'Pattern scan, not proof against every possible secret format'})
bad = []
for p in CAP.glob('*.json'):
    value = p.read_text(encoding='utf-8')
    tokens = re.findall(r'"(?:media_token|session_token|access_token|refresh_token)"\s*:\s*"([^"\r\n]*)"', value)
    signatures = re.findall(r'(?i)(?:X-Goog-Signature|X-Goog-Credential|X-Amz-Signature|X-Amz-Credential)=([^&"\s]+)', value)
    if any(s and s != '[REDACTED]' for s in tokens + signatures):
        bad.append(p.name)
check('token与签名URL脱敏', not bad, {'candidate_files': bad})
storage = [read(p) for p in CAP.glob('*.request.json') if 'storage.googleapis.com' in read(p)['url']]
check('对象存储下载无API Bearer', storage and all(r['auth'] == 'none' for r in storage), {'downloads': len(storage)})

result = {'evidence': 'RUNTIME', 'scope': 'Local offline verification', 'review_date': dt.date.today().isoformat(),
          'passed': all(c['passed'] for c in checks), 'checks': checks}
(REPORT / 'round3-verification.json').write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding='utf-8')
lines = ['# 第三轮离线核查', '', 'RUNTIME-本机：核查日期 ' + result['review_date'] + '。只读取本地证据，没有API推理请求。', '',
         '|检查|结果|说明|', '|---|---|---|']
for item in checks:
    lines.append('|' + '|'.join([item['name'], '通过' if item['passed'] else '失败', json.dumps(item['detail'], ensure_ascii=False)]) + '|')
lines += ['', '通过表示归档与上述限定样本一致。异常字段核查通过表示异常已如实记录，不表示服务输出符合全部期望；未证明私有后台、隐藏prompt、像素级grounding或概率校准。']
(REPORT / 'round3-verification.md').write_text('\n'.join(lines) + '\n', encoding='utf-8')
print(json.dumps({'passed': result['passed'], 'checks': len(checks), 'failed': [c for c in checks if not c['passed']]}, ensure_ascii=False))
sys.exit(0 if result['passed'] else 1)
