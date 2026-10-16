> 2026-10-11 主线复核附注（保留下面原调查结论供追溯）：
> 1. 原文称模型 catalog 含 backend 不准确；backend 出现在主线推理回包，而非 model list。证据：../runtime/gateway_models.response.json、../runtime/probe_text.response.json、../runtime/probe_ocr.response.json。
> 2. 文档和源码注释声明应归 SOURCE；只有直接代码行为归 CODE，静态检查结果归 STATIC。原文部分 CODE/STATIC 混用，以此附注修正。
> 3. “后端 framework 无法确定”的范围应收窄：主线回包报告 backend=vllm、paddleocr，HTTP header 报告 uvicorn。完整服务端源码/部署仍 UNKNOWN。
> 4. 原文末尾未来测试建议已由主线部分执行；见 ../../report/runtime-verification.md。Orion prompt token 数不说明具体隐藏上下文内容。
> 5. 原文把 System One 概率处理全部列为UNKNOWN过宽；官方 post-systemone/typesafe-models/changelog 已公开 entropy confidence 公式、grammar mask前读label logprobs等 SOURCE，见主报告4.3。完整内部prompt/校准数据仍UNKNOWN。
> 6. 未发现vlmrt服务端指本次检索范围，不是证明所有服务端代码永久不公开。

# VLM Run Gateway / Orion：官方公开代码调查

调查范围：截至仓库工作副本可见的 VLM Run 官方 GitHub 公开仓库、官方公开 `skills` 文档和公开 cookbook。目标是记录客户端协议与公开提示词线索；这份文件不把 SDK 示例当作服务端实现，也不读取或使用任何 API 密钥。

## 证据和仓库锚点

- **SOURCE** — VLM Run 官方 GitHub 组织仓库列表（API 查询结果保存为 [`repositories.json`](./repositories.json)）：`https://github.com/vlm-run`。列表中有 `vlmrun-python-sdk`、`vlmrun-node-sdk`、`vlmrun-dart-sdk`、`vlmrun-cookbook`、`vlmrun-hub`、`skills` 等客户端/示例项目；未看到名为 `vlmrt`、gateway server、model router 或 serving runtime 的公开仓库。
- **STATIC** — 对 GitHub API 的公开仓库代码树和全文检索未发现 `vlmrt`、`system_prompt`、`chat_template` 或服务端网关实现。`vlmrt` 仓库公开搜索结果保存为 [`vlmrt-repo-search.json`](./vlmrt-repo-search.json)，结果 `total_count=0`。这只能说明公开代码未发现该实现；实际生产后端仍是 **UNKNOWN**。
- **CODE** — Python SDK commit `6f64be4132615e62a9b3a8fab18e16562f214e32`（2026-09-25，`https://github.com/vlm-run/vlmrun-python-sdk/tree/6f64be4132615e62a9b3a8fab18e16562f214e32`）；Node SDK commit `927c4e0af689ec2775168bc5659757b398bc2c6f`（2026-10-08）。本目录保留了浅克隆源码。
- **SOURCE** — 官方 gateway skill 文档 commit `cbd5e351d2735a2a7feaf13c0997ff4b969ddd37`（`https://github.com/vlm-run/skills/blob/cbd5e351d2735a2a7feaf13c0997ff4b969ddd37/skills/vlmrun-gw/SKILL.md`）；该文件是客户端运行手册，不是网关服务端代码。
- **SOURCE** — 官方 cookbook `vlmrun-cookbook` commit `bc7abe921c8d04e8d8f3b4fd08858118a74dc162`（`https://github.com/vlm-run/vlmrun-cookbook/tree/bc7abe921c8d04e8d8f3b4fd08858118a74dc162`）。`18_orion2_migration_requests_to_executions.md`、`19_orion2_multi_schema_extraction.md` 是由公开 notebook 单元抽取的可读文本，存于 [`cookbook-extracts`](./cookbook-extracts)。

## Gateway 的公开客户端路径

