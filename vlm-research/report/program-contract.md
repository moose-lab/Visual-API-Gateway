# Orion skill、program 执行与工件协议：2026-10-13

本附录是离线契约核查，读取已归档官方文档、Python SDK 0.9.2、10 月 13 日 OpenAPI，以及第三轮由主线程通过正式下载 API 获取的五个 skill 包。本附录未自行发送 API 请求，示例请求均为 **PROPOSAL**。下载包的源码行为标为 **CODE**，文档和 OpenAPI 的协议声明标为 **SOURCE**，文件集合及字段差异标为 **STATIC**。

2026-10-14 补充说明：下文新增的 **RUNTIME** 段落引用主线程第三轮实际请求，原有候选示例仍为 PROPOSAL。材料修订原因是新增执行与 artifact 证据，原始下载包与回包未改动；完整对照见[第三轮报告](unknowns_round3_2026-10-13.md)。

## 1. 已取得真实 pipeline，而不仅是说明文档

**CODE**：[grounded-document-extraction/pipeline.py](../research/round3/public_skills/grounded-document-extraction/pipeline.py)，第 1–10 行全文：

```python
import json


async def process(ctx, doc_path):
    vlmrun = ctx.import_lib("vlmrun")
    schema = json.loads(vlmrun.io.read_file("skills/grounded-document-extraction/schema.json"))
    data = await vlmrun.document.extract(
        doc_path, json_schema=schema, grounding=True, confidence=True
    )
    return data
```

**CODE**：这个公开 skill 的入口名为 `process`，第一个参数为 `ctx`，另一个参数为 `doc_path`；它同步读取 skill 内 `schema.json`，随后异步调用 `vlmrun.document.extract`，显式开启 `grounding`、`confidence`，原样返回工具结果。该代码没有包含 document.extract 内部实现、模型选择、隐藏提示词或沙箱执行器。

**SOURCE**：[该包 SKILL.md](../research/round3/public_skills/grounded-document-extraction/SKILL.md)，第 1–22 行，提供完整公开指令：依据文档填充 schema、避免猜测、缺失值为 null、保留原意、只按 schema 要求规范化。它是公开 skill 的提示词，不等于 Orion 全局 system prompt。

**STATIC**：[capture.json](../research/round3/public_skills/grounded-document-extraction/capture.json)记录版本 `20260720-b19b53d9`、ZIP SHA-256 `351d182be782812e97525b53ed8b4f53269469084fd1174e454ae33c6069ecd8`，以及 `SKILL.md`、`schema.json`、`vlmrun.yaml`、`pipeline.py` 四个文件。另一个 [greeting 包清单](../research/round3/public_skills/greeting/capture.json)仅列 `SKILL.md`、`schema.json`、`vlmrun.yaml`，没有 `pipeline.py`。

**UNKNOWN**：外部 `inputs` 的键如何绑定 `process` 的参数，是否按位置、名称或类型选择，`ctx` 的真实类型，以及哪些入口签名可接受。本包足以证明一种实际公开入口形状，不能推出所有 pipeline 的统一调用规则。

**RUNTIME 补充**：本次以 `inputs.doc_path` 传入 `file_url` 类型的 PDF data URL，正式引用该公开 skill 的固定版本，最终返回 `execution_mode=program` 与提取结果：[请求](../research/round3/captures/execution_reference_replay_submit.request.json)、[回包](../research/round3/captures/execution_reference_replay_poll_02.response.json)。这个具体输入路径已成功；通用绑定算法、ctx 类型和所有签名兼容性仍 UNKNOWN。

### 1.1 其余公开包补齐的实现

**STATIC/CODE**：五个包中有三个包含 `pipeline.py`，另外两个只有声明与指令。以下均是对下载文件的分析，不是已执行全部 skill。

