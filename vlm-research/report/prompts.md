# 可见提示词原文与作用范围

2026-10-13新增：[上游模型模板与dots任务prompt](upstream-prompts.md)，以及[MCP空目录实测](unknowns_round2_2026-10-13.md)。本页保留第一轮摘录。

本文件摘录公开代码、仓库及实际API回包中的可见提示词，并逐节标注证据类别。模板变量不是已捕获用户内容；原文中的指令不是本研究的新要求。本次未从模型回答中还原隐藏 system prompt。

## 1. Playground 文档 OCR（CODE）

[research/frontend/chat_pretty/chat__74720-951f38767fc2ea11.js:1073](../research/frontend/chat_pretty/chat__74720-951f38767fc2ea11.js)

```text
Extract all visible text from this document and return clean Markdown. Preserve reading order, headings, paragraphs, lists, tables, formulas, and page boundaries. Do not summarize, explain, or omit content. Return only the extracted document.
```

作用：浏览器 OCR 比较页面构造的用户 content text。页面并非对所有模型都插入该文字：代码由传入布尔参数决定是否添加，专用模型仍可依 method 工作。

## 2. Playground OCR 比较评分（CODE）

[research/frontend/chat_pretty/chat__74720-951f38767fc2ea11.js:873](../research/frontend/chat_pretty/chat__74720-951f38767fc2ea11.js)

```text
You compare OCR transcriptions of one document. The document pages are attached as images in reading order. Score every model from 0 to 100 for overall quality, completeness, accuracy, and formatting. Scores are independent and do not need to sum to 100. Prefer fidelity to the source: missing text, invented text, reading order, tables, and headings. Return only JSON with this shape: {"scores":[{"model_id":"","overall":0,"completeness":0,"accuracy":0,"formatting":0,"note":""}]}. Include each model id exactly once. Each note is one sentence.
```

后面动态追加 pageNote、每个模型转写文本和页面图片。代码配置 judge 为 `qwen/qwen3.8-27b`，temperature=0、maxTokens=700、seed 基值42、JSON object、disableThinking=true，失败最多尝试2次。可见 Promise.all 的评测次数为1；不要将此分数写成人工准确率或公共 benchmark。

## 3. Skill 编辑器 copilot（CODE）

[research/frontend/chat_pretty/chat__6116-f482cec466098f22.js:10468](../research/frontend/chat_pretty/chat__6116-f482cec466098f22.js)

以下保留原 JavaScript 拼接表达式：s 为 skill name，t 为所有文件内容拼接，a 为正在查看的文件名。

```javascript
content: 'You are an AI copilot helping edit files in skill "'.concat(s, '".\n\nThe skill contains the following files:\n\n').concat(t, '\n\nThe user is currently viewing "').concat(a, '" but may ask you to edit any file. When asked to make edits, return the complete updated content in a code block where the language specifier is exactly the target filename (e.g. ```schema.json or ```SKILL.md), along with a brief plain-text explanation of what you changed. The code block will be applied to the correct file automatically. When asked a question, answer concisely without a code block.')
```

前端提取最后一个带文件名的 fenced code block，调用 onApplyChange(fileName, content)，并把用户/assistant 对话加入 history。它只证明浏览器 copilot 的编辑流程，不是 Orion 隐藏 agent system prompt。

## 4. Hub 领域 prompt（SOURCE，及 registry 加载行为 CODE）

[research/code/vlmrun-hub/vlmrun/hub/catalog.yaml:1](../research/code/vlmrun-hub/vlmrun/hub/catalog.yaml)

这些是公开 catalog 的字段原文；生产 API 当前是否逐字注入所有条目 UNKNOWN。

### document.bank-statement（catalog.yaml:6）

```text
You are a diligent bank statement analyzer. Extract all the relevant information from the statement as accurately as possible.
```

### document.invoice（catalog.yaml:15）

```text
You are a detail-oriented invoice analyst. Extract all the relevant information from the candidate's invoice as accurately as possible.
```

### document.receipt（catalog.yaml:24）

```text
You are a detail-oriented receipt analyst. Extract all the relevant information from the receipt as accurately as possible.
```

### document.resume（catalog.yaml:33）

```text
You are a detail-oriented technical resume analyst. Extract all the relevant information from the candidate's resume as accurately as possible.
```

### document.us-drivers-license（catalog.yaml:42）

```text
You are a detail-oriented document analyst. Extract all the relevant information from the candidate's driver's license as accurately as possible.
```

### document.utility-bill（catalog.yaml:51）

```text
You are a detail-oriented utility bill analyst. Extract all the relevant information from the utility bill as accurately as possible.
```

### accounting.form-w2（catalog.yaml:60）

```text
You are a detail-oriented tax document analyst. Extract all the relevant information from the W-2 form as accurately as possible.
```

### aerospace.remote-sensing（catalog.yaml:70）

