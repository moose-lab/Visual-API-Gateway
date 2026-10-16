> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# FAQ

> Auth, inputs, cost, limits, platforms, and data handling

## Getting started

<AccordionGroup>
  <Accordion title="Do I need an API key?" icon="key">
    Not to try it. Anonymous calls work on every endpoint, limited per IP to 10/min, 30/hr, and 100/day.
    A key from [app.vlm.run](https://app.vlm.run/dashboard/settings/api-keys) raises that to 240/min and 10,000/hr, tied to your account.
    Use a key for anything beyond evaluation. See [Authentication](/gateway/authentication) and [Rate Limits](/gateway/rate-limits).
  </Accordion>

  <Accordion title="Can I use the OpenAI SDK?" icon="arrow-right-arrow-left">
    Yes. Set `base_url` to `https://gateway.vlm.run/v1/openai` and pass your VLM Run key as `api_key`.
    Chat completions, embeddings, audio transcriptions, and the model list use the OpenAI request shape.
    Gateway-only fields such as `method` go in `extra_body`. See [OpenAI SDK Compatibility](/gateway/openai-compatibility).
  </Accordion>

  <Accordion title="Which model should I start with?" icon="sliders">
    Pick by input and output:

    | You have | Start from |
    | - | - |
    | A PDF or page image, want text | An OCR model with the default `markdown` method |
    | An image or video, want an answer | A VQA model |
    | An image, want boxes, masks, or keypoints | A [Visual Intelligence](/gateway/visual-intelligence) model |
    | Audio | A transcription model |

    The [model catalog](https://vlm.run/gateway/models) lists each model's methods, inputs, and price. Try the cheapest model that fits, and move up only where your own data shows a gain.
    See [Models](/gateway/models) and [Methods](/gateway/methods).
  </Accordion>
</AccordionGroup>

## Inputs and outputs

<AccordionGroup>
  <Accordion title="What can I send?" icon="images">
    Images, PDFs, video, and audio, as a URL or a base64 data URI.
    PDFs go in a `document_url` part, and the Gateway runs each page and returns one `<page>` per page.
    Video support depends on the model. A part the model cannot read returns `400` with `capability_violation`.
    See [Supported Inputs](/gateway/multimodal-inputs) and [Document OCR](/gateway/guides/document-ocr).
  </Accordion>

  <Accordion title="Can I get JSON that matches my own schema?" icon="brackets-curly">
    On chat and provider models, pass `response_format={"type":"json_schema", ...}`. Output is constrained to your schema.
    `capabilities.supports_json_schema` on [`GET /v1/openai/models`](/gateway/api-reference/get-models) lists the models that accept it.
    OCR and detection models return `400` for a schema, because their reply is an envelope the Gateway builds.

    For extraction with schemas you manage, use the VLM Run API: [structured responses](/capabilities/structured-responses), [custom schemas](/capabilities/custom-schemas), and the [VLM Run Hub](/hub).
    See [Response Formats](/gateway/response-formats).
  </Accordion>

  <Accordion title="How do I get boxes, masks, or keypoints?" icon="object-group">
    Call a region model such as `facebook/sam3.1` or `usyd-community/vitpose-plus-large`.
    Each returns one record shape for images and per-frame records for video.
    See [Visual Intelligence](/gateway/visual-intelligence).
  </Accordion>
</AccordionGroup>

## Cost and limits

<AccordionGroup>
  <Accordion title="How much does a call cost?" icon="dollar-sign">
    Rates are public. Read them before you call, then check the charge after.

    * **Before:** `pricing` on [`GET /v1/openai/models`](/gateway/api-reference/get-models), or the model catalog.
    * **After:** `usage.cost` on the response, in USD.
    * **Unit:** most models bill per token. `facebook/sam3.1` bills per image or video. Transcription bills per audio second.
    * **Floor:** every call bills at least `$0.001`.

    See [Pricing](/gateway/pricing).
  </Accordion>

  <Accordion title="How do I estimate cost for a workload?" icon="calculator">
    Run 10 to 20 representative inputs and sum `usage.cost`. Multiply by your volume.
    Token cost varies with page count and `document_dpi`, so sample your real documents, not a short test file.
    Lower `image_resolution` or `document_dpi` when the task allows it.
  </Accordion>

  <Accordion title="What are the rate limits, and how do I raise them?" icon="gauge-high">
    Anonymous: 10/min, 30/hr, 100/day per IP. Authenticated: 240/min and 10,000/hr per user.
    A `429` carries `Retry-After`, the seconds to wait.
    For higher limits, email [support@vlm.run](mailto:support@vlm.run?subject=Gateway%20rate%20limit%20increase).
    See [Rate Limits](/gateway/rate-limits).
  </Accordion>

  <Accordion title="A request failed with a 504 timeout. What now?" icon="clock">
    Retry with backoff. A `ttft_timeout` usually clears once the deployment has scaled.
    Split large jobs into smaller requests, for example a page range of a long PDF.
    Keep the client timeout above the model's total deadline (600 seconds by default), or set `stream=true`.
    See [Inference timeout (504)](/gateway/error-codes#inference-timeout-504).
  </Accordion>
</AccordionGroup>

## Platforms

<AccordionGroup>
  <Accordion title="What is System One, and when do I use it?" icon="scale-balanced">
    System One answers typed questions about text, JSON, or images with a calibrated probability per label. It does not generate text.
    Use it for decisions, such as classify, score, or route, where you need a label and a confidence. Use chat completions when you need free text or extraction.
    The route is wire-compatible with TypeSafe, so the `typesafe-sdk` works with a new `base_url`.
    See [System One](/gateway/system-one) and [TypeSafe SDK Compatibility](/gateway/jev-compatibility).
  </Accordion>

  <Accordion title="Can my coding agent use the Gateway?" icon="plug">
    Two ways:

    * **MCP server:** `https://gateway.vlm.run/mcp` exposes `read_document`, `read_image`, `read_audio`, and `read_video`. It takes an API key or anonymous access. See [MCP Server](/gateway/mcp-server).
    * **Skill:** `npx skills add vlm-run/skills@vlmrun-gw` teaches an agent the `vlmrun gw` commands and request shapes. See [Skills](/gateway/skills).
  </Accordion>
</AccordionGroup>

## Trust

<AccordionGroup>
  <Accordion title="Is my data stored or used for training?" icon="shield-check">
    No. The Gateway does not store your inputs or outputs, and it does not train on them.
    It keeps request metadata for billing, such as `usage` and `cost`. Log `x-request-id` so support can trace a call.
  </Accordion>

  <Accordion title="Is the Gateway production ready?" icon="server">
    The Gateway is in **beta**. Limits and the model catalog can change.
    Use an API key in production, since anonymous traffic shares a per-IP budget.
    Every response includes `usage.cost` and `x-request-id`, and errors are sanitized. Track changes in the [Changelog](/gateway/changelog).
  </Accordion>
</AccordionGroup>

## Related

<CardGroup cols={2}>
  <Card title="Introduction" icon="compass" href="/gateway/introduction">
    OpenAI-compatible API, one base URL, one API key.
  </Card>

  <Card title="Models" icon="table-list" href="/gateway/models">
    Availability, methods, and accepted inputs.
  </Card>

  <Card title="Error Codes" icon="triangle-exclamation" href="/gateway/error-codes">
    Every error type and its fix.
  </Card>

  <Card title="Quickstart" icon="rocket" href="/gateway/quickstart">
    First requests for VQA and document OCR.
  </Card>
</CardGroup>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.