| 包 | 实际文件/入口 | 可建立的行为 |
|---|---|---|
| grounded-document-extraction | `process(ctx, doc_path)` | 一次 `document.extract`，开启 grounding 和 confidence |
| medical-multi-schema-extraction | `medical-multi-schema-extraction/pipeline.py` 的 `process(ctx, doc_path)` | 先分类，选一个 schema，再抽取 |
| healthcare-hipaa-release | `hipaa-release/pipeline.py` 的 `process(ctx, img)` | caption 与 OCR 摘要；不等同完整 HIPAA 字段抽取 |
| greeting | 无 pipeline.py；`SKILL.md` 正文只有 `hello` | 声明的模型为 Orion-1:auto，YAML 描述 ParseInput → GenerateResponse → Output |
| viasocket | 无 pipeline.py；`SKILL.md` 指示图像客观描述 | schema/指令要求 caption，YAML 描述 AnalyzeVisualContent → DraftCaption → FormatOutput → Output |

**CODE**：[medical pipeline](../research/round3/public_skills/medical-multi-schema-extraction/medical-multi-schema-extraction/pipeline.py)第 4 行入口；第 8–25 行第一次 `vlmrun.document.extract` 使用内联 schema，要求 `documentType` 与 `classificationRationale`，分类 enum 为 `referral`、`medical_record_request`、`progress_note_office_visit`。第 26–30 行根据分类结果构造 `skills/medical-multi-schema-extraction/schemas/{document_type}.json` 并同步读取；第 32–34 行第二次 extract 开启 grounding/confidence；第 35–40 行返回 `schemaUsed`、`documentType`、`classificationRationale`、`data: {pages: [extracted]}`。代码未包含额外的分类回退分支，也未在函数内捕获异常；外层 runner 是否补充处理仍 **UNKNOWN**。

**SOURCE**：[medical SKILL.md](../research/round3/public_skills/medical-multi-schema-extraction/medical-multi-schema-extraction/SKILL.md)第 10–12 行给出直接工具调用形状：

```python
execute_code(path="skills/medical-multi-schema-extraction/pipeline.py", inputs={"doc_path": <doc_ref>})
```

这里 `<doc_ref>` 是原文件中的占位符。该指令说明工具支持 `path` 与命名 `inputs`，不证明 HTTP `/agent/execute` 会对任意 `inputs` 键做相同绑定。第 34–37 行还明确要求用 `json_schema=` 关键字，因为裸第二位置参数绑定 `prompt`；并声明 grounding 由运行时补充 metadata，而非手工写入 schema。后者为 **SOURCE**，相关服务端实现未取得。

**CODE/SOURCE 冲突**：[healthcare pipeline](../research/round3/public_skills/healthcare-hipaa-release/hipaa-release/pipeline.py)第 1–7 行只调用 image.caption、image.ocr，返回 `caption`、`ocr_count`、前 5 条 `ocr_sample`。同包 [SKILL.md](../research/round3/public_skills/healthcare-hipaa-release/hipaa-release/SKILL.md)第 6–22 行描述完整 HIPAA 表单字段抽取；[vlmrun.yaml](../research/round3/public_skills/healthcare-hipaa-release/hipaa-release/vlmrun.yaml)第 3 行模型为 Orion-1:auto。现有文件不能说明此 pipeline 是正式主路径、遗留调试文件还是其他用途，因此保留差异。

**STATIC**：medical ZIP 包使用 `medical-multi-schema-extraction/` 外层目录，healthcare ZIP 包使用 `hipaa-release/` 外层目录；其余三个包的业务文件直接位于根目录，见各包 `capture.json`。这证明已下载公开包存在两种布局，不证明 inline 上传对任意目录布局都接受。

## 2. Inline skill 的精确封装格式

**SOURCE**：[Agent OpenAPI](../research/round2/captures/agent_openapi.response.json)，`components.schemas.AgentSkill`，第 3366 行起，描述于第 3476 行明确说 ZIP 内恰有一个 `SKILL.md`。`InlineSkillSource` 第 4902 行起声明如下对象：

```json
{
  "type": "inline",
  "name": "tiny-arithmetic",
  "description": "Compute a deterministic arithmetic result from supplied integers.",
  "source": {
    "type": "base64",
    "media_type": "application/zip",
    "data": "BASE64_ZIP"
  }
}
```

上面名称及描述是 **PROPOSAL** 示例，`BASE64_ZIP` 是占位符；字段结构来自 OpenAPI。旧 `bundle` 字段仍被声明为兼容路径，SDK 优先取 `source.data`。

