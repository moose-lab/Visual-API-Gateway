> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Multi-modal Inputs

> Encode text, images, video, audio, and files as MessageContent.

`MessageContent` encodes text, images, video, audio, and documents for agent execution and chat completions.

## MessageContent Overview

`MessageContent` is a Pydantic model. It validates six content types.

| Type | Description | Use Case |
| - | - | - |
| `text` | Plain text content | Instructions, questions, or text-based prompts |
| `image_url` | Image from a public URL | Images hosted on the web or cloud storage |
| `video_url` | Video from a public URL | Videos hosted on the web or cloud storage |
| `audio_url` | Audio from a public URL | Audio files hosted on the web or cloud storage |
| `file_url` | Generic file from a public URL | Documents (PDFs, Word docs, etc.) or other file types |
| `input_file` | File uploaded via the Files API | Files uploaded to VLM Run storage using file IDs |

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.types import MessageContent, ImageUrl, VideoUrl, AudioUrl, FileUrl
  ```

  ```javascript Node theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { MessageContent, ImageUrl, VideoUrl, AudioUrl, FileUrl } from '@vlmrun/sdk';
  ```
</CodeGroup>

## Input Types

### Text Input

`text` is a string.

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.types import MessageContent

  # Simple text input
  text_content = MessageContent(type="text", text="Analyze this image and describe what you see")
  ```

  ```javascript Node theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { MessageContent } from '@vlmrun/sdk';

  // Simple text input
  const textContent = new MessageContent({ type: 'text', text: 'Analyze this image and describe what you see' });
  ```
</CodeGroup>

### Image Input

`image_url` takes an HTTP or HTTPS URL. `detail` is optional. Default is `auto`.

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.types import MessageContent, ImageUrl

  # Image with default detail level (auto)
  image_content = MessageContent(
      type="image_url",
      image_url=ImageUrl(url="https://example.com/photo.jpg")
  )

  # Image with high detail for better quality processing
  image_content = MessageContent(
      type="image_url",
      image_url=ImageUrl(url="https://example.com/photo.jpg", detail="high")
  )
  ```

  ```javascript Node theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { MessageContent, ImageUrl } from '@vlmrun/sdk';

  // Image with default detail level (auto)
  const imageContent = new MessageContent({ type: 'image_url', image_url: new ImageUrl({ url: 'https://example.com/photo.jpg' }) });

  // Image with high detail for better quality processing
  const imageContent = new MessageContent({ type: 'image_url', image_url: new ImageUrl({ url: 'https://example.com/photo.jpg', detail: 'high' }) });
  ```

  ```bash Bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {"type": "image_url", "image_url": {"url": "https://example.com/photo.jpg", "detail": "high"}}
  ```
</CodeGroup>

`detail` values:

* `auto` (default): The SDK picks the detail level.
* `low`: Lower resolution. Faster processing.
* `high`: Higher resolution. More detailed analysis.

### Video Input

`video_url` takes an HTTP or HTTPS URL.

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.types import MessageContent, VideoUrl

  video_content = MessageContent(
      type="video_url",
      video_url=VideoUrl(url="https://example.com/video.mp4")
  )
  ```

  ```javascript Node theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { MessageContent, VideoUrl } from '@vlmrun/sdk';

  // Video with default detail level (auto)
  const videoContent = new MessageContent({ type: 'video_url', video_url: new VideoUrl({ url: 'https://example.com/video.mp4' }) });
  ```

  ```bash Bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {"type": "video_url", "video_url": {"url": "https://example.com/video.mp4"}}
  ```
</CodeGroup>

### Audio Input

`audio_url` takes an HTTP or HTTPS URL.

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.types import MessageContent, AudioUrl

  audio_content = MessageContent(
      type="audio_url",
      audio_url=AudioUrl(url="https://example.com/audio.mp3")
  )
  ```

  ```javascript Node theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { MessageContent, AudioUrl } from '@vlmrun/sdk';

  // Audio with default detail level (auto)
  const audioContent = new MessageContent({ type: 'audio_url', audio_url: new AudioUrl({ url: 'https://example.com/audio.mp3' }) });
  ```

  ```bash Bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {"type": "audio_url", "audio_url": {"url": "https://example.com/audio.mp3"}}
  ```
</CodeGroup>

### Document / File Input (URL)

`file_url` takes an HTTP or HTTPS URL.

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.types import MessageContent, FileUrl

  document_content = MessageContent(
      type="file_url",
      file_url=FileUrl(url="https://example.com/document.pdf")
  )
  ```

  ```javascript Node theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { MessageContent, FileUrl } from '@vlmrun/sdk';

  // Document with default detail level (auto)
  const documentContent = new MessageContent({ type: 'file_url', file_url: new FileUrl({ url: 'https://example.com/document.pdf' }) });
  ```

  ```bash Bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {"type": "file_url", "file_url": {"url": "https://example.com/document.pdf"}}
  ```
