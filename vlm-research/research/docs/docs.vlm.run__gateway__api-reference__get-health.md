> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Health

> VLM Run Gateway liveness check

<RequestExample>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import httpx

  response = httpx.get("https://gateway.vlm.run/health")
  print(response.status_code, response.json())
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  const response = await fetch("https://gateway.vlm.run/health");
  console.log(response.status, await response.json());
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  vlmrun gw health
  ```

  ```bash cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl https://gateway.vlm.run/health
  ```
</RequestExample>

<ResponseExample>
  ```json 200 theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "status": "ok",
    "version": "0.46.1",
    "commit": "22662785cf033f58833444257685356853fb4e87",
    "deployed_at": "26-10-01"
  }
  ```
</ResponseExample>


## OpenAPI

````yaml https://gateway.vlm.run/openapi.json GET /health
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
  /health:
    get:
      summary: Health
      operationId: health_health_get
      responses:
        '200':
          description: Successful Response
          content:
            application/json:
              schema:
                additionalProperties: true
                type: object
                title: Response Health Health Get

````

This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.