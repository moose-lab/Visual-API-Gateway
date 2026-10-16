> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Introduction

> The open-weight visual intelligence platform you can own, behind one OpenAI-compatible API.

Visual intelligence is fragmented today. OCR, layout, detection, segmentation, pose, and transcription models each ship their own input format, output schema, and pricing.

The Gateway is an open-weight visual intelligence platform you can own. Call open-weight VLMs, ViT models, and other specialized vision models through one OpenAI-compatible API, swap models by changing `model`, and run them on our GPUs or yours. We orchestrate the models, keep the GPUs busy, and benchmark the VLMs, so you can ship the pipeline. Start with the [quickstart](/gateway/quickstart).

<Frame>
  <video className="hero-video" src="https://www.vlm.run/videos/gateway-launch.mp4" autoPlay muted loop playsInline controls />
</Frame>

## Unified Interface for Visual Intelligence

<CodeGroup>
  ```python Python highlight={4} theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from openai import OpenAI

  client = OpenAI(
      base_url="https://gateway.vlm.run/v1/openai",
      api_key="sk-...",
  )
  ```

  ```typescript Node.js highlight={4} theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import OpenAI from "openai";

  const client = new OpenAI({
    baseURL: "https://gateway.vlm.run/v1/openai",
    apiKey: "sk-...",
  });
  ```

  ```go Go highlight={10} theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  package main

  import (
  	"github.com/openai/openai-go"
  	"github.com/openai/openai-go/option"
  )

  func main() {
  	client := openai.NewClient(
  		option.WithBaseURL("https://gateway.vlm.run/v1/openai/"),
  		option.WithAPIKey("sk-..."),
  	)
  	_ = client
  }
  ```

  ```rust Rust highlight={6} theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  // Cargo.toml: async-openai = { version = "0.42", features = ["chat-completion"] }
  use async_openai::{config::OpenAIConfig, Client};

  fn main() {
      let config = OpenAIConfig::new()
          .with_api_base("https://gateway.vlm.run/v1/openai")
          .with_api_key("sk-...");
      let _client = Client::with_config(config);
  }
  ```

  ```ruby Ruby highlight={4} theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  require "openai"

  client = OpenAI::Client.new(
    base_url: "https://gateway.vlm.run/v1/openai",
    api_key: "sk-..."
  )
  ```
</CodeGroup>

Point any OpenAI client at the base URL and send your API key. Each response reports its cost in `usage.cost`. See [Pricing](/gateway/pricing) and [Rate limits](/gateway/rate-limits).

## Why the Gateway

* **Build on open-weight models:** No vendor or frontier-model lock-in. Swap open-weight VLMs, ViT models, and other specialized vision models by changing `model`, and compare output and cost side by side. See [Models](/gateway/models).
* **Our GPUs or yours:** Use these models on our GPUs with no hardware to provision, at a published rate on the live [model catalog](/gateway/api-reference/get-models). Or deploy the same models onto your own GPUs with our platform.
* **Uncompromised quality:** We are not another LLM serving provider. Each model is tuned and checked for visual quality. The aim is the best quality per dollar for vision.
* **Orchestration built-in:** Worker parallelism, retries, failure handling, GPU utilization, and response healing run on our side, not in your code. Multi-page PDFs are rasterized and fanned out per page, with no splitting or stitching.
* **Agent ready:** The [MCP server](/gateway/mcp-server) exposes file-reading tools to any MCP-aware framework. [System One](/gateway/system-one) answers typed questions in one read.

## Next steps

<CardGroup cols={2}>
  <Card title="Quickstart" icon="rocket" href="/gateway/quickstart">
    Make your first VQA and document OCR requests.
  </Card>

  <Card title="Chat Completions" icon="comments" href="/gateway/openai-compatibility">
    OpenAI-compatible chat for general visual intelligence: VQA, OCR, detection, segmentation, and pose.
  </Card>

  <Card title="System One" icon="scale-balanced" href="/gateway/system-one">
    TypeSafe-compatible decision API for low-latency, calibrated answers over text, JSON, images, and PDFs.
  </Card>

  <Card title="MCP Server" icon="plug" href="/gateway/mcp-server">
    File-reading tools for any MCP-aware agent, such as Pydantic AI, LangChain, Mastra, and Claude Code.
  </Card>

  <Card title="VLMs" icon="table-list" href="/gateway/models">
    Browse the open-weight VLMs and vision models you can call.
  </Card>

  <Card title="Pricing" icon="dollar-sign" href="/gateway/pricing">
    Per-token rates and per-request `usage.cost`.
  </Card>
</CardGroup>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.