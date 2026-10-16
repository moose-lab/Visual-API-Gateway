> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Create Skills

> From a skill folder, a prompt, or a chat session

| Mode | Source | Description |
| - | - | - |
| **Skill Folder** | Local directory or zip | Upload a pre-built skill folder containing SKILL.md |
| **Prompt** | `prompt` (+ optional `json_schema`) | Auto-generate SKILL.md and schema.json from a text prompt |
| **Session** | `session_id` | Auto-generate SKILL.md from a chat session's history |

## From Skill Folder

The folder must contain a `SKILL.md` file. The skill name and description are parsed from its YAML frontmatter.

<CodeGroup>
  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  # Upload a local skill folder directly (zips and creates in one step)
  vlmrun skills upload ./my-skill

  # Override name/description from SKILL.md frontmatter
  vlmrun skills upload ./my-skill --name "invoice-extraction" --description "Extract structured data from invoices"
  ```

  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.client import VLMRun
  from pathlib import Path

  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  # One-step: zip, upload, and create a skill from a local directory
  skill = client.skills.create_from_directory(
      directory=Path("./my-skill"),
  )
  print(f"Created skill: {skill.skill_name} (type={skill.type})")

  # Override name/description from SKILL.md frontmatter
  skill = client.skills.create_from_directory(
      directory=Path("./my-skill"),
      name="invoice-extraction",
      description="Extract structured data from invoices",
  )
  ```
</CodeGroup>

[`create_from_directory`](https://github.com/vlm-run/vlmrun-python-sdk/blob/main/vlmrun/client/skills.py) zips the folder, uploads the archive via the Files API, and creates the skill in one call. It returns an `AgentSkill` with `type="skill_reference"`. Pass it directly to any endpoint that accepts skills.

The folder should follow the [skill directory structure](/skills/spec/overview):

```
my-skill/
├── SKILL.md
├── schema.json
├── vlmrun.yaml
└── resources/  (optional)
```

<Tip>
  Use a skill folder for full control of instructions, schema, and execution configuration. Use a prompt to prototype.
</Tip>

## From Prompt

<CodeGroup>
  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  # From a text prompt
  vlmrun skills create --prompt "Extract invoice_id, date, and total_amount from invoices."

  # With a JSON schema file
  vlmrun skills create --prompt "Extract invoice data" --schema schema.json
  ```

  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.client import VLMRun

  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  skill = client.skills.create(
      prompt="Extract invoice_id, date, and total_amount from invoices.",
      json_schema={
          "type": "object",
          "properties": {
              "invoice_id": {"type": "string"},
              "invoice_date": {"type": "string", "format": "date"},
              "total_amount": {"type": "number"}
          },
          "required": ["invoice_id", "invoice_date", "total_amount"]
      }
  )
  print(f"Created skill: {skill.id} ({skill.name})")
  ```
</CodeGroup>

The platform generates a `SKILL.md` from the prompt. It generates `schema.json` from the provided JSON schema.

## From Chat Session

<CodeGroup>
  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  vlmrun skills create --session-id "<session-id>"
  ```

  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.client import VLMRun

  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  skill = client.skills.create(session_id="<session-id>")
  print(f"Created skill: {skill.id} ({skill.name})")
  ```
</CodeGroup>

The platform analyzes the conversation. It extracts the task instructions and the expected output format.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.