"""Index preserved sources and map report claims to exact local line anchors."""
import hashlib
import json
from pathlib import Path
import subprocess

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "report"
records = []
url_by_path = {}

for name in ["corpus_index.json", "fetch_index.json", "model_fetch_index.json"]:
    p = ROOT / "research/docs" / name
    if p.exists():
        index = json.loads(p.read_text(encoding="utf-8"))
        for item in (index.values() if isinstance(index, dict) else index):
            rel = item.get("path") or item.get("file")
            if rel:
                url_by_path["research/docs/" + rel] = item.get("url", "")
                if rel.endswith(".raw"):
                    url_by_path["research/docs/" + rel + ".txt"] = item.get("url", "")
for name in ["assets.json", "chat_embed.assets.json"]:
    p = ROOT / "research/frontend" / name
    for item in json.loads(p.read_text(encoding="utf-8")):
        rel = item.get("file")
        if rel:
            url_by_path["research/frontend/" + rel] = item.get("url", "")
            folder = "chat_pretty" if "chat_embed" in name else "pretty"
            url_by_path[f"research/frontend/{folder}/{Path(rel).name}"] = item.get("url", "")
for p in (ROOT / "research/runtime").glob("*.meta.json"):
    item = json.loads(p.read_text(encoding="utf-8"))
    stem = p.name.removesuffix(".meta.json")
    for suffix in [".json", ".txt", ".response.json", ".response.raw", ".response.txt"]:
        url_by_path[f"research/runtime/{stem}{suffix}"] = item.get("url", item.get("source", ""))

repos = []
for p in (ROOT / "research/code").iterdir():
    if not (p / ".git").exists():
        continue
    commit = subprocess.check_output(["git", "-C", str(p), "rev-parse", "HEAD"], text=True).strip()
    remote = subprocess.check_output(["git", "-C", str(p), "remote", "get-url", "origin"], text=True).strip().removesuffix(".git")
    repos.append({"path": p.relative_to(ROOT).as_posix(), "commit": commit, "remote": remote})

