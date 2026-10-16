> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Error Codes

> HTTP errors from the Gateway API.

Most failures return an OpenAI-compatible error body. FastAPI wraps that body in `detail`:

```json theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "detail": {
    "error": {
      "message": "Human-readable description",
      "type": "invalid_request_error",
      "code": "capability_violation",
      "param": "messages"
    }
  }
}
```

Rate-limit errors use a top-level `error` object. See [Rate Limits](/gateway/rate-limits).

## HTTP status codes

<input class="fold-rows" type="checkbox" id="fold-gateway-error-codes-1" />

| Status | When | `error.type` | `error.code` |
| - | - | - | - |
| `400` | Capability mismatch (wrong media type for model) | `invalid_request_error` | `capability_violation` |
| `400` | Invalid or unreadable PDF | `invalid_request_error` | `invalid_document` |
| `400` | Undecodable image or video | `invalid_request_error` | `invalid_media` |
| `400` | Malformed `layout_*` parameter | `invalid_request_error` | `invalid_request` |
| `401` | No `Authorization` header, on a deployment that requires one | Plain `"Missing API Key"` detail | n/a |
| `401` | Invalid API key | Plain `"Invalid API Key"` detail | n/a |
| `402` | The organization's credits are exhausted | Plain detail | n/a |
| `403` | The model needs a paid account | `model_not_entitled` | n/a |
| `404` | Unknown model, or unknown completion id | `model_not_found` | n/a |
| `422` | Request validation failure | FastAPI validation error | n/a |
| `429` | Rate limit exceeded, or the request queue is full | `rate_limit_exceeded` | n/a |
| `500` | Uncaught server error | `internal_server_error` | `internal_error` |
| `502` | Every page of a document failed | `api_error` | `document_inference_failed` |
| `503` | The model deployment is not serving | `service_unavailable` | `model_unavailable` |
| `503` | The Gateway could not look the API key up | Plain `"Service Unavailable"` detail | n/a |
| `504` | No first token within the model's deadline | `gateway_timeout` | `ttft_timeout` |
| `504` | The completion ran past the model's total deadline | `gateway_timeout` | `inference_timeout` |

<label class="fold-rows-label" for="fold-gateway-error-codes-1"><span class="when-closed">See all 17 rows</span><span class="when-open">Show less</span></label>

## Common errors

<h3 id="capability-violation-400">
  Capability violation (`400`)
</h3>

The request does not match the model's capabilities. Sending `document_url` to an image-only model, or several images to a single-image OCR model, both return this.

```json theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "detail": {
    "error": {
      "message": "Model 'paddleocr/pp-ocrv6' does not accept document_url together with image_url parts.",
      "type": "invalid_request_error",
      "code": "capability_violation",
      "param": "messages.content.document_url"
    }
  }
}
```

The same code rejects a sampling parameter the model does not list in `supported_parameters`.

* **Example:** send `temperature` when that list omits it, and `param` is `temperature`.
* **Scope:** only parameters you sent are checked. A Gateway default is not.
* **Before you call:** read capabilities and `supported_parameters` on [`GET /v1/openai/models`](/gateway/api-reference/get-models) or the [Models](/gateway/models) page.

<h3 id="invalid-document-400">
  Invalid document (`400`)
</h3>

`document_url` is not a valid PDF, is over the size limit, or cannot be decoded.

<h3 id="invalid-video-400">
  Invalid media (`400`)
</h3>

An `image_url` or `video_url` cannot be decoded.

* **Typical causes:** an unsupported container, a corrupt stream, a URL that is not media, or bad base64.
* **Status:** `400`, not `500`.
* **Body:** `error.type` is `invalid_request_error`, `error.code` is `invalid_media`, and `error.param` names the content part.

<h3 id="credits-exhausted-402">
  Credits exhausted (`402`)
</h3>

The caller's organization has no credit left.

```json theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "detail": "Access denied. Your credits are exhausted. Please move to Pay-As-You-Go to continue using the service."
}
```

### Model not found (`404`)

`model` matches no registered model or alias. List them with [`GET /v1/openai/models`](/gateway/api-reference/get-models).

### Rate limit exceeded (`429`)

A per-tier quota is exhausted. Public OpenAI routes share one budget per caller. Sizes and tiers are on [Rate Limits](/gateway/rate-limits).

```json theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "error": {
    "type": "rate_limit_exceeded",
    "message": "Rate limit exceeded. Get a free API key at https://app.vlm.run/dashboard/settings/api-keys for higher limits.",
    "tier": "anonymous"
  }
}
```

* **Anonymous callers:** get that message and an `X-VLMRun-Upgrade` header.
* **Authenticated callers:** get `Rate limit exceeded: <window>`.
* **Every `429`:** includes `Retry-After`, set to the longest exhausted window. One wait of that length is enough.

