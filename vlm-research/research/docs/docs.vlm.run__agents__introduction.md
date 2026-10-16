> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Introduction

> Orion is a visual agent: it plans, runs vision tools, and returns the result.

<Frame caption="Orion architecture for visual understanding, reasoning, and action.">
  <img src="https://mintcdn.com/autonomiai/8ymL7yyXv_4QkO9f/images/vlmrun-orion-arch.png?fit=max&auto=format&n=8ymL7yyXv_4QkO9f&q=85&s=dfb272709c57c97d9d536bd20dd682a9" width="100%" data-path="images/vlmrun-orion-arch.png" />
</Frame>

## What is Orion?

Orion is VLM Run's visual agent. It sees, reasons, and acts. You describe the outcome in plain language and attach images, documents, video, or audio. Orion plans the steps, runs the right vision tools, and returns the result as structured JSON or as a new image, video, or document.

* **Sees:** reads pixels with dedicated vision models, including detection, segmentation, and specialized document OCR VLMs. It does not guess from a caption.
* **Reasons:** decides which tools to run and in what order.
* **Acts:** runs the tools and hands back something you can use: validated JSON, a cropped or redacted image, a generated video.

A chat model describes a picture. Orion acts on it. It reads the invoice, detects and crops the part, redacts the faces, or traces an object across a video.

Orion comes in two generations:

* **[`vlmrun-orion-1`](/agents/agent-chat-completions):** our first visual agent, released in November 2025. It calls one tool at a time.
* **[`vlmrun-orion-2`](/agents/code-execution):** our second generation. It writes and runs code, so one program runs a whole pipeline. It is faster, cheaper, and more capable, with high reliability and repeatability.

<Tip>
  Try an agent at [chat.vlm.run](https://chat.vlm.run).
</Tip>

## What Orion does

Orion runs real vision tools. The [toolsets](/agents/toolsets) cover:

* **Documents:** [layout detection](/agents/capabilities/document/layout-understanding), [visual grounding](/agents/capabilities/document/visual-grounding), and [multi-page analysis](/agents/capabilities/document/multi-page-analysis).
* **Images:** [caption and tag](/agents/capabilities/image/captioning), [detection](/agents/capabilities/image/detection), [segmentation](/agents/capabilities/image/segmentation), [pointing](/agents/capabilities/image/pointing), and [UI parsing](/agents/capabilities/image/ui-parsing).
* **Video:** [caption and tag](/agents/capabilities/video/captioning) and [video tools](/agents/capabilities/video/tools).
* **Create and edit:** [generate and edit images](/agents/capabilities/image/generation), [crop, rotate, upscale, and colorize](/agents/capabilities/image/tools), and [generate video](/agents/capabilities/video/generation).
* **Structured output:** [JSON that validates against your schema](/agents/structured-responses), and [artifacts](/agents/artifacts) for generated files.

## Agents Supported

* [`vlmrun-orion-2`](/agents/code-execution): writes and runs code in a sandbox.
* [`vlmrun-orion-1`](/agents/agent-chat-completions): calls tools with structured tool calls.

| Agent | How it works | Use it for |
| - | - | - |
| [`vlmrun-orion-2`](/agents/code-execution) | Turns the request into one Python program and runs it in a sandbox. Independent calls run in parallel, and it retries until the code finishes. | Multi-step pipelines, such as detect, crop, and annotate in one turn. The default. |
| [`vlmrun-orion-1`](/agents/agent-chat-completions) | Calls one tool per model round-trip. | A single tool call, or an existing integration. |

Each agent has three variants. Address one as `vlmrun-orion-2:<variant>`.

* `fast`: speed and cost. Lighter models for short, simple workflows.
* `auto`: the default. Picks the model, tool, and thinking budget from the task.
* `pro`: maximum quality. A high thinking budget for long pipelines and tool trajectories.

Orion-2 also takes pinned backends: `vlmrun-orion-2:qwen3.6-35b-a3b`, `vlmrun-orion-2:gemma4-26b-a4b`, `vlmrun-orion-2:kimi-2.6`, `vlmrun-orion-2:gpt-5.5`, and `vlmrun-orion-2:claude-opus-4.8`. Prices are on [Pricing](/pricing).

## How it works

1. **You ask.** Send a request in natural language with your media. See [inputs](/agents/inputs).
2. **Orion plans.** The agent picks the tools and the order.
3. **Orion runs the tools.** OCR, detection, segmentation, and the rest run as tools and return exact results.
4. **You get the result.** Text, validated JSON, or generated files.

```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
from vlmrun.client import VLMRun

client = VLMRun(api_key="<VLMRUN_API_KEY>")

response = client.agent.completions.create(
    model="vlmrun-orion-2:auto",
    messages=[{"role": "user", "content": [
        {"type": "text", "text": "Detect the car and describe its color."},
        {"type": "image_url", "image_url": {"url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/image.caption/car.jpg"}},
    ]}],
)
print(response.choices[0].message.content)
```

## Next

Start with `vlmrun-orion-2:auto`. Keep Orion-1 for a single tool call or an existing integration.

* [Code Execution](/agents/code-execution): when to use Orion-2, and how it runs.
* [Chat](https://chat.vlm.run): try an agent in the browser.
* [SDK](/sdk-reference/components/agent): call an agent from code.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.