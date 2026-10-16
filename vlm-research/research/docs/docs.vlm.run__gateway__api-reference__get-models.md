> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# List Models

> Available Gateway models and their capabilities

Omit the `Authorization` header for anonymous access. This route uses the same [rate-limit](/gateway/rate-limits) budget as chat completions. See [Authentication](/gateway/authentication) for tier details.

## Model fields

Entries extend the OpenAI list-models shape.

<input class="fold-rows" type="checkbox" id="fold-gateway-api-reference-get-models-1" />

| Field | Description |
| - | - |
| `id` | Public model id. Send it as `model` in `POST /v1/openai/chat/completions`. |
| `object`, `created`, `owned_by` | The OpenAI model-list fields. `owned_by` is `vlm-run` for a self-hosted model. |
| `aliases` | Other accepted ids, including the short and Hugging Face forms. |
| `methods` | The operations the `method` field accepts. A method not listed is a `400`. Empty for chat models. |
| `default_method` | The method applied when `method` is omitted. Empty for chat models. |
| `extra_body_help` | A usage hint: an example `method` payload, then the accepted inputs. |
| `capabilities` | Input limits, accepted content part types, and `json_object` and `json_schema` support. |
| `supported_parameters` | The sampling and request parameters the model honours, such as `temperature`, `top_p`, and `max_tokens`. A model with a non-empty list returns `400` `capability_violation` for any other parameter, and `param` names it. An empty list accepts the standard fields and ignores them. |
| `task` | `chat`, `embed`, or `transcribe`. Non-chat models use other endpoints. |
| `task_capabilities` | What the model can do, such as `chat`, `caption`, `detection`, or `markdown`. |
| `provider` | The upstream vendor for a provider model, for example `openrouter`. Empty for a self-hosted model. |
| `pricing` | The rate card, in USD per 1M tokens. Same object as [Model Detail](/gateway/api-reference/get-model-by-id). See [Pricing](/gateway/pricing). |
| `context_length`, `max_output_tokens` | The context window and the output cap. Each is `null` when the catalog does not declare it. |
| `output_tps` | Typical output tokens per second. |
| `name`, `description`, `hf_model_id` | The display name, a one-line description, and the Hugging Face repo for an open-weight model. |
| `is_ready` | Whether the deployment is serving. A call to a model that is not ready is a `503`. |

<label class="fold-rows-label" for="fold-gateway-api-reference-get-models-1"><span class="when-closed">See all 16 rows</span><span class="when-open">Show less</span></label>