claims = [
    ("部署版本", "RUNTIME", "research/runtime/gateway_health.response.json", '"version"'),
    ("24模型元数据", "RUNTIME", "research/runtime/gateway_models.response.json", '"data"'),
    ("Qwen backend与指纹", "RUNTIME", "research/runtime/probe_text.response.json", '"system_fingerprint"'),
    ("OCR backend与坐标", "RUNTIME", "research/runtime/probe_ocr.response.json", '"backend"'),
    ("PDF两页结果", "RUNTIME", "research/runtime/probe_pdf.response.json", '"content"'),
    ("图片schema返回", "RUNTIME", "research/runtime/probe_vision_schema.response.json", '"content"'),
    ("System One Qwen", "RUNTIME", "research/runtime/probe_systemone.response.json", '"answers"'),
    ("System One diffusion", "RUNTIME", "research/runtime/probe_systemone_diffusion.response.json", '"answers"'),
    ("Orion-2流工具事件", "RUNTIME", "research/runtime/probe_orion2_tool.response.txt", 'execute_code'),
    ("Orion-2历史404", "RUNTIME", "research/runtime/probe_orion2_history.response.json", 'Session not found'),
    ("MCP七工具schema", "RUNTIME", "research/runtime/mcp_tools.response.json", '"tools"'),
    ("MCP公开instructions", "RUNTIME", "research/runtime/mcp_initialize.response.json", '"instructions"'),
    ("Gemini账户限制", "RUNTIME", "research/runtime/probe_provider.response.json", 'model_not_entitled'),
    ("Hub invoice schema", "RUNTIME", "research/runtime/hub_invoice_schema.response.json", '"schema_version"'),
    ("原始后台API合同", "SOURCE", "research/runtime/api_openapi.json", '"AgentChatCompletionsRequest"'),
    ("Gateway请求合同", "SOURCE", "research/runtime/gateway_openapi.json", '"ChatCompletionRequest"'),
    ("router五runtime声明", "SOURCE", "research/docs/vlm.run__blog__introducing-gateway.raw.txt", 'Five runtimes'),
    ("输入校验及PDF上限", "SOURCE", "research/docs/docs.vlm.run__gateway__multimodal-inputs.md", '128'),
    ("method参数行为", "SOURCE", "research/docs/docs.vlm.run__gateway__methods.md", 'method_params'),
    ("JSON缓冲及SSE", "SOURCE", "research/docs/docs.vlm.run__gateway__response-formats.md", 'buffered'),
    ("统一坐标及mask", "SOURCE", "research/docs/docs.vlm.run__gateway__response-types.md", 'One item is a segmented instance'),
    ("队列上限", "SOURCE", "research/docs/docs.vlm.run__gateway__error-codes.md", '256 waiting'),
    ("页重试", "SOURCE", "research/docs/docs.vlm.run__gateway__error-codes.md", 'three times'),
    ("首token及总超时", "SOURCE", "research/docs/docs.vlm.run__gateway__error-codes.md", '30 seconds'),
    ("限流及共享存储", "SOURCE", "research/docs/docs.vlm.run__gateway__rate-limits.md", 'VLMRT_RATE_LIMIT_STORAGE_URI'),
    ("鉴权分层", "SOURCE", "research/docs/docs.vlm.run__gateway__authentication.md", 'Tier resolution'),
    ("价格单位", "SOURCE", "research/docs/docs.vlm.run__gateway__pricing.md", '1 million'),
    ("System One数学定义", "SOURCE", "research/docs/docs.vlm.run__gateway__api-reference__post-systemone.md", 'H(p)'),
    ("generative约束及并行", "SOURCE", "research/docs/docs.vlm.run__gateway__changelog.md", 'grammar mask'),
    ("TypeSafe校准边界", "SOURCE", "research/docs/docs.vlm.run__gateway__typesafe-models.md", 'calibrat'),
    ("WS协议与限制", "SOURCE", "research/docs/docs.vlm.run__gateway__typesafe-streaming.md", 'max_inflight'),
    ("MCP读工具映射", "SOURCE", "research/docs/docs.vlm.run__gateway__mcp-tools.md", 'read_document'),
    ("MCP OAuth入口", "SOURCE", "research/docs/docs.vlm.run__gateway__mcp-authentication.md", 'issuer'),
    ("Orion2 harness", "SOURCE", "research/docs/vlm.run__blog__orion-2.raw.txt", 'visual agent harness'),
    ("Orion2 judge后续计划", "SOURCE", "research/docs/vlm.run__blog__orion-2.raw.txt", 'what comes next'),
    ("Orion库与代码执行", "SOURCE", "research/docs/docs.vlm.run__agents__code-execution.md", 'Available Libraries'),
    ("Skill 注入版本区别", "SOURCE", "research/docs/docs.vlm.run__agents__code-execution.md", 'Orion-1 injects'),
    ("缓存pipeline与回退", "SOURCE", "research/docs/docs.vlm.run__agents__code-execution.md", 'CodeExecutionRunner'),
    ("Skill graph配置", "SOURCE", "research/docs/docs.vlm.run__skills__spec__vlmrun-yaml.md", 'state machine'),
    ("早期Orion白皮书", "SOURCE", "research/runtime/orion_whitepaper.txt", 'Plan-Execute-Reflect'),
    ("浏览器请求构造", "CODE", "research/frontend/chat_pretty/chat__47156-78eb08e3d3098fe8.js", 'async function A'),
    ("浏览器Gateway同源根", "CODE", "research/frontend/chat_pretty/chat__47156-78eb08e3d3098fe8.js", '"/api/gateway"'),
    ("前端OCR用户prompt", "CODE", "research/frontend/chat_pretty/chat__74720-951f38767fc2ea11.js", 'Extract all visible text'),
    ("前端judge模型", "CODE", "research/frontend/chat_pretty/chat__74720-951f38767fc2ea11.js", 'qwen/qwen3.8-27b'),
    ("前端judge prompt", "CODE", "research/frontend/chat_pretty/chat__74720-951f38767fc2ea11.js", 'You compare OCR'),
    ("前端copilot prompt", "CODE", "research/frontend/chat_pretty/chat__6116-f482cec466098f22.js", 'You are an AI copilot'),
    ("浏览器fingerprint缓存", "CODE", "research/frontend/chat_pretty/chat__47156-78eb08e3d3098fe8.js", 'sessionStorage.getItem("browser_fingerprint")'),
    ("dashboard认证客户端", "CODE", "research/frontend/pretty/dashboard__27292-764f9b0d804e5d84.js", 'prod-vlm-cloud'),
    ("SDK agent.execute构造", "CODE", "research/code/vlmrun-python-sdk/vlmrun/client/agent.py", 'def execute('),
    ("SDK mode实际默认None", "CODE", "research/code/vlmrun-python-sdk/vlmrun/client/types.py", 'mode: Literal["agent", "program"]'),
    ("SDK gateway根", "CODE", "research/code/vlmrun-python-sdk/vlmrun/client/gateway.py", 'class Gateway'),
    ("Hub prompt文本", "SOURCE", "research/code/vlmrun-hub/vlmrun/hub/catalog.yaml", 'invoice analyst'),
]
lines = ["# 证据索引", "", "行号指当前本地快照；格式化JS行号不是线上压缩文件行号。原始JS的URL/哈希保存在assets索引，pretty目录是仅格式化副本。原始PDF保留，文本抽取加了页标记。OpenAPI已pretty-print，meta里分别记录原HTTP字节hash与保存快照hash。", "", "|支持的结论|证据类|本地锚点|来源URL|", "|---|---|---|---|"]
for title, level, rel, needle in claims:
    p = ROOT / rel
    content = p.read_text(encoding="utf-8").splitlines()
    line = next((i for i, value in enumerate(content, 1) if needle in value), None)
    if line is None:
        raise ValueError(f"Missing anchor {rel}: {needle}")
    url = url_by_path.get(rel, "")
    for repo in repos:
        if rel.startswith(repo["path"] + "/"):
            url = repo["remote"] + "/blob/" + repo["commit"] + "/" + rel[len(repo['path'])+1:] + f"#L{line}"
    lines.append(f"|{title}|{level}|[{rel}:{line}](../{rel})|{url or '见同目录meta/index'}|")
