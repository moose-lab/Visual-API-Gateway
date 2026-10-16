> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# chat

> Run OCR and VLM models on the VLM Run Gateway

`vlmrun gw chat` runs an OCR or VLM model on documents, images, or videos.
Inputs are local paths, remote URLs, or both.
Shared options and configuration are on [gateway](/cli/gateway).

```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
# Parse a hosted document (PDF -> text/markdown)
vlmrun gw chat https://example.com/report.pdf -m zai-org/glm-ocr

# Parse a local document
vlmrun gw chat document.pdf -m zai-org/glm-ocr

# Several inputs at once, mixing local paths and URLs
vlmrun gw chat doc1.pdf https://example.com/doc2.pdf -m paddleocr/pp-ocrv6

# Prompt a model that supports text input
vlmrun gw chat image.jpg -p "describe this image" -m qwen/qwen3.5-0.8b

# Text-only, on a chat model that accepts it
vlmrun gw chat -p "What is OCR?" -m qwen/qwen3.5-0.8b
```

The command prints each resolved input.
The reply follows under a `Response` rule.
Metering is on the closing rule.

```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
vlmrun gw chat https://storage.googleapis.com/vlm-data-public-prod/hub/examples/finance.sec-filings/tsla-8k.pdf \
  -m paddleocr/pp-ocrv6 \
  -e document_dpi=72
```

```text theme={"theme":{"light":"github-light","dark":"dark-plus"}}
Processing 1 input(s) (paddleocr/pp-ocrv6)
https://storage.googleapis.com/vlm-data-public-prod/hub/examples/finance.sec-filings/tsla-8k.pdf

Response
<document file_name="tsla-8k.pdf" file_hash="sha256:1b7f04c3…" file_bytes="48213" mimetype="application/pdf" npages="5" dpi="72">
<page id="0" format="json" width="612" height="792">
{"object": "doc.page.blocks", "items": [{"block_id": 0, "bbox_xywh": [0.3987, 0.0896, 0.1993, 0.0164], "poly_xy": [[0.3987, 0.0896], ...], "text": "UNITED STATES", "score": 0.9998}, ...]}
</page>
... one <page> block per page ...
</document>

paddleocr/pp-ocrv6 · P:1280 / C:1171 / T:2451 toks · 1060 toks/s · 5 pages · 4.53 pages/s · 1s · $0.000247
```

`bbox_xywh` and `poly_xy` are normalized to the page, not pixels.
Methods that return prose put the text in the `<page>` body with `format="markdown"`.
`markdown` on `zai-org/glm-ocr` returns prose.

The closing rule lists these fields:

* Model

* Prompt, completion, and total tokens

* Throughput

* Pages

* Pages per second

* Latency

* Cost

* Tokens and throughput drop out without usage.

* Pages drop out for non-paginated replies.

* Cost drops out when none is returned.

Token counts, pages, and cost are reproducible for a given document and DPI.
Throughput and latency vary.
The same signals are on [Pricing and Metering](/gateway/pricing).

## Methods

Each model exposes one or more methods (`ocr`, `detect`, `markdown`) and a default.
`vlmrun gw models <model>` lists them.
`--method` sets the gateway `method` field.
`--method-params` sets the gateway `method_params` field.

```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
vlmrun gw chat img.jpg -m pp-ocrv6 --method detect

vlmrun gw chat img.jpg -m pp-ocrv6 --method ocr \
    --method-params '{"lang": "en", "score_threshold": 0.5}'

# Document markdown with DeepSeek OCR 2
vlmrun gw chat page.pdf -m deepseek-ocr-2 --method markdown
```

## Video input

Video files and video URLs are sent as `video_url` content parts.
`video_fps` and `video_max_frames` control frame sampling.
Pass them with `-e`.

```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
vlmrun gw chat https://storage.googleapis.com/vlm-data-public-prod/hub/examples/video.transcription/bakery.mp4 \
  -p "Summarize what happens in this video." \
  -m qwen/qwen3.5-0.8b \
  -e video_fps=1.0 \
  -e video_max_frames=8
```

The full set of sampling knobs is on [Video Inputs](/gateway/multimodal-inputs#video-inputs).

## Extra completion kwargs

`-e` forwards extra `chat.completions.create()` kwargs as repeatable `key=value` pairs.
Values are JSON-parsed.
Known keys are passed as real kwargs.
Unknown keys go through `extra_body` and become top-level gateway request fields.

```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
vlmrun gw chat document.pdf -m zai-org/glm-ocr -e temperature=0 -e max_tokens=4096
```

## Streaming

`gw chat` streams by default.
Tokens print live.
Multi-page documents stream one chunk per page.
`-ns` / `--no-stream` waits for the full reply.
The full reply renders in a bordered panel.

## JSON output vs JSON mode

| Flag | Layer | Effect |
| - | - | - |
| `-j, --json` | The CLI's own output | Replaces the human-readable output with a JSON envelope on stdout |
| `--json-mode` | The gateway request | Sends `response_format: {"type": "json_object"}`, asking the model to return one JSON object instead of the `<document>` envelope |

`pages` and `pages_per_sec` are included when the reply is paginated OCR.

```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
vlmrun gw chat https://storage.googleapis.com/vlm-data-public-prod/hub/examples/finance.sec-filings/tsla-8k.pdf \
  -m paddleocr/pp-ocrv6 -e document_dpi=72 -j
```

```text theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "model": "paddleocr/pp-ocrv6",
  "content": "<document file_name=\"tsla-8k.pdf\" ... </document>",
  "latency_s": 0.9522805213928223,
  "usage": { "prompt_tokens": 1280, "completion_tokens": 1171, "total_tokens": 2451, "prompt_tokens_details": {...}, "cost": 0.000247 },
  "pages": 5,
  "pages_per_sec": 5.25
}
```

`usage` is the gateway object, passed through unchanged.
It includes standard OpenAI breakdown fields, often `null` for OCR models.
It also includes the VLM Run `cost` field.
Read `usage.cost`.
Do not recompute cost from tokens.

`--json-mode` with `-j` double-encodes the result.
`content` is a JSON string that holds a JSON document.
Parse it twice: `jq -r .content | jq .`.

`--response-format` accepts `text`, `json_object` (alias `json`), or a JSON object such as `'{"type":"json_schema", ...}'`.
`--json-mode` is exactly `--response-format json_object`.
The two flags are mutually exclusive.

`json_schema` requires `capabilities.supports_json_schema`.
Chat and frontier models constrain generation to the schema.
OCR and detection models return a 400 `capability_violation`.
Use `json_object` on OCR and detection models.

## Options

| Option | Short | Description |
| - | - | - |
| `INPUTS...` | | Input file path(s) or http(s) URL(s): image, document, or video. Repeatable |
| `--model` | `-m` | Gateway model id, full `<org>/<name>` or alias (required) |
| `--prompt` | `-p` | Text prompt (only for models that support text input) |
| `--method` | `-M` | Model method, e.g. `ocr`, `detect`, `markdown`. Defaults to the model's `default_method` |
| `--method-params` | | JSON object of method arguments, e.g. `'{"lang": "en"}'` |
| `--json-mode` | | Enable JSON mode (`response_format json_object`). Mutually exclusive with `--response-format` |
| `--response-format` | | Constrain the output: `text`, `json_object`, or a JSON object like `'{"type":"json_schema",...}'` |
| `--extra` | `-e` | Extra `create()` kwarg as `key=value` (repeatable) |
| `--no-stream` | `-ns` | Disable streaming |
| `--json` | `-j` | Output raw JSON |
| `--timeout` | | Request timeout in seconds |


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.