- **CODE** — [`vlmrun/client/gateway.py:27-60`](./vlmrun-python-sdk/vlmrun/client/gateway.py) 将默认网关根设为 `https://gateway.vlm.run/v1`（常量见 [`vlmrun/constants.py:7-31`](./vlmrun-python-sdk/vlmrun/constants.py)），OpenAI 客户端根为 `{gateway}/openai`。因此公开客户端请求路径是 `POST https://gateway.vlm.run/v1/openai/chat/completions`、`GET .../models`，另有 OpenAI embeddings 和 audio transcriptions 资源（`gateway.py:104-185`）。
- **CODE** — [`vlmrun/client/gateway.py:222-268`](./vlmrun-python-sdk/vlmrun/client/gateway.py) 的 `models()` 直接调用 OpenAI models list；`health()` 先 `GET {gateway}/health`，404/异常后改用 models list 作为 liveness 探针。这是客户端行为，不能证明后端一定有独立 health handler。
- **CODE** — CLI [`gateway.py:157-186`](./vlmrun-python-sdk/vlmrun/cli/_cli/gateway.py) 把本地文件编码为 `data:<mime>;base64,...`，或把 HTTP URL 放入 `image_url`、`video_url`、`document_url` content part；[`gateway.py:239-246`](./vlmrun-python-sdk/vlmrun/cli/_cli/gateway.py) 构造 OpenAI `messages`。这是请求构造逻辑，服务端媒体下载/解码实现 **UNKNOWN**。
- **SOURCE** — CLI [`gateway.py:766-770`](./vlmrun-python-sdk/vlmrun/cli/_cli/gateway.py) 注释记录：chat 默认 SSE；原生 vLLM chat 被描述为 token delta，OCR/adapter 被描述为完成后再切片的 simulated delta，最终使用 `delta.content`，reasoning 模型可能带 `delta.reasoning`。这是 SDK 作者写下的说明（**SOURCE**），本调查未独立抓包验证。
- **CODE** — CLI [`gateway.py:292-314`](./vlmrun-python-sdk/vlmrun/cli/_cli/gateway.py) 将标准 OpenAI 参数与 gateway 扩展分开；未知参数（如 `method`、`document_dpi`、`video_fps`）进入 `extra_body`。SDK 只负责透传，服务端路由、校验和 provider 适配 **UNKNOWN**。
- **CODE** — Node SDK [`src/client/gateway.ts:8-42`](./vlmrun-node-sdk/src/client/gateway.ts) 与 Python SDK 对齐，默认根同为 `https://gateway.vlm.run/v1`，OpenAI 根加 `/openai`，默认超时 600 秒；这表明跨语言协议约定，但不暴露后端代码。

## 公开模型能力和服务端边界

- **RUNTIME** — 主线运行调查生成的 [`../runtime/gateway_models.response.json`](../runtime/gateway_models.response.json)（由父任务实际请求公开 models endpoint 后保存）包含 24 个 gateway model 条目。该文件中的 `methods`、`capabilities`、`supported_input_types`、`supports_json_schema`、`pricing` 等字段应作为当次 catalog 快照；模型列表和 ready 状态会变化，不把它写成永久事实。
- **SOURCE** — skill 文档 [`SKILL.md:123-145`](./skills/skills/vlmrun-gw/SKILL.md) 按公开 catalog 示例列出 OCR/document、layout、region、table/formula/chart、caption/detection、pose、chat VLM、embedding 和 transcription 类别；该页明确要求“始终读取模型 catalog”，所以示例表不是完整或永久模型清单。
- **SOURCE** — [`SKILL.md:149-189`](./skills/skills/vlmrun-gw/SKILL.md) 描述文档请求的公开约定：PDF 在网关侧 rasterise、按页执行并拼接；`document_dpi`、`document_pages`、`document_max_pages` 是请求扩展；一次最多 8 个 document/file parts；PDF 不与 image/video 混合。因为没有后端源码，这些是官方文档声明（**SOURCE**），内部拆分队列、缓存、GPU 调度仍 **UNKNOWN**。
- **SOURCE** — [`SKILL.md:482-496`](./skills/skills/vlmrun-gw/SKILL.md) 区分 `method`（计算内容）和 `response_format`（序列化）；OCR/detection/layout 的 envelope 不支持 `json_schema`，声明会返回 400 `capability_violation`，`json_object` 仍可用。CLI 同时保留注释 [`gateway.py:666`](./vlmrun-python-sdk/vlmrun/cli/_cli/gateway.py)“not yet honored server-side”；两处公开材料存在时间/能力口径差异，不能擅自合并，实际应以当次 catalog/RUNTIME 结果为准。
- **SOURCE** — [`SKILL.md:532-540`](./skills/skills/vlmrun-gw/SKILL.md) 声明 `usage.cost` 在非流式响应或最终 SSE chunk，文档模型按页计费、其它模型按 token 计费；冷启动可能分钟级、热模型约秒级。这些是文档声明，未在本调查中重新测量。

