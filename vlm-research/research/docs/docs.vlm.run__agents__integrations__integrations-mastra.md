> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Mastra Compatibility

> Use Orion-2 with Mastra and hybrid client tools.

Point a [Mastra](https://mastra.ai/) `Agent` at the VLM Run OpenAI-compatible chat endpoint.

## Quick start

```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
npm install @mastra/core @ai-sdk/openai-compatible zod
export VLMRUN_API_KEY="<VLMRUN_API_KEY>"
```

```typescript theme={"theme":{"light":"github-light","dark":"dark-plus"}}
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { Agent } from "@mastra/core/agent";
import { createTool } from "@mastra/core/tools";
import { z } from "zod";

const vlmrun = createOpenAICompatible({
  name: "vlmrun",
  baseURL: "https://api.vlm.run/v1/openai",
  apiKey: process.env.VLMRUN_API_KEY!,
});

const lookupPurchaseOrder = createTool({
  id: "lookup_purchase_order",
  description: "Return the purchase order your ERP has on file for an invoice number",
  inputSchema: z.object({ invoiceNumber: z.string() }),
  execute: async ({ context }) => ({
    invoiceNumber: context.invoiceNumber,
    poNumber: "PO-4417",
    total: 4560.0,
  }),
});

const agent = new Agent({
  id: "orion2-mastra-agent",
  name: "Orion-2 Mastra Agent",
  model: vlmrun.chatModel("vlmrun-orion-2:auto"),
  tools: { lookupPurchaseOrder },
  instructions:
    "Use execute_code for attached documents, images, audio, or video. " +
    "Call lookup_purchase_order only when asked to reconcile an invoice. " +
    "Never invent field values.",
});

const runOptions = () => ({
  providerOptions: {
    vlmrun: {
      session_id: crypto.randomUUID(),
      tool_execution: "hybrid",
    },
  },
});
```

| Setting | Why |
| - | - |
| `tool_execution: "hybrid"` | Orion-2 runs `execute_code`; client tools pause back to Mastra |
| `session_id` | Fresh UUID per turn for workspace / [artifacts](/agents/artifacts) |
| URLs in the prompt | AI SDK OpenAI-compatible only forwards image file parts; put PDF / audio / video URLs in the prompt text so Orion-2 can download them |

`providerOptions.vlmrun` is merged into the chat-completions body.
The provider name must match `createOpenAICompatible({ name: "vlmrun" })`.

<Info>
  Use `vlmrun-orion-2:auto` for the default tier. Other variants are listed in [Code Execution](/agents/code-execution#model-variants). Get an API key from [API Keys](https://app.vlm.run/dashboard/settings/api-keys).
</Info>

## Examples

Use the same agent and `runOptions()` for each call.
Some VLM Run keys only allow `stream=True`.

### Document

```typescript theme={"theme":{"light":"github-light","dark":"dark-plus"}}
const INVOICE =
  "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.invoice/wordpress-pdf-invoice-plugin-sample.pdf";

const out = await agent.stream(
  `Extract vendor, invoice number, date, and total from ${INVOICE}.`,
  runOptions(),
);
console.log(await out.text);
```

### Image

```typescript theme={"theme":{"light":"github-light","dark":"dark-plus"}}
const DONUTS =
  "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/image.object-detection/donuts.png";

const out = await agent.stream(
  `Count the donuts and briefly describe the image: ${DONUTS}`,
  runOptions(),
);
console.log(await out.text);
```

### Audio

```typescript theme={"theme":{"light":"github-light","dark":"dark-plus"}}
const AUDIO =
  "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/audio.transcription-summary/two_minute_rules.mp3";

const out = await agent.stream(
  `Summarize this audio in 2 sentences: ${AUDIO}`,
  runOptions(),
);
console.log(await out.text);
```

### Video

```typescript theme={"theme":{"light":"github-light","dark":"dark-plus"}}
const VIDEO =
  "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/video.transcription/bakery.mp4";

const out = await agent.stream(
  `Describe this video in 2 sentences: ${VIDEO}`,
  runOptions(),
);
console.log(await out.text);
```

### Hybrid: extract + local ERP tool

```typescript theme={"theme":{"light":"github-light","dark":"dark-plus"}}
const out = await agent.stream(
  `Extract the invoice number and total from ${INVOICE} with execute_code. ` +
    "Then call lookup_purchase_order once and say if the totals match.",
  runOptions(),
);
console.log(await out.text);
```

## What runs where

| Capability | Who runs it |
| - | - |
| Document / image / audio / video | Orion-2 (`execute_code`) |
| ERP / DB / internal APIs | Your Mastra `createTool` |
| Streaming | `agent.stream(...)` (see video example) |

## Related

<CardGroup cols={2}>
  <Card title="Code Execution" icon="terminal" href="/agents/code-execution">
    Orion-2 sandbox, libraries, and model variants
  </Card>

  <Card title="Pydantic AI Compatibility" icon="code" href="/agents/integrations/integrations-pydantic-ai">
    The same hybrid contract from a Python agent
  </Card>

  <Card title="Agent Inputs" icon="file-import" href="/agents/inputs">
    Document, image, audio, and video content parts
  </Card>

  <Card title="Artifacts" icon="box-open" href="/agents/artifacts">
    Retrieve annotated images, clips, and generated files
  </Card>
</CardGroup>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.