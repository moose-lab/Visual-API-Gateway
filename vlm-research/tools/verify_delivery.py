"""Verify captured evidence and report consistency offline; makes no network calls."""
import ast
import datetime as dt
from decimal import Decimal
import hashlib
import importlib.metadata
import json
import math
from pathlib import Path
import platform
import re
import sys
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "report"
RT = ROOT / "research/runtime"
checks = []


def read(path):
    return json.loads(path.read_text(encoding="utf-8"))


def check(title, condition, detail):
    checks.append({"check": title, "passed": bool(condition), "detail": detail})


def sse(path):
    chunks = []
    text = path.read_text(encoding="utf-8")
    for line in text.splitlines():
        if line.startswith("data:") and line[5:].strip() != "[DONE]":
            chunks.append(json.loads(line[5:]))
    content = "".join(c.get("delta", {}).get("content") or "" for d in chunks for c in d.get("choices", []))
    return chunks, content, "data: [DONE]" in text


manifest = read(OUT / "evidence-manifest.json")
bad_hashes = []
for entry in manifest["files"]:
    p = ROOT / entry["path"]
    if not p.is_file() or hashlib.sha256(p.read_bytes()).hexdigest() != entry["sha256"]:
        bad_hashes.append(entry["path"])
check("归档SHA-256完整性", not bad_hashes, {"files": len(manifest["files"]), "mismatches": bad_hashes})

raw_count = 0
bad_raw = []
for p in RT.glob("*.meta.json"):
    meta = read(p)
    raw = RT / (p.name.removesuffix(".meta.json") + ".response.raw")
    if raw.exists() and meta.get("response_sha256"):
        raw_count += 1
        if hashlib.sha256(raw.read_bytes()).hexdigest() != meta["response_sha256"]:
            bad_raw.append(raw.name)
check("HTTP回包与采集时hash一致", not bad_raw, {"responses": raw_count, "mismatches": bad_raw})

syntax_errors = []
for p in (ROOT / "tools").glob("*.py"):
    try:
        ast.parse(p.read_text(encoding="utf-8"), filename=str(p))
    except SyntaxError as exc:
        syntax_errors.append({"file": p.name, "error": str(exc)})
check("Python脚本静态语法", not syntax_errors, {"files": len(list((ROOT / 'tools').glob('*.py'))), "errors": syntax_errors})

bad_links = []
link_count = 0
md_files = [ROOT / "README.md"] + list(OUT.glob("*.md"))
for p in md_files:
    if p.name == "verification.md":
        continue
    text = re.sub(r"^(`{3,}|~{3,}).*?^\1\s*$", "", p.read_text(encoding="utf-8"), flags=re.M | re.S)
    for target in re.findall(r"\]\(([^)]+)\)", text):
        target = target.strip().strip("<>")
        if target.startswith(("http:", "https:", "mailto:", "#")):
            continue
        target = unquote(target.split("#")[0])
        target = re.sub(r":\d+$", "", target)
        if not target:
            continue
        link_count += 1
        dest = (p.parent / target).resolve()
        if not dest.exists() and dest != (OUT / "verification.md").resolve():
            bad_links.append({"file": p.name, "target": target})
check("报告本地链接", not bad_links, {"links": link_count, "missing": bad_links})

model_list = read(RT / "gateway_models.response.json")["data"]
ids = {m["id"] for m in model_list}
web_models = read(ROOT / "research/frontend/catalog.static.json")["models"]
check("24模型目录与官网served ID对齐", len(ids) == 24 and ids == {m["id"] for m in web_models if m.get("served")}, {"api":len(ids),"website_total":len(web_models)})

vision = json.loads(read(RT / "probe_vision_schema.response.json")["choices"][0]["message"]["content"])
check("视觉单样本字段", vision == {"invoice_id":"TEST-042","currency":"USD","total":12.5}, {"expected_matches":vision == {"invoice_id":"TEST-042","currency":"USD","total":12.5},"scope":"单次样本，不证明全schema强约束"})

ocr = json.loads(read(RT / "probe_ocr.response.json")["choices"][0]["message"]["content"])
check("OCR三行样本文本与归一化坐标", [i["text"] for i in ocr["items"]] == ["VLM RESEARCH TEST","Invoice: TEST-042","Total: USD 12.50"] and all(0 <= value <= 1 for item in ocr["items"] for value in item["bbox_xywh"]), {"lines":len(ocr["items"])})

pdf = read(RT / "probe_pdf.response.json")["choices"][0]["message"]["content"]
check("PDF两页回包", 'npages="2"' in pdf and all(x in pdf for x in ['<page id="0"','<page id="1"','TEST-042','PAGE-002']), "仅检查响应两页内容，内部fan-out未验证")

embedding = read(RT / "probe_embedding.response.json")["data"]
check("Embedding维度及数值", len(embedding)==2 and all(len(v["embedding"])==32 and all(math.isfinite(x) for x in v["embedding"]) for v in embedding), {"vectors":len(embedding),"dimensions":[len(v['embedding']) for v in embedding]})

