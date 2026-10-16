> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Skill Structure

> How a skill directory is organized

## Directory Layout

<div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px', alignItems: 'start' }}>
  <div>
    <Tree>
      <Tree.Folder name="<skill-name>" defaultOpen>
        <Tree.File name="SKILL.md" />

        <Tree.File name="schema.json" />

        <Tree.File name="vlmrun.yaml" />

        <Tree.Folder name="resources">
          <Tree.File name="..." />
        </Tree.Folder>
      </Tree.Folder>
    </Tree>
  </div>

  <div>
    **[`SKILL.md`](/skills/spec/skill-md)** — Skill metadata (YAML frontmatter) and instructions (Markdown body)

    **[`vlmrun.yaml`](/skills/spec/vlmrun-yaml)** — Execution configuration: model, toolsets, and state machine graph

    **[`schema.json`](/skills/spec/schema-json)** — JSON Schema that validates the skill's structured output

    **`resources/`** — Optional supporting files: code snippets, templates, images, or reference data
  </div>
</div>

<Info>
  Upload a skill zip through [Create Skill](/skills/manage/create). The platform extracts and stores these files. A request that references the skill loads the `SKILL.md` instructions and `schema.json`.
</Info>

## Inline Skill Bundles

Send a skill bundle as a base64-encoded zip in the API request. The zip must use the directory layout above.

| File | Required | Description |
| - | - | - |
| `SKILL.md` | Yes | YAML frontmatter (`name`, `description`, etc.) followed by a markdown body with instructions |
| `vlmrun.yaml` | No | Skill configuration (metadata, settings, and dependencies) |
| `schema.json` | No | JSON Schema for structured output |
| `*.py` | No | Python scripts the skill can reference |

<Tip>
  For production, [upload the skill](/skills/manage/create) and reuse it across requests.
</Tip>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.