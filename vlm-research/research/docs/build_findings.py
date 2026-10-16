import json, pathlib

ROOT=pathlib.Path(__file__).resolve().parent
def a(name, quote, url=None):
    path=ROOT/name
    lines=path.read_text(encoding='utf-8').splitlines()
    hits=[i for i,line in enumerate(lines,1) if quote in line]
    if not hits: raise ValueError((name,quote))
    if url is None:
        url='https://'+name.replace('__','/').removesuffix('.raw.txt').removesuffix('.raw')
    return f'[{name}:{hits[0]}]({name}:{hits[0]})（[原始 URL]({url})）'

out=['# VLM Run 公开文档分析\n',
'采集时间：2026-10-11（UTC+8）。本文将官方说法标为 **SOURCE**，从主线保存的实际 API 响应读取到的元数据标为 **RUNTIME**。文档里的示例、价格、性能与“校准”均不冒充本次推理测试。原始 URL、HTTP 状态、SHA-256 见 `fetch_index.json`、`corpus_index.json`、`model_fetch_index.json`；代码式接口示例未执行。\n',
'## 公开入口\n',
f'- **SOURCE**：文档机器可读索引包含 Gateway、Agents、Skills、平台观察界面及两个 OpenAPI URL。{a("docs_llms.raw","## OpenAPI Specs","https://docs.vlm.run/llms.txt")}\n',
f'- **SOURCE**：OpenAI SDK 基址 `https://gateway.vlm.run/v1/openai`；Chat、Embedding、音频转写与模型列表兼容/扩展行为在兼容矩阵列出；单模型检索在 `/v1/models/{{id}}`，SDK 的 `/v1/openai/models/{{id}}` 会 404。{a("docs.vlm.run__gateway__openai-compatibility.md","## Compatibility matrix")}\n',
f'- **SOURCE**：Bearer token 关联用户/组织；无 header 为匿名；无效 key 不降级匿名。限额匿名 10/min、30/hr、100/day；有效 key 240/min、10000/hr。{a("docs.vlm.run__gateway__authentication.md","## Tier resolution")}；{a("docs.vlm.run__gateway__rate-limits.md","## Limits by Tier")}\n',
'## 模型与实时目录\n',
'- **RUNTIME**：主线实际 GET 保存的 `gateway_models.response.json` 含 24 项，`gateway_typesafe_models.response.json` 含 4 项。这里确认的是接口返回的目录元数据，不等于各模型完成过推理验证。证据：[Gateway 目录](../runtime/gateway_models.response.json:1)、[TypeSafe 目录](../runtime/gateway_typesafe_models.response.json:1)。\n',
f'- **SOURCE/RUNTIME 差异**：官网 HTML 目录包含 26 个 ID，其中 `roboflow/rf-detr-large`、`lightonai/lightonocr-1b-1025` 不在实时 24 项中。它们官网价格/用量为破折号；当前是否能推理为 **UNKNOWN**。{a("vlm.run__gateway__models.raw.txt","RF-DETR Large")}；实时目录见上。\n',
f'- **SOURCE**：模型按任务覆盖 OCR/Markdown/layout、VQA/chat、detection、segmentation、pose、embedding、transcription。模型方法公开例：dots.mocr 有 `markdown/parse_layout/parse_layout_only/ocr`；SAM3.1 有 `segment/segment_box/track`；Florence 有检测、caption、region caption、OCR。{a("docs.vlm.run__gateway__models.md","## VQA, detection, and segmentation")}；{a("docs.vlm.run__gateway__methods.md","| Model | Methods |") }\n',
f'- **SOURCE**：frontier models 页面明确写 upstream provider routing；不能把所有模型都描述为 VLM Run 自研/自托管模型。{a("vlm.run__gateway__models__frontier-models.raw.txt","Frontier models the gateway routes")}\n',
'## 请求到响应的公开流程\n',
f'1. **SOURCE：输入和参数校验**。输入 content parts 包括 text/image/document/video；按模型能力校验，不支持 modality 在推理前返回 400；method 不在模型列表、method_params 未知 key 也 400。{a("docs.vlm.run__gateway__multimodal-inputs.md","The Gateway validates each part")}；{a("docs.vlm.run__gateway__methods.md","An unknown key")}\n',
f'2. **SOURCE：解码/预处理**。PDF 入口栅格化后逐页推理，256 MB/128 页上限；可选页，默认 96 DPI；文本层不改变路径。视频有 fps/帧数/分辨率参数。{a("docs.vlm.run__gateway__multimodal-inputs.md","The Gateway decodes and rasterizes")}；{a("docs.vlm.run__gateway__extra-kwargs.md","### Documents")}；{a("docs.vlm.run__gateway__multimodal-inputs.md","The Gateway rasterizes every page")}\n',
f'3. **SOURCE：调度/模型运行**。官方 blog 描述一个 router 后有五个 runtimes，每模型是 isolated plugin、模型常驻；PDF 用并行 workers，失败页重试或标记。官网未公开这五个 runtime 的完整版本组合、生产节点配置或调度源码。{a("vlm.run__blog__introducing-gateway.raw.txt","Five runtimes sit behind one router")}\n',
f'4. **SOURCE：归一化**。统一 bbox_xywh 是 0–1 坐标；`precision` 控制精度；PDF page JSON 的 content 固定为 doc.page.blocks；失败 page 只标 status:error、不带 content。{a("docs.vlm.run__gateway__response-types.md","The single universal box")}；{a("docs.vlm.run__gateway__response-formats.md","A page record carries")}\n',
f'5. **SOURCE：序列化/返回**。text mode 便于 agent/MCP；json_object 提供固定数据格式；json_schema 依模型支持。JSON 缓冲再返回；文本可逐步交付。{a("docs.vlm.run__gateway__response-formats.md","| User | Mode |")}；{a("docs.vlm.run__gateway__response-formats.md","A JSON `response_format` is")}\n',
f'6. **SOURCE：计费/追踪**。响应报告 usage.cost（USD，6 位小数），计费单位可以 token、image、audio seconds。x-request-id 可追踪请求；模型 catalog pricing 是价格依据。{a("docs.vlm.run__gateway__pricing.md","* **`usage.cost`:**")}；{a("docs.vlm.run__gateway__openai-compatibility.md","| `x-request-id`")}\n',
f'- **SOURCE**：限流计数默认位于 serving process；部署可设 `VLMRT_RATE_LIMIT_STORAGE_URI` 共享存储。是否生产开启及后端存储产品为 **UNKNOWN**。{a("docs.vlm.run__gateway__rate-limits.md","Counters live in the serving process")}\n',
f'- **SOURCE**：超时公开默认 ttft=30 秒、total=600 秒；个别模型首 token 为 60 秒。引擎超时工作被取消。{a("docs.vlm.run__gateway__changelog.md","Per-model deadlines")}\n',
'## 可确认到什么程度的提示词\n',
f'- **SOURCE：公开用户示例**。DeepSeek grounding_ocr 接受完整 prompt：`<image>\\nLocate <|ref|>Total Amount<|/ref|> in the image.`。同页称 ocr 方法使用 grounded conversion prompt、随后去掉 grounding tags，但没有公开该默认 prompt 完整文本。{a("vlm.run__gateway__models__deepseek-ai-deepseek-ocr-2.raw.txt","grounding_ocr answers")}；{a("vlm.run__gateway__models__deepseek-ai-deepseek-ocr-2.raw.txt","grounding tags are stripped")}\n',
f'- **SOURCE：任务参数**。SAM 文本 prompt 是分割/跟踪目标，可从 text part 回退；segment_box 接 bbox，说明这类能力不全依赖自由文本大提示词。{a("vlm.run__gateway__models__facebook-sam3.1.raw.txt","A text part is the segmentation target")}；{a("vlm.run__gateway__models__facebook-sam3.1.raw.txt","segment_boxThe same shape")}\n',
f'- **SOURCE：Skills 注入机制**。SKILL.md 的 Markdown body 在 execution 时注入 model/agent prompt；vlmrun.yaml 规定 model、toolsets、Mermaid state graph。公开规范不是生产默认系统 prompt。{a("docs.vlm.run__skills__spec__skill-md.md","injected into the model or agent prompt")}；{a("docs.vlm.run__skills__spec__vlmrun-yaml.md","state machine graph")}\n',
'- **UNKNOWN**：Gateway 所有模型的完整 default prompts、Orion planner/system prompt、自动路由评分及权重、修复提示词未从这些公开文档获得。\n',
'## System One 的公开计算路径\n',
f'- **SOURCE**：state + typed questions，noul 输出 P(yes)，choice 输出标签概率/选中标签，score 输出期望等级。API 明确 `confidence = 1 - H(p)/ln(K)`、`score = sum(i*p_i)`。{a("docs.vlm.run__gateway__api-reference__post-systemone.md","### Answer shapes") if False else a("docs.vlm.run__gateway__api-reference__post-systemone.md","`confidence` is")}\n',
f'- **SOURCE**：DiffusionGemma seeds canvas 后 denoise；默认 1 步，允许 1–8；samples 平均多次噪声 draws，每 draw 计费。Generative engine 在 grammar 下写答案模板；变更记录称 regex 只接收 schema labels，label logprobs 在 grammar mask 前读取以不改变比率。{a("docs.vlm.run__gateway__typesafe-models.md","A **diffusion** read")}；{a("docs.vlm.run__gateway__system-one.md","| `steps`")}；{a("docs.vlm.run__gateway__changelog.md","Label logprobs are read before")}\n',
f'- **SOURCE**：Generative parallel constrained decoding 每个 question 一次 call、共享 prefix；schema 可 prefix-cache。文档性能是发布者测试，不是本次 RUNTIME。{a("docs.vlm.run__gateway__changelog.md","Parallel constrained decoding")}；{a("docs.vlm.run__gateway__system-one.md","The schema is prefix-cached") if False else a("docs.vlm.run__gateway__system-one.md","The schema is prefix-cached")}\n',
f'- **SOURCE**：`WS /typesafe/ws` 在 session.create 校验 schema，一帧二进制消息返回 decision；max_inflight 默认 2、最多 8，frame 2 MiB，replica 64 sessions，idle 30s；backpressure 丢帧不排队。{a("docs.vlm.run__gateway__typesafe-streaming.md","## Messages")}；{a("docs.vlm.run__gateway__typesafe-streaming.md","## Limits and billing")}\n',
f'- **SOURCE 边界**：文档承认 generative read 概率校准不保证、较小引擎分布更接近 uniform；公开公式不代表校准集或内部权重已获得。{a("docs.vlm.run__gateway__typesafe-models.md","Generative reads are experimental")}\n',
'## Orion 与 Gateway 的分层\n',
f'- **SOURCE**：Orion-1 是逐工具往返；Orion-2 生成 Python/visual DSL，在 sandbox 内运行，独立操作通过 asyncio 并行，结果回 harness 修复重跑；代码、trace、outcome 是公开描述的产物。{a("vlm.run__blog__orion-2.raw.txt","Architecture: Code as the Agent Harness")}；{a("docs.vlm.run__agents__code-execution.md","Orion-2 turns the request into Python")}\n',
f'- **SOURCE**：sandbox 库包括 OpenCV、NumPy、Matplotlib、VLM Run、FFmpeg；`vlmrun.llm.extract` 可按 schema 验证文本抽取。{a("docs.vlm.run__agents__code-execution.md","## Available Libraries")}；{a("docs.vlm.run__agents__code-execution.md","### vlmrun.llm.extract")}\n',
'## 资料冲突和未确认项\n',
f'1. **SOURCE/RUNTIME 冲突：JSON mode**。Gateway SKILL 称 every model supports json mode；实时 DiffusionGemma capabilities 为 false。另兼容文档说 JSON never streamed，response-formats 说缓冲后以 chat.completion.chunk 发送；传输与首 token 行为以具体部署验证为准。{a("vlm.run__gateway__SKILL.md","every model supports it")}；{a("docs.vlm.run__gateway__openai-compatibility.md","never streamed")}；{a("docs.vlm.run__gateway__response-formats.md","chat.completion.chunk") }\n',
f'2. **SOURCE 冲突：视频**。兼容矩阵写 video_url encoded to images before dispatch；输入文档说不 tile 且 encoder native-only。这不足以确认内部视频张量路径。{a("docs.vlm.run__gateway__openai-compatibility.md","Encoded to images before dispatch")}；{a("docs.vlm.run__gateway__multimodal-inputs.md","does not tile the clip")}\n',
f'3. **SOURCE/RUNTIME 差异：PaddleOCR-VL methods**。实时 default=ocr，methods 不含 markdown；模型卡声称旧 build 有 catalog bug、省略 method 仍走 markdown；后者未运行验证。{a("vlm.run__gateway__models__paddlepaddle-paddleocr-vl-1.6.raw.txt","A gateway build that predates")}\n',
f'4. **SOURCE 冲突：Gemma4 context**。官网主目录 80K；frontier 页 128K。{a("vlm.run__gateway__models.raw.txt","Context80K")}；{a("vlm.run__gateway__models__frontier-models.raw.txt","Open Google mixture-of-experts model")}\n',
f'5. **SOURCE 冲突：System One 问题数**。概念页说约 20 个短问题可装一 read；API schema 描述最多 16 个问题每 request。不能把约 20 当 API limit。{a("docs.vlm.run__gateway__system-one.md","Around 20 short questions")}；{a("docs.vlm.run__gateway__api-reference__post-systemone.md","At most 16 per")}\n',
'6. **UNKNOWN**：私有服务器源码、router/fallback 规则、队列实现、真实部署 GPU/replica 数、默认系统提示词、训练/校准数据、完整私有工具链未公开。任何复刻架构应标 PROPOSAL，不冒充已恢复实现。\n']
(ROOT/'findings.md').write_text('\n'.join(out),encoding='utf-8')
print('Wrote findings.md with verified source anchors')
