> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# SKILL.md

> Skill metadata and instructions format

`SKILL.md` is the primary file in a skill directory. It combines YAML frontmatter for metadata with a Markdown body for instructions that guide the model or agent during execution.

## Frontmatter Fields

The YAML frontmatter defines the skill's metadata:

```yaml theme={"theme":{"light":"github-light","dark":"dark-plus"}}
---
name: invoice-extraction
description: Extract structured data from invoice documents
version: "1.0"
license: MIT
---
```

| Field | Type | Required | Description |
| - | - | - | - |
| `name` | `string` | Yes | Skill identifier — used for lookup via `skill_name` |
| `description` | `string` | Yes | Concise description of what the skill does |
| `skill_version` | `string` | No | Skill version string |
| `license` | `string` | No | License type (e.g., `MIT`, `Apache-2.0`) |

### Available Toolsets

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

## Markdown Body

The body after the frontmatter contains instructions that are injected into the model or agent prompt at execution time. Write clear, specific instructions for the extraction or analysis task.

### Example: Image Analysis Skill

```markdown theme={"theme":{"light":"github-light","dark":"dark-plus"}}
---
name: pillow
description: Image manipulation toolkit using Pillow (PIL)
license: MIT
toolsets:
  - image
---

# Pillow Image Processing

## Description
A comprehensive image processing skill using the Pillow library.

## Capabilities

| Function | Description | Input | Output |
|----------|-------------|-------|--------|
| `resize` | Resize image | Image + dimensions | Resized image |
| `crop` | Crop region | Image + bounding box | Cropped image |
| `rotate` | Rotate image | Image + angle | Rotated image |

## Constraints
- Maximum input resolution: 4096x4096
- Supported formats: PNG, JPEG, WebP
```

### Example: Video Analysis Skill

```markdown theme={"theme":{"light":"github-light","dark":"dark-plus"}}
---
name: video-highlight-detection
description: Detect and label key moments and highlights in video content
toolsets:
  - core
  - video
---

# Video Highlight Detection

## Objective
Analyze videos to identify and label key moments, scene transitions,
and notable events with precise timestamps.

## Analysis Strategy
1. Watch the full video to understand the overall narrative and context
2. Identify scene transitions and notable events by timestamp
3. Classify each highlight by category (action, dialogue, transition)
4. Record start and end times in MM:SS format

## Output Requirements
- Each highlight must include a description, category, and timestamps
- Use the exact category names defined in the schema
```

<Tip>
  Write instructions as if you're briefing an expert analyst. Be specific about what to look for, how to classify it, and what format to use for the output.
</Tip>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.