**CODE**：[skills.py](../research/round2/packages/vlmrun/vlmrun/client/skills.py)，第 47–65 行 `bundle_from_directory` 递归收集全部普通文件，排序后按相对 skill 目录的路径写入 deflated ZIP，再编码为 ASCII Base64。因此 `SKILL.md` 在 ZIP 根目录，无须再套同名外层目录。

**CODE**：[types.py](../research/round2/packages/vlmrun/vlmrun/client/types.py)，第 583–633 行 `AgentSkill.from_directory` 先检查目录下 `SKILL.md`，然后提取 frontmatter 名称、描述并调用上述打包函数。第 557–570 行 `effective_skill_id` 对 **Base64 文本**计算 SHA-256，取前 16 个十六进制字符，再加 `inline_` 前缀；这段客户端属性不证明服务端缓存也使用同一规则。

**SOURCE**：[Skill Structure](../research/docs/docs.vlm.run__skills__spec__overview.md)，第 43–52 行，`SKILL.md` 必填；`vlmrun.yaml`、`schema.json`、Python 文件可选。[SKILL.md 规范](../research/docs/docs.vlm.run__skills__spec__skill-md.md)，第 24–29 行，frontmatter 的 `name` 与 `description` 必填。SDK 的 [parse_skill_frontmatter](../research/round2/packages/vlmrun/vlmrun/client/skills.py) 第 24–44 行只读取以 `name:`、`description:` 开头的单行文本，并非完整 YAML 解析器。

**PROPOSAL**：最小计算 skill 的 bundle 可以先包含如下两个文件；这是待运行的实验设计，并非服务端已验证的输入。

```text
SKILL.md
pipeline.py
```

```markdown
---
name: tiny-arithmetic
description: Compute a deterministic arithmetic result from supplied integers.
---
Run the supplied arithmetic pipeline on the supplied integers.
Return the computed result as JSON.
```

```python
async def process(ctx, numbers):
    total = 0
    squares = 0
    for value in numbers:
        total += value
        squares += value * value
    return {"count": len(numbers), "sum": total, "sum_squares": squares}
```

该候选纯计算函数不调用文件或网络。入口名称沿用上方 **CODE**；`numbers` 是否能从 `inputs.numbers` 注入仍为 **UNKNOWN**。可通过响应 `execution_mode` 及独立结果确认；单看正确数值不能判定程序路径。

## 3. 提交、轮询与路径判定

**SOURCE**：Agent OpenAPI 的 `POST /v1/agent/execute` 接收 `AgentExecutionRequest`；第 3032 行起 `AgentExecutionInputs` 是允许附加字段的对象，没有强制媒体输入。`config.skills` 在该执行接口内，chat completion 则使用顶层 `skills`，二者不要混用。[官方 Agent usage](../research/docs/docs.vlm.run__skills__usage__agent.md)，第 9、73–115 行，给出 execution inline bundle 例子。

**PROPOSAL** 请求骨架：

```http
POST https://api.vlm.run/v1/agent/execute
Authorization: Bearer TOKEN
Content-Type: application/json
```

```json
{
  "model": "vlmrun-orion-2:auto",
  "batch": true,
  "inputs": {"numbers": [7, 11, 19]},
  "config": {
    "mode": "program",
    "prompt": "Run the attached arithmetic pipeline and return its result.",
    "skills": [{
      "type": "inline",
      "name": "tiny-arithmetic",
      "description": "Compute a deterministic arithmetic result from supplied integers.",
      "source": {
        "type": "base64",
        "media_type": "application/zip",
        "data": "BASE64_ZIP"
      }
    }]
  }
}
```

**CODE**：[agent.py](../research/round2/packages/vlmrun/vlmrun/client/agent.py)，第 200–261 行，SDK `execute` 构造同一路径请求；`batch=False` 在第 230 行直接触发 `NotImplementedError`。第 72–92 行对 Pydantic inputs 调用 `model_dump(exclude_none=True)`，字典原样返回并发出弃用警告。

**SOURCE/CODE**：轮询路径为 `GET https://api.vlm.run/v1/agent/executions/{id}`，其中 `id` 来自本次提交响应。[OpenAPI](../research/round2/captures/agent_openapi.response.json)第 593 行、[executions.py](../research/round2/packages/vlmrun/vlmrun/client/executions.py)第 42–57 行一致。OpenAPI `AgentExecutionResponse.status` 枚举为 `pending`、`enqueued`、`running`、`completed`、`failed`、`paused`。