<RequestExample>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from openai import OpenAI

  client = OpenAI(
      base_url="https://gateway.vlm.run/v1/openai",
      api_key="<VLMRUN_API_KEY>",
  )

  models = client.models.list()
  for model in models.data:
      caps = model.capabilities
      print(f"{model.id}: {caps.supported_input_types}")
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import OpenAI from "openai";

  const client = new OpenAI({
    baseURL: "https://gateway.vlm.run/v1/openai",
    apiKey: process.env.VLMRUN_API_KEY,
  });

  const models = await client.models.list();
  for (const model of models.data) {
    console.log(model.id);
  }
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  vlmrun gw models
  ```

  ```bash cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl https://gateway.vlm.run/v1/openai/models \
    -H "Authorization: Bearer $VLMRUN_API_KEY"
  ```
</RequestExample>

<ResponseExample>
  ```json Response theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "object": "list",
    "data": [
      {
        "id": "qwen/qwen3.5-0.8b",
        "object": "model",
        "created": 1791157912,
        "owned_by": "vlm-run",
        "aliases": [],
        "methods": [],
        "default_method": "",
        "extra_body_help": "Multimodal chat (text + up to 64 images or 1 base64 video). No document_url: replies pass through verbatim.",
        "capabilities": {
          "max_images": 64,
          "max_videos": 1,
          "supports_text_only": true,
          "supports_document_url": false,
          "supports_json_object": true,
          "supports_json_schema": true,
          "supported_input_types": [
            "text",
            "image_url",
            "video_url"
          ]
        },
        "provider": "",
        "task": "chat",
        "task_capabilities": [
          "chat",
          "caption",
          "detection"
        ],
        "output_tps": 44.0,
        "context_length": 262144,
        "max_output_tokens": null,
        "name": "Qwen3.5 0.8B",
        "description": "Multimodal chat model with up to 64 images or one video per request.",
        "hf_model_id": "AxionML/Qwen3.5-0.8B-NVFP4",
        "pricing": {
          "prompt": 0.08,
          "completion": 0.15,
          "input_cache_read": 0.02,
          "input_cache_write": 0.0,
          "image": 0.0,
          "video": 0.0
        },
        "supported_parameters": [
          "temperature",
          "top_p",
          "top_k",
          "min_p",
          "seed",
          "max_tokens",
          "max_completion_tokens",
          "stop",
          "presence_penalty",
          "frequency_penalty",
          "repetition_penalty",
          "logprobs",
          "top_logprobs",
          "response_format",
          "stream",
          "stream_options"
        ],
        "is_ready": true
      },
      {
        "id": "zai-org/glm-ocr",
        "object": "model",
        "created": 1791157912,
        "owned_by": "vlm-run",
        "aliases": [
          "glm-ocr",
          "zai-org/GLM-OCR"
        ],
        "methods": [
          "markdown"
        ],
        "default_method": "markdown",
        "extra_body_help": "{\"method\":\"markdown\"} | document_url PDF (markdown per page)",
        "capabilities": {
          "max_images": 1,
          "max_videos": 0,
          "supports_text_only": false,
          "supports_document_url": true,
          "supports_json_object": true,
          "supports_json_schema": false,
          "supported_input_types": [
            "text",
            "image_url",
            "document_url",
            "file_url"
          ]
        },
        "provider": "",
        "task": "chat",
        "task_capabilities": [
          "markdown"
        ],
        "output_tps": 601.0,
        "context_length": 8192,
        "max_output_tokens": 8192,
        "name": "GLM-OCR",
        "description": "Compact multilingual document OCR and markdown extraction.",
        "hf_model_id": "zai-org/GLM-OCR",
        "pricing": {
          "prompt": 0.1,
          "completion": 0.2,
          "input_cache_read": 0.02,
          "input_cache_write": 0.0,
          "image": 30.0,
          "video": 0.0
        },
        "supported_parameters": [],
        "is_ready": true
      }
    ]
  }
  ```
</ResponseExample>

<Note>
  The OpenAI Python and Node.js SDKs may not surface Gateway fields such as `capabilities` or `methods` on the typed `Model` object. Parse the raw response, or use cURL, for the full catalog.
</Note>

## Related

<CardGroup cols={2}>
  <Card title="Models" icon="table-list" href="/gateway/models">
    Availability and use-case guidance.
  </Card>

  <Card title="Chat Completions" icon="comments" href="/gateway/api-reference/post-chat-completions">
    Inference with ids from this list.
  </Card>
</CardGroup>


## OpenAPI

````yaml https://gateway.vlm.run/openapi.json GET /v1/openai/models
openapi: 3.1.0
info:
  title: VLM Run Gateway API
  summary: Unified gateway for computer-vision workloads.
  description: |
    The **VLM Run Gateway API** is the public entry point to the VLM Run
    inference platform. It fronts vision-language and computer-vision models
    behind a single OpenAI-compatible surface plus first-class real-time
    transports.

    [Documentation](https://docs.vlm.run) |
    [Terms of service](https://vlm.run/terms-of-service) |
    [Privacy policy](https://vlm.run/privacy) |
    [VLM Run](https://vlm.run) |
    [Send email to support@vlm.run](mailto:support@vlm.run)
  termsOfService: https://vlm.run/terms-of-service
  contact:
    name: VLM Run
    url: https://vlm.run/gateway
    email: support@vlm.run
  version: 0.46.1
servers:
  - url: https://gateway.vlm.run
    description: Production
  - url: http://localhost:8001
    description: Local development
security: []
paths:
  /v1/openai/models:
    get:
      summary: List Models
      operationId: list_models_v1_openai_models_get
      responses:
        '200':
          description: Successful Response
          content:
            application/json:
              schema: {}
      security:
        - _PermissiveHTTPBearer: []
components:
  securitySchemes:
    _PermissiveHTTPBearer:
      type: http
      scheme: bearer

````

This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.