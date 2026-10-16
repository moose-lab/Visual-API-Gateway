> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# List & Lookup

> List and search for available skills

## List All Skills

Retrieve all available skills:

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.client import VLMRun

  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  skills = client.skills.list()
  for skill in skills:
      print(f"{skill.name} (v{skill.skill_version})")
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { VlmRun } from "vlmrun";

  const client = new VlmRun({
      apiKey: "<VLMRUN_API_KEY>",
  });

  const skills = await client.skills.list();
  skills.forEach(skill => console.log(`${skill.name} (v${skill.skill_version})`));
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  # List all skills (latest 25)
  vlmrun skills list

  # List with grouping (latest version per name)
  vlmrun skills list --grouped

  # List with custom limit and sort
  vlmrun skills list --limit 50 --order-by name --asc
  ```
</CodeGroup>

## Lookup by Name

Find a skill by its human-readable name:

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  # Get latest version
  skill = client.skills.get(name="invoice-extraction")

  # Get a specific version
  skill = client.skills.get(name="invoice-extraction", skill_version="20260219-abc123")
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  // Get latest version
  const skill = await client.skills.get({ name: "invoice-extraction" });

  // Get a specific version
  const skill = await client.skills.get({
      name: "invoice-extraction",
      skillVersion: "20260219-abc123",
  });
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  # Get latest version by name
  vlmrun skills get invoice-extraction

  # Get a specific version
  vlmrun skills get invoice-extraction --skill-version 20260219-abc123
  ```
</CodeGroup>

## Lookup by ID

Find a skill by its unique identifier:

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  skill = client.skills.get(id="<skill-id>")
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  const skill = await client.skills.get({ id: "<skill-id>" });
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  vlmrun skills get <skill-id>
  ```
</CodeGroup>

## Download a Skill

Get a presigned URL to download the skill package:

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  download = client.skills.download(skill_id="<skill-id>")
  print(f"Download URL: {download.url}")
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  # Download and extract to default location (~/.vlmrun/skills/)
  vlmrun skills download invoice-extraction

  # Download a specific version to a custom directory
  vlmrun skills download invoice-extraction --skill-version 20260219-abc123 --output ./skills/
  ```
</CodeGroup>

<Card title="Skills API Reference" icon="code" href="/api-reference/v1/skills/get-skills-list">
  View the complete API reference for skill endpoints
</Card>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.