"""Summarize second-round captures offline. Does not send requests."""
from decimal import Decimal
import ast
import hashlib
import json
from pathlib import Path
import re
import subprocess

ROOT = Path(__file__).resolve().parents[1]
ROUND = ROOT / 'research/round2'
CAP = ROUND / 'captures'
REPORT = ROOT / 'report'


def read(path):
    return json.loads(path.read_text(encoding='utf-8'))


def write(path, value):
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2), encoding='utf-8')


events = read(CAP / 'orion_hash.response.json')
content = ''.join(c.get('delta', {}).get('content') or '' for e in events for c in e.get('choices', []))
retry_messages = re.findall(r'>\s*\*\*Retrying:\*\*\s*([^\r\n]+)', content)
starts = [c for e in events for ch in e.get('choices', []) for c in ch.get('delta', {}).get('tool_calls', []) if c.get('function', {}).get('name')]
history = read(CAP / 'orion_hash_history.response.json')
challenge = read(ROUND / 'hash_challenge.json')
old_models = {m['id']: m for m in read(ROOT / 'research/runtime/gateway_models.response.json')['data']}
models = read(CAP / 'gateway_models.response.json')['data']
records = []
post_cost = Decimal('0')
for path in sorted(CAP.glob('*.meta.json')):
    meta = read(path)
    stem = path.name.removesuffix('.meta.json')
    usage = None
    data_path = CAP / (stem + '.response.json')
    if data_path.exists() and meta.get('method') == 'POST' and meta.get('status') in {200, 201}:
        data = read(data_path)
        usage = next((e['usage'] for e in reversed(data) if isinstance(e, dict) and e.get('usage')), None) if isinstance(data, list) else data.get('usage')
    cost = None if not usage else usage.get('cost', usage.get('cost_dollars'))
    if cost is not None:
        post_cost += Decimal(str(cost))
    records.append({'name': stem, 'url': meta['url'], 'method': meta['method'], 'status': meta.get('status'),
                    'elapsed_seconds': meta.get('elapsed_seconds'), 'reported_cost_usd': cost})
ws = read(ROUND / 'websocket.json')
decisions = [e['message'] for e in ws['events'] if e['message']['type'] == 'decision']
ws_cost = sum((Decimal(str(d['usage']['cost'])) for d in decisions), Decimal('0'))
summary = {'evidence': 'STATIC', 'capture_date': '2026-10-13', 'records': records,
           'reported_post_cost_usd': str(post_cost), 'reported_websocket_cost_usd': str(ws_cost),
           'reported_total_cost_usd': str(post_cost + ws_cost), 'account_billing_verified': False,
           'model_count': len(models), 'added_model_ids': [m['id'] for m in models if m['id'] not in old_models],
           'removed_model_ids': list(set(old_models) - {m['id'] for m in models}),
           'orion': {'tool_invocation_starts': len(starts), 'retry_feedback': retry_messages,
                     'computed_digest_matches_local': challenge['expected_sha256'] in content,
                     'history_roles': [m['role'] for m in history['messages']],
                     'history_has_tool_result_role': any(m['role'] == 'tool' for m in history['messages']),
                     'usage': next(e['usage'] for e in reversed(events) if e.get('usage'))}}
write(REPORT / 'round2-runtime-summary.json', summary)
lines = ['# 2026-10-13 模型目录快照', '', 'RUNTIME：当日目录返回26项，仅证明元数据声明，未逐项执行全部模型。', '',
         '[原始回包](../research/round2/captures/gateway_models.response.json)。10月11日快照保留在 [models.md](models.md)。', '',
         '|模型 ID|目录变化|方法|输入类型|provider|', '|---|---|---|---|---|']
for m in models:
    row = [m['id'], '新增' if m['id'] not in old_models else '已有', ', '.join(m['methods']) or '—', ', '.join(m['capabilities']['supported_input_types']), m.get('provider') or '未声明']
    lines.append('|' + '|'.join(row) + '|')
(REPORT / 'models_2026-10-13.md').write_text('\n'.join(lines) + '\n', encoding='utf-8')
lines = ['# 第二轮请求记录', '', 'RUNTIME：2026-10-13采集；耗时为本地完整请求耗时，不是服务端纯推理耗时。', '',
         '|请求|方法|状态|耗时秒|回包报告USD|', '|---|---|---|---|---|']
for r in records:
    link = '[' + r['name'] + '](../research/round2/captures/' + r['name'] + '.meta.json)'
    lines.append('|' + '|'.join(str(v) for v in [link, r['method'], r['status'], r['elapsed_seconds'], r['reported_cost_usd']]) + '|')
lines += ['', f'STATIC：推理POST usage合计 ${post_cost}；WebSocket decision合计 ${ws_cost}；本轮总计 ${post_cost + ws_cost}。session.stats金额未重复累计，未核账单。', '',
          '后续manifest在自己会话的无session-token请求返回403后停止，两个completion回读条目没有执行。', '',
          'MCP脚本初次启动因stdin为空在本地退出，随后通过隐藏输入完成查询；本地退出不是API拒绝。']
(REPORT / 'round2-runtime.md').write_text('\n'.join(lines) + '\n', encoding='utf-8')

