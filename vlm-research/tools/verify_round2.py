"""Verify round-two captured evidence offline, with no requests or generated-code execution."""
import ast
from decimal import Decimal
import datetime as dt
import hashlib
import json
from pathlib import Path
import re
import sys
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[1]
REPORT = ROOT / 'report'
ROUND = ROOT / 'research/round2'
CAP = ROUND / 'captures'
checks = []


def read(path):
    return json.loads(path.read_text(encoding='utf-8'))


def check(name, condition, detail):
    checks.append({'check': name, 'passed': bool(condition), 'detail': detail})


manifests = [read(REPORT / name) for name in ['evidence-manifest.json', 'round2-evidence-manifest.json']]
for name, manifest in zip(['第一轮历史证据完整性', '第二轮证据完整性'], manifests):
    bad = [e['path'] for e in manifest['files'] if not (ROOT / e['path']).is_file() or hashlib.sha256((ROOT / e['path']).read_bytes()).hexdigest() != e['sha256']]
    check(name, not bad, {'files': len(manifest['files']), 'mismatches': bad})

metas = list(CAP.glob('*.meta.json'))
bad = []
for path in metas:
    meta = read(path)
    raw = CAP / (path.name.removesuffix('.meta.json') + '.response.raw')
    if meta.get('response_sha256') and (not raw.exists() or hashlib.sha256(raw.read_bytes()).hexdigest() != meta['response_sha256']):
        bad.append(path.name)
check('HTTP原始回包与采集hash', not bad, {'responses': len(metas), 'mismatches': bad})

models = read(CAP / 'gateway_models.response.json')['data']
old = {m['id'] for m in read(ROOT / 'research/runtime/gateway_models.response.json')['data']}
added = {m['id'] for m in models} - old
check('目录变化', len(models) == 26 and added == {'google/embeddinggemma-2', 'lightonai/lightonocr-3-4b'}, {'count': len(models), 'added': sorted(added)})
expected = {'ocr_auto_ocr': ('paddleocr/pp-ocrv6', 'paddleocr'), 'ocr_auto_markdown_native_pdf': ('vlm-run/ocr:auto', 'xberg'),
            'ocr_auto_layout': ('rednote-hilab/dots.mocr', 'vllm'), 'ocr_auto_markdown_image': ('rednote-hilab/dots.mocr', 'vllm')}
actual = {name: tuple(read(CAP / (name + '.response.json'))[key] for key in ['served_model_id', 'backend']) for name in expected}
check('四个OCR Auto路由观察', actual == expected, actual)
pdf = read(CAP / 'ocr_auto_markdown_native_pdf.response.json')
check('原生PDF内容', all(x in pdf['choices'][0]['message']['content'] for x in ['NATIVE-013', '17.25']), {'scope': '单样本提取；不验证内部parser版本'})
check('Diffusion JSON实际拒绝', read(CAP / 'diffusion_json.meta.json')['status'] == 400 and read(CAP / 'diffusion_json.response.json')['detail']['error']['code'] == 'capability_violation', {'scope': '请求明确给json_object'})
for method, field in [('prompts_list', 'prompts'), ('resources_list', 'resources'), ('resources_templates_list', 'resourceTemplates')]:
    result = read(CAP / ('mcp_' + method + '.response.json'))['result']
    check('MCP ' + field, result[field] == [] and 'nextCursor' not in result, result)
