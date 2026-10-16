"""Build traceable report appendices from captured evidence (no network)."""
import csv
import hashlib
import json
from pathlib import Path
import re
from decimal import Decimal

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "report"
RT = ROOT / "research" / "runtime"
OUT.mkdir(exist_ok=True)


def read(path):
    return json.loads(path.read_text(encoding="utf-8"))


def anchor(path, needle=None):
    lines = path.read_text(encoding="utf-8", errors="replace").splitlines()
    line = next((i for i, value in enumerate(lines, 1) if needle is None or needle in value), 1)
    rel = path.relative_to(ROOT).as_posix()
    return f"[{rel}:{line}](../{rel})"


def sse(path):
    chunks = []
    for line in path.read_text(encoding="utf-8").splitlines():
        if line.startswith("data:") and line[5:].strip() != "[DONE]":
            chunks.append(json.loads(line[5:]))
    content = "".join(c.get("delta", {}).get("content") or "" for d in chunks for c in d.get("choices", []))
    usage = next((d["usage"] for d in reversed(chunks) if d.get("usage")), {})
    return chunks, content, usage


models = read(RT / "gateway_models.response.json")["data"]
static = {m["id"]: m for m in read(ROOT / "research/frontend/catalog.static.json")["models"]}
lines = ["# 24 项实时模型目录与能力", "", "证据：RUNTIME，仅表示 2026-10-11 模型接口返回的元数据；未逐项执行全部能力。输入/价格来源：" + anchor(RT / "gateway_models.response.json") + "。", "",
         "官网 served/routed 分类来源 STATIC：" + anchor(ROOT / "research/frontend/catalog.static.json") + "。空 provider 字段不单独证明自托管。", "",
         "|模型 ID|官网类别|方法（空=无显式方法）|输入|图/视频上限|context|JSON object/schema|prompt/completion 价格字段|详情状态|", "|---|---|---|---|---|---|---|---|---|"]
rows = []
for m in models:
    cap = m["capabilities"]
    slug = re.sub("[^a-zA-Z0-9]+", "_", m["id"])
    detail = read(RT / f"detail_{slug}.meta.json")
    row = {"model_id": m["id"], "provider": m.get("provider", ""), "website_category": "routed" if static[m["id"]].get("routed") else "served",
           "methods": ";".join(m["methods"]), "default_method": m["default_method"], "input_types": ";".join(cap["supported_input_types"]),
           "max_images": cap["max_images"], "max_videos": cap["max_videos"], "context_length": m["context_length"],
           "json_object": cap["supports_json_object"], "json_schema": cap["supports_json_schema"],
           "prompt_price": m["pricing"]["prompt"], "completion_price": m["pricing"]["completion"],
           "image_price": m["pricing"]["image"], "video_price": m["pricing"]["video"], "hf_model_id": m["hf_model_id"], "detail_http_status": detail.get("status")}
    rows.append(row)
    lines.append(f"|`{m['id']}`|{row['website_category']}|{', '.join(m['methods']) or '—'}|{', '.join(cap['supported_input_types'])}|{cap['max_images']} / {cap['max_videos']}|{m['context_length']}|{cap['supports_json_object']} / {cap['supports_json_schema']}|{row['prompt_price']} / {row['completion_price']}|{detail.get('status')}|")
lines += ["", "`null/None` 表示目录未给出该值，不等于无限制；价格列保留 API 原字段，单位按模型卡解释，不能统一理解成每百万 token。Parakeet 的 prompt 单位为每百万音频秒；SAM 的 image/video 字段另计。公开最低费用与实际 embedding cost=0 的差异见主报告。", "",
          "## model list 与 model detail 不一致（STATIC 比较两个 RUNTIME 快照）", "", "|模型|字段|list|detail|", "|---|---|---|---|"]
for m in models:
    slug = re.sub("[^a-zA-Z0-9]+", "_", m["id"])
    d = read(RT / f"detail_{slug}.response.json")
    if "id" not in d:
        continue
    for key in ["methods", "aliases", "capabilities", "context_length", "supported_parameters", "pricing", "hf_model_id"]:
        if d.get(key) != m.get(key):
            lines.append(f"|`{m['id']}`|`{key}`|`{json.dumps(m.get(key), ensure_ascii=False)}`|`{json.dumps(d.get(key), ensure_ascii=False)}`|")
