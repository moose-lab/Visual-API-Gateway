> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Authentication

> Authenticate requests to the VLM Run Gateway API

A request sends `Authorization: Bearer <token>`. An API key ties the call to your account and raises the quota. With no key, the call is anonymous.

## Get an API key

1. Sign up at [app.vlm.run](https://app.vlm.run).
2. Open [Settings → API keys](https://app.vlm.run/dashboard/settings/api-keys) and copy a key.
3. Export it so the examples below can read it:

```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
export VLMRUN_API_KEY="your-api-key"
```

Pass the key as `api_key` in the OpenAI SDK, or as the bearer token in cURL. Omit the `Authorization` header to call without an account.

## Examples

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from openai import OpenAI

  client = OpenAI(
      base_url="https://gateway.vlm.run/v1/openai",
      api_key="<VLMRUN_API_KEY>",
  )

  models = client.models.list()
  for model in models.data:
      print(model.id)
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
</CodeGroup>

If the Gateway cannot look your key up, it returns `503`. Retry the request. The key is not rejected. Response bodies are in [Error Codes](/gateway/error-codes).

## Tiers

| Tier | How to authenticate | Rate limit | Bucket key |
| - | - | - | - |
| Anonymous | Omit the `Authorization` header | 10/min · 30/hr · 100/day | Client IP |
| Authenticated | `Bearer <VLMRUN_API_KEY>` from [app.vlm.run](https://app.vlm.run/dashboard/settings/api-keys) | 240/min · 10000/hr | Your account |

Callers behind the same NAT or proxy share the anonymous IP bucket. Per-tier limits are in [Rate Limits](/gateway/rate-limits).

## Tier resolution

The Gateway resolves the tier from `Authorization` in this order:

1. **No header:** Anonymous, keyed by client IP. A deployment can set
   `VLMRT_REQUIRE_AUTH_HEADER=1` to reject a missing header with `401` and
   `{"detail": "Missing API Key"}`. The hosted Gateway does not set it.
2. **Valid VLM Run API key:** Authenticated as the owning user and organization.
3. **Any other bearer token:** `401` invalid API key. Unrecognized
   tokens do not fall back to anonymous access.

## Credits

An authenticated call is charged to the caller's organization. No credit left
returns `402`:

```json theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "detail": "Access denied. Your credits are exhausted. Please move to Pay-As-You-Go to continue using the service."
}
```

[Frontier models](https://vlm.run/gateway/models) use the `paid` access tier.
They need an organization with an active subscription or a funded balance.
Every GPU-served model is `public` and reachable anonymously.

<Note>
  Every endpoint in the [API
  Reference](/gateway/api-reference/post-chat-completions) accepts anonymous
  traffic today: chat completions, models, embeddings, audio transcriptions,
  and health. Use an API key for production.
</Note>

## Related

<CardGroup cols={2}>
  <Card title="Rate Limits" icon="bolt-lightning" href="/gateway/rate-limits">
    Per-tier quotas and how to request a higher limit.
  </Card>

  <Card title="Error Codes" icon="circle-exclamation" href="/gateway/error-codes">
    401, 402, 403, and 429 response bodies.
  </Card>
</CardGroup>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.