A full queue is also a `429`, with `Retry-After: 60`. Each ingress replica holds up to 256 waiting requests. That cap is capacity, not the quota, and the same call can succeed on retry.

<h3 id="model-unavailable-503">
  Model unavailable (`503`)
</h3>

The deployment is not serving, including during a cold start. `Retry-After` defaults to 30 seconds. A [`504`](#inference-timeout-504) means the model accepted the request and then missed a deadline.

```json theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "detail": {
    "error": {
      "message": "Model 'zai-org/glm-ocr' is temporarily unavailable. Please retry shortly.",
      "type": "service_unavailable",
      "code": "model_unavailable"
    }
  }
}
```

<h3 id="key-lookup-unavailable-503">
  Key lookup unavailable (`503`)
</h3>

The Gateway cannot look the API key up, for example during a database outage. Retry. Do not replace the key.

```json theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "detail": "Service Unavailable"
}
```

[`POST /mcp`](/gateway/mcp-authentication) returns the same `503` with no `WWW-Authenticate` challenge:

```json theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "error": "temporarily_unavailable",
  "error_description": "API key lookup failed; retry."
}
```

<h3 id="document-inference-failed-502">
  Document inference failed (`502`)
</h3>

This status means every page of a `document_url` request failed. If some pages succeed, the status stays `200`: failed pages have `status="error"`, and the rest are returned and billed. A `502` is not a list of those markers, and nothing is billed.

```json theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "detail": {
    "error": {
      "message": "Document inference failed on all 3 page(s). No page produced output; please retry.",
      "type": "api_error",
      "code": "document_inference_failed"
    }
  }
}
```

* **Transient failure:** the message ends with `Please retry.` Each page was already tried three times.
* **Deterministic failure:** for example an oversized raster. It is not retried, and the message asks you to lower `document_dpi` or the page size.
* **Streams:** once a stream has sent its first chunk, the status cannot change to `502`. Those failed pages arrive as error markers.

### Internal server error (`500`)

Uncaught exceptions return a sanitized body, with no stack trace or internal path.

* Every response includes an `x-request-id` header.
* On a sanitized `500`, that same id is `error.request_id`.
* Send either to [support@vlm.run](mailto:support@vlm.run).

```json theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "error": {
    "message": "Internal server error. Please retry; if the problem persists, contact support with the request id.",
    "type": "internal_server_error",
    "code": "internal_error",
    "request_id": "550e8400e29b41d4a716446655440000"
  }
}
```

Send an `x-request-id` request header to set your own correlation id. The Gateway echoes it. If you omit the header, the Gateway mints one.

<h3 id="inference-timeout-504">
  Inference timeout (`504`)
</h3>

Each model has two deadlines. The Gateway aborts the request when either passes. Both are set per model in the catalog. They can change, and they are not an SLA.

| Deadline | Default | `error.code` | Meaning |
| - | - | - | - |
| Time to first token | 30 seconds | `ttft_timeout` | Nothing was generated yet. The upstream is busy or still scaling. |
| Total | 600 seconds | `inference_timeout` | Generation started but did not finish. |

`qwen/qwen3.8-27b` and `baidu/unlimited-ocr` allow 60 seconds to the first token. A 64-image or 32-page prompt can spend more than 30 seconds prefilling before a token exists. A first-token timeout is a `504` on the streaming path too. The Gateway reads the first chunk before it starts the response, so you do not get an empty `200`.

```json theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "detail": {
    "error": {
      "message": "Model 'qwen/qwen3.5-0.8b' returned no output within 30s — the upstream is busy or still scaling. Please retry shortly.",
      "type": "gateway_timeout",
      "code": "ttft_timeout",
      "param": null
    }
  }
}
```

```json theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "detail": {
    "error": {
      "message": "Model 'qwen/qwen3.5-0.8b' did not complete within 600s and was aborted.",
      "type": "gateway_timeout",
      "code": "inference_timeout",
      "param": null
    }
  }
}
```

* **Routed model:** the message starts with the provider in brackets, for example `[fireworks] Model ... returned no output within 30s`.

* **Non-streaming:** if the Gateway aborts the request, there is no partial result.

* **No model named:** a request that names no model, including an embeddings call, uses one 270 second window.

* **Retry:** a `ttft_timeout` often clears once the deployment has scaled, so retry with backoff.

* **Client timeout:** keep it above the model's total deadline. An OpenAI SDK `timeout=` below that fails first, with the SDK's own error.

* **Less idle time:** smaller payloads, and `stream=true`, leave less idle time before the first token.

## Getting help

Send [support@vlm.run](mailto:support@vlm.run) the `x-request-id` (or `error.request_id` on a sanitized `500`), the status and body, and the `model` plus the content part types you sent. Retry behavior is on [Rate Limits](/gateway/rate-limits) and the [Chat Completions API reference](/gateway/api-reference/post-chat-completions).


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.