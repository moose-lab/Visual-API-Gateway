> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Chat Completions

> OpenAI-compatible OCR, VQA, and document inference

Authentication is optional. See [Authentication](/gateway/authentication) for tiers and [Rate Limits](/gateway/rate-limits) for per-tier quotas.

## Request

| Part | Behavior | See |
| - | - | - |
| `model` | A full id, a short form, or a Hugging Face id. | [Addressing Models](/gateway/models#addressing-models) |
| Sampling fields | Only the fields in `supported_parameters`. Any other is a `400 capability_violation`, and `param` names it. | [Supported parameters](/gateway/openai-compatibility#supported-parameters) |
| Content parts | `text`, `image_url`, `document_url`, `video_url`. | [Supported Inputs](/gateway/multimodal-inputs) |
| `response_format` | Omit for text mode. `json_object` for JSON mode. `json_schema` on chat and provider models. | [Response Formats](/gateway/response-formats) |
| Gateway fields | `method`, `method_params`, `precision`, `document_*`, `image_resolution`, and `video_*`. Send them at the top level, or in `extra_body` on the OpenAI Python SDK. | [Extra Kwargs](/gateway/extra-kwargs) |

## Response

An OpenAI chat completion, plus `usage.cost` in USD. The `content` depends on `response_format`. See [Response Formats](/gateway/response-formats) and [Response Types](/gateway/response-types).

## Streaming

Set `stream: true` in text mode. The streamed text is byte-identical to the non-streaming reply, and a document request emits `<document>`, one `<page>` per page, then `</document>`.

* **Streams deltas:** chat VLMs, and single-image OCR methods that return the model's text unchanged.
* **Buffered:** every other reply is built in full, then re-chunked as `chat.completion.chunk` SSE. That includes rewritten text, `paddleocr/pp-ocrv6`, structured envelopes, and JSON modes. There is no time-to-first-token benefit.
* **Usage:** the last chunk carries aggregated `usage`, including `usage.cost`. It arrives whether or not you pass `stream_options.include_usage`.

See [Document OCR](/gateway/guides/document-ocr#3-streaming-vs-non-streaming) for page-by-page streaming.

<CodeGroup>
  ```python Python [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from openai import OpenAI

  client = OpenAI(
      base_url="https://gateway.vlm.run/v1/openai",
      api_key="<VLMRUN_API_KEY>",
  )

  stream = client.chat.completions.create(
      model="qwen/qwen3.5-0.8b",
      stream=True,
      stream_options={"include_usage": True},
      messages=[
          {
              "role": "user",
              "content": [
                  {"type": "text", "text": "What is happening in this image?"},
                  {
                      "type": "image_url",
                      "image_url": {
                          "url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/image.caption/car.jpg"
                      },
                  },
              ],
          }
      ],
  )

  for chunk in stream:
      delta = chunk.choices[0].delta.content
      if delta:
          print(delta, end="")
  ```

  ```typescript Node.js [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import OpenAI from "openai";

  const client = new OpenAI({
    baseURL: "https://gateway.vlm.run/v1/openai",
    apiKey: process.env.VLMRUN_API_KEY,
  });

  const stream = await client.chat.completions.create({
    model: "qwen/qwen3.5-0.8b",
    stream: true,
    stream_options: { include_usage: true },
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "What is happening in this image?" },
          {
            type: "image_url",
            image_url: {
              url: "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/image.caption/car.jpg",
            },
          },
        ],
      },
    ],
  });

  for await (const chunk of stream) {
    const delta = chunk.choices[0]?.delta?.content;
    if (delta) process.stdout.write(delta);
  }
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  vlmrun gw chat https://storage.googleapis.com/vlm-data-public-prod/hub/examples/image.caption/car.jpg \
    -p "What is happening in this image?" \
    -m qwen/qwen3.5-0.8b
  ```

  ```bash cURL [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl https://gateway.vlm.run/v1/openai/chat/completions \
    -X POST \
    -H "Authorization: Bearer $VLMRUN_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "model": "qwen/qwen3.5-0.8b",
      "stream": true,
      "stream_options": { "include_usage": true },
      "messages": [
        {
          "role": "user",
          "content": [
            { "type": "text", "text": "What is happening in this image?" },
            {
              "type": "image_url",
              "image_url": {
                "url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/image.caption/car.jpg"
              }
            }
          ]
        }
      ]
    }'
  ```
</CodeGroup>

<RequestExample>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from openai import OpenAI

  client = OpenAI(
      base_url="https://gateway.vlm.run/v1/openai",
      api_key="<VLMRUN_API_KEY>",
  )

  response = client.chat.completions.create(
      model="qwen/qwen3.5-0.8b",
      max_tokens=60,
      messages=[{"role": "user", "content": [
          {"type": "text", "text": "What is happening in this image?"},
          {"type": "image_url", "image_url": {"url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/image.caption/car.jpg"}},
      ]}],
  )
  print(response.choices[0].message.content)
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import OpenAI from "openai";

  const client = new OpenAI({
    baseURL: "https://gateway.vlm.run/v1/openai",
    apiKey: process.env.VLMRUN_API_KEY,
  });

  const response = await client.chat.completions.create({
    model: "qwen/qwen3.5-0.8b",
    max_tokens: 60,
    messages: [{ role: "user", content: [
      { type: "text", text: "What is happening in this image?" },
      { type: "image_url", image_url: { url: "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/image.caption/car.jpg" } },
    ] }],
  });
  console.log(response.choices[0].message.content);
  ```

  ```bash cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl https://gateway.vlm.run/v1/openai/chat/completions \
    -H "Authorization: Bearer $VLMRUN_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "model": "qwen/qwen3.5-0.8b",
      "max_tokens": 60,
      "messages": [{"role": "user", "content": [
        {"type": "text", "text": "What is happening in this image?"},
        {"type": "image_url", "image_url": {"url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/image.caption/car.jpg"}}
      ]}]
    }'
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  vlmrun gw chat https://storage.googleapis.com/vlm-data-public-prod/hub/examples/image.caption/car.jpg \
    -m qwen/qwen3.5-0.8b -p "What is happening in this image?" \
    -e max_tokens=60
  ```
</RequestExample>

<ResponseExample>
  ```json 200 theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "id": "chatcmpl-efdaf1b758544decb5906225e66",
    "object": "chat.completion",
    "created": 1791250196,
    "model": "qwen/qwen3.5-0.8b",
    "choices": [
      {
        "index": 0,
        "message": {
          "role": "assistant",
          "content": "This image features a vintage blue Volkswagen Beetle parked in front of a rustic house. The car, painted in a light teal color, captures the nostalgic charm of classic car models. Its iconic dome-shaped roof and round taillights add to its historical appeal. Surrounding it is an older charm shaped and"
        },
        "finish_reason": "length"
      }
    ],
    "usage": {
      "prompt_tokens": 129,
      "completion_tokens": 60,
      "total_tokens": 189,
      "cost": 0.001
    }
  }
  ```

  ```json 422 theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "detail": [
      {
        "type": "missing",
        "loc": ["body", "messages"],
        "msg": "Field required",
        "input": {
          "model": "qwen/qwen3.5-0.8b",
          "max_tokens": 60
        }
      }
    ]
  }
  ```
</ResponseExample>

## Errors and limits

Every response includes an `x-request-id` header. A sanitized `500` body repeats it as `error.request_id`. See [Error Codes](/gateway/error-codes) and [Rate Limits](/gateway/rate-limits).

## Related

<CardGroup cols={2}>
  <Card title="List models" icon="table-list" href="/gateway/api-reference/get-models">
    Query the live model catalog and capabilities.
  </Card>

  <Card title="Response Formats" icon="brackets-curly" href="/gateway/response-formats">
    Text, JSON, and JSON schema modes.
  </Card>

  <Card title="Supported Inputs" icon="images" href="/gateway/multimodal-inputs">
    Content part types, document limits, and format tradeoffs.
  </Card>

  <Card title="Document OCR" icon="file-lines" href="/gateway/guides/document-ocr">
    Request knobs, page blocks, and streaming for PDFs.
  </Card>
</CardGroup>


## OpenAPI

````yaml https://gateway.vlm.run/openapi.json POST /v1/openai/chat/completions
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
  /v1/openai/chat/completions:
    post:
      summary: Chat Completions
      operationId: chat_completions_v1_openai_chat_completions_post
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/ChatCompletionRequest'
            example: {}
        required: true
      responses:
        '200':
          description: Successful Response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ChatCompletionResponse'
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
    ChatCompletionRequest:
      properties:
        model:
          type: string
          title: Model
        messages:
          items:
            $ref: '#/components/schemas/ChatMessage'
          type: array
          title: Messages
        temperature:
          type: number
          title: Temperature
          default: 0.7
        max_tokens:
          anyOf:
            - type: integer
            - type: 'null'
          title: Max Tokens
        top_p:
          type: number
          title: Top P
          default: 1
        frequency_penalty:
          type: number
          title: Frequency Penalty
          default: 0
        presence_penalty:
          type: number
          title: Presence Penalty
          default: 0
        stop:
          anyOf:
            - type: string
            - items:
                type: string
              type: array
            - type: 'null'
          title: Stop
        stream:
          type: boolean
          title: Stream
          default: false
        'n':
          type: integer
          title: 'N'
          default: 1
        reasoning_effort:
          anyOf:
            - type: string
              enum:
                - none
                - minimal
                - low
                - medium
                - high
            - type: 'null'
          title: Reasoning Effort
          default: medium
        chat_template_kwargs:
          anyOf:
            - additionalProperties: true
              type: object
            - type: 'null'
          title: Chat Template Kwargs
        llm:
          anyOf:
            - type: string
            - type: 'null'
          title: Llm
        method:
          anyOf:
            - type: string
            - type: 'null'
          title: Method
        method_params:
          anyOf:
            - additionalProperties: true
              type: object
            - type: 'null'
          title: Method Params
        video_max_frames:
          anyOf:
            - type: integer
            - type: 'null'
          title: Video Max Frames
        video_fps:
          anyOf:
            - type: number
            - type: 'null'
          title: Video Fps
        video_encoder:
          anyOf:
            - type: string
              const: native
            - type: 'null'
          title: Video Encoder
        video_encoder_params:
          anyOf:
            - additionalProperties: true
              type: object
            - type: 'null'
          title: Video Encoder Params
        image_resolution:
          anyOf:
            - type: string
              enum:
                - 224x224
                - 336x336
                - 384x384
                - 448x448
                - 512x512
                - 768x768
            - type: 'null'
          title: Image Resolution
        video_resolution:
          anyOf:
            - type: string
              enum:
                - 256x192
                - 320x240
                - 448x336
                - 512x384
                - 640x480
            - type: 'null'
          title: Video Resolution
        document_dpi:
          type: integer
          minimum: 1
          title: Document Dpi
          default: 96
        document_max_pages:
          anyOf:
            - type: integer
            - type: 'null'
          title: Document Max Pages
        document_pages:
          anyOf:
            - items:
                anyOf:
                  - type: integer
                  - prefixItems:
                      - type: integer
                      - type: integer
                    type: array
                    maxItems: 2
                    minItems: 2
              type: array
            - type: 'null'
          title: Document Pages
        document_tool:
          anyOf:
            - type: string
            - type: 'null'
          title: Document Tool
        response_format:
          anyOf:
            - $ref: '#/components/schemas/ResponseFormat'
            - type: 'null'
        precision:
          type: integer
          maximum: 8
          minimum: 1
          title: Precision
          default: 4
      type: object
      required:
        - model
        - messages
      title: ChatCompletionRequest
      description: OpenAI-compatible chat completion request.
    ChatCompletionResponse:
      properties:
        id:
          type: string
          title: Id
        object:
          type: string
          const: chat.completion
          title: Object
          default: chat.completion
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
        provider:
          anyOf:
            - type: string
            - type: 'null'
          title: Provider
        choices:
          items:
            $ref: '#/components/schemas/Choice'
          type: array
          title: Choices
        usage:
          $ref: '#/components/schemas/vlmrt__chat__types__Usage'
          default:
            prompt_tokens: 0
            completion_tokens: 0
            total_tokens: 0
      type: object
      required:
        - model
        - choices
      title: ChatCompletionResponse
      description: |-
        OpenAI-compatible chat completion response.

        Beyond the OpenAI shape we surface three extra fields so clients can
        audit which model actually produced the output:

        - ``served_model_id`` — the canonical id of the deployment that
          ran the request (e.g. ``"rednote-hilab/dots.mocr"``), even when the
          caller used a short alias.  Mirrors the ``"id"`` echoed in
          ``GET /v1/openai/models``.
        - ``backend`` — static label naming the inference runtime that
          served the request (``"vllm"`` / ``"transformers"`` /
          ``"llama.cpp"`` / ``"paddleocr"`` / ...).  Lets clients see the
          runtime without opening a separate /models RPC.
        - ``provider`` — who ran the hardware.  Absent for models served on
          VLM Run's own GPUs; otherwise the upstream that served the request
          (``"google-vertex"``, ``"huggingface"``, ...).  Reported per
          response rather than read from the catalog because a request can be
          routed to a different upstream than the last one — the same model id
          may be served by more than one, and they do not always agree on
          capabilities or price.

        The OpenAI-standard ``model`` field still echoes the *canonical*
        id (matching OpenAI's own behaviour where a generic alias like
        ``gpt-4`` resolves to the dated snapshot ``gpt-4-0613`` in the
        response).
    HTTPValidationError:
      properties:
        detail:
          items:
            $ref: '#/components/schemas/ValidationError'
          type: array
          title: Detail
      type: object
      title: HTTPValidationError
    ChatMessage:
      properties:
        role:
          type: string
          enum:
            - system
            - user
            - assistant
            - tool
          title: Role
        content:
          anyOf:
            - type: string
            - items:
                $ref: '#/components/schemas/ContentPart'
              type: array
            - type: 'null'
          title: Content
        tool_calls:
          anyOf:
            - items:
                additionalProperties: true
                type: object
              type: array
            - type: 'null'
          title: Tool Calls
        tool_call_id:
          anyOf:
            - type: string
            - type: 'null'
          title: Tool Call Id
        name:
          anyOf:
            - type: string
            - type: 'null'
          title: Name
      type: object
      required:
        - role
      title: ChatMessage
      description: A single message in the conversation.
    ResponseFormat:
      properties:
        type:
          type: string
          enum:
            - text
            - json_object
            - json_schema
          title: Type
          default: text
        json_schema:
          anyOf:
            - additionalProperties: true
              type: object
            - type: 'null'
          title: Json Schema
      type: object
      title: ResponseFormat
      description: |-
        Requested serialization of the assistant reply.

        Mirrors the OpenAI ``response_format`` object so existing client code
        keeps working:

        - ``{"type": "text"}`` (the default) returns the reply verbatim.
        - ``{"type": "json_object"}`` returns the reply as a single valid JSON
          object string: structured results (detections, OCR regions, document
          pages) are emitted as parseable JSON under a top-level ``data`` key.
        - ``{"type": "json_schema"}`` **constrains generation** to the supplied
          schema, on the models that declare
          :attr:`ModelCapabilities.supports_json_schema` — the chat VLMs served by
          vLLM and the routed provider models. Anything else (the OCR and
          detection models, whose reply is an envelope this gateway builds rather
          than text the model is free to shape) rejects it with a 400 capability
          violation instead of accepting it and ignoring it.
    Choice:
      properties:
        index:
          type: integer
          title: Index
          default: 0
        message:
          $ref: '#/components/schemas/ChoiceMessage'
        finish_reason:
          type: string
          enum:
            - stop
            - length
          title: Finish Reason
          default: stop
      type: object
      required:
        - message
      title: Choice
    vlmrt__chat__types__Usage:
      properties:
        prompt_tokens:
          type: integer
          title: Prompt Tokens
          default: 0
        completion_tokens:
          type: integer
          title: Completion Tokens
          default: 0
        total_tokens:
          type: integer
          title: Total Tokens
          default: 0
        prompt_tokens_details:
          anyOf:
            - $ref: '#/components/schemas/PromptTokensDetails'
            - type: 'null'
        completion_tokens_details:
          anyOf:
            - $ref: '#/components/schemas/CompletionTokensDetails'
            - type: 'null'
        cost:
          anyOf:
            - type: number
            - type: 'null'
          title: Cost
      type: object
      title: Usage
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
    ContentPart:
      properties:
        type:
          type: string
          enum:
            - text
            - image_url
            - video_url
            - document_url
            - file_url
            - file
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
        document_url:
          anyOf:
            - $ref: '#/components/schemas/vlmrt__chat__types__DocumentUrl'
            - type: 'null'
        file_url:
          anyOf:
            - $ref: '#/components/schemas/FileUrl'
            - type: 'null'
        file:
          anyOf:
            - $ref: '#/components/schemas/vlmrt__chat__types__FileContent'
            - type: 'null'
      type: object
      required:
        - type
      title: ContentPart
      description: A single content part in a multi-modal message.
    ChoiceMessage:
      properties:
        role:
          type: string
          const: assistant
          title: Role
          default: assistant
        content:
          type: string
          title: Content
        reasoning:
          anyOf:
            - type: string
            - type: 'null'
          title: Reasoning
      type: object
      required:
        - content
      title: ChoiceMessage
    PromptTokensDetails:
      properties:
        cached_tokens:
          type: integer
          title: Cached Tokens
          default: 0
      type: object
      title: PromptTokensDetails
      description: OpenAI-compatible breakdown of prompt token categories.
    CompletionTokensDetails:
      properties:
        reasoning_tokens:
          type: integer
          title: Reasoning Tokens
          default: 0
      type: object
      title: CompletionTokensDetails
      description: OpenAI-compatible breakdown of completion token categories.
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
    vlmrt__chat__types__DocumentUrl:
      properties:
        url:
          type: string
          title: Url
      type: object
      required:
        - url
      title: DocumentUrl
      description: PDF document referenced by URL or base64 data URI.
    FileUrl:
      properties:
        url:
          type: string
          title: Url
      type: object
      required:
        - url
      title: FileUrl
      description: Alias for :class:`DocumentUrl` — accepted for PDF document inputs.
    vlmrt__chat__types__FileContent:
      properties:
        filename:
          anyOf:
            - type: string
            - type: 'null'
          title: Filename
        file_data:
          type: string
          title: File Data
      type: object
      required:
        - file_data
      title: FileContent
      description: >-
        OpenAI-compatible file attachment (Pydantic AI ``DocumentUrl`` maps
        here).
  securitySchemes:
    _PermissiveHTTPBearer:
      type: http
      scheme: bearer

````

This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.