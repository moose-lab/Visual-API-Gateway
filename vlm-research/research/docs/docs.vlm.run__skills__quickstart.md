> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Quickstart

> Use a skill to extract structured data in under 2 minutes

This guide walks you through using a skill to extract structured data from a document in a single API call.

## Prerequisites

<Tabs>
  <Tab title="Python">
    ```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
    pip install vlmrun
    ```
  </Tab>

  <Tab title="Node.js">
    ```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
    npm install vlmrun
    ```
  </Tab>
</Tabs>

Set your API key:

```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
export VLMRUN_API_KEY="your-api-key"
```

## Extract Data with a Skill

Pass a skill by name in the `config.skills` parameter to extract structured JSON from a document:

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

  print(response.response)
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

  console.log(response.response);
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

The platform automatically applies the skill's prompt and JSON schema — no need to specify a `domain` or write a custom prompt.

## Next Steps

<CardGroup cols={2}>
  <Card title="Using Skills" icon="play" href="/skills/usage/generation">
    Use skills across all generation endpoints
  </Card>

  <Card title="Create a Skill" icon="plus" href="/skills/manage/create">
    Build your own custom skills
  </Card>

  <Card title="Skill Spec" icon="file-code" href="/skills/spec/overview">
    Understand how skills are structured
  </Card>

  <Card title="Version Pinning" icon="thumbtack" href="/skills/usage/version-pinning">
    Pin skill versions for reproducibility
  </Card>
</CardGroup>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.