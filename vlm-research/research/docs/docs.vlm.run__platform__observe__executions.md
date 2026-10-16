> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Executions

> Status, duration, credits, and feedback for agent and skill runs

<div className="platform-figure">
  <img src="https://mintcdn.com/autonomiai/31N4NFzIelpYJkPB/images/platform-executions-table.png?fit=max&auto=format&n=31N4NFzIelpYJkPB&q=85&s=51959debeae60919e245123950b519fa" alt="Executions table view" width="2712" height="1512" data-path="images/platform-executions-table.png" />
</div>

## Execution Details

Left panel: request JSON and inputs. Right panel: JSON output, plus Markdown and Form views when they apply.

JSON output shows bounding box accuracy when grounding was applied to the input.

<div className="platform-figure">
  <img src="https://mintcdn.com/autonomiai/31N4NFzIelpYJkPB/images/platform-executions-27.png?fit=max&auto=format&n=31N4NFzIelpYJkPB&q=85&s=d13891a6c187d6b13afaa09b2e80c18b" alt="Execution detail view" width="1356" height="757" data-path="images/platform-executions-27.png" />
</div>

## JSON Form

Open **JSON Form** to edit output fields. Update a field and click save to store field-level feedback.

<div className="platform-figure">
  <img src="https://mintcdn.com/autonomiai/31N4NFzIelpYJkPB/images/platform-executions-28.png?fit=max&auto=format&n=31N4NFzIelpYJkPB&q=85&s=0b2483cf02cab12c202b90dcfc33518c" alt="Form feedback view" width="1356" height="760" data-path="images/platform-executions-28.png" />
</div>

<Tip>Submit field-level feedback through the [feedback endpoint](/api-reference/v1/post-submit-feedback).</Tip>

## Diff View

After feedback is saved, click **JSON**, then the diff icon to its left.

<div className="platform-figure">
  <img src="https://mintcdn.com/autonomiai/31N4NFzIelpYJkPB/images/platform-executions-29.png?fit=max&auto=format&n=31N4NFzIelpYJkPB&q=85&s=6c23f189e1102dd06176e7d0dcd39a40" alt="Diff view" width="1356" height="757" data-path="images/platform-executions-29.png" />
</div>

## Execution Feedback

Click the note button in the top right to submit feedback for the whole execution.

<div className="platform-figure">
  <img src="https://mintcdn.com/autonomiai/31N4NFzIelpYJkPB/images/platform-executions-30.png?fit=max&auto=format&n=31N4NFzIelpYJkPB&q=85&s=d693f100589159d8cb981fba77f45809" alt="Execution feedback" width="1356" height="759" data-path="images/platform-executions-30.png" />
</div>

<Tip>Submit execution-level feedback through the [feedback endpoint](/api-reference/v1/post-submit-feedback).</Tip>

## Executions Table

| Column | Description |
| - | - |
| **Agent / Skill** | Agent or skill that ran |
| **Status** | `running`, `completed`, `failed`, or `cancelled` |
| **Duration** | Wall-clock time for the whole execution |
| **Steps** | Intermediate steps (model calls, tool uses) |
| **Credits** | Credits consumed across all steps |
| **Timestamp** | When the execution was triggered |

Filter by agent, skill, status, or time range. Sort by duration or credits.

## Single vs. Batch Executions

* **Single**: one file, one skill, one result.
* **Batch**: multiple files in one run. The table shows the batch as a group. Expand it for each result.

## Debugging Failures

A failed execution shows:

1. **Which step failed**: highlighted in the timeline
2. **Error message**: the error returned by the model or tool
3. **Input that caused the failure**: the payload that triggered the error
4. **Preceding successful steps**: steps that completed before the failure


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.