## System One（类型安全视觉决策）

- **CODE** — [`vlmrun/client/systemone.py:1-18,99-132`](./vlmrun-python-sdk/vlmrun/client/systemone.py) 明示客户端将请求发往 `POST {gateway}/typesafe/v1/systemone`，默认引擎字符串为 `google/diffusiongemma-26b-a4b-it`，问题类型为 `noul`、`choice`、`score`；扩展根由 `/v1` 推导为 `/typesafe`（`systemone.py:143-158`），WebSocket 为 `/typesafe/ws`（`systemone.py:161-195`）。这些是 SDK 协议常量，不是模型内部 prompt。
- **SOURCE** — [`SKILL.md:258-298`](./skills/skills/vlmrun-gw/SKILL.md) 公开写出 HTTP `/typesafe/v1/systemone`、`/typesafe/v1/models` 和 WebSocket `/typesafe/ws`，并将 System One 描述为 typed decisions / calibrated probabilities。内部如何把问题映射为模型输入、概率校准和视觉预处理均 **UNKNOWN**。

## Orion / agent 的公开实现路径

- **CODE** — [`vlmrun/client/agent.py:200-258`](./vlmrun-python-sdk/vlmrun/client/agent.py) 构造 `POST agent/execute`，字段包括 `model`、`name`、`batch`、`inputs`、可选 `config`、`metadata`、`callback_url` 和 `toolsets`；同文件 `agent/lookup`、`agent/create` 路径公开。基础 URL 默认是 `https://api.vlm.run/v1`（不是 gateway 根）。
- **CODE/SOURCE** — [`vlmrun/client/types.py:238-321`](./vlmrun-python-sdk/vlmrun/client/types.py) 公开 `AgentExecutionConfig`：`prompt`、`json_schema`/`response_model`、`skills`、`service_tier`、`orchestration_mode`，以及 Orion-2 的 `mode="program"|"agent"`；源码注释称 program 使用缓存的 `pipeline.py`，agent 运行完整 LLM agent loop。这是 SDK 对协议的描述，完整执行器和真实系统 prompt 未公开。
- **SOURCE** — skill 文档 [`SKILL.md:651-675`](./skills/skills/vlmrun-gw/SKILL.md) 将 agent 执行描述为批处理 job，并列出工具类别 `core,image,image-gen,world-gen,viz,document,video,web`；不提供 planner、tool schema、重试、记忆或 system prompt 原文。
- **SOURCE/CODE** — cookbook `18_orion2_migration_requests_to_executions.md:310-361` 的公开示例明确使用 `model="vlmrun-orion-2:pro"`、`AgentSkill(skill_name="grounded-document-extraction", skill_version=...)`、`mode="program"`，并说明该 skill pipeline 内部调用 `vlmrun.document.extract(..., grounding=True, confidence=True)`；`19_orion2_multi_schema_extraction.md:1-17,158-193` 公开说明一次 execution 的流程是 classify → select `schemas/<documentType>.json` → extract。示例代码和 notebook 说明属于公开 workflow（**SOURCE**），skill 的实际 `pipeline.py`、系统 prompt、planner、模型路由服务端仍 **UNKNOWN**。
- **SOURCE** — cookbook 公开示例中的用户级 prompt（如“Extract line items”）是调用方传入参数，不是 VLM Run 隐藏 system prompt。不要据此反推出 Orion 的默认人格/策略。

