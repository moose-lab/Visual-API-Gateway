> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Audio Transcriptions

> OpenAI-compatible speech-to-text

Omit the `Authorization` header for anonymous access. This route shares per-tier quotas with chat completions. See [Rate Limits](/gateway/rate-limits). Transcription models are listed on [Models](/gateway/models).

## Request parameters

Send an OpenAI-compatible multipart form.

| Field | Type | Default | Description |
| - | - | - | - |
| `model` | `string` | required | Model id. Example: `nvidia/parakeet-tdt-0.6b-v3`. |
| `file` | file upload | optional | Audio bytes. Send `file` or `url`. |
| `url` | `string` | optional | Hosted audio URL. Alternative to `file`. |
| `language` | `string` | auto-detect | Language hint. Example: `en`. The schema does not constrain the format. The convention is an ISO-639-1 code. |
| `prompt` | `string` | `null` | Context that biases transcription. Example: spelled-out proper nouns. |
| `response_format` | `string` | `json` | `json`, `verbose_json`, `text`, `srt`, or `vtt`. |
| `temperature` | `number` | `0.0` | Sampling temperature. |
| `timestamp_granularities[]` | array of strings | `null` | Accepted for OpenAI SDK compatibility. Meaningful when `response_format` is `verbose_json`. Send `segment`, `word`, or both. |

<RequestExample>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from openai import OpenAI

  client = OpenAI(
      base_url="https://gateway.vlm.run/v1/openai",
      api_key="<VLMRUN_API_KEY>",
  )

  with open("sample.mp3", "rb") as audio_file:
      response = client.audio.transcriptions.create(
          model="nvidia/parakeet-tdt-0.6b-v3",
          file=audio_file,
      )

  print(response.text)
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import fs from "fs";
  import OpenAI from "openai";

  const client = new OpenAI({
    baseURL: "https://gateway.vlm.run/v1/openai",
    apiKey: process.env.VLMRUN_API_KEY,
  });

  const response = await client.audio.transcriptions.create({
    model: "nvidia/parakeet-tdt-0.6b-v3",
    file: fs.createReadStream("sample.mp3"),
  });

  console.log(response.text);
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  vlmrun gw transcribe sample.mp3 -m nvidia/parakeet-tdt-0.6b-v3
  ```

  ```bash cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl https://gateway.vlm.run/v1/openai/audio/transcriptions \
    -X POST \
    -H "Authorization: Bearer $VLMRUN_API_KEY" \
    -F "model=nvidia/parakeet-tdt-0.6b-v3" \
    -F "file=@sample.mp3"
  ```
</RequestExample>

<ResponseExample>
  ```json 200 theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "id": "transcription-b60d04e0e241422ebb7c2b",
    "object": "audio.transcription",
    "created": 1791250916,
    "model": "nvidia/parakeet-tdt-0.6b-v3",
    "served_model_id": "nvidia/parakeet-tdt-0.6b-v3",
    "backend": "nemo",
    "text": "After reading tons of productivity books, I came across so many rules. Like the two-year rule, the five-minute rule, the five-second rule. No, not that five-second rule. The problem is",
    "language": null,
    "duration": 10.032086167800454,
    "task": "transcribe",
    "segments": null,
    "words": null,
    "usage": {
      "type": "duration",
      "input_audio_seconds": 10.032086167800454,
      "input_tokens": 0,
      "output_tokens": 30,
      "total_tokens": 30,
      "cost": 0.001
    }
  }
  ```

  ```json 422 theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "detail": [
      {
        "type": "missing",
        "loc": ["body", "model"],
        "msg": "Field required",
        "input": null
      }
    ]
  }
  ```
</ResponseExample>

## Hosted URL instead of a file upload

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import httpx

  response = httpx.post(
      "https://gateway.vlm.run/v1/openai/audio/transcriptions",
      headers={"Authorization": "Bearer <VLMRUN_API_KEY>"},
      data={
          "model": "nvidia/parakeet-tdt-0.6b-v3",
          "url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/audio.transcription-summary/two_minute_rules.mp3",
      },
  )

  print(response.json()["text"])
  ```

  ```typescript Node.js [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  const form = new FormData();
  form.set("model", "nvidia/parakeet-tdt-0.6b-v3");
  form.set(
    "url",
    "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/audio.transcription-summary/two_minute_rules.mp3",
  );

  const response = await fetch(
    "https://gateway.vlm.run/v1/openai/audio/transcriptions",
    {
      method: "POST",
      headers: { Authorization: `Bearer ${process.env.VLMRUN_API_KEY}` },
      body: form,
    },
  );

  const { text } = await response.json();
  console.log(text);
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  vlmrun gw transcribe -m nvidia/parakeet-tdt-0.6b-v3 \
    --url https://storage.googleapis.com/vlm-data-public-prod/hub/examples/audio.transcription-summary/two_minute_rules.mp3
  ```

  ```bash cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl https://gateway.vlm.run/v1/openai/audio/transcriptions \
    -X POST \
    -H "Authorization: Bearer $VLMRUN_API_KEY" \
    -F "model=nvidia/parakeet-tdt-0.6b-v3" \
    -F "url=https://storage.googleapis.com/vlm-data-public-prod/hub/examples/audio.transcription-summary/two_minute_rules.mp3"
  ```
</CodeGroup>

## Related

<CardGroup cols={2}>
  <Card title="Models" icon="table-list" href="https://vlm.run/gateway/models">
    Transcription models.
  </Card>

  <Card title="Error Codes" icon="circle-exclamation" href="/gateway/error-codes">
    Status codes and response bodies.
  </Card>
</CardGroup>


## OpenAPI

````yaml https://gateway.vlm.run/openapi.json POST /v1/openai/audio/transcriptions
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
  /v1/openai/audio/transcriptions:
    post:
      summary: Audio Transcriptions
      description: >-
        OpenAI-compatible ``/v1/audio/transcriptions``.


        Forwards the audio bytes to ``transcribe`` and renders per
        ``response_format``.
      operationId: audio_transcriptions_v1_openai_audio_transcriptions_post
      requestBody:
        content:
          multipart/form-data:
            schema:
              $ref: >-
                #/components/schemas/Body_audio_transcriptions_v1_openai_audio_transcriptions_post
            example: {}
        required: true
      responses:
        '200':
          description: Successful Response
          content:
            application/json:
              schema:
                title: >-
                  Response Audio Transcriptions V1 Openai Audio Transcriptions
                  Post
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
    Body_audio_transcriptions_v1_openai_audio_transcriptions_post:
      properties:
        file:
          anyOf:
            - type: string
              contentMediaType: application/octet-stream
            - type: 'null'
          title: File
        url:
          anyOf:
            - type: string
            - type: 'null'
          title: Url
        model:
          type: string
          title: Model
        language:
          anyOf:
            - type: string
            - type: 'null'
          title: Language
        prompt:
          anyOf:
            - type: string
            - type: 'null'
          title: Prompt
        response_format:
          type: string
          title: Response Format
          default: json
        temperature:
          type: number
          title: Temperature
          default: 0
        timestamp_granularities[]:
          anyOf:
            - items:
                type: string
              type: array
            - type: 'null'
          title: Timestamp Granularities[]
      type: object
      required:
        - model
      title: Body_audio_transcriptions_v1_openai_audio_transcriptions_post
    HTTPValidationError:
      properties:
        detail:
          items:
            $ref: '#/components/schemas/ValidationError'
          type: array
          title: Detail
      type: object
      title: HTTPValidationError
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