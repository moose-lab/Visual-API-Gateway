"""Build round-three inventories from preserved evidence; no network calls."""
from decimal import Decimal
import datetime as dt
import hashlib
import json
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[1]
ROUND = ROOT / 'research/round3'
CAP = ROUND / 'captures'
REPORT = ROOT / 'report'


def read(path):
    return json.loads(path.read_text(encoding='utf-8'))


def save(path, value):
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2), encoding='utf-8')


records = []
for path in sorted(CAP.glob('*.meta.json')):
    meta = read(path)
    name = path.name.removesuffix('.meta.json')
    records.append({'name': name, 'method': meta.get('method'), 'url': meta['url'],
                    'status': meta.get('status'), 'elapsed_seconds': meta.get('elapsed_seconds')})

executions = []
cost_by_id = {}
for path in sorted(ROUND.glob('execution_*.observation.json')):
    observation = read(path)
    name = path.name.removesuffix('.observation.json')
    final = observation['final']
    expectation = read(ROUND / (name + '.expected.json'))
    cost = final.get('usage', {}).get('cost_dollars')
    if cost is not None:
        value = Decimal(str(cost))
        if final['id'] in cost_by_id and cost_by_id[final['id']] != value:
            raise ValueError('Conflicting final usage for execution ' + final['id'])
        cost_by_id[final['id']] = value
    captures = sorted(CAP.glob(name + '_poll_*.response.json'))
    submit = read(CAP / (name + '_submit.response.json'))
    polls = [read(p) for p in captures]
    states = [submit.get('status')]
    for poll in polls:
        if poll.get('status') != states[-1]:
            states.append(poll.get('status'))
    artifacts = CAP / (name + '_artifact_bytes.response.json')
    executions.append({'name': name, 'id': final['id'], 'requested_mode': observation['requested_mode'],
                       'reported_execution_mode': final.get('execution_mode'), 'status': final.get('status'),
                       'observed_status_sequence': states, 'polls': len(polls), 'usage': final.get('usage'),
                       'expected': expectation['expected'], 'response': final.get('response'),
                       'exact_expected_match': None if expectation['expected'] is None else expectation['expected'] == final.get('response'),
                       'artifact_matches_response': read(artifacts) == final.get('response') if artifacts.exists() else None,
                       'nonterminal_completed_at': [{'capture': p.name, 'status': d['status'], 'created_at': d.get('created_at'),
                                                    'completed_at': d['completed_at']}
                                                   for p, d in zip(captures, polls)
                                                   if d.get('status') != 'completed' and d.get('completed_at')]})

skills = []
prompt_data = []
for path in sorted((ROUND / 'public_skills').glob('*/capture.json')):
    capture = read(path)
    folder = path.parent
    files = [p for p in folder.rglob('*') if p.is_file() and p.name != 'capture.json']
    skills.append({'name': folder.name, **capture, 'files': [p.relative_to(ROOT).as_posix() for p in files],
                   'pipelines': [p.relative_to(ROOT).as_posix() for p in files if p.name == 'pipeline.py']})
    for source in files:
        if source.name in {'SKILL.md', 'vlmrun.yaml', 'pipeline.py'}:
            prompt_data.append({'evidence': 'CODE' if source.suffix == '.py' else 'SOURCE',
                                'scope': 'Downloaded public skill; not Orion private global prompt',
                                'skill': folder.name, 'path': source.relative_to(ROOT).as_posix(),
                                'sha256': hashlib.sha256(source.read_bytes()).hexdigest(),
                                'text': source.read_text(encoding='utf-8')})
save(REPORT / 'public-skill-sources.json', prompt_data)

total = sum(cost_by_id.values(), Decimal('0'))
summary = {'evidence': 'STATIC', 'capture_dates': ['2026-10-13', '2026-10-14'], 'records': records, 'executions': executions,
           'public_skills': skills, 'reported_execution_cost_usd': str(total), 'account_billing_verified': False,
           'cost_basis': 'One final usage.cost_dollars per unique execution ID; submit/poll/credits not added again'}
save(REPORT / 'round3-runtime-summary.json', summary)
lines = ['# 第三轮运行记录', '',
         'RUNTIME：2026-10-13 执行与下载、2026-10-14 隔日回读；STATIC：本文件由捕获汇总。耗时为本地 HTTP 完整耗时，usage.duration_seconds 为服务器报告值。', '',
         '## 执行路径对照', '', '|实验|请求 mode|最终 execution_mode|状态序列|steps|服务端 duration 秒|usage USD|', '|---|---|---|---|---|---|---|']
for item in executions:
    usage = item['usage']
    lines.append('|' + '|'.join(str(v) for v in [f"[{item['name']}](../research/round3/{item['name']}.observation.json)",
                 item['requested_mode'], item['reported_execution_mode'], ' → '.join(item['observed_status_sequence']),
                 usage.get('steps'), usage.get('duration_seconds'), usage.get('cost_dollars')]) + '|')
lines += ['', f'STATIC：按唯一 execution ID 去重后的 usage.cost_dollars 合计 **${total}**。未核账户账单；不把轮询、提交的重复 usage 或 credits_used 再加总。', '',
          'RUNTIME：fallback 的 response 字段是 JSON 字符串，而实验期望为普通 greeting 字符串；任务 completed 不等于逐字段满足预期。部分 running 回包已有 completed_at，详见汇总 JSON 的 nonterminal_completed_at。', '',
          '## HTTP 请求', '', '|捕获|方法|状态|本地耗时秒|', '|---|---|---|---|']
for item in records:
    lines.append('|' + '|'.join(str(v) for v in [f"[{item['name']}](../research/round3/captures/{item['name']}.meta.json)",
                                               item['method'], item['status'], item['elapsed_seconds']]) + '|')
lines += ['', 'ZIP 二进制按下载字节保存；文本中的 key/token/签名 URL 凭证字段在落盘前脱敏，response_sha256 对应保存的版本。',
          'test_skills 与 synthetic_referral 是本地实验输入，不是下载的生产源码。公开 Skill Python 仅作静态分析；reference 请求在远端服务按正式 skill 引用执行。',
          '签名 URL 下载没有附带 API Bearer；原始历史捕获未覆盖。']
(REPORT / 'round3-runtime.md').write_text('\n'.join(lines) + '\n', encoding='utf-8')

# Freeze only new third-round evidence and source snapshots; skip VCS caches.
paths = [p for p in ROUND.rglob('*') if p.is_file() and not {'.git', '__pycache__'} & set(p.parts)]
files = [{'path': p.relative_to(ROOT).as_posix(), 'bytes': p.stat().st_size,
          'sha256': hashlib.sha256(p.read_bytes()).hexdigest()} for p in sorted(paths)]
repo = ROUND / 'systemone_source/typesafe-sdk-python'
commit = subprocess.check_output(['git', '-C', str(repo), 'rev-parse', 'HEAD'], text=True).strip()
save(REPORT / 'round3-evidence-manifest.json', {'capture_dates': ['2026-10-13', '2026-10-14'], 'files': files,
     'repositories': [{'path': repo.relative_to(ROOT).as_posix(), 'commit': commit}],
     'scope': 'All round-three evidence and test fixtures, excluding .git and __pycache__; includes local offline results separately labelled'})
print(json.dumps({'requests': len(records), 'executions': len(executions), 'public_skills': len(skills),
                  'reported_cost_usd': str(total), 'manifest_files': len(files)}))
