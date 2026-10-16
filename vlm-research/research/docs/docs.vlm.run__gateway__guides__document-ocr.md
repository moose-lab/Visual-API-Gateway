> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Document OCR

> Send a PDF, choose a method, and read each page

Every model exposes a `method` extra keyword argument for more specialized tasks, such as `parse_layout` or `ocr`. Document requests run one page at a time. Each model applies its own default `method`.

<Info>
  Use JSON mode (`response_format: {"type":"json_object"}`) when you call the API programmatically. Omit `response_format` for text when a model runs as an agent tool call or through MCP.
</Info>

## 1. Pick a model

Start with `paddlepaddle/paddleocr-vl-1.6` for general-purpose markdown, or `paddleocr/pp-ocrv6` for fine-grained bounding boxes, as in traditional OCR. Switch only when you need a method neither serves.

| Model | Default method | Reach for it when |
| - | - | - |
| [`paddlepaddle/paddleocr-vl-1.6`](https://vlm.run/gateway/models/paddlepaddle-paddleocr-vl-1.6) | `markdown` | General-purpose page reads (`markdown`, `ocr`), plus `table`, `formula`, and `chart` for structured content. |
| [`paddleocr/pp-ocrv6`](https://vlm.run/gateway/models/paddleocr-pp-ocrv6) | `ocr` | Per-line geometry (`ocr`, `detect`), or plain text (`text`). |
| [`zai-org/glm-ocr`](https://vlm.run/gateway/models/zai-org-glm-ocr) | `markdown` | Markdown-only page reads. |
| [`rednote-hilab/dots.mocr`](https://vlm.run/gateway/models/rednote-hilab-dots.mocr) | `markdown` | Layout parsing (`parse_layout`), or layout boxes with no transcribed text (`parse_layout_only`). |
| [`deepseek-ai/deepseek-ocr-2`](https://vlm.run/gateway/models/deepseek-ai-deepseek-ocr-2) | `markdown` | Locating a phrase on the page (`grounding_ocr`). |
| [`baidu/unlimited-ocr`](https://vlm.run/gateway/models/baidu-unlimited-ocr) | `markdown` | Long documents read in sliding windows (`multi_page`). |

To compare models, see the [model catalog](https://vlm.run/gateway/models). For each method and its parameters, see [Methods](/gateway/methods).

## 2. Send the document

Pass the PDF as a `document_url` content part. Prefer a hosted URL over a base64 data URI. For size limits, see [Supported Inputs](/gateway/multimodal-inputs). For `document_dpi` and other options, see [Method Parameters](/gateway/methods#method-parameters).

<CodeGroup>
  ```python Python [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from openai import OpenAI

  client = OpenAI(
      base_url="https://gateway.vlm.run/v1/openai",
      api_key="<VLMRUN_API_KEY>",
  )

  response = client.chat.completions.create(
      model="paddlepaddle/paddleocr-vl-1.6",
      messages=[
          {
              "role": "user",
              "content": [
                  {
                      "type": "document_url",
                      "document_url": {"url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.invoice/sample-invoice.pdf"},
                  }
              ],
          }
      ],
      extra_body={"method": "ocr", "document_dpi": 72},
  )

  print(response.choices[0].message.content)
  ```

  ```typescript Node.js [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import OpenAI from "openai";

  const client = new OpenAI({
    baseURL: "https://gateway.vlm.run/v1/openai",
    apiKey: process.env.VLMRUN_API_KEY,
  });

  const response = await client.chat.completions.create({
    model: "paddlepaddle/paddleocr-vl-1.6",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "document_url",
            document_url: {
              url: "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.invoice/sample-invoice.pdf",
            },
          },
        ],
      },
    ],
    method: "ocr",
    document_dpi: 72,
  });

  console.log(response.choices[0].message.content);
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  vlmrun gw chat https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.invoice/sample-invoice.pdf \
    -m paddlepaddle/paddleocr-vl-1.6 \
    --method ocr \
    -e document_dpi=72 \
    --no-stream
  ```

  ```bash cURL [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl https://gateway.vlm.run/v1/openai/chat/completions \
    -X POST \
    -H "Authorization: Bearer $VLMRUN_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "model": "paddlepaddle/paddleocr-vl-1.6",
      "method": "ocr",
      "document_dpi": 72,
      "messages": [
        {
          "role": "user",
          "content": [
            {
              "type": "document_url",
              "document_url": {
                "url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.invoice/sample-invoice.pdf"
              }
            }
          ]
        }
      ]
    }'
  ```
</CodeGroup>

<h3 id="request-knobs">
  Request knobs
</h3>

| Field | Default | Notes |
| - | - | - |
| `document_dpi` | `96` | Rasterization DPI per page. See [Method Parameters](/gateway/methods#method-parameters). |
| `document_max_pages` | `128` | Pages one request may read. A longer PDF is a `400` naming the ranges that cover it. See [Supported Inputs](/gateway/multimodal-inputs#document-inputs). |
| `document_pages` | all | Which 0-indexed pages to read: page indices and/or `[start, stop]` half-open ranges. Only those pages are rasterized, and they are re-numbered from 0. |
| `method` | model default | Per-page backend operation. It sets each page's payload kind (`format="markdown"` or `format="json"`), not the page wrapper. When omitted, the model's default method applies to every page. Each [model page](/gateway/models) lists its methods and default. |
| `response_format` | omitted | Omitted (or `{"type":"text"}`) returns the `<document>` / `<page>` text blocks; `{"type":"json_object"}` returns the JSON object. See [Parse the response](#4-parse-the-response). |
| `precision` | `4` | Decimal places on normalized `bbox_xywh` / `poly_xy` / `point_xy` and `score`. Ignored for markdown payloads. |
| `stream` | `false` | When true, emits ordered SSE page blocks. Ignored when a JSON `response_format` is requested. See [Streaming vs non-streaming](#3-streaming-vs-non-streaming). |

### Document rasterization

`document_dpi` is the rasterization DPI for each page of a `document_url`, before OCR. Set it at the top level or inside `method_params`. When both are set, `method_params` wins.

| DPI | Tradeoff |
| - | - |
| `72` | The PDF's own unit. Cheapest raster; small text can be lost. |
| `96` (default) | Fast and cheap; fine for clean, standard-size text. |
| `150` | Good balance of legibility and per-page inference cost for denser pages. |
| `300`+ | Preserves fine print and small text, at higher inference cost and latency per page. |

Start at the default, and raise `document_dpi` if the model misses dense or small text. For page-count and file-size limits, see [Supported Inputs](/gateway/multimodal-inputs#document-inputs).

## 3. Streaming vs non-streaming

In text mode, `stream: true` applies to every chat request. The streamed result is byte-identical to the non-streaming result.

* **Document request:** One SSE chunk per completed page block, in ascending page order.
* **Single-image request on a chat VLM:** Streams deltas as they generate.
* **Single-image request on an OCR method that returns the model's text unchanged:** Streams deltas as they generate.
* **JSON `response_format`:** Buffered. With `stream: true`, the finished object is sent as SSE frames. Per-page deltas cannot form one JSON object.

| Mode | When to use |
| - | - |
| **Non-streaming** (default) | Short documents, batch pipelines, or when you need the full result before continuing. |
| **Streaming** (`stream: true`) | Long documents where you want to render or process pages as they finish. |

<CodeGroup>
  ```python Python [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  stream = client.chat.completions.create(
      model="paddlepaddle/paddleocr-vl-1.6",
      stream=True,
      messages=[
          {
              "role": "user",
              "content": [
                  {"type": "document_url", "document_url": {"url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/finance.sec-filings/tsla-8k.pdf"}}
              ],
          }
      ],
      extra_body={"method": "ocr", "document_dpi": 72},
  )

  for chunk in stream:
      delta = chunk.choices[0].delta.content
      if delta:
          print(delta, end="")
  ```

  ```typescript Node.js [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  const stream = await client.chat.completions.create({
    model: "paddlepaddle/paddleocr-vl-1.6",
    stream: true,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "document_url",
            document_url: {
              url: "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/finance.sec-filings/tsla-8k.pdf",
            },
          },
        ],
      },
    ],
    method: "ocr",
    document_dpi: 72,
  });

  for await (const chunk of stream) {
    const delta = chunk.choices[0]?.delta?.content;
    if (delta) process.stdout.write(delta);
  }
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  vlmrun gw chat https://storage.googleapis.com/vlm-data-public-prod/hub/examples/finance.sec-filings/tsla-8k.pdf \
    -m paddlepaddle/paddleocr-vl-1.6 \
    --method ocr \
    -e document_dpi=72
  ```

  ```bash cURL [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl https://gateway.vlm.run/v1/openai/chat/completions \
    -X POST \
    -H "Authorization: Bearer $VLMRUN_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "model": "paddlepaddle/paddleocr-vl-1.6",
      "stream": true,
      "method": "ocr",
      "document_dpi": 72,
      "messages": [
        {
          "role": "user",
          "content": [
            {
              "type": "document_url",
              "document_url": {
                "url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/finance.sec-filings/tsla-8k.pdf"
              }
            }
          ]
        }
      ]
    }'
  ```
</CodeGroup>

Each `delta.content` is one piece of the document: the `<document>` open tag, one `<page>` block, or the close tag. Each `<page>` carries its own `format`, so the page is self-describing before the client buffers the header.

## 4. Parse the response

`response_format` selects text mode or JSON mode. `method` selects each page's payload kind. Both modes carry the same per-page content. The contract is in [Response Formats](/gateway/response-formats).

### Text mode (default)

Every document method uses the same wrapper:

* One `<document>` element per input PDF. Attributes carry the file metadata.
* One `<page>` block per rasterized page.
* `method` sets only the page body. `format` names that body.

| `format` | Body | Methods |
| - | - | - |
| `markdown` | Markdown | `markdown`, `text`, `free_ocr`, `multi_page`, `table`, `formula`, `chart`, and `ocr` on every model except `paddleocr/pp-ocrv6` |
| `json` | Region payload | `ocr` on `paddleocr/pp-ocrv6`, `detect`, `grounding_ocr`, `parse_layout`, `parse_layout_only` |

The reply is one string in `choices[0].message.content`:

```text theme={"theme":{"light":"github-light","dark":"dark-plus"}}
<document file_name="tsla-8k.pdf" mimetype="application/pdf" npages="5" dpi="96">
<page id="0" format="markdown" width="816" height="1056">
FORM 8-K

CURRENT REPORT
Pursuant to Section 13 or 15(d) of the
Securities Exchange Act of 1934
</page>
...
</document>
```

* A failed page is self-closing. It has `status="error"` and no body. Page numbering stays intact.
* A single image (not a PDF) returns the payload block alone. There is no wrapper.
* A structured request carries one input medium. The reply holds at most one document or one image.

### JSON mode

Set `response_format` to `{"type":"json_object"}`. Every method returns one shape. A failed page has `"status": "error"` and no `content`.

```json theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "model": "paddlepaddle/paddleocr-vl-1.6",
  "method": "ocr",
  "file_name": "invoice.pdf",
  "document_npages": 1,
  "document_dpi": 72,
  "pages": [
    {
      "object": "doc.page",
      "page_id": 0,
      "page_width": 612,
      "page_height": 792,
      "content": {
        "object": "doc.page.blocks",
        "items": [{ "block_id": 0, "text": "ACME Corp\nInvoice #4471" }]
      }
    }
  ]
}
```

Page `content` is always `doc.page.blocks`. `items` is `[]` when nothing is found. Markdown-kind methods return one block with `text`. For the full list of fields on each block, see [the document block record](/gateway/response-types#document-block).

<Note>
  This is the only JSON shape the Gateway returns. You cannot extract a custom document schema here. For schema-driven extraction, use [structured responses](/capabilities/structured-responses) and [custom schemas](/capabilities/custom-schemas).
</Note>

### Element attributes

<input class="fold-rows" type="checkbox" id="fold-gateway-guides-document-ocr-1" />

| Element | Attribute | Description |
| - | - | - |
| `<document>` | `file_name` | Original file name of the source document. Omitted for `data:` URI inputs. |
| `<document>` | `file_hash` | SHA-256 of the source bytes, for correlation. |
| `<document>` | `file_bytes` | Size of the source document in bytes. |
| `<document>` | `mimetype` | MIME type of the source (e.g. `application/pdf`). JSON field `document_mimetype`. |
| `<document>` | `npages` | Number of pages read. JSON field `document_npages`. |
| `<document>` | `dpi` | Rasterization DPI applied to every page. JSON field `document_dpi`. |
| `<document>` | `language` | Comma-separated ISO-639 codes in confidence order. Present only when the read reports one. |
| `<page>` | `id` | Zero-based page index within its parent document. JSON field `page_id`. |
| `<page>` | `format` | Payload kind of this page's body: `markdown` or `json`. |
| `<page>` | `width` / `height` | Rasterized page dimensions in pixels at the document's DPI. JSON fields `page_width` / `page_height`. |
| `<page>` | `status` | `error` on a page that failed. The element is then self-closing. |

<label class="fold-rows-label" for="fold-gateway-guides-document-ocr-1"><span class="when-closed">See all 11 rows</span><span class="when-open">Show less</span></label>

### Consuming each shape

Non-streaming blocks are concatenated in order in `choices[0].message.content`.

Streaming chunks are OpenAI-style SSE, in document order, byte-identical to the non-streaming reply. Split text mode on the `<document>` and `<page>` tags. Read each page body by its `format`. Use JSON mode to skip tag parsing.

## 5. Track cost and handle errors

Non-streaming cost is `response.usage.cost`, in USD.

For streaming, set `stream_options` to `{"include_usage": true}`. The last SSE event carries `usage`, including `usage.cost`, on the chunk instead of `delta.content`. Read `usage` before treating a chunk as page content.

<CodeGroup>
  ```python Python [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  stream = client.chat.completions.create(
      model="paddlepaddle/paddleocr-vl-1.6",
      stream=True,
      stream_options={"include_usage": True},
      messages=[
          {
              "role": "user",
              "content": [
                  {"type": "document_url", "document_url": {"url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/finance.sec-filings/tsla-8k.pdf"}}
              ],
          }
      ],
      extra_body={"method": "ocr", "document_dpi": 72},
  )

  usage = None
  pages: list[str] = []

  for chunk in stream:
      choice = chunk.choices[0]
      if choice.delta.content:
          pages.append(choice.delta.content)
      if chunk.usage:
          usage = chunk.usage

  print(f"Cost: {usage.cost if usage else 'n/a'}")
  ```

  ```typescript Node.js [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  const stream = await client.chat.completions.create({
    model: "paddlepaddle/paddleocr-vl-1.6",
    stream: true,
    stream_options: { include_usage: true },
    messages: [
      {
        role: "user",
        content: [
          {
            type: "document_url",
            document_url: {
              url: "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/finance.sec-filings/tsla-8k.pdf",
            },
          },
        ],
      },
    ],
    method: "ocr",
    document_dpi: 72,
  });

  let usage;
  const pages: string[] = [];

  for await (const chunk of stream) {
    const delta = chunk.choices[0]?.delta?.content;
    if (delta) pages.push(delta);
    if (chunk.usage) usage = chunk.usage;
  }

  console.log(`Cost: ${usage?.cost ?? "n/a"}`);
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  vlmrun gw chat https://storage.googleapis.com/vlm-data-public-prod/hub/examples/finance.sec-filings/tsla-8k.pdf \
    -m paddlepaddle/paddleocr-vl-1.6 \
    --method ocr \
    -e document_dpi=72 \
    --json
  ```

  ```bash cURL [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl https://gateway.vlm.run/v1/openai/chat/completions \
    -X POST \
    -H "Authorization: Bearer $VLMRUN_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "model": "paddlepaddle/paddleocr-vl-1.6",
      "stream": true,
      "stream_options": { "include_usage": true },
      "method": "ocr",
      "document_dpi": 72,
      "messages": [
        {
          "role": "user",
          "content": [
            {
              "type": "document_url",
              "document_url": {
                "url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/finance.sec-filings/tsla-8k.pdf"
              }
            }
          ]
        }
      ]
    }'
  ```
</CodeGroup>

Both modes:

* Each page gets three attempts. Then it is marked `status="error"`. The retry unit is the page. A page that succeeded is not re-run. A page that exhausts its attempts is not billed. `usage` counts the pages that produced output.
* When every page fails, the request returns `502` with `code: "document_inference_failed"` and bills nothing. The message says whether a retry can help. See [Document inference failed (502)](/gateway/error-codes#document-inference-failed-502).
* Retry `429` and `500` with backoff, but do not retry `400` capability violations. For the full list, see [Error Codes](/gateway/error-codes).
* Keep the `x-request-id` response header, so support can trace the request if you need help.

## Related

<CardGroup cols={2}>
  <Card title="Supported Inputs" icon="images" href="/gateway/multimodal-inputs">
    Content part types, document limits, and URL vs base64 tradeoffs.
  </Card>

  <Card title="Methods" icon="list-check" href="/gateway/methods">
    Per-model `method` and `method_params` reference.
  </Card>

  <Card title="Error Codes" icon="circle-exclamation" href="/gateway/error-codes">
    Status codes, error bodies, and retry guidance.
  </Card>

  <Card title="Models" icon="table" href="https://vlm.run/gateway/models">
    Document and image OCR model catalog.
  </Card>
</CardGroup>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.