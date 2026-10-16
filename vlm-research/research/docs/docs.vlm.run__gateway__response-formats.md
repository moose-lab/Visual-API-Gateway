> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Response Formats

> Text mode for agents, JSON mode and JSON schema mode for programmatic APIs

Vision models typically return boxes, masks, keypoints, or text. As a developer, you consume that result in one of two ways, and each needs a different format.

* **Your code needs a contract.** A pipeline or service must parse the reply without guessing. It needs the same keys, a typed payload, and a tag that names the shape. Prose breaks your parser the first time the wording changes.
* **Your LLM needs readable text.** An agent or an MCP tool call reads the reply as context. Keys and braces cost tokens, and a stream that arrives early helps.

`response_format` selects the format. All three modes carry the same data: a text reply is the JSON payload, rendered.

| User | Mode | Request | Why |
| - | - | - | - |
| An LLM: tool calls, agents, [MCP](/gateway/mcp-tools) | [Text mode](#text-mode) | Omit `response_format` | Readable text for the model, and `stream: true` is honored. |
| Your code: pipelines, services, programmatic APIs | [JSON mode](#json-mode) | `response_format={"type": "json_object"}` | One object with a deterministic type per `(model, method)`. Parse it by `content.object`. |
| Your code, when you define the output shape | [JSON schema mode](#json-schema-mode) | `response_format={"type": "json_schema", ...}` | The reply matches your schema. Chat and provider models only. |

For programmatic use, pick JSON mode or JSON schema mode. For agents, leave `response_format` unset.

<h2 id="text-mode">
  Text Mode
</h2>

Omit `response_format`. `{"type": "text"}` is equivalent. Over MCP, leave `json_mode` at its default `false`.

```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
response = client.chat.completions.create(
    model="zai-org/glm-ocr",
    messages=[{"role": "user", "content": [{"type": "image_url", "image_url": {"url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.receipt/playground/2.jpg"}}]}],
)
text = response.choices[0].message.content  # hand this to the model as-is
```

A text reply is one **top-level block** for the request's single input. A PDF is a `<document>` block. An image is the bare payload. A block body is one of two kinds.

| Kind | Body | Emitted by |
| - | - | - |
| `json` | One JSON object, the same object JSON mode returns as `content` | Every method that returns regions, boxes, keypoints, or masks |
| `markdown` | Free-form text | `markdown`, `text`, `free_ocr`, `multi_page`, `table`, `formula`, `chart`, the Florence-2 captions, and `ocr` on every model but `paddleocr/pp-ocrv6` |

The kind is fixed by the `(model, method)` pair and is the same on every page of a request. Each [model card](https://vlm.run/gateway/models) lists the kind every method returns.

* **Streaming:** `stream: true` is honored. The stream is byte-identical to the non-streaming reply. See [streaming](/gateway/guides/document-ocr#3-streaming-vs-non-streaming).
* **Chat VLMs:** the reply is the model's own text, with no wrapper. A PDF sent to a chat VLM returns a [`400`](/gateway/error-codes#capability-violation-400).

### Document input

An input PDF is one `<document>` block wrapping one `<page>` block per rasterized page.

```text theme={"theme":{"light":"github-light","dark":"dark-plus"}}
<document file_name="invoice.pdf" file_hash="sha256:1b7f04c3…" file_bytes="48213" mimetype="application/pdf" npages="3" dpi="150">
<page id="0" format="json" width="1275" height="1650">
{"object": "doc.page.blocks", "items": [{"block_id": 0, "bbox_xywh": [0.0332, 0.0138, 0.1719, 0.0331], "text": "Invoice", "score": 0.998}]}
</page>
<page id="1" format="markdown" width="1275" height="1650">
</page>
<page id="2" format="json" width="1275" height="1650" status="error"/>
</document>
```

The markdown page body:

```markdown theme={"theme":{"light":"github-light","dark":"dark-plus"}}
**Line items**

| SKU | Qty |
| --- | --- |
| A-100 | 2 |
```

| Element | Attributes |
| - | - |
| `<document>` | `file_name`, `file_hash`, `file_bytes`, `mimetype`, `npages`, `dpi`, `language`, in that order. `file_name` is omitted for `data:` URI uploads.<br /><br />`language` is a comma-separated list of ISO-639 codes in confidence order, and it is present only when the read reports one. |
| `<page>` | `id` (zero-based), `format` (`json` or `markdown`), `width`, `height`, `status`. |

Each attribute is a field of the same JSON record with the prefix dropped.

* `<page id>` is `page_id`.
* `<document npages>` is `document_npages`.
* A failed page is **self-closing**, with `status="error"` and no body. Page numbering stays intact.

### Single image input

The block alone, with no wrapper:

```text theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{"object": "doc.ocr.lines", "items": [{"bbox_xywh": [0.0332, 0.0138, 0.1719, 0.0331], "text": "Invoice", "score": 0.998}]}
```

or, for a markdown-kind method:

```markdown theme={"theme":{"light":"github-light","dark":"dark-plus"}}
# Annual Report 2024

## Overview
```

This form carries no `image_hash`, `image_width`, or `image_height`. Use JSON mode when that metadata is needed.

<h2 id="json-mode">
  JSON Mode
</h2>

Set `response_format={"type": "json_object"}`.

```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
import json

response = client.chat.completions.create(
    model="paddleocr/pp-ocrv6",
    messages=[{"role": "user", "content": [{"type": "image_url", "image_url": {"url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.receipt/playground/2.jpg"}}]}],
    response_format={"type": "json_object"},
    extra_body={"method": "ocr"},
)
result = json.loads(response.choices[0].message.content)
assert result["content"]["object"] == "doc.ocr.lines"
lines = [item["text"] for item in result["content"]["items"]]
```

The reply is one object: `model`, `method`, the input, then the payload. There is no `data` list. The payload types are in [Response Types](/gateway/response-types).

<Note>
  A JSON `response_format` is **buffered**. A single valid JSON object cannot be assembled from SSE deltas. With `stream: true` the finished object is sent as `chat.completion.chunk` frames, so there is no time-to-first-token benefit.
</Note>

One input shape per reply:

| Input | Top-level keys | Payload key |
| - | - | - |
| Image | `image_hash`, `image_width`, `image_height` | `content` |
| Video | `video_hash`, `video_width`, `video_height`, `video_fps`, `video_nframes`, `video_duration` | `content` |
| PDF | `file_name`, `file_hash`, `file_bytes` (the source file), then `document_mimetype`, `document_npages`, `document_dpi`, `document_language` | `pages` |

<Tabs>
  <Tab title="Image reply">
    ```json theme={"theme":{"light":"github-light","dark":"dark-plus"}}
    {
      "model": "paddleocr/pp-ocrv6",
      "method": "ocr",
      "image_hash": "sha256:…",
      "image_width": 1024,
      "image_height": 1448,
      "content": { "object": "doc.ocr.lines", "items": [ <line>, ... ] }
    }
    ```

    The hash and dimensions are omitted only when the image cannot be decoded. The payload type is the content container's `object`.
  </Tab>

  <Tab title="Video reply">
    ```json theme={"theme":{"light":"github-light","dark":"dark-plus"}}
    {
      "model": "usyd-community/vitpose-plus-large",
      "method": "pose",
      "video_hash": "sha256:…",
      "video_width": 1280,
      "video_height": 720,
      "video_fps": 23.976,
      "video_nframes": 6059,
      "video_duration": 252.711,
      "content": { "object": "vid.pose.kpts", "items": [ <item>, ... ], "frames": [ <frame>, ... ] }
    }
    ```

    `video_fps`, `video_nframes`, and `video_duration` describe the **source** clip, not the frames that were sampled. Sampled frames are the `frames` table on the container. See [video types](/gateway/response-types#vid-segment-masks).
  </Tab>

  <Tab title="Document reply">
    ```json [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
    {
      "model": "zai-org/GLM-OCR",
      "method": "markdown",
      "file_name": "invoice.pdf",
      "file_hash": "sha256:1b7f04c3…",
      "file_bytes": 48213,
      "document_mimetype": "application/pdf",
      "document_npages": 3,
      "document_dpi": 150,
      "pages": [
        {
          "object": "doc.page",
          "page_id": 0,
          "page_width": 1275,
          "page_height": 1650,
          "content": { "object": "doc.page.blocks", "items": [ <block>, ... ] }
        },
        {
          "object": "doc.page",
          "page_id": 1,
          "page_width": 1275,
          "page_height": 1650,
          "status": "error"
        }
      ]
    }
    ```

    A page record carries `object`, `page_id`, `page_width`, `page_height`, `content`, and optional `status`. A failed page carries `"status": "error"` and no `content`. Page numbering stays intact. `file_name` is omitted for inline (`data:`) uploads. `document_npages` counts the pages actually read after any [`document_pages`](/gateway/multimodal-inputs) selection. Optional `document_language` is document-level.
  </Tab>
</Tabs>

### `content` per medium

| Medium | `content` |
| - | - |
| Document page | Always `{"object": "doc.page.blocks", "items": [ <block>, ... ]}`, whatever method read the page. |
| Image, json kind | `{"object": "img.*" \| "doc.*" \| "world.*", "items": [ <item>, ... ]}`. `items` is `[]` when nothing is found. |
| Video, json kind | `{"object": "vid.*", "items": [ ... ], "frames": [ ... ]}`. See [video types](/gateway/response-types#vid-segment-masks). |
| Image or video, markdown kind | The **string** itself, not wrapped. |

A json payload is **never a bare array**. A markdown payload is never wrapped. An image `content` has exactly one shape per `(model, method)`.

<CodeGroup>
  ```json Regions [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "model": "paddleocr/pp-ocrv6",
    "method": "ocr",
    "image_hash": "sha256:…",
    "image_width": 1024,
    "image_height": 1448,
    "content": {
      "object": "doc.ocr.lines",
      "items": [
        {
          "bbox_xywh": [0.0332, 0.0138, 0.1719, 0.0331],
          "text": "Invoice",
          "score": 0.998
        }
      ]
    }
  }
  ```

  ```json Markdown theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "model": "zai-org/GLM-OCR",
    "method": "markdown",
    "image_hash": "sha256:…",
    "image_width": 1700,
    "image_height": 2200,
    "content": "# Annual Report 2024\n\n## Overview"
  }
  ```

  ```json Document page theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "object": "doc.page.blocks",
    "items": [
      {
        "block_id": 0,
        "text": "# Annual Report 2024\n\n## Overview"
      }
    ]
  }
  ```
</CodeGroup>

<h3 id="chat-vlms-are-not-enveloped">
  Chat VLMs
</h3>

A chat VLM reply is passed through in JSON mode too. The body is the **model's own JSON**, with no `data` wrapper and no `object` tag.

```json theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{ "animal": "golden retriever", "setting": "beach at sunset" }
```

This is what OpenAI's `response_format={"type":"json_object"}` means. The *model* emits the JSON.

<h2 id="json-schema-mode">
  JSON Schema Mode
</h2>

JSON schema mode constrains generation to a schema you supply. The reply is the model's own JSON, with the keys you defined and no `model` or `method` wrapper.

* **Supported today:** chat VLMs (`qwen/qwen3.5-0.8b`, `qwen/qwen3.8-27b`, `google/gemma-4-26b-a4b-it`) and provider models (`google/gemini-*`, `meta/muse-spark-1.2`, `moonshotai/kimi-k3`, `minimax/minimax-m3`). `meta/muse-glimmer-30b` and the diffusion engine are not supported. More models may add support. Check `capabilities.supports_json_schema` on [`GET /v1/openai/models`](/gateway/api-reference/get-models).
* **Unsupported models:** OCR, detection, segmentation, and pose models return `400` with `capability_violation`. Use [JSON mode](#json-mode) there.
* **Streaming:** the reply is buffered, as in JSON mode.

```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
response = client.chat.completions.create(
    model="qwen/qwen3.8-27b",
    messages=[{"role": "user", "content": [
        {"type": "image_url", "image_url": {"url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.receipt/playground/2.jpg"}},
        {"type": "text", "text": "Extract the merchant and the total."},
    ]}],
    response_format={
        "type": "json_schema",
        "json_schema": {
            "name": "receipt",
            "schema": {
                "type": "object",
                "properties": {"merchant": {"type": "string"}, "total": {"type": "number"}},
                "required": ["merchant", "total"],
            },
        },
    },
)
receipt = json.loads(response.choices[0].message.content)
```

### Rounding

Set [`precision`](/gateway/extra-kwargs) to change the decimal places on normalized coordinates and `score` in text mode and JSON mode.

## Related

<CardGroup cols={2}>
  <Card title="Response Types" icon="shapes" href="/gateway/response-types">
    Every payload type: OCR, detection, segmentation, keypoints.
  </Card>

  <Card title="Methods" icon="list-check" href="/gateway/methods">
    Select what the model computes, and pass method parameters.
  </Card>

  <Card title="MCP Tools" icon="plug" href="/gateway/mcp-tools">
    The `json_mode` flag on the read tools.
  </Card>

  <Card title="Document OCR" icon="file-lines" href="/gateway/guides/document-ocr">
    End-to-end recipe from model selection to response parsing.
  </Card>

  <Card title="Chat Completions" icon="comments" href="/gateway/api-reference/post-chat-completions">
    Full request and response schema.
  </Card>
</CardGroup>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.