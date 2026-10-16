> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Agent Execution

> Use skills with the agent execution endpoint

Pass skills in `config.skills`.

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.client import VLMRun
  from vlmrun.client.types import AgentExecutionConfig, AgentSkill
  from vlmrun.types import MessageContent, FileUrl

  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  response = client.agent.execute(
      inputs={"file": MessageContent(type="file_url", file_url=FileUrl(url="<file-url>"))},
      config=AgentExecutionConfig(
          skills=[AgentSkill(skill_name="patient-referral", skill_version="20260219-abc123")]
      ),
      batch=True,
  )
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { VlmRun } from "vlmrun";

  const client = new VlmRun({
      apiKey: "<VLMRUN_API_KEY>",
  });

  const response = await client.agent.execute({
      inputs: { file: { type: "file_url", file_url: { url: "<file-url>" } } },
      config: {
          skills: [{ skillName: "patient-referral", skillVersion: "20260219-abc123" }],
      },
      batch: true,
  });
  ```

  ```bash cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl -X POST https://api.vlm.run/v1/agent/execute \
    -H "Authorization: Bearer <VLMRUN_API_KEY>" \
    -H "Content-Type: application/json" \
    -d '{
      "inputs": {"file": {"type": "file_url", "file_url": {"url": "<file-url>"}}},
      "config": {
        "skills": [{"skill_name": "patient-referral", "skill_version": "20260219-abc123"}]
      },
      "batch": true
    }'
  ```
</CodeGroup>

## Multiple Skills

```python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
response = client.agent.execute(
    inputs={...},
    config=AgentExecutionConfig(
        skills=[
            AgentSkill(skill_name="document-parsing"),
            AgentSkill(skill_name="data-validation"),
        ]
    ),
    batch=True,
)
```

## Inline Skills

Send a base64-encoded zip instead of a server-stored skill name. [`AgentSkill.from_directory`](https://github.com/vlm-run/vlmrun-python-sdk/blob/main/vlmrun/client/types.py) builds an inline `AgentSkill` from a local directory.

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from pathlib import Path
  from vlmrun.client import VLMRun
  from vlmrun.client.types import AgentExecutionConfig, AgentSkill

  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  # Build an inline AgentSkill from a local skill directory
  skill = AgentSkill.from_directory(Path("./my-skill"))

  response = client.agent.execute(
      inputs={"file": {"type": "file_url", "file_url": {"url": "<file-url>"}}},
      config=AgentExecutionConfig(skills=[skill]),
      batch=True,
  )
  ```

  ```bash cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl -X POST https://api.vlm.run/v1/agent/execute \
    -H "Authorization: Bearer <VLMRUN_API_KEY>" \
    -H "Content-Type: application/json" \
    -d '{
      "inputs": {"file": {"type": "file_url", "file_url": {"url": "<file-url>"}}},
      "config": {
        "skills": [{
          "type": "inline",
          "name": "my-skill",
          "source": {
            "type": "base64",
            "media_type": "application/zip",
            "data": "<base64-encoded-zip>"
          }
        }]
      },
      "batch": true
    }'
  ```
</CodeGroup>

`AgentSkill.from_directory` zips the directory and base64-encodes it. It reads the name and description from the `SKILL.md` frontmatter. It returns an `AgentSkill` with `type="inline"`.

See [Skill Structure — Inline Skill Bundles](/skills/spec/overview#inline-skill-bundles) for bundle contents and the [Reference](/skills/reference#inline-skill-fields) for `AgentSkill` inline fields.

<h2 id="synchronous-vs-batch">
  Batch Execution
</h2>

Agent execution currently supports batch mode only.

* **Batch** (`batch=True`): Returns immediately with a prediction ID. Poll for results.
* **Synchronous** (`batch=False`): Not supported. Set `batch=True` and poll.

```python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
# Batch execution
response = client.agent.execute(
    inputs={...},
    config=AgentExecutionConfig(
        skills=[AgentSkill(skill_name="video-analysis")]
    ),
    batch=True,
)

# Poll for results
prediction = client.predictions.get(response.id)
```


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.