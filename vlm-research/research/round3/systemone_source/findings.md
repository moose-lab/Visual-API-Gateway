# System One 第三轮：算法边界、客户端路径与上游差异

研究日期：2026-10-13。本文新增的是公开文档采集、公开 SDK 源码审查和本机离线执行；没有发起 VLM / TypeSafe 推理请求。`RUNTIME-本机` 表示离线运行已观察结果，不表示远端生产实现。

## 已进一步弄清的部分

| 结论 | 证据类别与锚点 |
| --- | --- |
| VLM 的生成式 System One 使用只允许 schema labels 的 regex；在 grammar mask **之前**读取 label logprobs。 | `SOURCE`：VLM [changelog](https://docs.vlm.run/gateway/changelog)，归档 `research/docs/docs.vlm.run__gateway__changelog.md:43`。原文没有公开 regex 字符串、标签 token 编码或整段 prompt。 |
| 生成式引擎按题并行调用，复用 shared prefix；文档将 decode depth 从 `2N-1` 降至 `1`，并把每次调用输入 token 纳入 usage。 | `SOURCE`：同文件 `:47`。速度数字属于官方测量，本文没有复现。 |
| diffusion 路径 seed canvas，默认一次 denoise；`steps` 支持 1–8，`samples` 支持 1–32 次 noise draws 并取平均。 | `SOURCE`：`research/docs/docs.vlm.run__gateway__typesafe-models.md:11`；`research/docs/docs.vlm.run__gateway__api-reference__post-systemone.md:20`；`research/docs/docs.vlm.run__gateway__system-one.md:373`。平均前后的归一化顺序没有公开。 |
| VLM 与 Jev API wire-compatible 不意味着使用 Jev 的模型、训练或置信度计算。 | `SOURCE`：`research/docs/docs.vlm.run__gateway__jev-compatibility.md:63` 明确概率来自不同模型；下文记录公式差异。 |
| VLM 关闭 upstream 的高熵自动 reread；不支持 `sequential`，题组并行且 unconditioned。 | `SOURCE`：同 compatibility 文件 `:55`、`:66`。因此不能把 Jev 自动重读路径写成 VLM 的当前流程。 |
| SDK 没有计算概率或置信度：负责输入验证、JSON 编码、HTTP 调用和响应解码。 | `CODE`：TypeSafe SDK commit `e70bf99a89f27102247613bcd5d1aa8923a1cda9` 的 `src/typesafe_sdk/_core/endpoints.py:18`、`transport.py:107`、`response_types.py:79`。该结论限定于这条客户端调用路径。 |
| SDK 中 `questions` 的 IDs 原样发到 Gateway；VLM 文档说 IDs 不进入模型。 | `CODE` + `RUNTIME-本机`：`endpoints.py:33` 和 [offline-verification.json](offline-verification.json)；`SOURCE`：VLM API 文档 `:17`。`INFERENCE`：移除/映射 IDs 的边界位于 SDK 发送之后的服务端路径，具体函数未知。 |

## 新发现：两家的 confidence 数值语义不同

`SOURCE`：VLM 归档 API 文档 `research/docs/docs.vlm.run__gateway__api-reference__post-systemone.md:83` 对 Choice / Score 给出统一公式：

```text
H(p) = -sum(p_i * ln(p_i))
confidence_VLM = 1 - H(p) / ln(K)
score = sum(i * p_i)
```

`SOURCE`：沿 SDK 的官方文档链接，再沿 System One 页中的 Confidence 链接，2026-10-13 抓取 [TypeSafe Confidence](https://docs.typesafe.ai/confidence)。该页给出不同公式：

```text
Choice: (p_max - 1/K) / (1 - 1/K)
Score:  max(0, 1 - sum(p_i * abs(i - m)) / MAD_unif)
        m = most likely level
        MAD_unif = sum(abs(i - (K - 1)/2)) / K
```

TypeSafe 页另外提出 Noul 可在客户端用 `abs(2p-1)` 自行构造 confidence；原始 Noul 回答并没有独立 confidence 字段。来源全文 [confidence.txt](public-docs/confidence.txt)，原始 HTML [confidence.html](public-docs/confidence.html)，公式与完整代码示例抽取 [confidence-formulas.json](public-docs/confidence-formulas.json)。Choice 公式在全文 `:211`，Score 公式在 `:409`；原文代码以 `choice_confidence` / `score_confidence` 为锚点。

`RUNTIME-本机`：重算 **2026-10-11 已采集**的 VLM DiffusionGemma Choice 回包：

| 量 | 结果 |
| --- | --- |
| `p(invoice)` | `0.9999849918614152` |
| `p(weather)` | `1.5008138584725328e-05` |
| VLM 回包 `confidence` | `0.9997378591522463` |
| 熵公式重算 | `0.9997378591522463` |
| TypeSafe 当前公开 Choice 公式重算 | `0.9999699837228304` |
| 两种计算差值 | 约 `0.0002321245705840802` |

来源：`research/runtime/probe_systemone_diffusion.response.json:11`；重算结果见 [offline-verification.json](offline-verification.json) 中 `archived confidence agrees with entropy formula` 和 `upstream Choice formula differs from archived VLM confidence`。

`INFERENCE`：`Same` / `wire-compatible` 可描述字段形状，不能据此声称置信度数值可直接互换。这里记录的是 10 月 11 日 VLM 回包与 10 月 13 日 TypeSafe 公开公式的差异；没有重新测过两个远端的当前实现，也没有观测 VLM Score 回包来独立核对其公式。

`SOURCE`：TypeSafe [AI primer](https://docs.typesafe.ai/introduction/machine-learning-primer) 将自身训练称为 RLCD；[ai-primer.txt](public-docs/ai-primer.txt):12–22。`UNKNOWN`：VLM 有没有进行对应训练。此资料只能说明 TypeSafe 的自述，不能作为 VLM 训练事实。

## 客户端到 HTTP 的具体可执行路径

`CODE`：新取得的 SDK 官方仓库来源为 wheel METADATA 中的 `Repository` 链接：<https://github.com/typesafe-ai/typesafe-sdk-python>。浅克隆 commit `e70bf99a89f27102247613bcd5d1aa8923a1cda9`；在 [typesafe-sdk-python](typesafe-sdk-python)。

```text
TypeSafeClient.system_one(...)                 _core/client/sync/client.py:131
  -> prepare_system_one(...)                  _core/endpoints.py:18
     -> normalize_questions(...)              _core/questions.py:10
     -> body.update(extra_body)               _core/endpoints.py:36
     -> prepare(..., /v1/systemone, ...)       _core/transport.py:107
        -> config.base_url + path             _core/transport.py:134
        -> pydantic_core.to_json(...)         _core/json.py:25
  -> send(...), http_client.request(...)       _core/transport.py:149
  -> parse_response(...)                      _core/schemas/base.py:101
  -> SystemOneResponse._decode(...)           _core/response_types.py:129
```

`RUNTIME-本机`：[verify_offline.py](verify_offline.py) 用 SDK 真代码和 `httpx2.MockTransport` 重放归档回包，禁用 socket 连接。它观察到：

- `base_url=https://gateway.vlm.run/typesafe/` 去掉末尾 `/` 后，发送路径成为 `https://gateway.vlm.run/typesafe/v1/systemone`；这里只是拦截本机 request 对象，没有连接该 URL。
- 题目对象编码时保留 label 与 ID，省略对象默认的可选 `None`，保留嵌套 `criteria` 中的 `None`；tuple 会编码成 JSON array。
- `extra_body` 是浅覆盖，后写值可替换整个 `questions` / `state`，并传递 `steps` / `samples` / `content`。
- SDK 默认 typed usage 只保留 `input_tokens` 和 `output_tokens`；`cost`、`reads`、`input_tokens_details` 可从 `response.raw_http_response.json()` 取回。回包顶层 `id` 同样不在默认 typed 模型中。
- 本机 SDK 接受单 label 的 raw choice 和 raw question 的额外字段进入 transport。这不表示 Gateway 接受；VLM 文档声明 choice 最少 2 项、严格 body。
- 新克隆 commit 的 27 个 Python 源文件与上一轮归档 wheel 中对应文件文本一致。

`SOURCE` + `CODE`：默认 `jev-latest` 在 `src/typesafe_sdk/constants.py:18`；VLM 文档 `jev-compatibility.md:19` 明确该模型别名不被其 route 服务。调用方需选择 VLM 已列出的模型才能遵循该接口文档。

## Canvas、分组和模板的边界

`SOURCE`：VLM `system-one.md:389` 说 schema prefix 在每个 replica 上缓存；`:390` 说约 20 个短问题可装进一次 read，再多会分组并发。API 文档 `post-systemone.md:70` 定义 `reads=题组数×samples`；changelog `:47` 对生成式路径又给出“每题一次调用”的更具体描述。资料没有公布两者在所有模型和题型下的统一分组公式，因此不能将“20”当成固定硬上限。

`RUNTIME`（已存远端回包）：`research/round2/websocket.json:24` 的 `session.created` 报告单 Noul 题 `groups=1`、`canvas_widths=[16]`；随后单帧 `usage.reads=1`、`output_tokens=0`。这些是服务器报告的字段，未直接看到内存 tensor。

`STATIC`（上游配置）：`research/round2/captures/hf_diffusion_config_json.response.json:6` 的 `canvas_length=256`，模型类为 `DiffusionGemmaForBlockDiffusion`，来自 NVIDIA HF 仓库 commit `ec4ff3df205028f4e81c954c2227f9312b3ec2ea`。VLM model detail 给出的 `hf_model_id` 指向这个仓库。`UNKNOWN`：System One 的宽度 16 与上游 block canvas 256 如何在生产引擎中对应；不能把两个字段直接等同。

`CODE`（上游模板）：公开 `chat_template.jinja` 的 `:179` 在有 thinking / tools / 首条 system 或 developer message 时生成 system turn；`:188` 原样加入调用方提供的 system 内容；`:331` 识别 processor 形式的 `type=image`；`:356` 加 model generation prefix。模板没有在这条 plain-chat 分支硬编码一段自然语言任务指令。

`RUNTIME-本机`：5 个合成 fixture 的 Jinja 渲染保存于 [offline-verification.json](offline-verification.json) 的 `template_renders`，包括纯文字、显式 system、thinking、processor image 及未经转换的 OpenAI `image_url`。直接喂 `image_url` 不生成 image marker，而 `type=image` 会生成。这只验证该原始模板的输入形状，**没有证明 Gateway 漏图**；Gateway 和 processor 的转换代码不在本次材料中。

`UNKNOWN`：System One 专用 schema-to-prompt 模板、question/label token 重编码、canvas seed 初始化、标签位置表、padding 与宽度选择、grammar 字符串、概率提取和多 token label 聚合、samples 归一化顺序。公开 chat template 描述聊天封装，不足以恢复这些专用实现。

`INFERENCE`：即使观测到概率和最终答案，也不能唯一反推出原始 logits、固定 prompt 或引擎源码。例如 softmax 的全部 logits 加同一个常量不会改变概率；这只是说明反推的不唯一性，不是声明 VLM 使用了某个未公开公式。

## 本次完成的验证及剩余证据需求

`RUNTIME-本机`：15 / 15 项通过，完整结果 [offline-verification.json](offline-verification.json)。可复现命令：

```powershell
tools\.venv-systemone\Scripts\python.exe research\round3\systemone_source\verify_offline.py
```

隔离环境位于 `tools/.venv-systemone`，所用依赖版本、脚本 SHA-256 和模板 SHA-256 已写入 JSON。脚本禁止网络连接，所有 wire fixtures 明确标为合成。首次运行因缺少 SDK distribution metadata 失败，加入已归档 wheel metadata 搜索路径后重跑通过；没有改动上游源代码。

`UNKNOWN` 项要继续变成 `CODE` / `RUNTIME` 事实，所缺的直接材料是：部署使用的 System One adapter 源码或可观测 trace（完整 engine request、label mapping、grammar、canvas positions、logprob 原值）；对应生产 commit / launch config；多题多组请求的 engine-call trace。公开 SDK 只暴露 HTTP 边界，现有归档没有这些材料。

本次修订说明：此前报告将 System One 多处内部路径标为未知；本文依据明确 changelog 和兼容性说明补成 `SOURCE`，没有将文档叙述改写为已执行的生产路径。新增 TypeSafe 置信度公式与 VLM 归档差异保留双方来源，没有假定其中一方错误。
