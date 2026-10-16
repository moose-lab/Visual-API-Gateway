> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# List Models

> Current TypeSafe-compatible models on the /typesafe route

Lists the models this deployment serves for [System One](/gateway/api-reference/post-systemone), in Jev's model-card shape. See [Rate Limits](/gateway/rate-limits) for per-tier quotas.

## Response

| Field | Type | Description |
| - | - | - |
| `models` | `array` | One card per served model, in catalog order. |
| `models[].name` | `string` | The model id to send as `model`. |
| `models[].description` | `string` | What the model does. |
| `models[].release_date` | `string` | The release date, `YYYY-MM-DD`. |

A model absent from this list is a `404` on `model`. See [Models](/gateway/typesafe-models).

<RequestExample>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from typesafe_sdk import TypeSafeClient

  client = TypeSafeClient(
      api_key="<VLMRUN_API_KEY>",
      base_url="https://gateway.vlm.run/typesafe",
  )

  for model in client.models.list().models:
      print(model.name, model.release_date)
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { TypeSafeClient } from "@typesafe-ai/sdk";

  const client = new TypeSafeClient({
    apiKey: process.env.VLMRUN_API_KEY,
    baseURL: "https://gateway.vlm.run/typesafe",
  });

  for (const model of await client.models.list()) {
    console.log(model.name, model.release_date);
  }
  ```

  ```bash cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl https://gateway.vlm.run/typesafe/v1/models \
    -H "Authorization: Bearer $VLMRUN_API_KEY"
  ```
</RequestExample>

<ResponseExample>
  ```json 200 theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "models": [
      {
        "name": "google/diffusiongemma-26b-a4b-it",
        "description": "Calibrated yes/no, choice and score decisions over text, JSON and up to 8 images, read from DiffusionGemma-26B-A4B in one denoise step.",
        "release_date": "2026-09-20"
      },
      {
        "name": "qwen/qwen3.5-0.8b",
        "description": "The same decisions read from Qwen3.5-0.8B in one constrained pass. The smallest engine that serves this route; decisions are less peaked than the default's.",
        "release_date": "2026-09-23"
      }
    ]
  }
  ```
</ResponseExample>

## Related

<CardGroup cols={2}>
  <Card title="System One" icon="scale-balanced" href="/gateway/api-reference/post-systemone">
    Send decisions using model ids from this endpoint.
  </Card>

  <Card title="TypeSafe SDK Compatibility" icon="arrow-right-arrow-left" href="/gateway/jev-compatibility">
    Model aliases and the compatibility matrix.
  </Card>
</CardGroup>


## OpenAPI

````yaml https://gateway.vlm.run/openapi.json GET /typesafe/v1/models
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
  /typesafe/v1/models:
    get:
      tags:
        - System One
      summary: Systemone Models
      operationId: systemone_models_typesafe_v1_models_get
      responses:
        '200':
          description: Successful Response
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/ListModelsResponse'
      security:
        - _PermissiveHTTPBearer: []
components:
  schemas:
    ListModelsResponse:
      properties:
        models:
          items:
            $ref: '#/components/schemas/ModelMetadata'
          type: array
          title: Models
      type: object
      required:
        - models
      title: ListModelsResponse
    ModelMetadata:
      properties:
        name:
          type: string
          title: Name
        description:
          type: string
          title: Description
        release_date:
          type: string
          title: Release Date
      type: object
      required:
        - name
        - description
        - release_date
      title: ModelMetadata
  securitySchemes:
    _PermissiveHTTPBearer:
      type: http
      scheme: bearer

````

This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.