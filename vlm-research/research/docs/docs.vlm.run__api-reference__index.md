> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Overview

The **VLM Run API** is a unified platform for production-ready multimodal AI. Use it to extract structured data from documents, images, videos, and audio, or run complex multi-step workflows with visual agents.

* **Base URL**: `https://api.vlm.run/v1`
* **Authentication**: `Authorization: Bearer <VLMRUN_API_KEY>`
* **Agents Supported**:
  * [`vlmrun-orion-2`](/agents/code-execution): Our second-generation visual agent. It adds code execution, and is faster, cheaper, and more capable, with high reliability and repeatability.
  * [`vlmrun-orion-1`](/agents/agent-chat-completions): Our first visual agent (November 2025). It sees, reasons, and acts with detection, segmentation, and specialized document OCR VLMs.
* **Variants**: `fast`, `auto`, and `pro`, for example `vlmrun-orion-2:auto`.

<Tip>Access your [API keys](https://app.vlm.run/dashboard/settings/api_keys) in our dashboard.</Tip>

<Card title="Need OCR, VQA, or detection models?" icon="network-wired" href="/gateway/quickstart" horizontal>
  Call them through the Gateway: one OpenAI-compatible API and one key for every visual model. This reference covers the Orion agents.
</Card>

## Chat Completions & Agent Executions

Use the [Chat Completions](/api-reference/v1/post-chat-completions) endpoint for interactive multi-modal conversations, or the [Agent Executions](/api-reference/v1/get-agent-executions) endpoint for batch execution workflows.

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.client import VLMRun

  # Initialize the VLM Run client
  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  # Create a chat completion
  response = client.agent.completions.create(
      model="vlmrun-orion-2:auto",
      messages=[
          {
              "role": "user",
              "content": [
                  {"type": "text", "text": "What do you see in this image?" },
                  {"type": "image_url", "image_url": {"url": "https://example.com/image.jpg"}}
              ]
          }
      ],
      max_tokens=1000
  )
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { VlmRun } from "vlmrun";

  // Initialize the VLM Run client
  const client = new VlmRun({
    apiKey: "<VLMRUN_API_KEY>"
  });

  // Create a chat completion
  const response = await client.agent.completions.create({
    model: "vlmrun-orion-2:auto",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "What do you see in this image?" },
          { type: "image_url", image_url: { url: "https://example.com/image.jpg" } }
        ]
      }
    ],
    max_tokens: 1000
  });
  console.log(response.choices[0].message.content);
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  vlmrun chat "What do you see in this image?" -i image.jpg -m vlmrun-orion-2:auto
  ```

  ```curl cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl -X POST https://api.vlm.run/v1/openai/chat/completions \
    -H "Authorization: Bearer $VLMRUN_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "model": "vlmrun-orion-2:auto",
      "messages": [
        {
          "role": "user",
          "content": [
            { "type": "text", "text": "What do you see in this image?" },
            { "type": "image_url", "image_url": {"url": "https://example.com/image.jpg"}}
          ]
        }
      ],
      "max_tokens": 1000
    }'
  ```
</CodeGroup>

## Next steps

<CardGroup cols={2}>
  <Card title="Orion Introduction" icon="robot" href="/agents/introduction">
    What the agents are, and which one to pick.
  </Card>

  <Card title="Chat Completions" icon="comments" href="/api-reference/v1/post-chat-completions">
    Send a multi-modal conversation to an agent.
  </Card>

  <Card title="Execute Agent" icon="play" href="/api-reference/v1/post-agent-execute">
    Run a saved agent on a file and poll for the result.
  </Card>

  <Card title="Upload File" icon="upload" href="/api-reference/v1/files/post-file-upload">
    Upload media once and reuse it by file ID.
  </Card>

  <Card title="Skills" icon="wand-magic-sparkles" href="/api-reference/v1/skills/get-skills-list">
    Reusable, domain-specific skills for your agents.
  </Card>

  <Card title="Gateway" icon="network-wired" href="/gateway/quickstart">
    OCR, VQA, detection, and segmentation models behind one API.
  </Card>
</CardGroup>

## Legacy API

Looking for the `vlm-1` API? [Click here](/api-reference/structured-extraction?legacy=1).


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.