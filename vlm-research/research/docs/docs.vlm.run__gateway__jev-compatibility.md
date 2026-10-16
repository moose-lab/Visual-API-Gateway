> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# TypeSafe SDK Compatibility

> Point an existing TypeSafe SDK client at the VLM Run Gateway

The Gateway serves TypeSafe's Jev API under `/typesafe`. The client appends `/v1/systemone` and `/v1/models` to its base URL. There is no mapping layer. Requests are not rewritten.

## Pointing the SDK at the Gateway

You only need to set three environment variables. No code changes are required.

```bash highlight={1} theme={"theme":{"light":"github-light","dark":"dark-plus"}}
export TYPESAFE_BASE_URL="https://gateway.vlm.run/typesafe"
export TYPESAFE_API_KEY="<VLMRUN_API_KEY>"

# Required. The SDKs default to `jev-latest`, which this route does not
# serve, so a client that does not name a model gets a 404 on every call.
export TYPESAFE_DEFAULT_MODEL="google/diffusiongemma-26b-a4b-it"
```

<CodeGroup>
  ```bash Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  pip install typesafe-sdk
  ```

  ```bash Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  npm install @typesafe-ai/sdk
  ```
</CodeGroup>

Both SDKs read `TYPESAFE_DEFAULT_MODEL`. Pass `model` per client or per call. Any served id works. See [Models](/gateway/typesafe-models).

## Compatibility matrix

<input class="fold-rows" type="checkbox" id="fold-gateway-jev-compatibility-1" />

| Feature | Status | Notes |
| - | - | - |
| `POST /v1/systemone` | Same | Identical request and response shapes. |
| `GET /v1/models` | Same | Jev's `{name, description, release_date}` cards. |
| Question types (`noul`, `choice`, `score`) | Same | Including `legend`, `probabilities`, and `confidence`. |
| `x-typesafe-request-id` header | Same | Mirrors the Gateway's `x-request-id`. |
| `usage.input_tokens` / `output_tokens` | Same | `output_tokens` is 0 on a diffusion read; a generative read reports what it wrote. |
| Error envelopes | Same | `422` validation lists, `404`, `429`, `503`, `529`. |
| `content` | Extended | Not in Jev. Content parts (`image_url`, `file`, `document_url`, `text`) carrying this request's media. |
| `steps`, `samples` | Same | 1 to 8 and 1 to 32. |
| `reasoning_effort` | Extended | Not in Jev. Generative engines only; `none` by default. |
| `jev-latest` | **Not supported** | No catch-all alias. Name a served id, or the request is a `404`. |
| `usage.cost`, `usage.reads`, `usage.input_tokens_details` | Extended | Not in Jev. The SDK's decoder ignores them, so an unmodified client still parses the response. |
| `WS /typesafe/ws` | Extended | Not in Jev. The same decisions per frame over one socket. |
| `think` | Not supported | A generation pass is the opposite of a low-latency read. |
| `sequential` | Not supported | Question groups are read in parallel, unconditioned. |

<label class="fold-rows-label" for="fold-gateway-jev-compatibility-1"><span class="when-closed">See all 14 rows</span><span class="when-open">Show less</span></label>

## Things worth knowing

| What | Why it matters |
| - | - |
| **Probabilities differ** | They come from a different model. Revalidate any threshold you tuned on TypeSafe before relying on it here. |
| **Strict bodies** | An unknown field is a `422`, where Jev ignores it, so a typo surfaces instead of being dropped. |
| **Choice ceiling** | 2 to 128 labels per `choice`. Jev allows up to 255. |
| **Automatic re-reads are off** | Upstream re-reads on high entropy; here that costs \~3.5x the latency for probabilities that move 0.2 or less. Use `samples` to average, and note every draw is billed. |
| **Auth and quotas are the Gateway's** | Upstream API keys and origin secrets do not apply. See [Authentication](/gateway/authentication) and [Rate Limits](/gateway/rate-limits). |

## Check the connection

<CodeGroup>
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
</CodeGroup>

A list of served models means the base URL and key are right. See [List Models](/gateway/api-reference/get-typesafe-models) for the response shape.

## Related

<CardGroup cols={2}>
  <Card title="System One" icon="scale-balanced" href="/gateway/system-one">
    Question types, images, confidence, and cost levers.
  </Card>

  <Card title="System One API" icon="code" href="/gateway/api-reference/post-systemone">
    Read the request and response reference.
  </Card>
</CardGroup>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.