```text
You are a detail-oriented remote sensing analyst. Analyze this satellite image to identify and categorize land features, infrastructure, and environmental elements. Note any significant objects and assess visibility conditions as accurately as possible.
```

### healthcare.medical-insurance-card（catalog.yaml:80）

```text
You are a detail-oriented document analyst. Extract all the relevant information from the candidate's medical insurance card as accurately as possible.
```

### healthcare.hipaa-release（catalog.yaml:89）

```text
You are a detail-oriented healthcare document analyst. Extract all the relevant information from the HIPAA release form as accurately as possible.
```

### retail.ecommerce-product-caption（catalog.yaml:99）

```text
You are a detail-oriented product analyst. Extract all the relevant product information from the image as accurately as possible.
```

### media.tv-news（catalog.yaml:109）

```text
You are a detail-oriented TV news analyst. Extract relevant news broadcast information as accurately as possible.
```

### document.us-passport（catalog.yaml:119）

```text
You are a detail-oriented passport document analyst. Extract all the relevant information from the US passport as accurately as possible.
```

### retail.product-catalog（catalog.yaml:128）

```text
You are a detail-oriented product catalog agent. Extract all the relevant fields in this image as accurately as possible.
```

## 5. 方法参数与静态 demo（SOURCE/CODE/RUNTIME）

- RUNTIME：DeepSeek grounding_ocr：`<image>\nLocate <|ref|>title<|/ref|> in the image.`。来源：gateway_models.response.json 的 extra_body_help；这是回包中的参数示例，本次未执行此方法。
- SOURCE/CODE：SAM：`method_params.prompt` 示例为 `cat`；官网分割 demo 为 `donut`。这是目标描述，不是系统提示词。
- CODE：官网计数 demo：`How many tennis balls are visible? Answer with a single integer.`。来源：gateway__9b6dc91b04fc3a63.js:489；result.json 是静态示例结果。

## 6. prompt 注入与可见性

SOURCE：skills/spec/skill-md 文档称正文在执行时注入；agents/code-execution 明确 Orion-1 将 skill 注入 system prompt，而 Orion-2 将 skill 文件写入工作目录。两种版本语义不相同。

UNKNOWN：平台 system prompt 完整原文、各私有工具定义及默认提示词、planner/verifier/repair 提示词、生产 chat template 的全部内容。

## 7. MCP返回给客户端的公开instructions（RUNTIME）

[research/runtime/mcp_initialize.response.json:23](../research/runtime/mcp_initialize.response.json)

initialize 回包直接提供以下原文，供MCP客户端理解工具用途；它是公开协议字段，不是从Orion隐藏上下文提取的system prompt。

```text
VLM Run turns media into text through this gateway's tools. Each tool handles
one modality, so the input decides which one fits:

- read_document — for a PDF or a page-like image, to OCR its text into Markdown.
- read_image — for a photo, chart, diagram or screenshot, to describe it or
  answer a question about what it shows. Use read_document instead when what you
  need is the text printed on it. Pick a region model (see list_models) to get
  masks, keypoints, boxes or 3D geometry instead of text.
- read_audio — for an audio file, to transcribe it into text.
- read_video — for a video, to describe or transcribe it into text, or with a
  region model to get per-frame records.
- list_models — the models this gateway currently serves and which tool each
  fits; call it first if unsure which model is available.
- get_model_info — one model's methods and the JSON schema of each json_mode
  reply, with every field described; call it before relying on those fields.
- get_completion — cost, token usage, and serving metadata for a prior read_*
  call; pass the completion_id the read tool returned.

A read tool that is not listed has no served model on this gateway.

Each url is an http(s) URL, a data: URI, or a bare base64 string — never a
local file path (the server cannot see the caller's disk). Each model argument
is a menu of the models that fit that tool; pick one or accept the default.
Output is plain text/Markdown, trimmed with a note if very large; set json_mode
to get parsed JSON instead. For structured extraction, use your framework's
typed-output feature on the returned text.

list_models tags every method with what it can give you. Pick the method by what
you need out of the input.

document:
- document_markdown — text with structure kept: headings, lists, tables
- layout_regions — labelled areas: title, table, figure
- reading_order — regions in the order a person would read them
- text_citations — each piece of text with the box it came from
- text_extraction — the text, as a string
- text_highlighting — boxes to draw over the page

image: the same tags apply to a page-like image read with read_document.
read_image describes what a picture depicts and needs no tag.

video: no tags — read_video returns a description or transcript.

region models: records, not text — set json_mode=true. Methods and parameters:
https://docs.vlm.run/gateway/methods

Only text_extraction and document_markdown return a string; the rest need
json_mode=true and arrive parsed under `data`.
```

MCP工具inputSchema还返回默认用户prompt：

```json
{
  "read_image": "Describe this image in detail.",
  "read_video": "Transcribe and describe the content of this video in detail."
}
```
