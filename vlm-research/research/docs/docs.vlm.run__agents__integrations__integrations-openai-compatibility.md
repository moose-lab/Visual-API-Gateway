> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# OpenAI Compatibility

> Run VLM Run Agents with the OpenAI Python SDK.

Use the [OpenAI Python SDK](https://github.com/openai/openai-python) with VLM Run Agents. Set the client base URL and API key.

<Tip>VLM Agents are fully compatible with the OpenAI API. They also accept multi-modal data types OpenAI does not support. Endpoint: `https://api.vlm.run/v1/openai`.</Tip>

Create the key on the [API Keys](https://app.vlm.run/dashboard/settings/api-keys) page.

## OpenAI Client Configuration

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import openai

  client = openai.OpenAI(
      base_url="https://api.vlm.run/v1/openai",
      api_key="<VLMRUN_API_KEY>"
  )
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { OpenAI } from "openai";

  const client = new OpenAI({
      baseURL: "https://api.vlm.run/v1/openai",
      apiKey: "<VLMRUN_API_KEY>"
  });
  ```
</CodeGroup>

Or set these environment variables:

```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
export OPENAI_API_BASE="https://api.vlm.run/v1/openai"
export OPENAI_API_KEY="<VLMRUN_API_KEY>"
```

### Usage 1: Basic Chat Completion

On `client.chat.completions.create`, pass `domain` and request `metadata` in `extra_body`.

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import openai

  # Initialize the OpenAI client
  client = openai.OpenAI(
      base_url="https://api.vlm.run/v1/openai", api_key="<VLMRUN_API_KEY>"
  )

  # Example: Chat completion with an image input
  messages = [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": [
          {"type": "text", "text": "What's in this image?"},
          {"type": "image_url", "image_url": {"url": "<image_url>", "detail": "auto"}},
      ]}
  ]

  # Perform chat completion
  chat_completion = client.chat.completions.create(
      model="vlmrun-orion-1:auto",
      messages=messages,
      temperature=0,
      extra_body={"session_id": "<UUID>"},  # optional session id for persistence
  )
  print(chat_completion.choices[0].message.content)
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { OpenAI } from "openai";

  // Initialize the OpenAI client
  const client = new OpenAI({
    baseURL: "https://api.vlm.run/v1/openai",
    apiKey: "<VLMRUN_API_KEY>"
  });

  // Example: Chat completion with an image input
  const messages = [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: [
      { type: "text", text: "What's in this image?" },
      { type: "image_url", image_url: { url: "<image_url>", detail: "auto" } }
    ]}
  ];

  // Perform chat completion
  const chatCompletion = await client.chat.completions.create({
    model: "vlmrun-orion-1:auto",
    messages: messages,
    temperature: 0,
    extra_body: { session_id: "<session id>" }
  });
  console.log(chatCompletion.choices[0].message.content);
  ```
</CodeGroup>

### Usage 2: Chat Completion with Structured Outputs

<CodeGroup>
  ```python Python expandable theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import openai
  from pydantic import BaseModel, Field

  class ImageCaption(BaseModel):
      caption: str = Field(..., description="Detailed caption of the scene")
      tags: list[str] = Field(..., description="Tags that describe the image")

  # Initialize the OpenAI client
  client = openai.OpenAI(
      base_url="https://api.vlm.run/v1/openai", api_key="<VLMRUN_API_KEY>"
  )

  # Example: Chat completion with an image input
  messages = [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": [
          {"type": "text", "text": "What's in this image?"},
          {"type": "image_url", "image_url": {"url": "<image_url>", "detail": "auto"}},
      ]}
  ]

  # Perform chat completion (with JSON Schema)
  chat_completion = client.chat.completions.create(
      model="vlmrun-orion-1:auto",
      messages=messages,
      response_format={"type": "json_schema", "schema": ImageCaption.model_json_schema()},
  )
  print(chat_completion.choices[0].message.content)
  # >> {"caption": "...", "tags": [...]}
  print(ImageCaption.model_validate_json(chat_completion.choices[0].message.content))
  # >> ImageCaption(caption="...", tags=[...])
  ```

  ```typescript Node.js expandable theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { OpenAI } from "openai";
  import { z } from "zod";
  import { zodToJsonSchema } from "zod-to-json-schema";

  // Define the schema with Zod
  const ImageCaptionSchema = z.object({
    caption: z.string().describe("Detailed caption of the scene"),
    tags: z.array(z.string()).describe("Tags that describe the image")
  });

  // Initialize the OpenAI client
  const client = new OpenAI({
    baseURL: "https://api.vlm.run/v1/openai",
    apiKey: "<VLMRUN_API_KEY>"
  });

  // Example: Chat completion with an image input
  const messages = [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: [
      { type: "text", text: "What's in this image?" },
      { type: "image_url", image_url: { url: "<image_url>", detail: "auto" } }
    ]}
  ];

  // Perform chat completion (with JSON Schema)
  const chatCompletion = await client.chat.completions.create({
    model: "vlmrun-orion-1:auto",
    messages: messages,
    response_format: {
      type: "json_schema",
      schema: zodToJsonSchema(ImageCaptionSchema)
    }
  });

  // Validate the response with Zod
  const result = ImageCaptionSchema.parse(JSON.parse(chatCompletion.choices[0].message.content));
  console.log(result);
  // >> { caption: "...", tags: [...] }
  ```

  ```python Instructor theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import instructor
  from openai import OpenAI
  from pydantic import BaseModel, Field

  class ImageCaption(BaseModel):
      caption: str = Field(..., description="Detailed caption of the scene")
      tags: list[str] = Field(..., description="Tags that describe the image")

  # Initialize the Instructor client (OpenAI)
  client = instructor.from_openai(OpenAI(
      base_url="https://api.vlm.run/v1/openai", api_key="<VLMRUN_API_KEY>"
  ))

  # Define the messages
  messages = [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": [
          {"type": "text", "text": "What's in this image?"},
          {"type": "image_url", "image_url": {"url": "<image_url>", "detail": "auto"}}
      ]}
  ]

  response = client.chat.completions.create(
      model="vlmrun-orion-1:auto",
      messages=messages,
      response_model=ImageCaption,
  )
  print(response)
  # >>> ImageCaption(caption="...", tags=[...])
  ```
</CodeGroup>

### Usage 3: Basic Chat Completion with Streaming

<CodeGroup>
  ```python Python expandable theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import openai

  # Initialize the OpenAI client
  client = openai.OpenAI(
      base_url="https://api.vlm.run/v1/openai", api_key="<VLMRUN_API_KEY>"
  )

  # Define the messages
  messages = [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": [
          {"type": "text", "text": "What's in this image?"},
          {"type": "image_url", "image_url": {"url": "https://example.com/image.jpg", "detail": "auto"}}
      ]}
  ]

  # Perform chat completion (with streaming)
  chat_completion = client.chat.completions.create(
      model="vlmrun-orion-1:auto",
      messages=messages,
      temperature=0,
      stream=True,
  )
  for chunk in chat_completion:
      if chunk.choices[0].delta.content:
          print(chunk.choices[0].delta.content, end="", flush=True)
  ```

  ```typescript Node.js expandable theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { OpenAI } from "openai";

  // Initialize the OpenAI client
  const client = new OpenAI({
    baseURL: "https://api.vlm.run/v1/openai",
    apiKey: "<VLMRUN_API_KEY>"
  });

  // Define the messages
  const messages = [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: [
      { type: "text", text: "What's in this image?" },
      { type: "image_url", image_url: { url: "https://example.com/image.jpg", detail: "auto" } }
    ]}
  ];

  // Perform chat completion (with streaming)
  const stream = await client.chat.completions.create({
    model: "vlmrun-orion-1:auto",
    messages: messages,
    temperature: 0,
    stream: true
  });

  for await (const chunk of stream) {
    if (chunk.choices[0]?.delta?.content) {
      process.stdout.write(chunk.choices[0].delta.content);
    }
  }
  ```
</CodeGroup>

### Usage 4: Mixed-Modality Inputs

<CodeGroup>
  ```python Python expandable theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from pathlib import Path
  import openai
  from vlmrun.client import VLMRun

  # Initialize the VLM Run client for file uploads
  vlmrun_client = VLMRun(api_key="<VLMRUN_API_KEY>")

  # Upload an image and document to the VLM Run Agents API
  file1 = vlmrun_client.files.upload(file=Path("image.jpg"), purpose="assistants")
  file2 = vlmrun_client.files.upload(file=Path("document.pdf"), purpose="assistants")

  # Initialize the OpenAI client
  client = openai.OpenAI(
      base_url="https://api.vlm.run/v1/openai", api_key="<VLMRUN_API_KEY>"
  )

  # Perform chat completion (with mixed-modality inputs)
  chat_completion = client.chat.completions.create(
      model="vlmrun-orion-1:auto",
      messages=[
          {"role": "user", "content": [
              {"type": "text", "text": "What's in this image and document?"},
              {"type": "input_file", "file_id": file1.id},
              {"type": "input_file", "file_id": file2.id},
          ]}
      ],
  )
  ```

  ```typescript Node.js expandable theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { OpenAI } from "openai";
  import fs from "fs";

  // Initialize the OpenAI client
  const client = new OpenAI({
    baseURL: "https://api.vlm.run/v1/openai",
    apiKey: "<VLMRUN_API_KEY>"
  });

  // Upload an image and document to the VLM Run Agents API
  const file1 = await client.files.create({
    file: fs.createReadStream("image.jpg"),
    purpose: "assistants"
  });
  const file2 = await client.files.create({
    file: fs.createReadStream("document.pdf"),
    purpose: "assistants"
  });

  // Perform chat completion (with mixed-modality inputs)
  const chatCompletion = await client.chat.completions.create({
    model: "vlmrun-orion-1:auto",
    messages: [
      { role: "user", content: [
        { type: "text", text: "What's in this image and document?" },
        { type: "input_file", file_id: file1.id },
        { type: "input_file", file_id: file2.id }
      ]}
    ]
  });
  ```
</CodeGroup>

## Extra Body

`extra_body.vlmrun` holds request metadata outside the OpenAI SDK. Examples include `allow_training` and `environment`.

<CodeGroup>
  ```python Python expandable theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import openai

  client = openai.OpenAI(
      base_url="https://api.vlm.run/v1/openai", api_key="<VLMRUN_API_KEY>"
  )

  chat_completion = client.chat.completions.create(
      model="vlmrun-orion-1:auto",
      messages=[
        { role: "user", content: "What's the capital of France?" }
      ],
      temperature=0,
      extra_body={
          "vlmrun": {
              "metadata": {
                  "environment": "dev",
                  "allow_retention": False,
              },
          }
      }
  )
  ```

  ```typescript Node.js expandable theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { OpenAI } from "openai";

  const client = new OpenAI({
    baseURL: "https://api.vlm.run/v1/openai",
    apiKey: "<VLMRUN_API_KEY>"
  });

  const chatCompletion = await client.chat.completions.create({
    model: "vlmrun-orion-1:auto",
    messages: [
      { role: "user", content: "What's the capital of France?" }
    ],
    temperature: 0,
    extra_body: {
      vlmrun: {
        metadata: {
          environment: "dev",
          allow_retention: false
        }
      }
    }
  });
  ```
</CodeGroup>

## Request Metadata

<Tip>
  See [Request Metadata](/api-reference/v1/post-agent-execute#body-metadata).
</Tip>

Send these fields in `extra_body.vlmrun.metadata`.

<Accordion title="Request Metadata Fields">
  | Field | Behavior | Default |
  | - | - | - |
  | `environment` | `dev`, `staging`, or `prod`. Tracks the request environment. | `prod` |
  | `session_id` | Required UUID string (36 characters). Tracks the session. | |
  | `allow_training` | `true`: the request may train base models. `false`: inference only. | `true` |
  | `allow_retention` | `true`: the request may be retained. `false`: inference only. | `true` |
  | `allow_logging` | `true`: the request may be logged. `false`: inference only. | `true` |
  | `extra` | Dictionary of extra metadata for the request. | |
</Accordion>

<CodeGroup>
  ```python Python expandable theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import openai

  client = openai.OpenAI(
      base_url="https://api.vlm.run/v1/openai", api_key="<VLMRUN_API_KEY>"
  )

  chat_completion = client.chat.completions.create(
      model="vlmrun-orion-1:auto",
      messages=[
        { role: "user", content: "What's the capital of France?" }
      ],
      temperature=0,
      extra_body={
          "vlmrun": {
              "domain": "...",
              "metadata": {
                  "environment": "dev",
                  "session_id": "...",
                  "allow_training": False,
              }
          }
      }
  )
  ```

  ```typescript Node.js expandable theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { OpenAI } from "openai";

  const client = new OpenAI({
    baseURL: "https://api.vlm.run/v1/openai",
    apiKey: "<VLMRUN_API_KEY>"
  });

  const chatCompletion = await client.chat.completions.create({
    model: "vlmrun-orion-1:auto",
    messages: [
      { role: "user", content: "What's the capital of France?" }
    ],
    temperature: 0,
    extra_body: {
      vlmrun: {
        domain: "...",
        metadata: {
          environment: "dev",
          session_id: "...",
          allow_training: false
        }
      }
    }
  });
  ```
</CodeGroup>

## Token Usage

Each response includes usage statistics. See [VLM Run Pricing](https://vlm.run/#pricing).

## Compatibility Differences

* `messages` can include `input_file` objects `{"type": "input_file", "file_id": "<file_id>"}`. `file_id` is the id of a file uploaded to the VLM Run Agents API. Use this for large files such as videos and images.
* `max_tokens` on `chat.completions.create` is not respected. If the output exceeds the limit, the server still returns the full output.
* `logprobs`, `logit_bias`, `top_logprobs`, `presence_penalty`, `frequency_penalty`, `n`, `stream`, `stop` are not supported.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.