</CodeGroup>

### Document / File Input (Upload)

`input_file` takes a Files API file ID.

<CodeGroup>
  ```python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.types import MessageContent
  from vlmrun.client import VLMRun
  from pathlib import Path

  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  # Step 1: Upload the file
  file_response = client.files.upload(file=Path("local_image.jpg"))

  # Step 2: Use the file ID in MessageContent
  file_content = MessageContent(
      type="input_file",
      file_id=file_response.id
  )
  ```

  ```javascript Node theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { MessageContent } from '@vlmrun/sdk';

  // File with default detail level (auto)
  const fileContent = new MessageContent({ type: 'input_file', file_id: '<file_id>' });
  ```

  ```bash Bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {"type": "input_file", "file_id": "<file_id>"}
  ```
</CodeGroup>

<Tip>
  `input_file` accepts `file_id` (Files API upload) or `file_url` (presigned or public URL). The SDK fetches the file.
</Tip>

## Using Multi-modal Inputs

Each input is a separate field on the input model.

```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
from pydantic import BaseModel, Field
from vlmrun.types import MessageContent, ImageUrl, FileUrl

class MultiModalInputs(BaseModel):
    image: MessageContent = Field(..., description="The reference image")
    document: MessageContent = Field(..., description="The document to process")
    instruction: MessageContent = Field(..., description="Processing instructions")

inputs = MultiModalInputs(
    image=MessageContent(
        type="image_url",
        image_url=ImageUrl(url="https://example.com/reference.jpg")
    ),
    document=MessageContent(
        type="file_url",
        file_url=FileUrl(url="https://example.com/document.pdf")
    ),
    instruction=MessageContent(
        type="text",
        text="Extract information matching the reference image format"
    )
)
```

### In an Agent Execution

Execution input fields are `MessageContent`.

<CodeGroup>
  ```python Python [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from pydantic import BaseModel, Field
  from vlmrun.client import VLMRun
  from vlmrun.client.types import AgentExecutionConfig, AgentExecutionResponse, ImageUrl
  from vlmrun.types import MessageContent, ImageRef

  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  # Define typed inputs using MessageContent
  class ExecutionInputs(BaseModel):
      image: MessageContent = Field(..., description="The input image to process")
      ref_image: MessageContent = Field(..., description="The reference style image to use for style transfer")

  class ImageResponse(BaseModel):
      image: ImageRef = Field(..., description="The stylized output image")

  # Execute agent with image URL
  execution: AgentExecutionResponse = client.agent.execute(
      name="image/blur-image",
      inputs=ExecutionInputs(
          image=MessageContent(
              type="image_url",
              image_url=ImageUrl(url="https://example.com/photo.jpg")
          ),
          reference=MessageContent(
              type="image_url",
              image_url=ImageUrl(url="https://example.com/style.jpg")
          )
      ),
      config=AgentExecutionConfig(
          prompt="Blur all faces in the image",
          response_model=ImageResponse
      )
  )
  ```

  ```python Python - Uploaded File [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from pathlib import Path
  from pydantic import BaseModel, Field
  from vlmrun.client import VLMRun
  from vlmrun.client.types import AgentExecutionConfig, AgentExecutionResponse
  from vlmrun.types import MessageContent, ImageRef

  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  class ExecutionInputs(BaseModel):
      image: MessageContent = Field(..., description="The input image to process")
      ref_image: MessageContent = Field(..., description="The reference style image to use for style transfer")

  class ImageResponse(BaseModel):
      image: ImageRef = Field(..., description="The stylized output image")

  # Upload file first
  file_response = client.files.upload(file=Path("local_image.jpg"))
  ref_file_response = client.files.upload(file=Path("local_reference.jpg"))

  # Execute agent with uploaded file
  execution: AgentExecutionResponse = client.agent.execute(
      name="test-image-captioner",
      inputs=ExecutionInputs(
          image=MessageContent(type="input_file", file_id=file_response.id),
          ref_image=MessageContent(type="input_file", file_id=ref_file_response.id)
      ),
      config=AgentExecutionConfig(
          prompt="Describe the image in detail",
          response_model=ImageResponse
      )
  )
  ```

  ```python Python - Document Processing [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from typing import Literal
  from pydantic import BaseModel, Field
  from vlmrun.client import VLMRun
  from vlmrun.client.types import AgentExecutionConfig, AgentExecutionResponse
  from vlmrun.types import MessageContent, FileUrl

  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  class ExecutionInputs(BaseModel):
      url: MessageContent = Field(..., description="The document URL to process")

  class DocumentResponse(BaseModel):
      reasoning: str = Field(..., description="The reasoning for the classification")
      classification: Literal["referral_letter", "physician_order", "insurance_authorization", "patient_consent_form", "miscellaneous"] = Field(..., description="The classification of the document")

  prompt = (
      "Classify each page of the document into one of these categories:\n"
      "- Referral Letter\n"
      "- Physician Order\n"
      "- Insurance Authorization\n"
      "- Patient Consent Form\n"
      "- Miscellaneous\n\n"
      "Provide a brief reason for your classification."
  )

  execution: AgentExecutionResponse = client.agent.execute(
      inputs=ExecutionInputs(
          url=MessageContent(
              type="file_url",
              file_url=FileUrl(url="https://example.com/document.pdf")
          )
      ),
      config=AgentExecutionConfig(prompt=prompt, response_model=DocumentResponse)
  )
  ```
