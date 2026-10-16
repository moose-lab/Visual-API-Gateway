> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Get Model

> One gateway model and its capabilities

Omit the `Authorization` header for anonymous access. Per-tier quotas are on [Rate Limits](/gateway/rate-limits). This route shares those quotas with the inference routes. For the full catalog, call [List Models](/gateway/api-reference/get-models) or see [Models](/gateway/models).

`model_id` is a path parameter. The value keeps its `/`. `GET /v1/models/paddleocr/pp-ocrv6` resolves as written. Percent-encoding the slash as `%2F` also works.

<RequestExample>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import httpx
  from urllib.parse import quote

  model_id = quote("paddleocr/pp-ocrv6", safe="")
  response = httpx.get(
      f"https://gateway.vlm.run/v1/models/{model_id}",
      headers={"Authorization": "Bearer <VLMRUN_API_KEY>"},
  )
  print(response.json())
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  const modelId = encodeURIComponent("paddleocr/pp-ocrv6");
  const response = await fetch(`https://gateway.vlm.run/v1/models/${modelId}`, {
    headers: { Authorization: "Bearer <VLMRUN_API_KEY>" },
  });
  console.log(await response.json());
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  vlmrun gw models pp-ocrv6
  ```

  ```bash cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl "https://gateway.vlm.run/v1/models/paddleocr%2Fpp-ocrv6" \
    -H "Authorization: Bearer $VLMRUN_API_KEY"
  ```
</RequestExample>

<ResponseExample>
  ```json 200 theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "id": "qwen/qwen3.5-0.8b",
    "hf_model_id": "AxionML/Qwen3.5-0.8B-NVFP4",
    "name": "Qwen3.5 0.8B",
    "description": "Multimodal chat model with up to 64 images or one video per request.",
    "task": "chat",
    "context_length": 262144,
    "architecture": {
      "input_modalities": ["text", "image", "video"],
      "output_modalities": ["text"],
      "modality": "text+image+video->text"
    },
    "capabilities": {
      "max_images": 64,
      "max_videos": 1,
      "supports_text_only": true,
      "supports_document_url": false,
      "supports_json_object": true,
      "supports_json_schema": true,
      "supported_input_types": ["text", "image_url", "video_url"]
    },
    "aliases": ["Qwen/Qwen3.5-0.8B"],
    "methods": ["chat"],
    "supported_parameters": ["temperature", "top_p", "top_k", "min_p", "seed", "max_tokens", "max_completion_tokens", "stop", "presence_penalty", "frequency_penalty", "repetition_penalty", "logprobs", "top_logprobs", "response_format", "stream", "stream_options"],
    "pricing": {
      "prompt": 0.08,
      "completion": 0.15,
      "input_cache_read": 0.02,
      "input_cache_write": 0.0,
      "image": 0.0,
      "video": 0.0
    }
  }
  ```

  ```json 404 theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "detail": {
      "error": {
        "message": "Model 'does-not/exist' not found.",
        "type": "model_not_found",
        "code": null,
        "param": null
      }
    }
  }
  ```
</ResponseExample>

## Response fields

The response is one flat model object.

<input class="fold-rows" type="checkbox" id="fold-gateway-api-reference-get-model-by-id-1" />

| Field | Description |
| - | - |
| `id` | Preferred public model id. |
| `name`, `description` | Human-readable catalog metadata. |
| `hf_model_id` | Upstream Hugging Face repo id, when the model is open-weight. |
| `task` | `chat`, `embed`, or `transcribe`. |
| `context_length` | Maximum context length, when defined. |
| `architecture` | `input_modalities`, `output_modalities`, and a summary `modality` string. |
| `capabilities` | Same shape as on [List Models](/gateway/api-reference/get-models#model-fields): max images/videos, accepted input types. |
| `aliases`, `methods` | Accepted request ids and supported `method` values. |
| `supported_parameters` | Request parameters this model accepts, each with its type and range. Sending one that is absent here is a `400` `capability_violation` whose `param` names it. |
| `pricing` | USD per 1M units: `prompt`, `completion`, `input_cache_read`, and `input_cache_write` per 1M tokens, `image` per 1M image inputs, and `video` per 1M video inputs. See [Pricing](/gateway/pricing). |

<label class="fold-rows-label" for="fold-gateway-api-reference-get-model-by-id-1"><span class="when-closed">See all 10 rows</span><span class="when-open">Show less</span></label>

<Tip>
  [`GET /v1/openai/models`](/gateway/api-reference/get-models) carries the same `pricing` object on every entry. That route lists `supported_parameters` by name. This route adds the type and range of each parameter.
</Tip>

## Related

<CardGroup cols={2}>
  <Card title="List Models" icon="table-list" href="/gateway/api-reference/get-models">
    Full catalog in one call.
  </Card>

  <Card title="Pricing" icon="dollar-sign" href="/gateway/pricing">
    How to read the `pricing` object, and what each mode bills.
  </Card>
</CardGroup>


## OpenAPI

````yaml https://gateway.vlm.run/openapi.json GET /v1/models/{model_id}
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
  /v1/models/{model_id}:
    get:
      summary: Get Model Detail
      operationId: get_model_detail_v1_models__model_id__get
      parameters:
        - name: model_id
          in: path
          required: true
          schema:
            type: string
            title: Model Id
          example: {}
      responses:
        '200':
          description: Successful Response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ModelDetail'
        '422':
          description: Validation Error
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/HTTPValidationError'
      security:
        - _PermissiveHTTPBearer: []
components:
  schemas:
    ModelDetail:
      properties:
        id:
          type: string
          title: Id
        hf_model_id:
          anyOf:
            - type: string
            - type: 'null'
          title: Hf Model Id
        name:
          type: string
          title: Name
        description:
          type: string
          title: Description
        task:
          type: string
          enum:
            - chat
            - embed
            - transcribe
          title: Task
          default: chat
        context_length:
          anyOf:
            - type: integer
            - type: 'null'
          title: Context Length
        architecture:
          $ref: '#/components/schemas/ModelArchitecture'
        capabilities:
          $ref: '#/components/schemas/ModelCapabilities'
        aliases:
          items:
            type: string
          type: array
          title: Aliases
        methods:
          items:
            type: string
          type: array
          title: Methods
        supported_parameters:
          items:
            type: string
          type: array
          title: Supported Parameters
        pricing:
          $ref: '#/components/schemas/ModelPricing'
      type: object
      required:
        - id
        - name
        - description
        - architecture
        - capabilities
        - pricing
      title: ModelDetail
      description: |-
        Flat JSON response for ``GET /v1/models/{model_id}``.

        Internal catalog fields such as ``provider`` are intentionally omitted.
    HTTPValidationError:
      properties:
        detail:
          items:
            $ref: '#/components/schemas/ValidationError'
          type: array
          title: Detail
      type: object
      title: HTTPValidationError
    ModelArchitecture:
      properties:
        input_modalities:
          items:
            type: string
          type: array
          title: Input Modalities
        output_modalities:
          items:
            type: string
          type: array
          title: Output Modalities
        modality:
          type: string
          title: Modality
      type: object
      required:
        - input_modalities
        - output_modalities
        - modality
      title: ModelArchitecture
    ModelCapabilities:
      properties:
        max_images:
          anyOf:
            - type: integer
            - type: 'null'
          title: Max Images
          default: 1
        max_videos:
          anyOf:
            - type: integer
            - type: 'null'
          title: Max Videos
          default: 0
        supports_text_only:
          type: boolean
          title: Supports Text Only
          default: true
        supports_document_url:
          type: boolean
          title: Supports Document Url
          default: false
        supports_json_object:
          type: boolean
          title: Supports Json Object
          default: true
        supports_json_schema:
          type: boolean
          title: Supports Json Schema
          default: false
        supported_input_types:
          items:
            type: string
          type: array
          title: Supported Input Types
      type: object
      title: ModelCapabilities
      description: |-
        Declared input capabilities exposed via ``GET /v1/openai/models``.

        Describes how many images / videos a model accepts, whether it supports
        text-only prompts, and whether it can constrain generation to a JSON
        schema, so clients can validate a request before sending it.  ``None``
        means unlimited (no cap on that input type).
    ModelPricing:
      properties:
        prompt:
          type: number
          title: Prompt
          default: 0
        completion:
          type: number
          title: Completion
          default: 0
        input_cache_read:
          type: number
          title: Input Cache Read
          default: 0
        input_cache_write:
          type: number
          title: Input Cache Write
          default: 0
        image:
          type: number
          title: Image
          default: 0
        video:
          type: number
          title: Video
          default: 0
      type: object
      title: ModelPricing
      description: USD per 1M tokens (``image`` / ``video`` are per-1M input equivalents).
    ValidationError:
      properties:
        loc:
          items:
            anyOf:
              - type: string
              - type: integer
          type: array
          title: Location
        msg:
          type: string
          title: Message
        type:
          type: string
          title: Error Type
        input:
          title: Input
        ctx:
          type: object
          title: Context
      type: object
      required:
        - loc
        - msg
        - type
      title: ValidationError
  securitySchemes:
    _PermissiveHTTPBearer:
      type: http
      scheme: bearer

````

This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.