lines += ["", "## 公开仓库固定版本", "", "|仓库|commit|", "|---|---|"]
for repo in repos:
    lines.append(f"|{repo['remote']}|`{repo['commit']}`|")
lines += ["", "索引中的RUNTIME区分两种内容：接口真正执行返回的结果，以及接口在回包中声明的目录/配置元数据。后者仍不能证明所有能力都执行过。", "", "研究用脚本新生成的图片、PDF、prompt均为测试输入；没有被写成产品原有样本。"]
(OUT / "evidence-index.md").write_text("\n".join(lines)+"\n",encoding="utf-8")

for p in (ROOT / "research").rglob("*"):
    if not p.is_file() or any(part in {".git", "__pycache__", "node_modules"} for part in p.parts): continue
    if "round2" in p.relative_to(ROOT / "research").parts: continue  # Has its own dated manifest.
    rel=p.relative_to(ROOT).as_posix()
    records.append({"path":rel,"bytes":p.stat().st_size,"sha256":hashlib.sha256(p.read_bytes()).hexdigest(),"url":url_by_path.get(rel)})
(OUT/"evidence-manifest.json").write_text(json.dumps({"capture_date":"2026-10-11","offline_review_date":"2026-10-12","repositories":repos,"files":records},ensure_ascii=False,indent=2),encoding="utf-8")
print(f"Indexed {len(claims)} anchors, {len(repos)} repositories, {len(records)} preserved files.")
