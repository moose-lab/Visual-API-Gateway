> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Update Skills

> Create new versions of existing skills

The new version has a new unique ID and the same name. Previous versions stay available by version string.

## Update from File

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.client import VLMRun
  from pathlib import Path

  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  # Upload new skill zip
  file = client.files.upload(file=Path("updated-skill.zip"))

  # Update creates a new version
  updated = client.skills.update(
      skill_id="<skill-id>",
      file_id=file.id,
      description="Improved invoice extraction with line item support"
  )
  print(f"New version: {updated.version}")
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  # Re-upload a local skill folder to create a new version
  vlmrun skills upload ./updated-skill --name "invoice-extraction"
  ```
</CodeGroup>

## Versioning Behavior

| Action | Result |
| - | - |
| Update a skill | New version created, same `skill_name` |
| Reference with `version="latest"` | Resolves to the newest version |
| Reference with a pinned version | Continues to use the pinned version |

<Info>
  Existing versions are never modified or deleted.
</Info>

See [Version Pinning](/skills/usage/version-pinning).


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.