> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Quickstart

> Prerequisites and first requests for VQA, video Q&A, and document OCR

Install the CLI, point any OpenAI SDK at `https://gateway.vlm.run/v1/openai`, or add the [`vlmrun-gw`](/gateway/skills) skill.

## Prerequisites

<CodeGroup>
  ```bash Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  pip install openai
  ```

  ```bash Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  npm install openai
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  pip install -U vlmrun
  ```
</CodeGroup>

```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
export VLMRUN_API_KEY="your-api-key"
```

<Note>
  The base URL is `https://gateway.vlm.run/v1/openai`. Send `Authorization: Bearer <VLMRUN_API_KEY>`, or omit the header for anonymous access. For details, see [Authentication](/gateway/authentication) and [Rate Limits](/gateway/rate-limits).
</Note>

<Tabs>
  <Tab title="Visual Q&A" id="visual-qa">
    Send a question with an optional image. To see which models you can call, browse the [model catalog](https://vlm.run/gateway/models).

    <CodeGroup>
      ```python Python [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      from openai import OpenAI

      client = OpenAI(
          base_url="https://gateway.vlm.run/v1/openai",
          api_key="<VLMRUN_API_KEY>",
      )

      response = client.chat.completions.create(
          model="qwen/qwen3.5-0.8b",
          messages=[
              {
                  "role": "user",
                  "content": [
                      {"type": "text", "text": "What is happening in this image?"},
                      {
                          "type": "image_url",
                          "image_url": {
                              "url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/image.generation/sf-golden-gate.jpg",
                          },
                      },
                  ],
              }
          ],
      )

      print(response.choices[0].message.content)
      ```

      ```typescript Node.js [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      import OpenAI from "openai";

      const client = new OpenAI({
        baseURL: "https://gateway.vlm.run/v1/openai",
        apiKey: process.env.VLMRUN_API_KEY,
      });

      const response = await client.chat.completions.create({
        model: "qwen/qwen3.5-0.8b",
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: "What is happening in this image?" },
              {
                type: "image_url",
                image_url: {
                  url: "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/image.generation/sf-golden-gate.jpg",
                },
              },
            ],
          },
        ],
      });

      console.log(response.choices[0].message.content);
      ```

      ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      vlmrun gw chat https://storage.googleapis.com/vlm-data-public-prod/hub/examples/image.generation/sf-golden-gate.jpg \
        -p "What is happening in this image?" \
        -m qwen/qwen3.5-0.8b
      ```

      ```bash cURL [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      curl https://gateway.vlm.run/v1/openai/chat/completions \
        -X POST \
        -H "Authorization: Bearer $VLMRUN_API_KEY" \
        -H "Content-Type: application/json" \
        -d '{
          "model": "qwen/qwen3.5-0.8b",
          "messages": [
            {
              "role": "user",
              "content": [
                { "type": "text", "text": "What is happening in this image?" },
                {
                  "type": "image_url",
                  "image_url": {
                    "url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/image.generation/sf-golden-gate.jpg"
                  }
                }
              ]
            }
          ]
        }'
      ```
    </CodeGroup>

    Chat models return the reply verbatim, with no envelope.
  </Tab>

  <Tab title="Video Q&A" id="video-qa">
    Send a question with a hosted video URL. `video_fps` and `video_max_frames` set frame sampling. For every video option, see [Video Inputs](/gateway/multimodal-inputs#video-inputs).

    <CodeGroup>
      ```python Python [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      from openai import OpenAI

      client = OpenAI(
          base_url="https://gateway.vlm.run/v1/openai",
          api_key="<VLMRUN_API_KEY>",
      )

      response = client.chat.completions.create(
          model="qwen/qwen3.5-0.8b",
          messages=[
              {
                  "role": "user",
                  "content": [
                      {"type": "text", "text": "Summarize what happens in this video."},
                      {
                          "type": "video_url",
                          "video_url": {
                              "url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/video.transcription/bakery.mp4",
                          },
                      },
                  ],
              }
          ],
          extra_body={"video_fps": 1.0, "video_max_frames": 8},
      )

      print(response.choices[0].message.content)
      ```

      ```typescript Node.js [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      import OpenAI from "openai";

      const client = new OpenAI({
        baseURL: "https://gateway.vlm.run/v1/openai",
        apiKey: process.env.VLMRUN_API_KEY,
      });

      const response = await client.chat.completions.create({
        model: "qwen/qwen3.5-0.8b",
        messages: [
          {
            role: "user",
            content: [
              { type: "text", text: "Summarize what happens in this video." },
              {
                type: "video_url",
                video_url: {
                  url: "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/video.transcription/bakery.mp4",
                },
              },
            ],
          },
        ],
        video_fps: 1.0,
        video_max_frames: 8,
      });

      console.log(response.choices[0].message.content);
      ```

      ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      vlmrun gw chat https://storage.googleapis.com/vlm-data-public-prod/hub/examples/video.transcription/bakery.mp4 \
        -p "Summarize what happens in this video." \
        -m qwen/qwen3.5-0.8b \
        -e video_fps=1.0 \
        -e video_max_frames=8
      ```

      ```bash cURL [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      curl https://gateway.vlm.run/v1/openai/chat/completions \
        -X POST \
        -H "Authorization: Bearer $VLMRUN_API_KEY" \
        -H "Content-Type: application/json" \
        -d '{
          "model": "qwen/qwen3.5-0.8b",
          "video_fps": 1.0,
          "video_max_frames": 8,
          "messages": [
            {
              "role": "user",
              "content": [
                { "type": "text", "text": "Summarize what happens in this video." },
                {
                  "type": "video_url",
                  "video_url": {
                    "url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/video.transcription/bakery.mp4"
                  }
                }
              ]
            }
          ]
        }'
      ```
    </CodeGroup>
  </Tab>

  <Tab title="Document OCR" id="document-and-image-ocr">
    * PDF: `document_url`.
    * Image: `image_url`.
    * Start with `paddlepaddle/paddleocr-vl-1.6` for general-purpose OCR.
    * `method`: `ocr` (plain text) or `markdown`.

    <CodeGroup>
      ```python Python [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      from openai import OpenAI

      client = OpenAI(
          base_url="https://gateway.vlm.run/v1/openai",
          api_key="<VLMRUN_API_KEY>",
      )

      response = client.chat.completions.create(
          model="paddlepaddle/paddleocr-vl-1.6",
          messages=[
              {
                  "role": "user",
                  "content": [
                      {
                          "type": "document_url",
                          "document_url": {
                              "url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/finance.sec-filings/tsla-8k.pdf"
                          },
                      }
                  ],
              }
          ],
          extra_body={
              "method": "ocr",
              "document_dpi": 96,
          },
      )

      print(response.choices[0].message.content)
      ```

      ```typescript Node.js [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      import OpenAI from "openai";

      const client = new OpenAI({
        baseURL: "https://gateway.vlm.run/v1/openai",
        apiKey: process.env.VLMRUN_API_KEY,
      });

      const response = await client.chat.completions.create({
        model: "paddlepaddle/paddleocr-vl-1.6",
        messages: [
          {
            role: "user",
            content: [
              {
                type: "document_url",
                document_url: {
                  url: "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/finance.sec-filings/tsla-8k.pdf",
                },
              },
            ],
          },
        ],
        method: "ocr",
        document_dpi: 96,
      });

      console.log(response.choices[0].message.content);
      ```

      ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      vlmrun gw chat https://storage.googleapis.com/vlm-data-public-prod/hub/examples/finance.sec-filings/tsla-8k.pdf \
        -m paddlepaddle/paddleocr-vl-1.6 \
        --method ocr \
        -e document_dpi=96
      ```

      ```bash cURL [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      curl https://gateway.vlm.run/v1/openai/chat/completions \
        -X POST \
        -H "Authorization: Bearer $VLMRUN_API_KEY" \
        -H "Content-Type: application/json" \
        -d '{
          "model": "paddlepaddle/paddleocr-vl-1.6",
          "method": "ocr",
          "document_dpi": 96,
          "messages": [
            {
              "role": "user",
              "content": [
                {
                  "type": "document_url",
                  "document_url": {
                    "url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/finance.sec-filings/tsla-8k.pdf"
                  }
                }
              ]
            }
          ]
        }'
      ```
    </CodeGroup>

    The reply is one `<document>` block. Each page is one `<page>` block. `format` is the payload kind:

    ```text theme={"theme":{"light":"github-light","dark":"dark-plus"}}
    <document file_name="tsla-8k.pdf" file_hash="sha256:1b7f04c3…" file_bytes="48213" mimetype="application/pdf" npages="5" dpi="96">
    <page id="0" format="markdown" width="816" height="1056">
    UNITED STATES
    SECURITIES AND EXCHANGE COMMISSION
    WASHINGTON, DC 20549

    FORM 8-K
    </page>
    </document>
    ```

    `response_format={"type": "json_object"}` returns one JSON object. The CLI equivalent is `--json-mode`. For the response contract, see [Response Formats](/gateway/response-formats). To build a full document pipeline, see [Document OCR](/gateway/guides/document-ocr).
  </Tab>
</Tabs>

## Use with a coding agent

Install the [`vlmrun-gw` skill](/gateway/skills) so your agent calls the Gateway for you.

```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
npx skills add vlm-run/skills@vlmrun-gw
```

Or point it at [skill.md](https://vlm.run/gateway/skill.md) for one session.

```text theme={"theme":{"light":"github-light","dark":"dark-plus"}}
https://vlm.run/gateway/skill.md
```

## Next steps

You can call the same models from the [Python SDK](/sdk-reference/components/gateway) and [Node.js SDK](/sdk-reference/node/components/gateway) through `client.gateway`. From the command line, use [`vlmrun gw`](/cli/gateway), which includes `gw models`, `gw embed`, and `gw transcribe`.

<CardGroup cols={2}>
  <Card title="Document OCR" icon="file-lines" href="/gateway/guides/document-ocr">
    Request knobs, page blocks, and streaming for PDFs.
  </Card>

  <Card title="Models" icon="table-list" href="/gateway/models">
    Browse the catalog and each model's capabilities.
  </Card>

  <Card title="Chat Completions API" icon="code" href="/gateway/api-reference/post-chat-completions">
    Request parameters and response schema.
  </Card>

  <Card title="Node.js SDK" icon="node-js" href="/sdk-reference/node/components/gateway">
    `client.gateway` on the `vlmrun` package.
  </Card>

  <Card title="MCP Server" icon="plug" href="/gateway/mcp-server">
    Read tools for documents, audio, and video.
  </Card>
</CardGroup>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.