## 提示词分层（可见性边界）

| 层 | 官方公开原文/证据 | 证据等级与边界 |
|---|---|---|
| Gateway chat 用户 prompt | SDK [`gateway.py:239-252`](./vlmrun-python-sdk/vlmrun/cli/_cli/gateway.py) 将 `-p` 作为 user message text；skill 文档 [`SKILL.md:191-207`](./skills/skills/vlmrun-gw/SKILL.md) 称 chat VLM reply passes through verbatim。 | **CODE/SOURCE**；未公开固定 system prompt，故隐藏层 **UNKNOWN**。 |
| Gateway 方法参数 prompt | DeepSeek grounding 示例 [`SKILL.md:157-159`](./skills/skills/vlmrun-gw/SKILL.md)：`<image>\nLocate <|ref|>title<|/ref|> in the image.`；catalog 快照另含 SAM 的 `prompt:"cat"` 等方法参数。 | **SOURCE/RUNTIME**（catalog 快照）；这是 method input，不等于平台 system prompt。 |
| Gateway OCR/document 默认 prompt | 公开 catalog/skill 只给方法名和少数 `extra_body_help`，没有完整 OCR markdown/table/chart 系统模板。 | **UNKNOWN**；不能从输出 envelope 反推。 |
| Hub schema 任务 prompt | [`vlmrun/hub/catalog.yaml:1-133`](./vlmrun-hub/vlmrun/hub/catalog.yaml) 明示静态任务 prompt，例如 invoice：`You are a detail-oriented invoice analyst. Extract all the relevant information from the candidate's invoice as accurately as possible.`；registry [`registry.py:122-145`](./vlmrun-hub/vlmrun/hub/registry.py) 将其作为 schema catalog 字段。 | **SOURCE/CODE**；Hub prompt 供 schema/structured extraction workflow 使用，不证明 gateway/Orion 当前后台会原样拼接。 |
| Orion skill prompt/pipeline | cookbook 只展示 skill 名称/版本、用户 prompt、pipeline 调用和输出 shape，没有 skill 包源码或 system template。 | **UNKNOWN**；不能声称已拿到隐藏 prompt。 |
| Orion/agent 平台 system prompt、planner、tool schema、memory、routing | 官方公开 SDK 仅暴露请求字段和工具类别；GitHub 公开仓库全文搜索未发现服务端实现。 | **UNKNOWN**。 |

## 后端实现可见程度结论

1. **CODE/STATIC**：可复原的是“客户端协议路径”：文件/URL → OpenAI content parts → `/v1/openai/chat/completions`；平台 agent 则是文件上传 → `/v1/agent/execute` → `/v1/agent/executions/{id}` 轮询；System One 独立使用 `/typesafe` HTTP/WS。上述请求拼装、字段和轮询在公开 SDK 中可审计。
2. **SOURCE**：可引用的模型能力、方法、输入限制、响应 envelope、SSE 和计费规则来自官方 skill 文档/当次 catalog。它们描述 API 合约，不披露 GPU worker、队列、provider adapter、PDF rasterizer 代码。
3. **STATIC/UNKNOWN**：官方 GitHub 组织公开项目没有 `vlmrt` 或网关服务端仓库；无法从这些公开代码确定 backend framework、部署拓扑、负载均衡、模型权重位置、系统 prompt、密钥计费实现或内部观测链路。
4. **PROPOSAL**：若要继续做可复现黑盒研究，应只对用户自有授权 key 的公开 endpoint 记录请求/响应、SSE 顺序、`served_model_id`/`backend`/`usage.cost` 和 400 capability errors，并把每次结果保存为带时间戳的 RUNTIME 快照；不可把一次响应升级为后台源码事实。

