> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Requests

> View, filter, and inspect API requests

<div className="platform-figure">
  <img src="https://mintcdn.com/autonomiai/31N4NFzIelpYJkPB/images/platform-requests-table.png?fit=max&auto=format&n=31N4NFzIelpYJkPB&q=85&s=713fd3f741bc3ac9ebc8ea1e669a970d" alt="Requests table view" width="2712" height="1512" data-path="images/platform-requests-table.png" />
</div>

## Filtering Requests

Search the table to find a request. Click the filter icon and filter by status. Other filters are available.

<Tip>Click a bar in the graph at the top. The table filters to that day.</Tip>

<div className="platform-figure">
  <img src="https://mintcdn.com/autonomiai/31N4NFzIelpYJkPB/images/platform-requests-filter.png?fit=max&auto=format&n=31N4NFzIelpYJkPB&q=85&s=c6eb31cb49287ea9da22e20c3dbbb99f" alt="Filter requests" width="2712" height="1520" data-path="images/platform-requests-filter.png" />
</div>

## Creating Requests

Click the **+** button on the right. Upload one or more files. Select the model and the detail level. Confidence scoring and visual grounding are optional.

<Tip>Create the request through the API. See the [Generate API reference](/api-reference/v1/post-image-generate) for the full set of options.</Tip>

<div className="platform-figure">
  <img src="https://mintcdn.com/autonomiai/31N4NFzIelpYJkPB/images/platform-requests-create.png?fit=max&auto=format&n=31N4NFzIelpYJkPB&q=85&s=3cf5fdf119e39f12475feec967400800" alt="Create a request" width="2712" height="1518" data-path="images/platform-requests-create.png" />
</div>

## Using Skills in Requests

Select a skill. It handles the prompt, output schema, and plan.

<Tip>See [Orion Skills](/skills/introduction) for how to create a skill.</Tip>

<div className="platform-figure">
  <img src="https://mintcdn.com/autonomiai/31N4NFzIelpYJkPB/images/platform-requests-skill.png?fit=max&auto=format&n=31N4NFzIelpYJkPB&q=85&s=739d35cc1eb914d15d0e95a8e9b47167" alt="Use a skill in a request" width="2712" height="1522" data-path="images/platform-requests-skill.png" />
</div>

## Request Details

Click a request. The input file appears next to the output. View the output as JSON, Markdown, or Form. See [Executions](/platform/observe/executions) for field-level feedback.

<div className="platform-figure">
  <img src="https://mintcdn.com/autonomiai/31N4NFzIelpYJkPB/images/platform-requests-inside.png?fit=max&auto=format&n=31N4NFzIelpYJkPB&q=85&s=6029141f0a6e59a93ab8f3573b77c013" alt="Request detail view" width="2712" height="1520" data-path="images/platform-requests-inside.png" />
</div>

Add feedback on an individual output field. Add a note on the request as a whole.

<Tip>Submit feedback through the [feedback endpoint](/api-reference/v1/post-submit-feedback).</Tip>

## Request Table

| Column | Description |
| - | - |
| **Endpoint** | The API path called (e.g., `/v1/image/generate`, `/v1/chat/completions`) |
| **Status** | HTTP status code: `200` for success, `4xx`/`5xx` for errors |
| **Duration** | Wall-clock time from request received to response sent |
| **Credits** | The number of credits consumed by this request |
| **Timestamp** | When the request was received |
| **Skill / Domain** | The skill or domain referenced in the request, if any |


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.