> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Version Pinning

> Pin skill versions for reproducible results

By default, `skill_version` is `"latest"`, which resolves to the most recent revision of the skill. You can pin a specific version for reproducibility.

## Latest vs Pinned

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.client.types import AgentSkill

  # Always use the latest version
  skill = AgentSkill(skill_name="invoice-extraction")

  # Pin a specific version
  skill = AgentSkill(skill_name="invoice-extraction", skill_version="20260219-abc123")
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  // Always use the latest version
  const skill = { skillName: "invoice-extraction" };

  // Pin a specific version
  const pinnedSkill = { skillName: "invoice-extraction", skillVersion: "20260219-abc123" };
  ```
</CodeGroup>

## When to Pin

| Scenario | Recommendation |
| - | - |
| **Production pipelines** | Pin a specific version for consistent, reproducible results |
| **Development and testing** | Use `"latest"` to automatically pick up improvements |
| **A/B testing** | Pin different versions to compare extraction quality |
| **Compliance workloads** | Pin to ensure auditable, repeatable outputs |

## Version Format

Version strings follow the format `YYYYMMDD-<hash>`, for example `20260219-abc123`. Each time a skill is [updated](/skills/manage/update), a new version is created with a new unique ID but the same name.

## Checking Available Versions

Use the [Skills API](/api-reference/v1/skills/get-skills-list) to list available versions for a skill:

```python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
from vlmrun.client import VLMRun

client = VLMRun(api_key="<VLMRUN_API_KEY>")

# Get the latest version
skill = client.agent.skills.get(name="invoice-extraction")
print(f"Latest version: {skill.skill_version}")

# Get a specific version
skill = client.agent.skills.get(name="invoice-extraction", skill_version="20260219-abc123")
```


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.