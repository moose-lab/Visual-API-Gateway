> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# MCP Reference

> list_models, get_model_info, get_completion, the return shape, and errors

<h2 id="list_models">
  `list_models`
</h2>

Lists models on an MCP tool menu, and which read tool each one fits. Call it before passing a non-default `model`. A REST model on no tool menu is omitted, for example `qwen/qwen3-vl-embedding-2b` or a routed provider model. Query [`GET /v1/openai/models`](/gateway/api-reference/get-models) for the full catalog.

| Argument | Type | Default | Description |
| - | - | - | - |
| `modality` | `document` \| `image` \| `audio` \| `video` | all | Restrict the listing to one tool's models. |

Each entry is `{id, modality, tool, tools, aliases, methods, default_method, method_details}`.

* **`id`:** Pass it as `model` on the matching `tool`.
* **`tools`:** Every read-tool menu that id sits on. A Qwen vision model is on `read_image` and `read_video`.
* **`modality` and `tool`:** Name the primary menu. A `modality` filter matches any menu the id sits on.
* **Menu membership:** Not inferred from capabilities. Every OCR model accepts a bare image, but only `read_document` takes an OCR model as `model`, so an OCR model lists `read_document` alone.

`method_details` is one record per method, including its [capabilities](/gateway/mcp-tools#pick-a-method).

* **`default: true`:** Marks the model's default.
* **`requires_json_mode: true`:** The full payload arrives only when `json_mode` is `true`. A `markdown` method can carry that flag and still return Markdown as a plain string when `json_mode` is `false`.
* **Chat VLM:** Returns the model's own reply and has no capabilities.

```json [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "id": "paddleocr/pp-ocrv6",
  "modality": "document",
  "tool": "read_document",
  "tools": ["read_document"],
  "aliases": ["pp-ocrv6"],
  "methods": ["ocr", "detect", "text"],
  "default_method": "ocr",
  "method_details": [
    {
      "name": "ocr",
      "capabilities": ["text_extraction", "text_citations", "text_highlighting"],
      "default": true,
      "requires_json_mode": true
    },
    {
      "name": "detect",
      "capabilities": ["text_highlighting"],
      "requires_json_mode": true
    },
    { "name": "text", "capabilities": ["text_extraction"] }
  ]
}
```

<h2 id="get_model_info">
  `get_model_info`
</h2>

Returns one served model: its methods, and the JSON schema of each method's `json_mode` reply. Call it before you write code against those fields.

| Argument | Type | Default | Description |
| - | - | - | - |
| `model` | `string` | required | A served model id or one of its aliases. |

The reply is `{id, aliases, tools, capabilities, default_method, methods}`.

* **`methods`:** One record per method: `{name, capabilities, default, requires_json_mode, responses}`.
* **`responses`:** Keyed by input medium (`image`, `video`, or `document`). Each entry is `{payload, schema}`.
* **`payload`:** The reply tag, such as `doc.ocr.lines`, or `text` for a plain string.
* **`schema`:** The JSON schema of the `json_mode` reply. Every field has a one-line description.
* **Verbatim replies:** A model whose replies pass through verbatim, such as a chat VLM, has `responses: {}`.
* **Unserved model:** A tool error that points at [`list_models`](#list_models).

<h2 id="get_completion">
  `get_completion`
</h2>

Look up cost and serving details for a prior `read_*` call. Pass the `completion_id` from that call's [`ReadResult`](#return-shape).

| Argument | Type | Default | Description |
| - | - | - | - |
| `completion_id` | `string` | required | The id a prior `read_*` tool returned. |

The reply carries `id`, `model`, `served_model_id`, `backend`, `cost`, `usage` (tokens, or transcription seconds), `status`, and `latency_ms`.

* **`status` and `latency_ms`:** Come from the billing record. A lookup answered from the short-lived cache leaves them null.
* **Rate limit:** The lookup spends one model call from your [rate-limit](/gateway/rate-limits) budget, same as `GET /v1/completions/{completion_id}`.

| Caller | Record kept for | Readable by |
| - | - | - |
| API key, or OAuth matched to a VLM Run user | Durably, in billing | The same user or organization |
| Anonymous | Up to about 15 minutes | The same bearer token |

An unknown id, an expired id, or another caller's id returns `404` (`completion_not_found`). A retry mints a new id. It does not resolve the missed one.

<h2 id="return-shape">
  Return shape (`ReadResult`)
</h2>

Each `read_*` tool returns text as the tool content and a typed payload.

| Field | Description |
| - | - |
| `text` | The extracted text (Markdown, transcript, or description). Empty when `json_mode` is `true`. |
| `data` | The structured records, when `json_mode` is `true`. Null otherwise. |
| `model` | The model the gateway actually ran. |
| `cost` | The metered cost of the call in US dollars, when the gateway reports it. |
| `completion_id` | The id of this call (`chatcmpl-…` or `transcription-…`). Pass it to [`get_completion`](#get_completion). |
| `quota` | The free-tier allowance left, for an anonymous caller. Null when a key was used, and appended to the visible text when present. |

Output past roughly 60,000 characters is cut, and a `[truncated: …]` note is appended. Narrow `pages`, or read the document in sections.

## Errors

A method the model does not advertise is refused before the call. The message lists the methods it does advertise.

```text theme={"theme":{"light":"github-light","dark":"dark-plus"}}
model 'paddleocr/pp-ocrv6' does not support method 'markdown' — it advertises:
detect, ocr, text. Retry with one of those, or omit `method` for the default.
`list_models` reports the methods of every served model.
```

<input class="fold-rows" type="checkbox" id="fold-gateway-mcp-reference-2" />

| Symptom | Cause | Fix |
| - | - | - |
| `401 Unauthorized` on connect | No token, or a key the Gateway cannot resolve. | Send `Bearer $VLMRUN_API_KEY`, or sign in through [OAuth](/gateway/mcp-authentication#oauth). |
| `503 Service Unavailable` on connect | The Gateway could not look the key up. | Retry. The key is not rejected. |
| `Missing API Key` in Claude Desktop | The Connectors UI or a `"type": "http"` block sends no `Authorization`. | Delete the connector and use the [Claude Desktop](/gateway/mcp-clients#claude-desktop) `mcp-remote` config. |
| `Some MCP servers could not be loaded` | Claude Desktop rejected a `"type": "http"` entry in its config file. | Replace it with the [Claude Desktop](/gateway/mcp-clients#claude-desktop) `mcp-remote` config. |
| `405 Method Not Allowed` on `GET /mcp` | The server is stateless and serves POST only. | Send every request as a POST. |
| `Failed to fetch document URL: HTTP Error 404` | The gateway cannot reach `url`. | Host the file publicly, or pass it as a `data:` URI or base64. |
| `does not support method '…'` | The method belongs to another model. | Use a method the message names, or omit `method`. |
| `this model may not be served for this tool` | The gateway does not serve `model`, or not for this modality. | Call `list_models` and retry with an id from the right tool's menu. |
| `the document has more pages than allowed` | The document is over the 128-page cap for one call. | Split it with `pages` into ranges of 128 or fewer, and combine the results. |
| Boxes or labels are missing from the answer | The payload only arrives under `json_mode`. | Set `json_mode: true`, then read `data`. |
| `[truncated: …]` at the end of the text | The output passed the inline cap. | Narrow `pages`, or read the document in sections. |
| Tool call times out or returns `500` | Intermittent load on the gateway backend. | Retry the call. If it persists, narrow the request (fewer `pages`, lower `max_frames`, or a shorter clip). |

<label class="fold-rows-label" for="fold-gateway-mcp-reference-2"><span class="when-closed">See all 12 rows</span><span class="when-open">Show less</span></label>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.