</CodeGroup>

### In a Chat Completion

Each message `content` value is an array of content objects. One message can hold several items.

<CodeGroup>
  ```python Python - Text and Image [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.client import VLMRun

  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  response = client.agent.completions.create(
      model="vlmrun-orion-1:auto",
      messages=[
          {
              "role": "user",
              "content": [
                  {"type": "text", "text": "Blur all the faces in this image"},
                  {"type": "image_url", "image_url": {"url": "https://example.com/photo.jpg", "detail": "auto"}}
              ]
          }
      ]
  )
  ```

  ```python Python - Video Processing [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.client import VLMRun

  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  response = client.agent.completions.create(
      model="vlmrun-orion-1:auto",
      messages=[
          {
              "role": "user",
              "content": [
                  {"type": "text", "text": "Trim this video to the first 10 seconds"},
                  {"type": "video_url", "video_url": {"url": "https://example.com/video.mp4", "detail": "auto"}}
              ]
          }
      ],
      response_format={
          "type": "json_schema",
          "schema": {
              "type": "object",
              "properties": {
                  "video": {"type": "object"}
              }
          }
      }
  )
  ```

  ```python Python - Multiple Images [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.client import VLMRun

  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  response = client.agent.completions.create(
      model="vlmrun-orion-1:auto",
      messages=[
          {
              "role": "user",
              "content": [
                  {"type": "text", "text": "Compare these two images and describe the differences"},
                  {"type": "image_url", "image_url": {"url": "https://example.com/image1.jpg"}},
                  {"type": "image_url", "image_url": {"url": "https://example.com/image2.jpg"}}
              ]
          }
      ]
  )
  ```

  ```python Python - File Input [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.client import VLMRun
  from vlmrun.types import MessageContent, FileUrl

  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  # Upload file first
  file_response = client.files.upload(file=Path("local_document.pdf"))

  # Execute agent with uploaded file
  response = client.agent.completions.create(
      model="vlmrun-orion-1:auto",
      messages=[
          {
              "role": "user",
              "content": [
                  {"type": "text", "text": "Extract information from the document"},
                  {"type": "input_file", "file_id": file_response.id}
              ]
          }
      ],
      response_format={"type": "json_schema", "schema": {
          "type": "object",
          "properties": {
              "reasoning": {"type": "string"},
              "classification": {"type": "string"}
          },
          "required": ["reasoning", "classification"]
      }}
  )
  ```
</CodeGroup>

## Toolset Selection

`toolsets` limits the request to the listed tool categories.

### Available Tool Categories

