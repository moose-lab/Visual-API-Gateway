> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Rate Limits

> Shared per-user budgets on public routes

Public routes share one budget per user. That covers chat completions, audio transcriptions, embeddings, the model catalog, and `GET /v1/completions/{completion_id}`. A catalog listing and an inference call draw from the same counter. When the bucket is full, the Gateway returns `429 Too Many Requests`.

## Limits by Tier

| Tier | How it is identified | Rate limit | Bucket key |
| - | - | - | - |
| **Anonymous** | No `Authorization` header | 10/min, 30/hr, 100/day | Client IP |
| **Authenticated** | Valid VLM Run API key (`Authorization: Bearer <VLMRUN_API_KEY>`) | 240/min, 10000/hr | User ID |
| **Enterprise** | Enterprise agreement | Custom | [Contact us](mailto:support@vlm.run?subject=Gateway%20enterprise%20rate%20limits) for details |

<Note>
  Sign up at [app.vlm.run](https://app.vlm.run/dashboard/settings/api-keys) for a free API key to get higher rate limits.
</Note>

Those windows apply together.

* **Anonymous:** a request has to fit 10/min, 30/hr, and 100/day. The first window to fill returns `429`.
* **Per client IP:** anonymous requests are capped per client IP, so callers behind one NAT or proxy share a bucket.
* **Per user:** an API key is capped per user account.

[Authentication](/gateway/authentication#tier-resolution) describes how the Gateway resolves tiers from the `Authorization` header.

## Rate limit exceptions

A request over its limit returns `429 Too Many Requests` with `Retry-After`, the seconds to wait. Waiting that long avoids an immediate second `429`. The body names the limited tier:

```json theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "error": {
    "type": "rate_limit_exceeded",
    "message": "Rate limit exceeded. Get a free API key at https://app.vlm.run/dashboard/settings/api-keys for higher limits.",
    "tier": "anonymous"
  }
}
```

## Tips

* Back off and retry after `Retry-After` seconds on a `429`.
* Prefer URL document inputs over large base64 payloads.
* Read a long PDF in page ranges to keep each request small.

<Note>
  Counters live in the serving process unless the deployment sets
  `VLMRT_RATE_LIMIT_STORAGE_URI` to shared storage.
  Without shared storage, a caller's effective limit multiplies by the number of replicas.
  Treat the published numbers as the guaranteed floor.
</Note>

Contact [support@vlm.run](mailto:support@vlm.run?subject=Gateway%20rate%20limit%20increase) for a higher limit.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.