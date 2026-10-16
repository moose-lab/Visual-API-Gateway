> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Completions

> Review model, tokens, status, latency, and credits

<div className="platform-figure">
  <img src="https://mintcdn.com/autonomiai/31N4NFzIelpYJkPB/images/platform-completions-group11.png?fit=max&auto=format&n=31N4NFzIelpYJkPB&q=85&s=6232c3e824cc36e238d1fc90d8b649ab" alt="Completions detail view" width="2712" height="1512" data-path="images/platform-completions-group11.png" />
</div>

<Tip>Query completions through the API. See the [Chat Completions API reference](/api-reference/v1/post-chat-completions).</Tip>

## Completions table

<div className="platform-figure">
  <img src="https://mintcdn.com/autonomiai/31N4NFzIelpYJkPB/images/platform-completions-group10.png?fit=max&auto=format&n=31N4NFzIelpYJkPB&q=85&s=588f4cee7006cb1f3ae297f61736470f" alt="Completions table view" width="2712" height="1506" data-path="images/platform-completions-group10.png" />
</div>

| Column | Description |
| - | - |
| **Model** | Which model generated the completion (e.g., `vlmrun-orion-1`, `vlmrun-orion-1:pro`) |
| **Skill / Domain** | The skill or domain applied, if any |
| **Status** | `success` or `error` |
| **Tokens** | Input and output token counts |
| **Latency** | Time from request to first token and total completion time |
| **Credits** | Credits consumed by this completion |
| **Timestamp** | When the completion was generated |

Filter by model, skill, status, or time range.

## Completion detail

Click a row.

* **Messages**: Complete message history (system, user, assistant)
* **Structured output**: JSON output when a skill or schema was applied
* **Raw response**: Unprocessed model output, including tool calls and intermediate reasoning
* **Token breakdown**: Input tokens (prompt, images, and files) and output tokens (response)
* **Timing**: Time to first token (TTFT) and total generation time
* **Feedback**: Submit quality ratings


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.