prompt_path = CAP / 'dots_dots_mocr_utils_prompts_py.response.txt'
tree = ast.parse(prompt_path.read_text(encoding='utf-8'))
prompt_dict = ast.literal_eval(next(n.value for n in tree.body if isinstance(n, ast.Assign) and any(isinstance(t, ast.Name) and t.id == 'dict_promptmode_to_prompt' for t in n.targets)))
templates = {
    'qwen': (CAP / 'hf_qwen_chat_template_jinja.response.txt').read_text(encoding='utf-8'),
    'diffusion': (CAP / 'hf_diffusion_chat_template_jinja.response.txt').read_text(encoding='utf-8'),
    'dots': read(CAP / 'hf_dots_resolved_tokenizer_config_json.response.json')['chat_template'],
}
write(REPORT / 'upstream-prompts.json', {'evidence': 'CODE', 'scope': 'Upstream public sources, not an observed VLM Run production prompt concatenation', 'dots_method_prompts': prompt_dict, 'chat_templates': templates})
lines = ['# 上游模型提示词与模板：第二轮新增', '',
         'CODE：以下原文来自模型权重仓库与其链接的代码仓库；不是从VLM Run隐藏上下文中恢复。UNKNOWN：Gateway是否使用相同revision、是否覆盖模板、额外system文字及拼接顺序。', '',
         '固定版本：Qwen `2ac1e750cda67cc8538d731f6216f77b9c3a6f72`；DiffusionGemma `ec4ff3df205028f4e81c954c2227f9312b3ec2ea`；dots权重 `e539fbb52280393adc081b289ec597430a0f9031`；dots代码 `23f3e5612fb8066d4034d5ecfc8f33a9243533eb`。', '',
         '元数据和原始URL：[Qwen](../research/round2/captures/hf_qwen.response.json)、[DiffusionGemma](../research/round2/captures/hf_diffusion.response.json)、[dots](../research/round2/captures/hf_dots_resolved.response.json)、[dots代码commit](../research/round2/captures/dots_commit.response.json)。', '',
         '## dots.mocr的8个任务prompt', '',
         '[原始prompts.py](../research/round2/captures/dots_dots_mocr_utils_prompts_py.response.txt)。使用AST字面量解析，未执行下载的Python代码。prompt_general是一个空格，按原文保留。', '']
for name, value in prompt_dict.items():
    lines += ['### ' + name, '', '```text', value, '```', '']
lines += ['## 三组完整chat template', '',
          'Qwen模板包含tools存在时注入的格式说明，若未给system且未给tools，不在这一分支自动添加固定身份prompt；图片编码为vision token。DiffusionGemma模板处理system/developer、工具声明与thought channel；这与Gateway当前拒绝该模型JSON参数是不同层面的事实。dots模板编码system/user/assistant边界。', '']
for name, value in templates.items():
    lines += ['### ' + name, '', '```jinja', value.rstrip(), '```', '']
lines += ['## 上游模型实现与评分模板', '',
          'CODE：[DotsOCRForCausalLM](../research/round2/captures/hf_dots_resolved_modeling_dots_ocr_py.response.txt)继承Qwen2ForCausalLM并初始化DotsVisionTransformer；这描述上游模型源码，不能推定Gateway具体运行此Python文件。', '',
          'CODE：[inference_with_vllm](../research/round2/captures/dots_dots_mocr_model_inference_py.response.txt)默认system_prompt=None；仅在传入非空system_prompt时增加system消息，并为user文本拼接图片特殊token。Gateway的method到这8个prompt的具体映射UNKNOWN。', '',
          'CODE：[上游OCR Elo评测prompt](../research/round2/captures/dots_tools_elo_score_prompt_py.response.txt)用于比较两份OCR转写；它与Playground OCR评分prompt是两个独立来源。']
(REPORT / 'upstream-prompts.md').write_text('\n'.join(lines) + '\n', encoding='utf-8')

# Hash all captures/package extracts plus cited repository files. Pin full clones by commit.
sources = [('xberg', p) for p in ['Cargo.toml', 'crates/xberg-py/src/lib.rs', 'crates/xberg/src/core/extract/mod.rs',
           'crates/xberg/src/core/extractor/file.rs', 'crates/xberg/src/core/config/pdf.rs',
           'crates/xberg/src/extractors/pdf/mod.rs', 'crates/xberg/src/extractors/pdf/extraction.rs',
           'crates/xberg/src/extractors/pdf/pdfium_engine.rs']]
sources += [('mm', p) for p in ['README.md', 'python/mm/pdf.py', 'python/mm/encoders/document/rasterize.py', 'python/mm/store/db.py']]
repos = []
for name in ['mm', 'xberg']:
    folder = ROUND / 'code' / name
    repos.append({'name': name, 'path': folder.relative_to(ROOT).as_posix(),
                  'commit': subprocess.check_output(['git', '-C', str(folder), 'rev-parse', 'HEAD'], text=True).strip(),
                  'url': subprocess.check_output(['git', '-C', str(folder), 'remote', 'get-url', 'origin'], text=True).strip()})
paths = []
for folder in ['captures', 'packages']:
    paths.extend(p for p in (ROUND / folder).rglob('*') if p.is_file())
paths.extend(p for p in ROUND.glob('*') if p.is_file())
paths += [ROUND / 'code' / repo / path for repo, path in sources]
items = [{'path': p.relative_to(ROOT).as_posix(), 'bytes': p.stat().st_size, 'sha256': hashlib.sha256(p.read_bytes()).hexdigest()} for p in sorted(set(paths))]
write(REPORT / 'round2-evidence-manifest.json', {'capture_date': '2026-10-13', 'repositories': repos, 'files': items,
      'scope': 'All second-round captures/package extracts and cited repository files. Full clones are identified by commit; other clone files are not individually hashed.'})
print(json.dumps({'models': len(models), 'records': len(records), 'orion_calls': len(starts), 'reported_cost': str(post_cost + ws_cost), 'manifest_files': len(items)}))
