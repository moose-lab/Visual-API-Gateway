> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Pydantic AI Compatibility

> Orion-2 document, image, audio, and video work with hybrid client tools.

Point a [Pydantic AI](https://ai.pydantic.dev/) `Agent` at the VLM Run OpenAI-compatible chat endpoint.

Pydantic AI runs your local tools.

Orion-2 runs document, image, audio, and video work in its [code-execution sandbox](/agents/code-execution).

## Quick start

```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
pip install "pydantic-ai>=1.100"
export VLMRUN_API_KEY="<VLMRUN_API_KEY>"
```

```python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
import os
import uuid

from pydantic_ai import Agent, AudioUrl, DocumentUrl, ImageUrl, RunContext, VideoUrl
from pydantic_ai.models.openai import OpenAIChatModel
from pydantic_ai.profiles.openai import OpenAIModelProfile
from pydantic_ai.providers.openai import OpenAIProvider

model = OpenAIChatModel(
    "vlmrun-orion-2:auto",
    provider=OpenAIProvider(
        base_url="https://api.vlm.run/v1/openai",
        api_key=os.environ["VLMRUN_API_KEY"],
    ),
    profile=OpenAIModelProfile(
        openai_supports_strict_tool_definition=False,
        openai_unsupported_model_settings=("max_completion_tokens",),
        openai_chat_supports_document_input=True,
        openai_chat_supports_file_urls=True,
        openai_chat_audio_input_encoding="uri",
    ),
)

# Stock OpenAIChatModel rejects VideoUrl; map it to VLM's video_url part.
async def _map_video_url(item: VideoUrl):
    return {"type": "video_url", "video_url": {"url": item.url}}

model._map_video_url_item = _map_video_url

agent = Agent(
    model,
    system_prompt=(
        "Use the server execute_code tool for attached documents, images, "
        "audio, or video. Call lookup_purchase_order only when asked to "
        "reconcile an invoice. Never invent field values."
    ),
)

@agent.tool
def lookup_purchase_order(ctx: RunContext[None], invoice_number: str) -> dict:
    """Return the purchase order your ERP has on file for an invoice number."""
    return {"invoice_number": invoice_number, "po_number": "PO-4417", "total": 4560.00}

def run_kwargs() -> dict:
    return {
        "model_settings": {
            "extra_body": {
                "session_id": str(uuid.uuid4()),
                "tool_execution": "hybrid",
            }
        }
    }
```

| Setting | Why |
| - | - |
| `tool_execution: "hybrid"` | Orion-2 runs `execute_code`. Client tools pause back to Pydantic AI. |
| `session_id` | Fresh UUID per turn. Scopes the workspace and [artifacts](/agents/artifacts). |
| `openai_chat_supports_file_urls=True` | `DocumentUrl` passes as a URL. The server normalizes it to `file_url`. |
| `openai_chat_audio_input_encoding="uri"` | `AudioUrl` encodes as a URI. |
| `_map_video_url_item` | Only media patch. Stock Pydantic AI has no Chat Completions video part. |

`ImageUrl` needs no mapper.

<Info>
  Default model: `vlmrun-orion-2:auto`. Variants: [Code Execution](/agents/code-execution#model-variants). API key: [API Keys](https://app.vlm.run/dashboard/settings/api-keys).
</Info>

## Examples

Each example uses the same agent and `run_kwargs()`.

Files are public samples.

### Document

```python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
INVOICE = (
    "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/"
    "document.invoice/wordpress-pdf-invoice-plugin-sample.pdf"
)

result = agent.run_sync(
    ["Extract vendor, invoice number, date, and total.", DocumentUrl(INVOICE)],
    **run_kwargs(),
)
print(result.output)
```

### Image

```python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
DONUTS = (
    "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/"
    "image.object-detection/donuts.png"
)

result = agent.run_sync(
    ["Count the donuts and briefly describe the image.", ImageUrl(DONUTS)],
    **run_kwargs(),
)
print(result.output)
```

### Audio

```python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
AUDIO = (
    "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/"
    "audio.transcription-summary/two_minute_rules.mp3"
)

result = agent.run_sync(
    ["Summarize this audio in 2 sentences.", AudioUrl(AUDIO)],
    **run_kwargs(),
)
print(result.output)
```

### Video

Stream video.

Runs often take 1–2 minutes.

Some keys require `stream=True`.

```python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
import asyncio
from pydantic_ai.usage import UsageLimits

VIDEO = (
    "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/"
    "video.transcription/bakery.mp4"
)

async def run_streamed(prompt) -> str:
    async with agent.iter(
        prompt,
        usage_limits=UsageLimits(request_limit=20),
        **run_kwargs(),
    ) as run:
        async for node in run:
            if Agent.is_model_request_node(node):
                async with node.stream(run.ctx) as stream:
                    async for _ in stream:
                        pass
        return run.result.output

print(asyncio.run(run_streamed(["Describe this video in 2 sentences.", VideoUrl(VIDEO)])))
```

### Hybrid: extract + local ERP tool

```python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
result = agent.run_sync(
    [
        "Extract the invoice number and total with execute_code. "
        "Then call lookup_purchase_order once and say if the totals match.",
        DocumentUrl(INVOICE),
    ],
    **run_kwargs(),
)
print(result.output)
```

## What runs where

| Capability | Who runs it |
| - | - |
| Document / image / audio / video | Orion-2 (`execute_code`) |
| ERP / DB / internal APIs | Your Pydantic AI `@agent.tool` |
| Streaming | `agent.iter(...)` |

## Related

<CardGroup cols={2}>
  <Card title="Code Execution" icon="terminal" href="/agents/code-execution">
    Orion-2 sandbox, libraries, and model variants
  </Card>

  <Card title="Mastra Compatibility" icon="plug" href="/agents/integrations/integrations-mastra">
    Hybrid contract from a TypeScript agent
  </Card>

  <Card title="Agent Inputs" icon="file-import" href="/agents/inputs">
    Document, image, audio, and video content parts
  </Card>

  <Card title="Artifacts" icon="box-open" href="/agents/artifacts">
    Retrieve annotated images, clips, and generated files
  </Card>
</CardGroup>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.