> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# System One

> Typed, calibrated decisions over text, JSON, and images

Returns a calibrated probability for each question about `state`. For the concepts, see [System One](/gateway/system-one). To migrate a client, see [TypeSafe SDK Compatibility](/gateway/jev-compatibility). Authentication is optional: see [Authentication](/gateway/authentication) and [Rate Limits](/gateway/rate-limits).

## Request body

| Field | Type | Required | Description |
| - | - | - | - |
| `model` | `string` | Yes | A served id or one of its aliases. An id the deployment does not serve is a `404`. See [Models](/gateway/typesafe-models). |
| `state` | `string` \| `object` \| `array` | Yes | What the questions are about. Objects and arrays are sent as JSON. |
| `questions` | `object` | Yes | A map of question id to [question](#question-object), at least one. Ids key the answers and never reach the model. |
| `content` | `array` \| `string` | No | This request's media as [content parts](#content-parts). A bare string is one text part. |
| `reasoning_effort` | `string` | No | Generative engines only: `none` (default), `minimal`, or `low`, for 0, 32, or 64 reasoning tokens. A diffusion engine rejects it with `422`. |
| `steps` | `integer` | No | Diffusion engines only: denoise steps per read, 1 to 8. Default `1`. |
| `samples` | `integer` | No | Noise draws to average, 1 to 32. Every draw is billed. Default: one read. |

An unknown top-level field is a `422`.

### Question object

| Field | Type | Description |
| - | - | - |
| `type` | `"noul"` \| `"choice"` \| `"score"` | The question category. It selects the `criteria` and answer shape. |
| `instructions` | `string` \| `object` \| `array` | Optional. What the question asks. |
| `criteria` | `object` \| `array` | Depends on `type`. |

| `type` | `criteria` | Required |
| - | - | - |
| `noul` | `{"true": description, "false": description}` | No |
| `choice` | A map of label to description or `null`, 2 to 128 entries. | Yes |
| `score` | An ordered array of 2 to 10 level descriptions. | Yes |

### Content parts

`content` is a flat list: media first, then `state`. There are no roles and no history.

| Part | Shape | Limit |
| - | - | - |
| `image_url` | `{"type": "image_url", "image_url": {"url": "…", "detail": "high"}}` | 8 per request, 5 MB each. `url` is a `data:` or `http(s)` URL. |
| `document_url` | `{"type": "document_url", "document_url": {"url": "…", "detail": "high"}}` | 1 document per request. A PDF, as an `http(s)` URL. |
| `text` | `{"type": "text", "text": "…"}` | Read after `state`. |
| `file` | `{"type": "file", "file": {"filename": "invoice.pdf", "file_data": "…", "detail": "high"}}` | The same PDF as `document_url`, in the OpenAI file shape. `file_data` is a `data:application/pdf;base64,` or `http(s)` URL. `filename` is optional. |

<Warning>
  **Images or one document, never both.** A PDF's first 8 pages are rasterised at 96 DPI and read as the request's images, so they share the same 8 slots. Sending both is a `422`.
</Warning>

| `detail` | Vision tokens per image or page |
| - | - |
| `auto` (default), `high` | 280 |
| `low` | 70 |

One `high` or `auto` part sets every image and page in the request to 280 tokens.

## Response

| Field | Type | Description |
| - | - | - |
| `model` | `string` | The model that answered. |
| `answers` | `object` | [Answers](#answer-shapes) keyed by question id. |
| `usage.input_tokens` | `integer` | Prompt tokens across every read. Counts toward your quota. |
| `usage.output_tokens` | `integer` | `0` on a diffusion read. Non-zero on a generative read, which writes the answer under a grammar. |
| `usage.input_tokens_details` | `object` | `cached_tokens`, `image_tokens`, and `text_tokens`. Gateway extension. `image_tokens` follows the `detail` budget, since the engine reports no image and text split. |
| `usage.reads` | `integer` | Engine calls made: one per question group, times `samples`. Gateway extension. |
| `usage.cost` | `number` | USD at the model's published rate, with cached tokens at the cache rate. Gateway extension. |

The `x-typesafe-request-id` header matches the Gateway `x-request-id`. A decision is billed per read, and a rejected request bills nothing. See [Pricing](/gateway/pricing).

### Answer shapes

| `type` | Fields |
| - | - |
| `noul` | `noul`: P(yes), from 0 to 1. |
| `choice` | `choice` (the winning label), `probabilities` (label to probability), `confidence`. |
| `score` | `score` (the expected level, `sum(i * p_i)`), `legend`, `probabilities`, `confidence`. |

`confidence` is `1 - H(p) / ln(K)`: `1` puts all mass on one label, and `0` is uniform.

## Errors

| Status | `error_type` | When |
| - | - | - |
| `422` | validation list | An invalid body, an unknown field, or a schema the model cannot answer. The body is `{"detail": [{"type", "loc", "msg", "input"}]}`. |
| `404` | `not_found_error` | `model` is not served on this route. |
| `429` | rate limit | The per-tier quota is exceeded. |
| `503` | `api_error` | The engine is unreachable or failed. Sent with `retry-after: 2`. |
| `529` | `overloaded_error` | Too many reads are queued. Sent with `retry-after: 1`. |

See [Error Codes](/gateway/error-codes) for the Gateway-wide envelope.

<RequestExample>
  ```python Python [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import base64, pathlib
  from typesafe_sdk import Choice, Noul, Score, TypeSafeClient

  client = TypeSafeClient(
      api_key="<VLMRUN_API_KEY>",
      base_url="https://gateway.vlm.run/typesafe",
  )

  page = base64.b64encode(pathlib.Path("invoice-page.jpg").read_bytes()).decode()

  result = client.system_one(
      "Answer about the attached page.",
      {
          "kind": Choice(
              instructions="What kind of document is this page from?",
              criteria={"invoice": None, "receipt": None, "contract": None, "other": None},
          ),
          "has_total": Noul(instructions="Is a total amount due visible on the page?"),
          "legibility": Score(
              instructions="How legible is the text?",
              criteria=["unreadable", "partly legible", "clear"],
          ),
      },
      extra_body={
          "content": [
              {
                  "type": "image_url",
                  "image_url": {
                      "url": f"data:image/jpeg;base64,{page}",
                      "detail": "high",
                  },
              }
          ]
      },
      model="google/diffusiongemma-26b-a4b-it",
  )

  print(result.choices["kind"].choice, result.usage.input_tokens)
  ```

  ```typescript Node.js [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { readFileSync } from "node:fs";
  import { choice, noul, score, TypeSafeClient } from "@typesafe-ai/sdk";

  const client = new TypeSafeClient({
    apiKey: process.env.VLMRUN_API_KEY,
    baseURL: "https://gateway.vlm.run/typesafe",
    defaultModel: "google/diffusiongemma-26b-a4b-it",
  });

  const page = readFileSync("invoice-page.jpg").toString("base64");

  const request = {
    state: "Answer about the attached page.",
    questions: {
      kind: choice("What kind of document is this page from?", {
        invoice: null,
        receipt: null,
        contract: null,
        other: null,
      }),
      has_total: noul("Is a total amount due visible on the page?"),
      legibility: score("How legible is the text?", [
        "unreadable",
        "partly legible",
        "clear",
      ]),
    },
    content: [
      { type: "image_url",
        image_url: { url: `data:image/jpeg;base64,${page}`, detail: "high" } },
    ],
  };

  const { answers, usage } = await client.systemOne(request);
  console.log(answers.kind.choice, usage.input_tokens);
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  vlmrun gw s1 -s "Answer about the attached page." invoice-page.jpg --detail high \
    -m google/diffusiongemma-26b-a4b-it \
    --choice kind="invoice|receipt|contract|other" \
    --noul has_total="Is a total amount due visible on the page?" \
    --score legibility="unreadable|partly legible|clear" --json
  ```

  ```bash cURL [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  IMAGE=$(base64 -w0 invoice-page.jpg)

  curl https://gateway.vlm.run/typesafe/v1/systemone \
    -H "Authorization: Bearer $VLMRUN_API_KEY" \
    -H "Content-Type: application/json" \
    -d @- <<JSON
  {
    "model": "google/diffusiongemma-26b-a4b-it",
    "state": "Answer about the attached page.",
    "content": [
      {"type": "image_url",
       "image_url": {"url": "data:image/jpeg;base64,$IMAGE", "detail": "high"}}
    ],
    "questions": {
      "kind": {
        "type": "choice",
        "instructions": "What kind of document is this page from?",
        "criteria": {"invoice": null, "receipt": null, "contract": null, "other": null}
      },
      "has_total": {"type": "noul", "instructions": "Is a total amount due visible on the page?"},
      "legibility": {
        "type": "score",
        "instructions": "How legible is the text?",
        "criteria": ["unreadable", "partly legible", "clear"]
      }
    }
  }
  JSON
  ```
</RequestExample>

<ResponseExample>
  ```json 200 theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "id": "sysone-b317f2c7606c47c4975ba08166260",
    "model": "google/diffusiongemma-26b-a4b-it",
    "answers": {
      "kind": {
        "type": "choice",
        "choice": "receipt",
        "probabilities": {
          "invoice": 0.0022535559303185626,
          "receipt": 0.9966860953386762,
          "contract": 0.0003855850269454288,
          "other": 0.0006747637040598201
        },
        "confidence": 0.9819649256633525
      },
      "has_total": {
        "type": "noul",
        "noul": 0.5214069077960607
      },
      "legibility": {
        "type": "score",
        "score": 1.9657897574947996,
        "legend": {
          "0": "unreadable",
          "1": "partly legible",
          "2": "clear"
        },
        "probabilities": {
          "0": 0.0020463012728342026,
          "1": 0.030117639959532254,
          "2": 0.9678360587676337
        },
        "confidence": 0.8636438424763118
      }
    },
    "usage": {
      "input_tokens": 417,
      "output_tokens": 0,
      "input_tokens_details": {
        "cached_tokens": 32,
        "image_tokens": 280,
        "text_tokens": 137
      },
      "reads": 1,
      "cost": 0.001
    }
  }
  ```

  ```json 422 theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "detail": [
      {
        "type": "dict_type",
        "loc": ["body", "questions"],
        "msg": "Input should be a valid dictionary",
        "input": "bad"
      }
    ]
  }
  ```
</ResponseExample>

## Related

<CardGroup cols={2}>
  <Card title="System One" icon="scale-balanced" href="/gateway/system-one">
    Question types, images, confidence, and cost levers.
  </Card>

  <Card title="TypeSafe SDK Compatibility" icon="arrow-right-arrow-left" href="/gateway/jev-compatibility">
    Compatibility matrix and migration steps.
  </Card>

  <Card title="List Models" icon="table-list" href="/gateway/api-reference/get-typesafe-models">
    The current TypeSafe-compatible models on the `/typesafe` route.
  </Card>

  <Card title="Chat Completions" icon="comments" href="/gateway/api-reference/post-chat-completions">
    OCR, VQA, and document inference when you need generated text.
  </Card>
</CardGroup>


## OpenAPI

````yaml https://gateway.vlm.run/openapi.json POST /typesafe/v1/systemone
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
  /typesafe/v1/systemone:
    post:
      tags:
        - System One
      summary: Systemone
      operationId: systemone_typesafe_v1_systemone_post
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/SystemOneRequest'
        required: true
      responses:
        '200':
          description: Successful Response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/SystemOneResponse'
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
    SystemOneRequest:
      properties:
        state:
          anyOf:
            - type: string
            - additionalProperties: true
              type: object
            - items: {}
              type: array
          title: State
        model:
          type: string
          title: Model
        questions:
          additionalProperties:
            oneOf:
              - $ref: '#/components/schemas/NoulQuestion'
              - $ref: '#/components/schemas/ChoiceQuestion'
              - $ref: '#/components/schemas/ScoreQuestion'
            discriminator:
              propertyName: type
              mapping:
                choice: '#/components/schemas/ChoiceQuestion'
                noul: '#/components/schemas/NoulQuestion'
                score: '#/components/schemas/ScoreQuestion'
          type: object
          maxProperties: 16
          minProperties: 1
          title: Questions
          description: >-
            Typed questions to answer, keyed by caller id. At most 16 per
            decision.
        content:
          anyOf:
            - items:
                oneOf:
                  - $ref: '#/components/schemas/TextPart'
                  - $ref: '#/components/schemas/ImageUrlPart'
                  - $ref: '#/components/schemas/FilePart'
                  - $ref: '#/components/schemas/DocumentUrlPart'
                discriminator:
                  propertyName: type
                  mapping:
                    document_url: '#/components/schemas/DocumentUrlPart'
                    file: '#/components/schemas/FilePart'
                    image_url: '#/components/schemas/ImageUrlPart'
                    text: '#/components/schemas/TextPart'
              type: array
            - type: 'null'
          title: Content
          description: >-
            Media for this request, as OpenAI content parts: `image_url` (max 8,
            data:image/…;base64 or http(s), ≤5 MB each) and one `file`, whose
            first 8 pages are read as images. Text is read after the state.
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
        steps:
          anyOf:
            - type: integer
              maximum: 8
              minimum: 1
            - type: 'null'
          title: Steps
          description: Denoise steps per read; Jev's contract is 1.
        samples:
          anyOf:
            - type: integer
              maximum: 32
              minimum: 1
            - type: 'null'
          title: Samples
          description: >-
            Fixed number of noise draws to average. Unset: one read, re-read on
            high entropy.
      additionalProperties: false
      type: object
      required:
        - state
        - model
        - questions
      title: SystemOneRequest
      description: The body of ``POST /typesafe/v1/systemone``.
    SystemOneResponse:
      properties:
        id:
          type: string
          title: Id
        model:
          type: string
          title: Model
        answers:
          additionalProperties:
            oneOf:
              - $ref: '#/components/schemas/NoulAnswer'
              - $ref: '#/components/schemas/ChoiceAnswer'
              - $ref: '#/components/schemas/ScoreAnswer'
            discriminator:
              propertyName: type
              mapping:
                choice: '#/components/schemas/ChoiceAnswer'
                noul: '#/components/schemas/NoulAnswer'
                score: '#/components/schemas/ScoreAnswer'
          type: object
          title: Answers
        usage:
          $ref: '#/components/schemas/vlmrt__systemone__types__Usage'
      type: object
      required:
        - model
        - answers
        - usage
      title: SystemOneResponse
    HTTPValidationError:
      properties:
        detail:
          items:
            $ref: '#/components/schemas/ValidationError'
          type: array
          title: Detail
      type: object
      title: HTTPValidationError
    NoulQuestion:
      properties:
        type:
          type: string
          const: noul
          title: Type
        instructions:
          anyOf:
            - type: string
            - additionalProperties: true
              type: object
            - items: {}
              type: array
            - type: 'null'
          title: Instructions
        criteria:
          anyOf:
            - $ref: '#/components/schemas/NoulCriteria'
            - type: 'null'
      additionalProperties: false
      type: object
      required:
        - type
      title: NoulQuestion
      description: A yes/no question. The answer is ``P(yes)``.
    ChoiceQuestion:
      properties:
        type:
          type: string
          const: choice
          title: Type
        instructions:
          anyOf:
            - type: string
            - additionalProperties: true
              type: object
            - items: {}
              type: array
            - type: 'null'
          title: Instructions
        criteria:
          additionalProperties:
            anyOf:
              - type: string
              - additionalProperties: true
                type: object
              - items: {}
                type: array
              - type: 'null'
          type: object
          maxProperties: 128
          minProperties: 2
          title: Criteria
      additionalProperties: false
      type: object
      required:
        - type
        - criteria
      title: ChoiceQuestion
      description: Pick one of the named options; each may carry a description.
    ScoreQuestion:
      properties:
        type:
          type: string
          const: score
          title: Type
        instructions:
          anyOf:
            - type: string
            - additionalProperties: true
              type: object
            - items: {}
              type: array
            - type: 'null'
          title: Instructions
        criteria:
          items:
            anyOf:
              - type: string
              - additionalProperties: true
                type: object
              - items: {}
                type: array
          type: array
          maxItems: 10
          minItems: 2
          title: Criteria
      additionalProperties: false
      type: object
      required:
        - type
        - criteria
      title: ScoreQuestion
      description: An ordered rubric; the answer is the expected level, 0-indexed.
    TextPart:
      properties:
        type:
          type: string
          const: text
          title: Type
        text:
          type: string
          title: Text
      additionalProperties: false
      type: object
      required:
        - type
        - text
      title: TextPart
      description: '``{"type": "text", "text": ...}`` — appended after the state.'
    ImageUrlPart:
      properties:
        type:
          type: string
          const: image_url
          title: Type
        image_url:
          $ref: '#/components/schemas/vlmrt__systemone__types__ImageUrl'
      additionalProperties: false
      type: object
      required:
        - type
        - image_url
      title: ImageUrlPart
      description: >-
        ``{"type": "image_url", "image_url": {"url": ..., "detail": ...}}`` —
        the

        OpenAI chat content part, so a caller can reuse what it already sends to

        ``/v1/openai/chat/completions``.
    FilePart:
      properties:
        type:
          type: string
          const: file
          title: Type
        file:
          $ref: '#/components/schemas/vlmrt__systemone__types__FileContent'
      additionalProperties: false
      type: object
      required:
        - type
        - file
      title: FilePart
      description: |-
        ``{"type": "file", "file": {"filename": ..., "file_data": ...}}`` — the
        OpenAI content part, so a caller sends a PDF here exactly as it does to
        ``/v1/openai/chat/completions``.
    DocumentUrlPart:
      properties:
        type:
          type: string
          const: document_url
          title: Type
        document_url:
          $ref: '#/components/schemas/vlmrt__systemone__types__DocumentUrl'
      additionalProperties: false
      type: object
      required:
        - type
        - document_url
      title: DocumentUrlPart
      description: >-
        ``{"type": "document_url", "document_url": {"url": ..., "detail":
        ...}}`` —

        the same PDF as a ``file`` part, named for callers that already speak
        this shape.
    NoulAnswer:
      properties:
        type:
          type: string
          const: noul
          title: Type
          default: noul
        noul:
          type: number
          maximum: 1
          minimum: 0
          title: Noul
          description: P(yes)
      type: object
      required:
        - noul
      title: NoulAnswer
    ChoiceAnswer:
      properties:
        type:
          type: string
          const: choice
          title: Type
          default: choice
        choice:
          type: string
          title: Choice
        probabilities:
          additionalProperties:
            type: number
          type: object
          title: Probabilities
        confidence:
          type: number
          maximum: 1
          minimum: 0
          title: Confidence
          description: 1 - H(p)/ln K
      type: object
      required:
        - choice
        - probabilities
        - confidence
      title: ChoiceAnswer
    ScoreAnswer:
      properties:
        type:
          type: string
          const: score
          title: Type
          default: score
        score:
          type: number
          title: Score
          description: Expected level, sum(i * p_i)
        legend:
          additionalProperties:
            anyOf:
              - type: string
              - additionalProperties: true
                type: object
              - items: {}
                type: array
          type: object
          title: Legend
        probabilities:
          additionalProperties:
            type: number
          type: object
          title: Probabilities
        confidence:
          type: number
          maximum: 1
          minimum: 0
          title: Confidence
      type: object
      required:
        - score
        - legend
        - probabilities
        - confidence
      title: ScoreAnswer
    vlmrt__systemone__types__Usage:
      properties:
        input_tokens:
          type: integer
          title: Input Tokens
          default: 0
        output_tokens:
          type: integer
          title: Output Tokens
          default: 0
        input_tokens_details:
          $ref: '#/components/schemas/InputTokenDetails'
        reads:
          type: integer
          title: Reads
          default: 0
        cost:
          type: number
          title: Cost
          default: 0
      type: object
      title: Usage
      description: >-
        Jev's two counters, plus what the gateway bills for them.


        ``cost`` is this gateway's addition. TypeSafe's decoder ignores a field
        it

        does not model, so the official SDK still parses the response; a client
        that

        reads the raw JSON (the ``vlmrun`` CLI) can show the price of a read.
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
    NoulCriteria:
      properties:
        'true':
          anyOf:
            - type: string
            - additionalProperties: true
              type: object
            - items: {}
              type: array
            - type: 'null'
          title: 'True'
        'false':
          anyOf:
            - type: string
            - additionalProperties: true
              type: object
            - items: {}
              type: array
            - type: 'null'
          title: 'False'
      additionalProperties: false
      type: object
      title: NoulCriteria
      description: Optional descriptions of the yes and no outcomes.
    vlmrt__systemone__types__ImageUrl:
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
      additionalProperties: false
      type: object
      required:
        - url
      title: ImageUrl
    vlmrt__systemone__types__FileContent:
      properties:
        filename:
          anyOf:
            - type: string
            - type: 'null'
          title: Filename
        file_data:
          type: string
          title: File Data
        detail:
          type: string
          enum:
            - auto
            - low
            - high
          title: Detail
          default: auto
      additionalProperties: false
      type: object
      required:
        - file_data
      title: FileContent
      description: >-
        OpenAI's ``file`` object: the PDF inline in ``file_data``. ``detail`` is
        ours.
    vlmrt__systemone__types__DocumentUrl:
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
      additionalProperties: false
      type: object
      required:
        - url
      title: DocumentUrl
    InputTokenDetails:
      properties:
        cached_tokens:
          type: integer
          title: Cached Tokens
          default: 0
        image_tokens:
          type: integer
          title: Image Tokens
          default: 0
        text_tokens:
          type: integer
          title: Text Tokens
          default: 0
      type: object
      title: InputTokenDetails
      description: >-
        What the prompt was made of, in the shape the chat route reports usage.


        ``cached_tokens`` is the engine's own count (the schema prompt repeats,
        so a

        warm replica serves most of it from the prefix cache). ``image_tokens``
        is

        derived from the budget this request applied, since the engine reports
        no

        image/text split; ``text_tokens`` is the remainder.
  securitySchemes:
    _PermissiveHTTPBearer:
      type: http
      scheme: bearer

````

This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.