| Category | Description |
| - | - |
| `core` | Essential tools for analyzing images, extracting content from documents, and processing video - the fundamental capabilities for most tasks |
| `image` | Comprehensive image understanding including object detection, text recognition, UI element detection, segmentation, and visual quality assessment |
| `image-gen` | Create new images from text descriptions, transform existing images, and apply visual effects like blurring regions |
| `world_gen` | Generate 3D models from images, including object-level reconstruction and full scene reconstruction |
| `viz` | Annotate images with bounding boxes, keypoints, and segmentation masks for visual output |
| `document` | Process documents with layout detection, text extraction, content parsing, and structured data extraction |
| `video` | Video processing capabilities including frame sampling, trimming, segmentation, and video generation |
| `web` | Search the web for information to augment agent responses with real-time data |

### Usage Examples

<CodeGroup>
  ```python Python - Chat Completions theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.client import VLMRun

  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  # Use specific toolsets for image analysis
  response = client.agent.completions.create(
      model="vlmrun-orion-1:auto",
      messages=[
          {
              "role": "user",
              "content": [
                  {"type": "text", "text": "Detect all objects in this image and draw bounding boxes"},
                  {"type": "image_url", "image_url": {"url": "https://example.com/photo.jpg"}}
              ]
          }
      ],
      toolsets=["image", "viz"]
  )
  ```

  ```python Python - Agent Execution theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.client import VLMRun
  from vlmrun.client.types import AgentExecutionConfig

  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  # Execute agent with document processing tools
  response = client.agent.execute(
      name="document-processor",
      inputs={"url": "https://example.com/document.pdf"},
      toolsets=["document", "core"],
      config=AgentExecutionConfig(prompt="Extract all tables from this document")
  )
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { VlmRun } from "vlmrun";

  const client = new VlmRun({
    apiKey: "<VLMRUN_API_KEY>",
    baseURL: "https://api.vlm.run/v1"
  });

  // Use specific toolsets for video processing
  const response = await client.agent.completions.create({
    model: "vlmrun-orion-1:auto",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "Trim this video to the first 30 seconds" },
          { type: "video_url", video_url: { url: "https://example.com/video.mp4" } }
        ]
      }
    ],
    toolsets: ["video", "core"]
  });
  ```

  ```bash cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl -X POST https://api.vlm.run/v1/openai/chat/completions \
    -H "Authorization: Bearer <VLMRUN_API_KEY>" \
    -H "Content-Type: application/json" \
    -d '{
      "model": "vlmrun-orion-1:auto",
      "messages": [
        {
          "role": "user",
          "content": [
            {"type": "text", "text": "Generate a new image based on this description"},
            {"type": "text", "text": "A serene mountain landscape at sunset"}
          ]
        }
      ],
      "toolsets": ["image-gen"]
    }'
  ```
</CodeGroup>

<Tip>
  Set `toolsets` when the task needs a known set of tools. Unused tool routing adds latency and cost.
</Tip>

## Best Practices

* Upload files with the Files API and pass `file_id` in production. Public URLs are for development and testing.
* Set `detail="high"` for fine-grained analysis, such as medical imaging or document OCR. Set `detail="low"` when speed matters more than detail.
* URLs must be publicly reachable. Prefer HTTPS. The SDK checks URL format only.
* Define Pydantic models for agent execution inputs. The SDK validates them.
* Upload large videos and documents with the Files API. That path reports errors and upload progress.
* Send text instructions with the media. The text states the operation.

<Tip>
  A chat message `content` array can mix text and media.
</Tip>

### URL Validation

`image_url`, `video_url`, `audio_url`, and `file_url` require `http` or `https`. Any other scheme raises `ValueError`.

```python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
from vlmrun.types import ImageUrl

# Valid - HTTP URL
image_url = ImageUrl(url="http://example.com/image.jpg")

# Valid - HTTPS URL
image_url = ImageUrl(url="https://example.com/image.jpg")

# Invalid - Will raise ValueError
image_url = ImageUrl(url="file:///local/path/image.jpg")  # ❌ Not HTTP/HTTPS
```

## Related Documentation

<Card title="Artifacts" icon="box-open" href="/agents/artifacts">
  Retrieve generated artifacts from agent responses.
</Card>

<Card title="Agent Execution" icon="play" href="/agents/agent-execution">
  Execute an agent and read structured results.
</Card>

<Card title="Agent Creation" icon="robot" href="/agents/agent-creation">
  Create an agent that accepts these inputs.
</Card>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.