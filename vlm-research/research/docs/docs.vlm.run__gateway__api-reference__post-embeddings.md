> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Embeddings

> OpenAI-compatible text and image inputs

Omit the `Authorization` header for anonymous access.

Per-tier quotas are on [Rate Limits](/gateway/rate-limits). This route shares those quotas with chat completions.

Model ids are on [Models](/gateway/models).

## Request parameters

| Field | Type | Default | Description |
| - | - | - | - |
| `model` | `string` | required | Embedding model id, e.g. `qwen/qwen3-vl-embedding-2b`. |
| `input` | `string`, array of strings, or array of content parts | required | Text, or `text` / `image_url` / `video_url` content parts for multimodal embeddings. See below. |
| `encoding_format` | `string` | `float` | `float` or `base64`. |
| `dimensions` | `integer` | model default | Truncate the output vector to fewer dimensions, if the model supports it. |
| `truncate_prompt_tokens` | `integer` | `null` | Truncate long inputs to this many tokens instead of erroring. |
| `user` | `string` | `null` | Opaque end-user identifier, accepted for OpenAI SDK compatibility. |

## Text input

<RequestExample>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from openai import OpenAI

  client = OpenAI(
      base_url="https://gateway.vlm.run/v1/openai",
      api_key="<VLMRUN_API_KEY>",
  )

  response = client.embeddings.create(
      model="qwen/qwen3-vl-embedding-2b",
      input="Extract a vector representation for this text.",
  )

  print(len(response.data[0].embedding))
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import OpenAI from "openai";

  const client = new OpenAI({
    baseURL: "https://gateway.vlm.run/v1/openai",
    apiKey: process.env.VLMRUN_API_KEY,
  });

  const response = await client.embeddings.create({
    model: "qwen/qwen3-vl-embedding-2b",
    input: "Extract a vector representation for this text.",
  });

  console.log(response.data[0].embedding.length);
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  vlmrun gw embed -t "Extract a vector representation for this text." \
    -m qwen/qwen3-vl-embedding-2b
  ```

  ```bash cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl https://gateway.vlm.run/v1/openai/embeddings \
    -X POST \
    -H "Authorization: Bearer $VLMRUN_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "model": "qwen/qwen3-vl-embedding-2b",
      "input": "Extract a vector representation for this text."
    }'
  ```
</RequestExample>

<ResponseExample>
  ```jsonc 200 theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "id": "embd-d4d2e8733ab043c891ad12f1546e2ef",
    "object": "list",
    "created": 1791250885,
    "model": "qwen/qwen3-vl-embedding-2b:text",
    "served_model_id": "qwen/qwen3-vl-embedding-2b",
    "backend": "vllm",
    "data": [
      {
        "object": "embedding",
        "index": 0,
        "embedding": [0.009216280654072762, -0.03020104207098484, 0.023253384977579117, /* ... 2048 values in total */]
      }
    ],
    "usage": {
      "prompt_tokens": 9,
      "total_tokens": 9,
      "cost": 0.0
    }
  }
  ```

  ```json 422 theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "detail": [
      {
        "type": "missing",
        "loc": ["body", "input"],
        "msg": "Field required",
        "input": {
          "model": "qwen/qwen3-vl-embedding-2b"
        }
      }
    ]
  }
  ```
</ResponseExample>

## Multimodal input

Vision-language models such as `qwen/qwen3-vl-embedding-2b` accept `image_url` and `video_url` content parts in `input`.

`video_url` embeds sampled frames.

Image and video vectors share the text vector space.

Check `capabilities.supported_input_types` on [`GET /v1/openai/models`](/gateway/api-reference/get-models) before using a modality.

Not every embedding model accepts images or video.

<CodeGroup>
  ```python Python [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from openai import OpenAI

  client = OpenAI(
      base_url="https://gateway.vlm.run/v1/openai",
      api_key="<VLMRUN_API_KEY>",
  )

  response = client.embeddings.create(
      model="qwen/qwen3-vl-embedding-2b",
      input=[
          {
              "type": "image_url",
              "image_url": {
                  "url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/image.caption/car.jpg"
              },
          }
      ],
  )

  print(len(response.data[0].embedding))
  ```

  ```typescript Node.js [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import OpenAI from "openai";

  const client = new OpenAI({
    baseURL: "https://gateway.vlm.run/v1/openai",
    apiKey: process.env.VLMRUN_API_KEY,
  });

  const response = await client.embeddings.create({
    model: "qwen/qwen3-vl-embedding-2b",
    input: [
      {
        type: "image_url",
        image_url: {
          url: "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/image.caption/car.jpg",
        },
      },
    ],
  });

  console.log(response.data[0].embedding.length);
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  vlmrun gw embed car.jpg -m qwen/qwen3-vl-embedding-2b
  ```

  ```bash cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl https://gateway.vlm.run/v1/openai/embeddings \
    -X POST \
    -H "Authorization: Bearer $VLMRUN_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "model": "qwen/qwen3-vl-embedding-2b",
      "input": [
        {
          "type": "image_url",
          "image_url": {
            "url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/image.caption/car.jpg"
          }
        }
      ]
    }'
  ```
</CodeGroup>

## Related

<CardGroup cols={2}>
  <Card title="Models" icon="table-list" href="https://vlm.run/gateway/models">
    Available embedding models.
  </Card>

  <Card title="Supported Inputs" icon="images" href="/gateway/multimodal-inputs">
    Content part types shared across chat and embeddings.
  </Card>
</CardGroup>


## OpenAPI

````yaml https://gateway.vlm.run/openapi.json POST /v1/openai/embeddings
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
  /v1/openai/embeddings:
    post:
      summary: Embeddings
      description: >-
        OpenAI-compatible ``/v1/embeddings``; routes on ``body.model`` and
        forwards the batch to ``embed``.
      operationId: embeddings_v1_openai_embeddings_post
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/EmbeddingRequest'
            example: {}
        required: true
      responses:
        '200':
          description: Successful Response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/EmbeddingResponse'
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
    EmbeddingRequest:
      properties:
        model:
          type: string
          title: Model
        input:
          anyOf:
            - type: string
            - items:
                type: string
              type: array
            - items:
                type: integer
              type: array
            - items:
                items:
                  type: integer
                type: array
              type: array
            - items:
                $ref: '#/components/schemas/EmbeddingContentPart'
              type: array
            - items:
                items:
                  $ref: '#/components/schemas/EmbeddingContentPart'
                type: array
              type: array
            - items:
                anyOf:
                  - type: string
                  - items:
                      $ref: '#/components/schemas/EmbeddingContentPart'
                    type: array
              type: array
          title: Input
        encoding_format:
          type: string
          enum:
            - float
            - base64
          title: Encoding Format
          default: float
        dimensions:
          anyOf:
            - type: integer
            - type: 'null'
          title: Dimensions
        user:
          anyOf:
            - type: string
            - type: 'null'
          title: User
        truncate_prompt_tokens:
          anyOf:
            - type: integer
            - type: 'null'
          title: Truncate Prompt Tokens
      type: object
      required:
        - model
        - input
      title: EmbeddingRequest
      description: |-
        OpenAI-compatible embeddings request.

        The ``input`` field is intentionally polymorphic to match both
        OpenAI's API (string / list-of-strings / list-of-token-ids) and
        vLLM's multimodal extension (list of content parts). The router
        normalises everything to a list of items before handing it to the
        backend, so individual backends only see one shape.
    EmbeddingResponse:
      properties:
        id:
          type: string
          title: Id
        object:
          type: string
          const: list
          title: Object
          default: list
        created:
          type: integer
          title: Created
        model:
          type: string
          title: Model
        served_model_id:
          anyOf:
            - type: string
            - type: 'null'
          title: Served Model Id
        backend:
          anyOf:
            - type: string
            - type: 'null'
          title: Backend
        data:
          items:
            $ref: '#/components/schemas/EmbeddingData'
          type: array
          title: Data
        usage:
          $ref: '#/components/schemas/EmbeddingUsage'
          default:
            prompt_tokens: 0
            total_tokens: 0
      type: object
      required:
        - model
        - data
      title: EmbeddingResponse
      description: |-
        OpenAI-compatible embeddings response with audit extras
        (``served_model_id`` and ``backend``).
    HTTPValidationError:
      properties:
        detail:
          items:
            $ref: '#/components/schemas/ValidationError'
          type: array
          title: Detail
      type: object
      title: HTTPValidationError
    EmbeddingContentPart:
      properties:
        type:
          type: string
          enum:
            - text
            - image_url
            - video_url
          title: Type
        text:
          anyOf:
            - type: string
            - type: 'null'
          title: Text
        image_url:
          anyOf:
            - $ref: '#/components/schemas/vlmrt__chat__types__ImageUrl'
            - type: 'null'
        video_url:
          anyOf:
            - $ref: '#/components/schemas/VideoUrl'
            - type: 'null'
      type: object
      required:
        - type
      title: EmbeddingContentPart
      description: |-
        A single content part in a multimodal embedding input.

        Scoped to the subset of content parts that makes sense for
        embeddings (no ``role`` / assistant turns). ``type`` is the
        discriminant; exactly one of ``text``, ``image_url``, or
        ``video_url`` is populated.
    EmbeddingData:
      properties:
        object:
          type: string
          const: embedding
          title: Object
          default: embedding
        index:
          type: integer
          title: Index
        embedding:
          anyOf:
            - items:
                type: number
              type: array
            - type: string
          title: Embedding
      type: object
      required:
        - index
        - embedding
      title: EmbeddingData
      description: Single ``data`` entry in an embeddings response.
    EmbeddingUsage:
      properties:
        prompt_tokens:
          type: integer
          title: Prompt Tokens
          default: 0
        total_tokens:
          type: integer
          title: Total Tokens
          default: 0
        cost:
          anyOf:
            - type: number
            - type: 'null'
          title: Cost
      type: object
      title: EmbeddingUsage
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
    vlmrt__chat__types__ImageUrl:
      properties:
        url:
          type: string
          title: Url
        detail:
          type: string
          enum:
            - auto
            - low
            - high
          title: Detail
          default: auto
      type: object
      required:
        - url
      title: ImageUrl
    VideoUrl:
      properties:
        url:
          type: string
          title: Url
      type: object
      required:
        - url
      title: VideoUrl
  securitySchemes:
    _PermissiveHTTPBearer:
      type: http
      scheme: bearer

````

This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.