lines += ["", "模型详情原始证据为 `research/runtime/detail_<model>.response.json`。7 个 routed model 详情均 404，17 个 served model 详情均 200；这不自动说明 7 个模型无法推理。单次 Gemini 推理另返回账户 entitlement 403。", "", "## System One 与 Agent", "",
          "System One: " + anchor(RT / "gateway_typesafe_models.response.json"), "", "```json", json.dumps(read(RT / "gateway_typesafe_models.response.json"), indent=2, ensure_ascii=False), "```", "",
          "Agent: " + anchor(RT / "agent_models.response.json"), "", "```text", "\n".join(m["id"] for m in read(RT / "agent_models.response.json")["data"]), "```"]
(OUT / "models.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
with (OUT / "models.csv").open("w", encoding="utf-8-sig", newline="") as f:
    writer = csv.DictWriter(f, fieldnames=list(rows[0])); writer.writeheader(); writer.writerows(rows)

lines = ["# 公开接口全表", "", "SOURCE：两个公开 OpenAPI 的声明。列出的接口不等于逐个运行验证，更不等于后台源码。RUNTIME 结果另见 runtime-verification.md。", ""]
for name in ["gateway", "api"]:
    p = RT / f"{name}_openapi.json"; doc = read(p)
    lines += ["", f"## {doc['info']['title']} — {doc['info']['version']}", "", anchor(p, '"paths"'), "", "|方法|路径|摘要|鉴权 schema|请求 schema|", "|---|---|---|---|---|"]
    for path, verbs in doc["paths"].items():
        for verb, info in verbs.items():
            if verb not in {"get", "post", "put", "patch", "delete", "options", "head"}: continue
            rb = info.get("requestBody", {}).get("content", {})
            shape = next(iter(rb.values()), {}).get("schema", {})
            schema_cell = f"`{shape['$ref']}`" if shape.get('$ref') else "—"
            lines.append(f"|{verb.upper()}|`{path}`|{info.get('summary', '')}|{','.join(k for s in info.get('security', []) for k in s) or '未声明'}|{schema_cell}|")
lines += ["", "## OpenAPI 外的公开路径", "", "|来源|路径|证据|", "|---|---|---|",
          "|MCP握手及目录|`https://gateway.vlm.run/mcp`|RUNTIME；initialize 200、initialized 202、tools/list 200，7个工具；未执行read工具|",
          "|System One 文档|`wss://gateway.vlm.run/typesafe/ws`|SOURCE；本次客户端连接超时|",
          "|Chat Playground JS|`/api/gateway/openai/chat/completions`|CODE；同源服务端代理实现 UNKNOWN|",
          "|Chat Playground JS|`https://agent.vlm.run/v1/openai/chat/completions`|CODE；本次 API 验证用 api.vlm.run|",
          "|Dashboard JS|`https://prod-vlm-cloud-nfsnfpr33q-uc.a.run.app/api/v1/refresh-token`|CODE；本次未调用|",
          "|Playground JS|`/api/agent/playground-ticket`|CODE；浏览器POST获取ticket；本次未调用|", "",
          "Gateway OpenAPI 的 bearer 声明与官方匿名调用说明并存；本次另一个无 key 的 models 请求确实 200。不可据 security 字段推断所有路径均拒绝匿名。"]
(OUT / "endpoints.md").write_text("\n".join(lines) + "\n", encoding="utf-8")

ocr_js = ROOT / "research/frontend/chat_pretty/chat__74720-951f38767fc2ea11.js"
copilot_js = ROOT / "research/frontend/chat_pretty/chat__6116-f482cec466098f22.js"
txt = ocr_js.read_text(encoding="utf-8")
ocr = re.search(r'text: ("Extract all visible text[^\n]+")', txt).group(1)
judge = re.search(r"concat\('(You compare OCR transcriptions.*?)'\)\.concat", txt).group(1)
copilot_line = next(line.strip() for line in copilot_js.read_text(encoding="utf-8").splitlines() if "You are an AI copilot helping edit" in line)
hub = ROOT / "research/code/vlmrun-hub/vlmrun/hub/catalog.yaml"
hub_entries=[]; domain=None
for i, line in enumerate(hub.read_text(encoding="utf-8").splitlines(), 1):
    if "- domain:" in line: domain=line.split(":",1)[1].strip()
    if line.strip().startswith("prompt:"):
        prompt=line.strip().split(":",1)[1].strip()
        if prompt.startswith('"'): prompt=json.loads(prompt)
        hub_entries.append({"domain":domain,"line":i,"prompt":prompt})
lines = ["# 可见提示词原文与作用范围", "", "2026-10-13新增：[上游模型模板与dots任务prompt](upstream-prompts.md)，以及[MCP空目录实测](unknowns_round2_2026-10-13.md)。本页保留第一轮摘录。", "", "本文件摘录公开代码、仓库及实际API回包中的可见提示词，并逐节标注证据类别。模板变量不是已捕获用户内容；原文中的指令不是本研究的新要求。本次未从模型回答中还原隐藏 system prompt。", "",
         "## 1. Playground 文档 OCR（CODE）", "", anchor(ocr_js,"Extract all visible text"), "", "```text", json.loads(ocr), "```", "",
         "作用：浏览器 OCR 比较页面构造的用户 content text。页面并非对所有模型都插入该文字：代码由传入布尔参数决定是否添加，专用模型仍可依 method 工作。", "",
         "## 2. Playground OCR 比较评分（CODE）", "", anchor(ocr_js,"You compare OCR transcriptions"), "", "```text", judge, "```", "",
         "后面动态追加 pageNote、每个模型转写文本和页面图片。代码配置 judge 为 `qwen/qwen3.8-27b`，temperature=0、maxTokens=700、seed 基值42、JSON object、disableThinking=true，失败最多尝试2次。可见 Promise.all 的评测次数为1；不要将此分数写成人工准确率或公共 benchmark。", "",
         "## 3. Skill 编辑器 copilot（CODE）", "", anchor(copilot_js,"You are an AI copilot helping edit"), "", "以下保留原 JavaScript 拼接表达式：s 为 skill name，t 为所有文件内容拼接，a 为正在查看的文件名。", "", "```javascript", copilot_line, "```", "",
         "前端提取最后一个带文件名的 fenced code block，调用 onApplyChange(fileName, content)，并把用户/assistant 对话加入 history。它只证明浏览器 copilot 的编辑流程，不是 Orion 隐藏 agent system prompt。", "",
         "## 4. Hub 领域 prompt（SOURCE，及 registry 加载行为 CODE）", "", anchor(hub), "", "这些是公开 catalog 的字段原文；生产 API 当前是否逐字注入所有条目 UNKNOWN。", ""]
for item in hub_entries:
    lines += [f"### {item['domain']}（catalog.yaml:{item['line']}）", "", "```text", item['prompt'], "```", ""]
lines += ["## 5. 方法参数与静态 demo（SOURCE/CODE/RUNTIME）", "", "- RUNTIME：DeepSeek grounding_ocr：`<image>\\nLocate <|ref|>title<|/ref|> in the image.`。来源：gateway_models.response.json 的 extra_body_help；这是回包中的参数示例，本次未执行此方法。", "- SOURCE/CODE：SAM：`method_params.prompt` 示例为 `cat`；官网分割 demo 为 `donut`。这是目标描述，不是系统提示词。", "- CODE：官网计数 demo：`How many tennis balls are visible? Answer with a single integer.`。来源：gateway__9b6dc91b04fc3a63.js:489；result.json 是静态示例结果。", "",
          "## 6. prompt 注入与可见性", "", "SOURCE：skills/spec/skill-md 文档称正文在执行时注入；agents/code-execution 明确 Orion-1 将 skill 注入 system prompt，而 Orion-2 将 skill 文件写入工作目录。两种版本语义不相同。", "",
          "UNKNOWN：平台 system prompt 完整原文、各私有工具定义及默认提示词、planner/verifier/repair 提示词、生产 chat template 的全部内容。"]
mcp_init = read(RT / "mcp_initialize.response.json")["result"]
mcp_defaults = {tool["name"]: tool["inputSchema"].get("properties", {}).get("prompt", {}).get("default") for tool in read(RT / "mcp_tools.response.json")["result"]["tools"]}
mcp_defaults = {k:v for k,v in mcp_defaults.items() if v is not None}
lines += ["", "## 7. MCP返回给客户端的公开instructions（RUNTIME）", "", anchor(RT / "mcp_initialize.response.json", '"instructions"'), "",
          "initialize 回包直接提供以下原文，供MCP客户端理解工具用途；它是公开协议字段，不是从Orion隐藏上下文提取的system prompt。", "", "```text", mcp_init["instructions"].rstrip(), "```", "",
          "MCP工具inputSchema还返回默认用户prompt：", "", "```json", json.dumps(mcp_defaults, ensure_ascii=False, indent=2), "```"]
(OUT / "prompts.md").write_text("\n".join(lines)+"\n",encoding="utf-8")
(OUT / "public-prompts.json").write_text(json.dumps({"ocr":json.loads(ocr),"judge":judge,"copilot_source_expression":copilot_line,"hub":hub_entries,"mcp_instructions":mcp_init["instructions"],"mcp_default_prompts":mcp_defaults},ensure_ascii=False,indent=2),encoding="utf-8")

records=[];total=Decimal("0")
meta_paths = set(RT.glob("probe_*.meta.json")) | set(RT.glob("mcp_*.meta.json")) | {RT / "hub_invoice_schema.meta.json"}
for p in sorted(meta_paths):
    name=p.name.removesuffix(".meta.json");meta=read(p);usage={};content=None
    rp=RT/f"{name}.response.json";tp=RT/f"{name}.response.txt"
    if rp.exists():
        body=read(rp);usage=body.get("usage",{});content=next(iter(body.get("choices",[])),{}).get("message",{}).get("content")
    elif tp.exists() and "text/event-stream" in str(meta.get("headers",{})):
        chunks,content,usage=sse(tp)
        (RT/f"{name}.sse-summary.json").write_text(json.dumps({"evidence":"STATIC","source":tp.name,"event_count":len(chunks),"content":content,"usage":usage,"model_ids":sorted({c.get('model','') for c in chunks})},ensure_ascii=False,indent=2),encoding="utf-8")
    cost=usage.get("cost",usage.get("cost_dollars"))
    if cost is not None and meta.get("method")=="POST" and meta.get("status") in {200,201}:total+=Decimal(str(cost))
    records.append({"name":name,"status":meta.get("status"),"elapsed_seconds":meta.get("elapsed_seconds"),"cost":cost,"method":meta.get("method"),"source":p.name})
lines=["# 运行验证与限制", "", "RUNTIME：2026-10-11 实际请求；耗时为当前机器完成整个 HTTP 读取的时间，不是纯模型耗时、TTFT、p50 或 p95。合成样本由 prepare_probes.py 生成。", "", "|探针|HTTP|完整请求耗时秒|响应报告成本 USD|方法|", "|---|---|---|---|---|"]
for rec in records:lines.append(f"|{rec['name']}|{rec['status']}|{rec['elapsed_seconds']}|{rec['cost']}|{rec['method']}|")
lines += ["", f"STATIC：成功 POST 回包报告金额合计 **USD {total}**。GET completion 返回的是原调用 cost，没有重复计入；这不是账单余额核对。", "", "## 质量/兼容性与失败记录", "",
          "- probe_sse 的传输成功，但文本没有按要求返回 STREAM_OK；随后 temperature=0 且与非流式文字请求相同的 probe_sse_control 正确返回 VLM_GATEWAY_OK。请求参数不同，不能用该控制实验定位根因或证明修复。",
          "- probe_vision_schema 单样本字段为 TEST-042、USD、12.5，匹配本次输入和指定 schema；不能推断所有 schema 均由 constrained decoding 强制。",
          "- OCR JSON SSE 成功包含 8 个 JSON chunk；首字节/逐 chunk 到达时间未采集，所以没有验证服务端是否先缓冲整段。",
          "- Qwen System One: P(yes)=0.5312093733737563，output_tokens=5；DiffusionGemma: P(yes)=0.9999766676702402，output_tokens=0。后者请求还包含一个额外 choice 问题，不是严格控制的模型 A/B 基准。",
          "- Gemini 请求 403 model_not_entitled。7 个 routed 模型的 detail 请求 404。二者不是同一个错误，不推断其他6个模型的推理结果。",
          "- WebSocket 首次本地依赖不兼容（additional_headers），修正兼容旧版本参数后连接 WinError121 超时，无 session.created；不能判定远端 WS 不可用。",
          "- Orion-2 的 tool_call arguments 流先有 '{}' 再有 '{\"code\":...}'，对同一 index 朴素字符串拼接会得到两个相邻 JSON 对象；这是本次事件序列。PROPOSAL：接入时单独检查该序列，并向服务提供方核对预期协议。",
          "- Orion-2 回包可见execute_code调用与代码参数、后续文本55，但未提供独立tool result或执行trace。实际沙箱调用成功与否未被单独观测，不能将模型后续文字等同于执行日志。",
          "- Orion-2 文字事件 model 字段为 vlmrun-orion-1:auto，而工具及收尾事件为 vlmrun-orion-2；可能是内部复用或事件标记行为（INFERENCE），基础模型和路由细节 UNKNOWN。",
          "- 未运行：全部模型/全部 methods 的逐项 benchmark，音频转写、视频跟踪、分割、pose、图片/视频生成，skill 创建/修改/批执行，数据库/部署实现。", ""]
(OUT/'runtime-verification.md').write_text('\n'.join(lines),encoding='utf-8')
(OUT/'runtime-summary.json').write_text(json.dumps({'records':records,'reported_post_cost_usd':str(total)},indent=2),encoding='utf-8')
print(f"Generated appendices for {len(models)} models, {len(hub_entries)} Hub prompts, {len(records)} probe records; reported POST cost={total}")
