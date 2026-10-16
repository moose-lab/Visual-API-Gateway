> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Model Request

> Use skills with model requests

Skills work with all VLM Run API generation endpoints (`api.vlm.run`). Pass skills in the `config.skills` parameter to automatically apply the skill's prompt and JSON schema to your request.

## Image → JSON

Extract structured JSON from images:

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from PIL import Image
  from vlmrun.client import VLMRun
  from vlmrun.client.types import GenerationConfig, AgentSkill

  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  response = client.image.generate(
      images=[Image.open("photo.jpg")],
      model="vlm-1",
      config=GenerationConfig(
          skills=[AgentSkill(skill_name="invoice-extraction", version="latest")]
      )
  )
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { VlmRun } from "vlmrun";

  const client = new VlmRun({ apiKey: "<VLMRUN_API_KEY>" });

  const response = await client.image.generate({
      images: ["photo.jpg"],
      model: "vlm-1",
      config: {
          skills: [{ skillName: "invoice-extraction", version: "latest" }],
      },
  });
  ```

  ```bash cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl -X POST https://api.vlm.run/v1/image/generate \
    -H "Authorization: Bearer <VLMRUN_API_KEY>" \
    -H "Content-Type: application/json" \
    -d '{
      "model": "vlm-1",
      "images": ["<base64-encoded-image>"],
      "config": {
        "skills": [{"skill_name": "invoice-extraction", "version": "latest"}]
      }
    }'
  ```
</CodeGroup>

## Document → JSON

Extract structured JSON from documents:

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from pathlib import Path
  from vlmrun.client import VLMRun
  from vlmrun.client.types import GenerationConfig, AgentSkill

  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  response = client.document.generate(
      file=Path("invoice.pdf"),
      model="vlm-1",
      config=GenerationConfig(
          skills=[AgentSkill(skill_name="invoice-extraction", version="latest")]
      ),
  )
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { VlmRun } from "vlmrun";

  const client = new VlmRun({ apiKey: "<VLMRUN_API_KEY>" });

  const fileResponse = await client.files.upload({ filePath: "invoice.pdf" });
  const response = await client.document.generate({
      fileId: fileResponse.id,
      model: "vlm-1",
      config: {
          skills: [{ skillName: "invoice-extraction", version: "latest" }],
      },
  });
  ```

  ```bash cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl -X POST https://api.vlm.run/v1/document/generate \
    -H "Authorization: Bearer <VLMRUN_API_KEY>" \
    -H "Content-Type: application/json" \
    -d '{
      "model": "vlm-1",
      "file_id": "<file-id>",
      "config": {
        "skills": [{"skill_name": "invoice-extraction", "version": "latest"}]
      }
    }'
  ```
</CodeGroup>

## Video → JSON

Extract structured JSON from videos:

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from pathlib import Path
  from vlmrun.client import VLMRun
  from vlmrun.client.types import GenerationConfig, AgentSkill

  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  response = client.video.generate(
      file=Path("recording.mp4"),
      model="vlm-1",
      config=GenerationConfig(
          skills=[AgentSkill(skill_name="meeting-notes", version="latest")]
      ),
      batch=True,
  )
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { VlmRun } from "vlmrun";

  const client = new VlmRun({ apiKey: "<VLMRUN_API_KEY>" });

  const fileResponse = await client.files.upload({ filePath: "recording.mp4" });
  const response = await client.video.generate({
      fileId: fileResponse.id,
      model: "vlm-1",
      config: {
          skills: [{ skillName: "meeting-notes", version: "latest" }],
      },
      batch: true,
  });
  ```

  ```bash cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl -X POST https://api.vlm.run/v1/video/generate \
    -H "Authorization: Bearer <VLMRUN_API_KEY>" \
    -H "Content-Type: application/json" \
    -d '{
      "model": "vlm-1",
      "file_id": "<file-id>",
      "batch": true,
      "config": {
        "skills": [{"skill_name": "meeting-notes", "version": "latest"}]
      }
    }'
  ```
</CodeGroup>

<Tip>
  When `skills` are provided and `domain` is omitted, the platform creates a dynamic application from the skill's prompt and JSON schema. You do not need to specify a domain.
</Tip>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.