ws = read(ROUND / 'websocket.json')
types = [e['message']['type'] for e in ws['events']]
stats = ws['events'][-1]['message']
check('WebSocket单帧完整会话', types == ['session.created', 'decision', 'session.stats'] and stats['decisions'] == 1 and stats['errors'] == 0, {'events': types, 'scope': '不是并发或性能基准'})
challenge = read(ROUND / 'hash_challenge.json')
events = read(CAP / 'orion_hash.response.json')
content = ''.join(c.get('delta', {}).get('content') or '' for e in events for c in e.get('choices', []))
digest = hashlib.sha256(challenge['input'].encode()).hexdigest()
check('随机SHA256输出核对', digest == challenge['expected_sha256'] and digest in content, {'scope': '验证最终计算值，不证明沙箱进程隔离或完整内部实现'})
check('三次调用与两条重试反馈', read(REPORT / 'round2-runtime-summary.json')['orion']['tool_invocation_starts'] == 3 and len(read(REPORT / 'round2-runtime-summary.json')['orion']['retry_feedback']) == 2, {'calls': 3, 'retries': 2})
check('同一会话token差异', read(CAP / 'orion_hash_history.meta.json')['status'] == 200 and read(CAP / 'orion_history_owner_without_session_token.meta.json')['status'] == 403, {'with_token': 200, 'without_token': 403, 'scope': '不归因旧404'})
summary = read(REPORT / 'round2-runtime-summary.json')
check('成本加总', Decimal(summary['reported_post_cost_usd']) + Decimal(summary['reported_websocket_cost_usd']) == Decimal('0.059007'), {'USD': summary['reported_total_cost_usd'], 'scope': '回包报告，未核账单'})
upstream = read(REPORT / 'upstream-prompts.json')
check('上游提示词和模板归档', len(upstream['dots_method_prompts']) == 8 and set(upstream['chat_templates']) == {'qwen', 'diffusion', 'dots'}, {'method_prompts': 8, 'templates': 3})

bad = []
scripts = list((ROOT / 'tools').glob('*.py'))
for path in scripts:
    try:
        ast.parse(path.read_text(encoding='utf-8'))
    except SyntaxError:
        bad.append(path.name)
check('研究脚本静态语法', not bad, {'files': len(scripts), 'failed': bad})

bad = []
for path in [ROOT / 'README.md'] + list(REPORT.glob('*.md')):
    text = re.sub(r'^(`{3,}|~{3,}).*?^\1\s*$', '', path.read_text(encoding='utf-8'), flags=re.M | re.S)
    for link in re.findall(r'\]\(([^)]+)\)', text):
        link = link.strip().strip('<>')
        if link.startswith(('http:', 'https:', 'mailto:', '#')):
            continue
        link = re.sub(r':\d+$', '', unquote(link.split('#')[0]))
        dest = (path.parent / link).resolve()
        if not dest.exists() and dest != (REPORT / 'round2-verification.md').resolve():
            bad.append({'file': path.name, 'link': link})
check('全部报告本地链接', not bad, {'missing': bad})

candidates = []
paths = {ROOT / e['path'] for m in manifests for e in m['files']} | set(scripts) | set(REPORT.glob('*')) | {ROOT / 'README.md'}
for path in paths:
    if path.is_file() and re.search(rb'sk-[A-Za-z0-9]{25,}', path.read_bytes()):
        candidates.append(path.relative_to(ROOT).as_posix())
check('API Key模式扫描', not candidates, {'files': len(paths), 'candidate_files': candidates, 'scope': '仅sk-加25位字母数字模式，不扫描未引用Git仓库全体文件'})
token_candidates = []
for path in CAP.glob('*.response.json'):
    text = path.read_text(encoding='utf-8')
    matches = re.findall(r'"(?:media_token|session_token|access_token|refresh_token)"\s*:\s*"([^"\r\n]*)"', text)
    if any(v and v != '[REDACTED]' for v in matches):
        token_candidates.append(path.name)
check('运行token字段脱敏', not token_candidates, {'candidate_files': token_candidates})
result = {'review_date': dt.date.today().isoformat(), 'mode': 'offline', 'passed': all(c['passed'] for c in checks), 'checks': checks}
(REPORT / 'round2-verification.json').write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding='utf-8')
lines = ['# 第二轮离线核查', '', '只解析本地证据，未重新请求API。核查日期：' + result['review_date'] + '。', '', '|检查|结果|说明|', '|---|---|---|']
for c in checks:
    lines.append('|' + '|'.join([c['check'], '通过' if c['passed'] else '失败', json.dumps(c['detail'], ensure_ascii=False)]) + '|')
lines += ['', '通过仅表示以上归档与有限样本条件成立，不表示全部后台、全部prompt或部署源码已恢复。']
(REPORT / 'round2-verification.md').write_text('\n'.join(lines) + '\n', encoding='utf-8')
print(json.dumps({'passed': result['passed'], 'checks': len(checks), 'failed': [c for c in checks if not c['passed']]}, ensure_ascii=False))
sys.exit(0 if result['passed'] else 1)