**CODE**：SDK `executions.wait` 第 59–86 行，默认 `timeout=600`、`sleep=5`；仅 `completed` 返回，`failed`、`paused` 不会立即退出，而是继续等到超时。**PROPOSAL**：本次验证使用有限轮询，遇 `failed` 即记录停止；`paused` 记录后结束观测，不将它写成执行成功。

**SOURCE**：[Code Execution](../research/docs/docs.vlm.run__agents__code-execution.md)，第 230–236 行，说明首次由 agent 编写并缓存 `pipeline.py`，program 复用 `CodeExecutionRunner`，不存在缓存或执行失败时回退完整 agent loop；第 299–313 行说明用响应 `execution_mode` 区分 `program` / `agent`。该回退策略属于官方声明，私有 runner 代码仍 **UNKNOWN**。

**RUNTIME 补充**：本次两次使用相同的 inline ZIP（含 `pipeline.py`）并请求 program，最终均报告 agent：[首次](../research/round3/execution_program.observation.json)、[重放](../research/round3/execution_replay.observation.json)。因此该文件存在没有在这两个样本中保证 program 命中；具体未命中原因仍 UNKNOWN。正式引用公开包的两次样本则报告 program。请求值 `mode="program"` 是选择意图，不等同执行结果。

## 4. Skill 下载与 artifact 读取

**SOURCE/CODE**：skill 可先通过 `POST /v1/skills/lookup` 请求 `{"name":"greeting"}` 取得 ID，再 `GET /v1/skills/{skill_id}/download`。OpenAPI 的 `SkillDownloadResponse` 第 6160 行起要求 `id`、`name`、`skill_version`、`download_url`、`expires_in`；[skills.py](../research/round2/packages/vlmrun/vlmrun/client/skills.py)第 132–178、264–281 行对应 lookup/download。该 GET 的 `expires` query 默认 `604800` 秒是 OpenAPI 声明，不是本次实际下载有效期测量。

**SOURCE**：OpenAPI 第 641 行起的 `GET /v1/artifacts` 同时支持列举和读取：不传 `object_id` / `filename` 列举，提供其中之一读取字节或重定向。参数包括 `session_id`、`execution_id`、`object_id`、`filename`、`limit`（1–1000，默认 100）及 `offset`（默认 0）。

**PROPOSAL**：只使用本次响应里的执行 ID 或会话 ID，先取目录，再选择目录中实际列出的文件名：

```http
GET https://api.vlm.run/v1/artifacts?execution_id=EXECUTION_ID&limit=100&offset=0
GET https://api.vlm.run/v1/artifacts?execution_id=EXECUTION_ID&filename=RETURNED_FILENAME
```

这里 `EXECUTION_ID`、`RETURNED_FILENAME` 为协议示例占位符。**UNKNOWN**：没有显式写文件的纯 return 是否生成 artifact、是否能列出 pipeline、是否支持所有 workspace 文件。下面的新证据补齐了显式写文件的实验路径。

**RUNTIME 补充**：自制算术 pipeline 显式写入 `round3-result.json` 后，三次实验均列出该文件，按 filename 读取为 307→200，下载 JSON 与最终 response 一致：[列表](../research/round3/captures/execution_program_artifacts.response.json)、[下载](../research/round3/captures/execution_program_artifact_bytes.response.json)。这补齐了这些显式写文件样本；不证明纯 return 会自动生成文件，也未证明能列出 pipeline 或全部 workspace 文件。

**CODE**：[artifacts.py](../research/round2/packages/vlmrun/vlmrun/client/artifacts.py)，第 35–107 行，`get` 在客户端检查 `session_id` / `execution_id` 二选一及 `object_id` / `filename` 二选一，发送 `GET artifacts`。`raw_response=True` 返回原始 bytes。该 SDK 检查不等于已经观察服务端对所有非法组合的处理。

### 4.1 注册预建 skill 与删除约定

