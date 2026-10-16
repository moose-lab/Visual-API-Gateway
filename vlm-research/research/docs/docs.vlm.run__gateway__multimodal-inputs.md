> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Supported Inputs

> Content part types, per-modality limits, and format tradeoffs

Every Gateway model reads one or more kinds of input: text, images, PDFs, video, or audio. Which kinds a model accepts, and how large they can be, decides which model you pick and how you send the request. This page lists the accepted inputs, their limits, and when to send a URL instead of base64.

* **One message shape:** every input is a content part under `messages[].content`, the same as OpenAI SDKs.
* **Per-model support:** a part the model cannot read returns `400` before inference.
* **Limits:** documents cap at 256 MB and 128 pages. Video sampling is tunable.

Each part is one of:

| Part | Accepts | Notes |
| - | - | - |
| `text` | Plain text | Prompt or question text. |
| `image_url` | `url` or base64 data URI | Single image per request for OCR models; VQA models accept multiple |
| `document_url` | `url` or base64 data URI | PDF; enters the page-wise document pipeline |
| `file_url` | Same as `document_url` | Accepted as an alias of `document_url` for PDF inputs. |
| `video_url` | `url` | One video per request. See [Video inputs](#video-inputs). |

The Gateway validates each part against the model's capabilities before inference. A mismatch returns `400` with [`capability_violation`](/gateway/error-codes#capability-violation-400). Accepted input types are on [Models](/gateway/models) and [`GET /v1/openai/models`](/gateway/api-reference/get-models).

<Tabs>
  <Tab title="Single image" id="image-inputs">
    Most OCR and vision models accept one `image_url` per request.

    <CodeGroup>
      ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      from openai import OpenAI

      client = OpenAI(
          base_url="https://gateway.vlm.run/v1/openai",
          api_key="<VLMRUN_API_KEY>",
      )
      response = client.chat.completions.create(
          model="qwen/qwen3.5-0.8b",
          messages=[{"role": "user", "content": [
              {"type": "text", "text": "Describe this image."},
              {"type": "image_url", "image_url": {
                  "url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/image.caption/car.jpg",
                  # Optional: "auto" (default), "low", or "high".
                  # "detail": "high",
              }},
          ]}],
      )
      print(response.choices[0].message.content)
      ```

      ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      import OpenAI from "openai";

      const client = new OpenAI({
        baseURL: "https://gateway.vlm.run/v1/openai",
        apiKey: process.env.VLMRUN_API_KEY,
      });
      const response = await client.chat.completions.create({
        model: "qwen/qwen3.5-0.8b",
        messages: [{ role: "user", content: [
          { type: "text", text: "Describe this image." },
          { type: "image_url", image_url: {
            url: "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/image.caption/car.jpg",
            // Optional: "auto" (default), "low", or "high".
            // detail: "high",
          } },
        ] }],
      });
      console.log(response.choices[0].message.content);
      ```
    </CodeGroup>

    `image_url.detail` accepts `auto`, `low`, or `high` for OpenAI SDK compatibility. Set `image_resolution` to resize the image before inference when the model's default resolution costs more than the task needs. See [Gateway extensions](/gateway/extra-kwargs).
  </Tab>

  <Tab title="Multiple images" id="multi-image-inputs">
    VQA models such as `qwen/qwen3.5-0.8b` and `qwen/qwen3.8-27b` accept several `image_url` parts in one message. Add one part per image.

    <CodeGroup>
      ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      from openai import OpenAI

      client = OpenAI(
          base_url="https://gateway.vlm.run/v1/openai",
          api_key="<VLMRUN_API_KEY>",
      )
      response = client.chat.completions.create(
          model="qwen/qwen3.8-27b",
          messages=[{"role": "user", "content": [
              {"type": "text", "text": "What is different between these two images?"},
              {"type": "image_url", "image_url": {"url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/image.caption/car.jpg"}},
              {"type": "image_url", "image_url": {"url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.receipt/playground/2.jpg"}},
          ]}],
      )
      print(response.choices[0].message.content)
      ```

      ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      import OpenAI from "openai";

      const client = new OpenAI({
        baseURL: "https://gateway.vlm.run/v1/openai",
        apiKey: process.env.VLMRUN_API_KEY,
      });
      const response = await client.chat.completions.create({
        model: "qwen/qwen3.8-27b",
        messages: [{ role: "user", content: [
          { type: "text", text: "What is different between these two images?" },
          { type: "image_url", image_url: { url: "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/image.caption/car.jpg" } },
          { type: "image_url", image_url: { url: "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.receipt/playground/2.jpg" } },
        ] }],
      });
      console.log(response.choices[0].message.content);
      ```
    </CodeGroup>

    OCR and region models take one image per request. A second `image_url` returns `400`.
  </Tab>

  <Tab title="Video" id="video-inputs">
    * **`qwen/qwen3.5-0.8b` and `qwen/qwen3.8-27b`:** accept one `video_url` per request. A text prompt in the same message is optional.
    * **`facebook/sam3.1` (`track`) and `usyd-community/vitpose-plus-large` (`pose`):** take one clip and return per-frame records.

    See their model pages.

    <CodeGroup>
      ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      from openai import OpenAI

      client = OpenAI(
          base_url="https://gateway.vlm.run/v1/openai",
          api_key="<VLMRUN_API_KEY>",
      )
      response = client.chat.completions.create(
          model="qwen/qwen3.8-27b",
          messages=[{"role": "user", "content": [
              {"type": "text", "text": "Summarize what happens in this video."},
              {"type": "video_url", "video_url": {"url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/video.transcription/bakery.mp4"}},
          ]}],
          extra_body={"video_fps": 1.0, "video_max_frames": 8},
      )
      print(response.choices[0].message.content)
      ```

      ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      import OpenAI from "openai";

      const client = new OpenAI({
        baseURL: "https://gateway.vlm.run/v1/openai",
        apiKey: process.env.VLMRUN_API_KEY,
      });
      const response = await client.chat.completions.create({
        model: "qwen/qwen3.8-27b",
        messages: [{ role: "user", content: [
          { type: "text", text: "Summarize what happens in this video." },
          { type: "video_url", video_url: { url: "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/video.transcription/bakery.mp4" } },
        ] }],
        video_fps: 1.0,
        video_max_frames: 8,
      });
      console.log(response.choices[0].message.content);
      ```
    </CodeGroup>

    The Gateway samples frames before inference. Set these top-level fields, or `extra_body` in the OpenAI Python SDK:

    | Field | Type | Description |
    | - | - | - |
    | `video_fps` | `number` | Target frames per second to sample from the source video. |
    | `video_max_frames` | `integer` | Hard cap on frames passed to the model. |
    | `video_resolution` | `string` | Resize preset for sampled frames: `256x192`, `320x240`, `448x336`, `512x384`, `640x480`. |
    | `video_encoder` | `string` | Reserved. `native` is the only accepted value: the model ingests the clip itself. |
    | `video_encoder_params` | `object` | Reserved for `video_encoder`. No keys are defined. |

    <Tip>
      Start with a low `video_max_frames` (for example `8`). Tune `video_fps` before raising either field. More frames increase latency and cost.
    </Tip>

    A model that omits `video_url` from `capabilities.supported_input_types` returns `400`. The Gateway does not tile the clip into images. See [Video encoding](/gateway/extra-kwargs).

    An undecodable video returns `400` with `error.type = "invalid_request_error"`. See [Error Codes](/gateway/error-codes#invalid-video-400).
  </Tab>

  <Tab title="Documents" id="document-inputs">
    The Gateway decodes and rasterizes each PDF at ingress. Inference then runs per page.

    <CodeGroup>
      ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      from openai import OpenAI

      client = OpenAI(
          base_url="https://gateway.vlm.run/v1/openai",
          api_key="<VLMRUN_API_KEY>",
      )
      response = client.chat.completions.create(
          model="paddlepaddle/paddleocr-vl-1.6",
          messages=[{"role": "user", "content": [
              {"type": "document_url", "document_url": {"url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/finance.sec-filings/tsla-8k.pdf"}},
          ]}],
      )
      print(response.choices[0].message.content)
      ```

      ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      import OpenAI from "openai";

      const client = new OpenAI({
        baseURL: "https://gateway.vlm.run/v1/openai",
        apiKey: process.env.VLMRUN_API_KEY,
      });
      const response = await client.chat.completions.create({
        model: "paddlepaddle/paddleocr-vl-1.6",
        messages: [{ role: "user", content: [
          { type: "document_url", document_url: { url: "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/finance.sec-filings/tsla-8k.pdf" } },
        ] }],
      });
      console.log(response.choices[0].message.content);
      ```
    </CodeGroup>

    ### Limits

    | Limit | Value | Notes |
    | - | - | - |
    | File size | 256 MB | Enforced on decoded bytes, for both `document_url` URLs and base64 data URIs. |
    | Pages | 128 (`document_max_pages`) | Requests over the cap are rejected before inference, and the error names the page ranges that cover the document. Read a longer PDF section by section with `document_pages`. |

    A request over either limit returns `400` with `error.code = "invalid_document"`. See [Error Codes](/gateway/error-codes#invalid-document-400).

    ### URL vs. base64

    | Input | Use when |
    | - | - |
    | `document_url` with a hosted URL | Default choice; keeps the request body small and fast to transmit. |
    | Base64 data URI | Only when the document isn't already hosted somewhere reachable. Inflates the request body by \~33% and increases request latency for large files. |

    <Tip>
      Prefer a URL over base64 for documents over a few megabytes.
    </Tip>

    `document_dpi` and other method parameters are in [Method Parameters](/gateway/methods#method-parameters).

    ### Scanned vs. native PDFs

    The Gateway rasterizes every page and runs OCR. A text layer does not change the path.

    * **Reliable text layer, no OCR needed:** extract the text client-side. That is faster and cheaper.

    ### VQA on PDFs

    Chat VLMs, including `qwen/qwen3.5-0.8b` and `qwen/qwen3.8-27b`, reject `document_url`. The request returns a [`400` capability error](/gateway/error-codes#capability-violation-400).

    Use a document model from the [catalog](https://vlm.run/gateway/models). For free-form questions, OCR the PDF first. Send the extracted text to the chat model.
  </Tab>
</Tabs>

Each model's supported inputs and modalities are listed in the [models catalog](https://vlm.run/gateway/models).

## Related

<CardGroup cols={2}>
  <Card title="Document OCR" icon="file-lines" href="/gateway/guides/document-ocr">
    From model selection to response parsing.
  </Card>

  <Card title="Streaming" icon="bolt" href="/gateway/guides/document-ocr#3-streaming-vs-non-streaming">
    Receive each page as it finishes.
  </Card>

  <Card title="Models" icon="table-list" href="/gateway/models">
    Input types each model accepts.
  </Card>

  <Card title="Chat Completions" icon="comments" href="/gateway/api-reference/post-chat-completions">
    Read the request and response schema.
  </Card>
</CardGroup>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.