chunks, content, done = sse(RT / "probe_sse_control.response.txt")
check("SSE文字控制样本", done and content == "VLM_GATEWAY_OK", {"events":len(chunks),"done":done})
chunks, content, done = sse(RT / "probe_ocr_json_sse.response.txt")
parsed = json.loads(content)
check("OCR JSON SSE可拼接", done and parsed["content"]["object"] == "doc.ocr.lines" and parsed["image_hash"] == "sha256:" + hashlib.sha256((RT/'synthetic_page_1.png').read_bytes()).hexdigest(), {"events":len(chunks),"object":parsed['content']['object']})

choice = read(RT / "probe_systemone_diffusion.response.json")["answers"]["document_type"]
probs = list(choice["probabilities"].values())
confidence = 1 + sum(p * math.log(p) for p in probs if p > 0) / math.log(len(probs))
check("System One confidence公式单样本", math.isclose(sum(probs),1,abs_tol=1e-12) and math.isclose(confidence,choice["confidence"],abs_tol=1e-12), {"calculated":confidence,"returned":choice['confidence'],"scope":"不验证经验校准"})

chunks, content, done = sse(RT / "probe_orion2_tool.response.txt")
calls = [t for d in chunks for c in d.get("choices",[]) for t in c.get("delta",{}).get("tool_calls",[])]
check("Orion2工具事件存在", any(t.get("function",{}).get("name")=="execute_code" for t in calls) and content.rstrip().endswith("55"), {"tool_events":len(calls),"scope":"未取得tool-result/stdout/退出状态，不将答案视为沙箱成功证明"})

mcp = read(RT / "mcp_tools.response.json")["result"]["tools"]
check("MCP七工具", {x['name'] for x in mcp} == {"read_document","read_image","read_audio","read_video","list_models","get_model_info","get_completion"}, {"count":len(mcp)})

total = Decimal("0")
for p in RT.glob("probe_*.meta.json"):
    meta=read(p)
    if meta.get('method')!='POST' or meta.get('status') not in {200,201}:
        continue
    stem=p.name.removesuffix('.meta.json'); jp=RT/(stem+'.response.json'); tp=RT/(stem+'.response.txt')
    if jp.exists():
        usage=read(jp).get('usage',{})
    else:
        chunks, _, _=sse(tp)
        usage=next((c['usage'] for c in reversed(chunks) if c.get('usage')), {})
    cost=usage.get('cost', usage.get('cost_dollars'))
    if cost is not None:
        total+=Decimal(str(cost))
check("响应报告成本加总", str(total)==read(OUT/'runtime-summary.json')['reported_post_cost_usd']=='0.026022', {"reported_post_cost_usd":str(total),"scope":"未核对账户扣款"})

credential_candidates = []
scan_paths = {ROOT / item['path'] for item in manifest['files']} | set((ROOT/'tools').glob('*.py')) | set(OUT.glob('*')) | {ROOT/'README.md'}
for p in scan_paths:
    if not p.is_file(): continue
    if re.search(rb"sk-[A-Za-z0-9]{25,}", p.read_bytes()):
        credential_candidates.append(p.relative_to(ROOT).as_posix())
check("归档与交付文件Key模式检查", not credential_candidates, {"files":len(scan_paths),"candidate_files":credential_candidates,"scope":"仅检测sk-后至少25个字母数字的模式；不输出匹配内容"})

versions = {"python": platform.python_version()}
for name in ["Pillow","requests","websockets"]:
    try: versions[name]=importlib.metadata.version(name)
    except importlib.metadata.PackageNotFoundError: versions[name]="not installed"
result = {"review_date":dt.date.today().isoformat(),"mode":"offline; no API calls","evidence_capture_date":"2026-10-11","checks":checks,"environment":versions,"passed":all(c['passed'] for c in checks)}
(OUT/'verification.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf-8')
lines=["# 第一轮证据离线核查", "", "核查日期："+result['review_date']+"；API采集日期：2026-10-11。本脚本只解析第一轮证据及当前研究脚本/报告链接，不重新访问API。第二轮运行结果另见round2-verification.md。", "", "|检查|结果|说明|", "|---|---|---|"]
for c in checks:
    detail=json.dumps(c['detail'],ensure_ascii=False)
    lines.append(f"|{c['check']}|{'通过' if c['passed'] else '失败'}|{detail}|")
lines += ["", "通过表示归档完整性及对应有限样本条件成立，不表示服务全部功能可用、隐藏实现已恢复或所有模型质量通过。实际403、404、WebSocket超时及回答不遵循指令等结果保留在运行记录。", "", "环境包版本：`"+json.dumps(versions,ensure_ascii=False)+"`。"]
(OUT/'verification.md').write_text('\n'.join(lines)+'\n',encoding='utf-8')
print(json.dumps({"passed":result['passed'],"checks":len(checks),"failed":[c for c in checks if not c['passed']]},ensure_ascii=False))
sys.exit(0 if result['passed'] else 1)