**SOURCE/CODE**：[Agent OpenAPI](../research/round2/captures/agent_openapi.response.json)的 `/v1/files`、`/v1/skills/create` 与 [skills.py](../research/round2/packages/vlmrun/vlmrun/client/skills.py)第 283–336 行共同给出预建包注册路径：先 multipart `POST /v1/files?purpose=assistants`，字段名 `file`，201 返回上传文件 ID；然后 `POST /v1/skills/create`，JSON 提供 `file_id`、`name`、`description`。`SkillCreateRequest` 还声明 `is_public` 默认 false；响应 `SkillCreateResponse` 提供 `id`、`skill_version`、`status` 等。上传端另外有 `generate_public_url` query（默认 true），这是上传文件 URL 选项，与 skill 的 `is_public` 是不同字段。

**CODE**：SDK 预建包上传保留目录内所有文件，因此可随包提供现成 `pipeline.py`；这只证明客户端封装方式。**UNKNOWN**：新注册包是否直接命中 program、服务端是否重写/检查 pipeline、怎样失效旧缓存。

**STATIC**：归档 OpenAPI 中没有 skill 的 DELETE 路径，SDK `Skills` 也没有删除方法；只找到 `DELETE /v1/files/{file_id}`。[files.py](../research/round2/packages/vlmrun/vlmrun/client/files.py)第 259–275 行调用该删除路径。**SOURCE**：OpenAPI 将文件删除描述为仅 Pro / Enterprise 可用；`/v1/skills/create` 描述 skill ZIP 保存到 GCS 并按内容 hash 去重。**UNKNOWN**：当前账户是否可删上传文件、是否存在未公开的 skill 删除入口、删除源文件是否影响已创建 skill。不能把注册测试包描述为已知可完全回滚。

## 5. 不应通过猜测抹平的冲突

| 冲突 | 证据 | 本附录处理 |
|---|---|---|
| `mode` 默认值 | **SOURCE**：文档第 240 行称 `program` 默认；**CODE**：SDK types.py 第 314 行实际默认 `None`、注释称 program；**SOURCE**：10 月 13 日 OpenAPI `AgentExecutionConfig.mode` 默认 `agent` | 保留三者；实验显式设置 mode，以回包判定实际路径 |
| artifact 列表路径 | **CODE**：SDK artifacts.py 第 214 行使用 `/artifacts/list`；**STATIC**：归档 OpenAPI 只有 `/v1/artifacts`，其 description 支持 list/get | 不把 SDK 路径当已测可用；本次优先按现有 OpenAPI |
| execution 轮询资源 | **SOURCE**：skills usage 文档第 141 行用 `client.predictions.get`；**CODE/SOURCE**：SDK及 OpenAPI提供专用 `/agent/executions/{id}` | 不声称二者等价；记录来源差异 |
| 下载字段 | **SOURCE**：list-lookup 文档第 105 行写 `download.url`；**CODE/SOURCE**：SDK及 OpenAPI为 `download_url` | 按字段证据使用 download_url；不静默改原文 |
| YAML 的 graph 是否必需 | **SOURCE**：vlmrun-yaml 规范第 38 行标记 graph 为 required；**STATIC**：正式取得的 grounded-document-extraction/vlmrun.yaml 只有 apiVersion、metadata、model、toolsets，无 graph | 规范与包内容不一致；不能据此断言 Orion-2 包必须带 graph，也不能断言服务端忽略 graph |
| `io.read_file` 同步还是异步 | **SOURCE**：Code Execution 第 220–221 行 skill 示例使用 await；**CODE**：下载 pipeline.py 第 6 行没有 await；同文第 110 行也写同步 | 至少该实际包采用同步形式；不推断全部 proxy 返回行为 |

## 6. 本次收窄后的 UNKNOWN

- **UNKNOWN**：`CodeExecutionRunner` 源码、通用函数输入绑定算法、持久化与缓存失效规则、inline bundle 复用/改写机制；上述 `doc_path` 特例已运行观察。
- **UNKNOWN**：worker/容器或其他运行时拓扑、执行进程退出码、资源限制的服务端实现。
- **UNKNOWN**：公开 skill 提示词如何与 Orion 全局 system prompt 拼接，以及 `document.extract` 的隐藏完整提示词。
- **UNKNOWN**：缓存程序回退时如何映射 billing 与 retry 记录；现有协议只公开 `execution_mode` 与 usage 字段。

这些未知项不影响已取得 skill 的逐行理解。进一步请求只有在返回可独立核对的新工件或路径字段时，才能提升相应结论的证据等级。
