> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# OpenAI SDK Compatibility

> Point an existing OpenAI SDK client at the VLM Run Gateway

The Gateway uses OpenAI request and response shapes at `/v1/openai`.
There is no mapping layer and no request rewriting.
The same `chat.completions.create` call reaches a vision model.

## Pointing the SDK at the Gateway

```bash highlight={1} theme={"theme":{"light":"github-light","dark":"dark-plus"}}
export OPENAI_BASE_URL="https://gateway.vlm.run/v1/openai"
export OPENAI_API_KEY="<VLMRUN_API_KEY>"
```

<CodeGroup>
  ```python Python highlight={4} theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from openai import OpenAI

  client = OpenAI(
      base_url="https://gateway.vlm.run/v1/openai",
      api_key="<VLMRUN_API_KEY>",
  )
  ```

  ```typescript Node.js highlight={4} theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import OpenAI from "openai";

  const client = new OpenAI({
    baseURL: "https://gateway.vlm.run/v1/openai",
    apiKey: process.env.VLMRUN_API_KEY,
  });
  ```
</CodeGroup>

Authentication is optional at the moment.
Omit the `Authorization` header for anonymous access.
Tiers and quotas are in [Authentication](/gateway/authentication).

## Check the connection

<CodeGroup>
  ```bash cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl https://gateway.vlm.run/v1/openai/models \
    -H "Authorization: Bearer $VLMRUN_API_KEY"
  ```

  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  for model in client.models.list().data:
      print(model.id)
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  for (const model of (await client.models.list()).data) {
    console.log(model.id);
  }
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  vlmrun gw models
  ```
</CodeGroup>

## Compatibility matrix

<input class="fold-rows" type="checkbox" id="fold-gateway-openai-compatibility-1" />

| Feature | Status | Notes |
| - | - | - |
| `POST /chat/completions` | Same | Identical request and response shapes, streaming included. |
| `POST /embeddings` | Same | See [Embeddings](/gateway/api-reference/post-embeddings). |
| `POST /audio/transcriptions` | Same | See [Transcriptions](/gateway/api-reference/post-audio-transcriptions). |
| `GET /models` | Extended | Adds `methods`, `default_method`, `capabilities`, and `task` per model. |
| `GET /v1/models/{id}` | Extended | Served outside `/v1/openai`. `client.models.retrieve()` calls `/v1/openai/models/{id}` and gets a `404`, so use [Get Model](/gateway/api-reference/get-model-by-id) directly. |
| `text` and `image_url` content parts | Same | The shapes you already send. |
| `document_url` content part | Extended | Not in OpenAI. A PDF, fanned out per page. |
| `video_url` content part | Extended | Not in OpenAI. Encoded to images before dispatch. |
| `response_format: json_object` | Same | Returns the structured payload instead of the text rendering. |
| Sampling fields | Per model | Honoured where `supported_parameters` lists them. See [supported parameters](#supported-parameters). |
| `usage.cost` | Extended | Per-request cost in USD, alongside the standard token counts. |
| `method`, `method_params` | Extended | Picks the operation a model runs. |
| Tool and function calling | Per model | Accepted where `supported_parameters` lists `tools`. OCR and region models do not call tools. |

<label class="fold-rows-label" for="fold-gateway-openai-compatibility-1"><span class="when-closed">See all 13 rows</span><span class="when-open">Show less</span></label>

Put request extensions at the top level of the body, or in `extra_body` on the OpenAI SDKs.
The full list and defaults are in [Chat Completions](/gateway/extra-kwargs).

## Supported parameters

Each model lists the OpenAI parameters it honours in `supported_parameters` on [`GET /v1/openai/models`](/gateway/api-reference/get-models). A model with a non-empty list returns `400` `capability_violation` for any other parameter. A model with an empty list accepts the standard fields and ignores them.

| Parameter | Chat VLMs | Provider models | OCR models |
| - | :-: | :-: | :-: |
| `temperature` | <span className="support-dot">●</span> | <span className="support-dot">●</span> | |
| `top_p` | <span className="support-dot">●</span> | <span className="support-dot">●</span> | |
| `top_k` | <span className="support-dot">●</span> | | |
| `min_p` | <span className="support-dot">●</span> | | |
| `seed` | <span className="support-dot">●</span> | <span className="support-dot">●</span> | |
| `max_tokens` | <span className="support-dot">●</span> | <span className="support-dot">●</span> | |
| `max_completion_tokens` | <span className="support-dot">●</span> | | |
| `stop` | <span className="support-dot">●</span> | <span className="support-dot">●</span> | |
| `presence_penalty`, `frequency_penalty` | <span className="support-dot">●</span> | | |
| `repetition_penalty` | <span className="support-dot">●</span> | | |
| `logprobs`, `top_logprobs` | <span className="support-dot">●</span> | | |
| `response_format: none` | <span className="support-dot">●</span> | <span className="support-dot">●</span> | <span className="support-dot">●</span> |
| `response_format: json_object` | <span className="support-dot">●</span> | <span className="support-dot">●</span> | <span className="support-dot">●</span> |
| `response_format: json_schema` | <span className="support-dot">●</span> | <span className="support-dot">●</span> except `meta/muse-glimmer-30b` | |
| `stream`, `stream_options` | <span className="support-dot">●</span> | <span className="support-dot">●</span> `stream` | Text mode only |
| `tools`, `tool_choice` | <span className="support-dot">●</span> | <span className="support-dot">●</span> `tools` | |

<span className="support-dot">●</span> The model honours the parameter. Blank means the model does not, and a non-empty list rejects it with `400`.

* **Chat VLMs:** `qwen/qwen3.5-0.8b`, `qwen/qwen3.8-27b`, and `google/gemma-4-26b-a4b-it`.
* **Provider models:** `google/gemini-*`, `meta/muse-*`, `moonshotai/kimi-k3`, and `minimax/minimax-m3`.
* **OCR models:** every model with an empty `supported_parameters` list. They accept sampling fields and ignore them.

Embeddings take `dimensions` and `encoding_format`. Transcription takes `language`, `response_format`, and `timestamp_granularities`.

## Defaults and limits

| Topic | Behavior | See |
| - | - | - |
| Sampling fields | Honoured only where [listed above](#supported-parameters). OCR and region models ignore them. | [Get Model](/gateway/api-reference/get-model-by-id) |
| `method` | Selects the operation. Omit it to apply `default_method`. A method the model does not publish returns `400`. | [Methods](/gateway/methods) |
| Documents | One request. Pass a `document_url` part, and the Gateway rasterizes it and fans out per page. | [Document OCR](/gateway/guides/document-ocr) |
| JSON mode | Returns one complete object and is never streamed. Text mode streams. | [Response Formats](/gateway/response-formats) |
| `x-request-id` | On every response. Log it so support can trace a call. | [Error Codes](/gateway/error-codes) |

## Related

<CardGroup cols={2}>
  <Card title="Quickstart" icon="rocket" href="/gateway/quickstart">
    First VQA and document OCR requests.
  </Card>

  <Card title="Chat Completions" icon="comments" href="/gateway/api-reference/post-chat-completions">
    Request reference, including every Gateway extension.
  </Card>

  <Card title="Methods" icon="list-check" href="/gateway/methods">
    Select the operation with `method` and `method_params`.
  </Card>

  <Card title="Response Formats" icon="brackets-curly" href="/gateway/response-formats">
    JSON mode for code, text mode for agents.
  </Card>

  <Card title="TypeSafe SDK Compatibility" icon="scale-balanced" href="/gateway/jev-compatibility">
    Get typed, calibrated decisions from the same Gateway.
  </Card>
</CardGroup>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.