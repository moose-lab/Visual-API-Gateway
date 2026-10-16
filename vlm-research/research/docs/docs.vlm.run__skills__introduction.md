> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Orion Skills

> Modular, reusable capabilities for visual extraction and agent workflows

Reference a skill by name instead of a pre-defined [domain](/hub).
Optionally pin a version.

<Tip>
  Set the input type, the task, and the output schema.
</Tip>

Pass multiple skills in one request.
Create a skill from a prompt, a chat, or a skill zip.
Send a base64 skill zip in the request, with no pre-upload.

## Skill Identifiers

| Field | Description | Example |
| - | - | - |
| `skill_id` | Unique identifier (UUID or name string) | `"abc-123-def"` |
| `skill_name` | Human-readable name for lookup | `"invoice-extraction"` |
| `skill_version` | Skill version to use | `"latest"` |

Provide `skill_name` or `skill_id`.
With `skill_name`, `skill_version` defaults to `latest`.

## Skills vs Domains

<Warning>
  We will be deprecating domains in the near future. Whenever possible, use skills instead of domains.
</Warning>

<Note>
  When `skills` are provided and `domain` is omitted, the platform creates a dynamic application from the skill's prompt and JSON schema. You can still pass `domain` alongside `skills` if needed.
</Note>

| | Domains | Skills |
| - | - | - |
| **Lookup** | Fixed string (e.g. `"document.invoice"`) | Name + version (e.g. `"invoice-extraction"` @ `"latest"`) |
| **Custom prompts** | Via `config.prompt` | Bundled with the skill |
| **JSON schema** | Pre-defined per domain | Bundled with the skill |
| **Versioning** | N/A | Explicit version pinning |
| **Usage** | `domain` parameter | `config.skills` parameter |

## Where Skills Work

| Type | Skills Parameter |
| - | - |
| **Model Requests** | `config.skills` |
| **Agent Executions** | `config.skills` |
| **Chat Completions** | `skills` |

## Skills lifecycle

<iframe className="w-full aspect-video rounded-xl" src="https://www.youtube.com/embed/ubcpLluWjBs?rel=0" title="How to Create Skills with VLM Run's Visual Agent Orion" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />

<Steps>
  <Step title="Create" icon="plus">
    Define the skill in a [chat conversation](/platform/chat) or by [uploading a skill package](/skills/spec/overview). Set the task description and output schema. Test it on sample files.
  </Step>

  <Step title="Edit" icon="pen">
    Update the prompt, schema, or metadata. Publish a new version. Callers on a pinned version stay on that version.
  </Step>

  <Step title="Use" icon="play">
    Reference the skill in [chat](/platform/chat), the [REST API](/api-reference/v1/post-chat-completions), or the [SDK](/sdk-reference/getting-started). Pass multiple skills in one request.
  </Step>
</Steps>

## Navigating skills

<div className="platform-figure">
  <img src="https://mintcdn.com/autonomiai/31N4NFzIelpYJkPB/images/platform-skill-table.png?fit=max&auto=format&n=31N4NFzIelpYJkPB&q=85&s=51bd022c183a5d215a265404cf82e9d2" alt="Skills table view" width="2712" height="1512" data-path="images/platform-skill-table.png" />
</div>

The table lists every skill in the workspace.
Filter by name, domain, or version.
Open a row for usage stats, version history, and the current schema.

## Configuring skills

<div className="platform-figure">
  <img src="https://mintcdn.com/autonomiai/31N4NFzIelpYJkPB/images/platform-skill-detail.png?fit=max&auto=format&n=31N4NFzIelpYJkPB&q=85&s=913570b047b374833a4dbced98f198c9" alt="Skill detail and editor view" width="2886" height="1600" data-path="images/platform-skill-detail.png" />
</div>

The detail view shows the task description, JSON schema, sample inputs and outputs, and version history.
Edit a field and publish a new version from this page.

## Best practices

| Principle | Why it matters |
| - | - |
| **Specific task description** | Narrow prompts produce more accurate, consistent outputs than broad ones |
| **Tight output schema** | A well-defined JSON schema eliminates ambiguity and makes downstream parsing trivial |
| **Representative test cases** | Testing against diverse samples catches edge cases before production |
| **Versioning** | Pin consumers to a version so schema changes don't break integrations |

## Next

<CardGroup cols={2}>
  <Card title="Quickstart" icon="rocket" href="/skills/quickstart">
    Get started with skills in under 2 minutes.
  </Card>

  <Card title="Create a Skill" icon="plus" href="/platform/skills/create">
    Create a skill on the platform.
  </Card>

  <Card title="Edit a Skill" icon="pen" href="/platform/skills/edit">
    Update prompts and schemas, then publish a new version.
  </Card>

  <Card title="Use a Skill" icon="play" href="/platform/skills/use">
    Reference skills in chat, API calls, and agent workflows.
  </Card>

  <Card title="Skill Spec" icon="file-code" href="/skills/spec/overview">
    The skill package format: skill.md, vlmrun.yaml, and schema.json.
  </Card>

  <Card title="Version Pinning" icon="lock" href="/skills/usage/version-pinning">
    Control which version consumers use in production.
  </Card>

  <Card title="Skills via API" icon="server" href="/skills/manage/create">
    Create and manage skills programmatically with the REST API.
  </Card>
</CardGroup>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.