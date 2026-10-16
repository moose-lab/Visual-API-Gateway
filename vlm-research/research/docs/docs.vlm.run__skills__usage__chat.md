> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Chat Completions

> Use skills with the chat completions endpoint

Pass skills in the `skills` parameter:

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.client import VLMRun
  from vlmrun.client.types import AgentSkill

  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  response = client.agent.completions.create(
      model="vlmrun-orion-1:auto",
      messages=[
          {
              "role": "user",
              "content": [
                  {"type": "text", "text": "Extract data from this document."},
                  {"type": "file_url", "file_url": {"url": "https://example.com/invoice.pdf"}}
              ]
          }
      ],
      skills=[AgentSkill(skill_name="invoice-extraction")],
  )
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { VlmRun } from "vlmrun";

  const client = new VlmRun({
      apiKey: "<VLMRUN_API_KEY>",
  });

  const response = await client.agent.completions.create({
      model: "vlmrun-orion-1:auto",
      messages: [
          {
              role: "user",
              content: [
                  { type: "text", text: "Extract data from this document." },
                  { type: "file_url", file_url: { url: "https://example.com/invoice.pdf" } }
              ]
          }
      ],
      skills: [{ skillName: "invoice-extraction" }],
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
            {"type": "text", "text": "Extract data from this document."},
            {"type": "file_url", "file_url": {"url": "https://example.com/invoice.pdf"}}
          ]
        }
      ],
      "skills": [{"skill_name": "invoice-extraction"}]
    }'
  ```
</CodeGroup>

## Multiple Skills

The agent applies every skill in the array:

```python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
response = client.agent.completions.create(
    model="vlmrun-orion-1:auto",
    messages=[...],
    skills=[
        AgentSkill(skill_name="invoice-extraction"),
        AgentSkill(skill_name="line-item-validation"),
    ],
)
```

## Inline Skills

Send a skill bundle in the request as a base64-encoded zip.

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from pathlib import Path
  from vlmrun.client import VLMRun
  from vlmrun.client.types import AgentSkill

  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  # Build an inline AgentSkill from a local skill directory
  skill = AgentSkill.from_directory(Path("./my-skill"))

  response = client.agent.completions.create(
      model="vlmrun-orion-1:auto",
      messages=[
          {
              "role": "user",
              "content": [
                  {"type": "text", "text": "Extract data from this invoice."},
                  {"type": "file_url", "file_url": {"url": "https://example.com/invoice.pdf"}}
              ]
          }
      ],
      skills=[skill],
  )
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
            {"type": "text", "text": "Extract data from this invoice."},
            {"type": "file_url", "file_url": {"url": "https://example.com/invoice.pdf"}}
          ]
        }
      ],
      "skills": [{
        "type": "inline",
        "name": "invoice-extraction",
        "description": "Extract structured data from invoices",
        "source": {
          "type": "base64",
          "media_type": "application/zip",
          "data": "<base64-encoded-zip>"
        }
      }]
    }'
  ```
</CodeGroup>

[`AgentSkill.from_directory`](https://github.com/vlm-run/vlmrun-python-sdk/blob/main/vlmrun/client/types.py) zips the directory, base64-encodes it, and reads `name` and `description` from `SKILL.md` frontmatter. It returns an `AgentSkill` with `type="inline"`.

See [Skill Structure — Inline Skill Bundles](/skills/spec/overview#inline-skill-bundles) for bundle contents and the [Reference](/skills/reference#inline-skill-fields) for inline fields.

<Note>
  Referenced and inline skills can share one `skills` array. Each entry resolves independently.
</Note>

## Pinned Versions

Set `skill_version` to pin a version:

```python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
response = client.agent.completions.create(
    model="vlmrun-orion-1:auto",
    messages=[...],
    skills=[AgentSkill(skill_name="patient-referral", skill_version="20260219-abc123")],
)
```

See [Version Pinning](/skills/usage/version-pinning).


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.