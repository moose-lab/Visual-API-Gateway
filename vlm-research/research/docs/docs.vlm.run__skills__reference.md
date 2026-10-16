> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Reference

> AgentSkill object and skill specification reference

## AgentSkill Object

**Common fields:**

| Field | Type | Default | Description |
| - | - | - | - |
| `type` | `string` | `"skill_reference"` | `"skill_reference"` for server-stored skills, `"inline"` for inline bundles |

**Referenced skill fields** (when `type = "skill_reference"`):

| Field | Type | Default | Description |
| - | - | - | - |
| `skill_name` | `string` | `null` | Human-readable skill name for lookup |
| `skill_id` | `string` | `null` | Unique identifier (UUID or name string) |
| `skill_version` | `string` | `"latest"` | Skill version to use |

<Warning>
  At least one of `skill_name` or `skill_id` must be provided. If both are given, `skill_id` takes precedence for resolution.
</Warning>

### Inline Skill Fields

When `type = "inline"`, the following fields are used instead of `skill_name`/`skill_id`:

| Field | Type | Default | Description |
| - | - | - | - |
| `name` | `string` | `null` | Human-readable name for the inline skill |
| `description` | `string` | `null` | Short description of what the skill does |
| `source` | `object` | `null` | Source payload containing the base64-encoded zip bundle (see below) |

**InlineSkillSource object:**

| Field | Type | Default | Description |
| - | - | - | - |
| `type` | `string` | `"base64"` | Encoding type (currently only `"base64"`) |
| `media_type` | `string` | `"application/zip"` | MIME type of the bundle |
| `data` | `string` | *required* | Base64-encoded zip containing `SKILL.md` and optional files |

<Warning>
  For inline skills, `source` (with `data`) is required, and `skill_id`/`skill_name` must not be set.
</Warning>

### Referenced vs Inline

| | Referenced Skills | Inline Skills |
| - | - | - |
| **How to use** | `skill_id` or `skill_name` | `source` with base64 zip |
| **Persistence** | Stored on the server | Sent per-request, not persisted |
| **Version pinning** | Supported (`version` field) | N/A (bundle is the version) |
| **Best for** | Production, shared skills | Prototyping, ephemeral use, CI/CD |
| **`type` field** | `"skill_reference"` | `"inline"` |

## Identifier Resolution

The platform resolves skill references in this order:

1. If `skill_id` is provided, use it directly
2. If `skill_name` is provided, look up by name
3. If `skill_version` is `"latest"` (default), resolve to the most recent revision
4. If `skill_version` is a specific string (e.g., `"20260219-abc123"`), resolve to that exact version

## Available Toolsets

| Toolset | Description |
| - | - |
| `core` | Basic operations (file I/O, text processing) |
| `document` | Document extraction and layout understanding |
| `image` | Image analysis and understanding |
| `image-gen` | Image generation and editing |
| `video` | Video analysis and understanding |
| `viz` | Visualization and annotation |
| `web` | Web search and retrieval |
| `world-gen` | World generation and editing |

## Skill File Spec

| File | Required | Format | Purpose |
| - | - | - | - |
| [`SKILL.md`](/skills/spec/skill-md) | Yes | YAML frontmatter + Markdown | Metadata and instructions |
| [`vlmrun.yaml`](/skills/spec/vlmrun-yaml) | Yes | YAML | Execution configuration |
| [`schema.json`](/skills/spec/schema-json) | Recommended | JSON Schema draft-07 | Output validation |
| `resources/` | No | Any | Supporting files |

## Python SDK Helpers

| Function | Import | Returns | Description |
| - | - | - | - |
| [`create_from_directory`](https://github.com/vlm-run/vlmrun-python-sdk/blob/main/vlmrun/client/skills.py) | `client.skills.create_from_directory(...)` | `AgentSkill` (`type="skill_reference"`) | Zips a local directory, uploads via the Files API, and creates a server-side skill in one call |
| [`AgentSkill.from_directory`](https://github.com/vlm-run/vlmrun-python-sdk/blob/main/vlmrun/client/types.py) | `from vlmrun.client.types import AgentSkill` | `AgentSkill` (`type="inline"`) | Classmethod that zips and base64-encodes a local directory into an inline skill bundle (no server upload) |

Both functions require the directory to contain a `SKILL.md` file. Skill name and description are read from the YAML frontmatter automatically.

```python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
from pathlib import Path
from vlmrun.client import VLMRun
from vlmrun.client.types import AgentSkill

client = VLMRun(api_key="<VLMRUN_API_KEY>")

# Server-side: upload and create a reusable skill
skill_ref = client.skills.create_from_directory(Path("./my-skill"))

# Inline: build a self-contained skill bundle (no upload)
skill_inline = AgentSkill.from_directory(Path("./my-skill"))
```

## API Endpoints

| Operation | Method | Endpoint |
| - | - | - |
| [List skills](/api-reference/v1/skills/get-skills-list) | `GET` | `/v1/skills` |
| [Get skill by ID](/api-reference/v1/skills/get-skill-by-id) | `GET` | `/v1/skills/{skill_id}` |
| [Create skill](/api-reference/v1/skills/post-skill-create) | `POST` | `/v1/skills/create` |
| [Update skill](/api-reference/v1/skills/post-skill-update) | `POST` | `/v1/skills/{skill_id}/update` |
| [Lookup skill](/api-reference/v1/skills/post-skill-lookup) | `POST` | `/v1/skills/lookup` |
| [Download skill](/api-reference/v1/skills/get-skill-download) | `GET` | `/v1/skills/{skill_id}/download` |


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.