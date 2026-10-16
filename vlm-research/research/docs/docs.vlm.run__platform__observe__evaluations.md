> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Evaluations

> Measure skill, agent, and request-domain accuracy using feedback as ground truth.

Evaluations compare stored model outputs to human corrections recorded as feedback. They report per-field accuracy, API completion rate, and optimization hints on skill runs.

<div className="platform-figure">
  <img src="https://mintcdn.com/autonomiai/31N4NFzIelpYJkPB/images/platform-evaluation-overview.png?fit=max&auto=format&n=31N4NFzIelpYJkPB&q=85&s=754c4d0cb50ef92e0f835b65fafde058" width="2980" height="1740" data-path="images/platform-evaluation-overview.png" />
</div>

## What is being compared?

For each prediction request or agent execution in scope:

1. The platform loads the original structured response from durable storage.
2. It loads ground truth from feedback: JSON in the `response` field, or JSON inferred from notes when [Infer corrections](#run-an-evaluation-in-the-dashboard) is on.
3. It runs one or more evaluators on each pair and aggregates metrics.

Items with no feedback still count toward totals and API completion rate. Only corrected samples drive scorer metrics such as field accuracy.

### How responses are flattened

Scoring flattens model output and ground truth into dotted leaf paths. Examples: `vendor_name`, `address.city`, `total_amount`.

* **Lists are atomic.** The whole list is one leaf. `line_items` is not `line_items[0].description`. `field_accuracy` uses exact equality. `fuzzy_field_match` JSON-serializes both sides and scores similarity. `llm_judge` scores the list semantically.
* **`_metadata` keys are skipped.** A key that contains `_metadata` (`_metadata`, `name_metadata`) is never scored.
* **Null ground truth is excluded by default.** A leaf whose corrected value is `null` is left out of the metric. Set `skip_null_expected` to `false` to score explicit nulls.

## Run an evaluation in the dashboard

Store corrections with [Feedback & fine-tuning](/guides/feedback) first. Tie each correction to a request or execution ID. The run is asynchronous. You get a run record immediately. Scores fill in when scoring finishes.

<Steps>
  <Step title="Open Evaluations">
    In the dashboard sidebar, choose **Evaluations**. It sits with Overview, Requests, Executions, and Completions.
  </Step>

  <Step title="Start an evaluation and choose a source">
    Click **New Evaluation**. Pick a source:

    * **Skill**: one skill ID. Scores prediction requests and agent executions that used that skill in the date range.
    * **Agent**: one agent ID and version. Scores agent executions in range.
    * **Request domain**: a hub domain on requests, for example `document.invoice`. Scores prediction requests for that domain.

    <div className="platform-figure">
      <img src="https://mintcdn.com/autonomiai/31N4NFzIelpYJkPB/images/platform-new-evaluation-config.png?fit=max&auto=format&n=31N4NFzIelpYJkPB&q=85&s=2a017c374e7da98d3c7922a39b1e7d73" width="2980" height="1740" data-path="images/platform-new-evaluation-config.png" />
    </div>
  </Step>

  <Step title="Set the date range">
    Choose the time window. The preview shows total items, items with feedback, items with JSON corrections, and the latest activity timestamp.

    A very wide window mixes old prompts with new ones and blurs trends.

    <Tip>
      Aim for at least **10–20 items with feedback** before treating metrics as stable.
    </Tip>
  </Step>

  <Step title="Pick a model (optional)">
    Choose an inference model to limit the run. Examples: `gemini-3.1-flash-lite-preview`, `gemini-3.1-pro-preview`, `vlm-1`. Only requests and executions from that model are loaded.

    **Default (auto-detect)** scores every item in the window. The selected model is the model [Rerun](#rerun-skill-evaluations-only) uses when it skips inference.
  </Step>

  <Step title="Choose evaluators">
    Select one or more strategies. The default emphasis is **Field accuracy**. Tradeoffs are in [Evaluator types](#evaluator-types).
  </Step>

  <Step title="Select fields (optional)">
    Pass top-level keys or dotted leaf-path prefixes to limit scoring. Examples: `vendor_name`, `address`, `line_items`. Omit the list to score every field.

    Matching rules are in [Field selection](#field-selection).
  </Step>

  <Step title="Infer corrections (optional)">
    **Infer corrections** is **on by default**. Notes-only feedback can be turned into JSON with an LLM. The skill schema is used when one is available.

    <Note>
      Inferred JSON is best-effort. For production ground truth, send explicit JSON in feedback. See [Feedback & fine-tuning](/guides/feedback).
    </Note>
  </Step>

  <Step title="Run">
    Submit the run. Status starts at `running`, then moves to `completed` or `failed`. The dashboard polls every few seconds. The result view unlocks at `completed`.
  </Step>
</Steps>

## Review results

Open a **completed** run from the history table.

* **Overall accuracy**: field-level matches versus mismatches. Samples without corrections use an accepted assumption in this rollup.
* **Accuracy delta**: change versus the previous completed run with the same source label and type.
* **API completion rate**: share of in-scope items whose upstream API calls completed. Failed and incomplete calls count against the rate.
* **Total samples**: items in this run.

<div className="platform-figure">
  <img src="https://mintcdn.com/autonomiai/31N4NFzIelpYJkPB/images/platform-evaluation-results.png?fit=max&auto=format&n=31N4NFzIelpYJkPB&q=85&s=c2f95b4314002e91dc0409e40ebda2ea" width="2980" height="1740" data-path="images/platform-evaluation-results.png" />
</div>

### Performance metrics

Completed runs include cost and latency of the underlying API traffic.

| Metric | Meaning |
| - | - |
| **Model** | The inference model the items were produced by, when scoped via the Model selector or auto-detected from the most common `model_id` in the window. |
| **Avg / Total / p50 latency** | Latency of the upstream prediction or execution aggregated across items that completed within the window. |
| **Avg / Total credits** | Credits charged for the underlying calls. Useful when comparing two skill versions or two models on the same task. |

The same numbers fill the **Credits** and **Model** columns in the history table. **VS Prev** shows the field-match delta versus the previous run.

### Field breakdown

**Field-by-Field Comparison** lists each extracted field.

<Note>
  Use the row filters at the top right—**All**, **Errors**, or **Correct**—to narrow the table. **Errors** shows fields that still mismatch.
</Note>

<div className="platform-figure">
  <img src="https://mintcdn.com/autonomiai/31N4NFzIelpYJkPB/images/platform-evaluation-field-comparison.png?fit=max&auto=format&n=31N4NFzIelpYJkPB&q=85&s=3c2b8db6c9075f243f3b809a0fb06995" width="2980" height="1740" data-path="images/platform-evaluation-field-comparison.png" />
</div>

| Column | Meaning |
| - | - |
| **Field** | Schema field name (for example `education[1].degree`). |
| **Correct** | Count of samples where this field matched the correction (shown in green in the UI). |
| **Errors** | Count of mismatches for that field (shown in red). |
| **Accuracy** | Share of samples where this field was correct. |

Rows put the weakest fields first. Expand a field for **Original** (model output) and **Corrected** (feedback).

### Optimization hints (skill runs only)

Skill runs can include optimization hints: weakest fields, themes from notes, a few representative failures, and short next steps. Read them before **Optimize**. **Optimize** uses those inputs when it creates a new skill version.

<div className="platform-figure">
  <img src="https://mintcdn.com/autonomiai/31N4NFzIelpYJkPB/images/platform-evaluation-optimization-hint.png?fit=max&auto=format&n=31N4NFzIelpYJkPB&q=85&s=48be72a15117f10c1f2051250b47eff3" width="2980" height="1740" data-path="images/platform-evaluation-optimization-hint.png" />
</div>

## Metrics and history

<div className="platform-figure">
  <img src="https://mintcdn.com/autonomiai/31N4NFzIelpYJkPB/images/platform-evaluation-overview.png?fit=max&auto=format&n=31N4NFzIelpYJkPB&q=85&s=754c4d0cb50ef92e0f835b65fafde058" width="2980" height="1740" data-path="images/platform-evaluation-overview.png" />
</div>

* **Summary cards**: total runs, plus counts for Skills, Agents, and Domains.
* **Accuracy trend**: field-match accuracy across recent completed runs, filterable by source. Overlays can show API completion rate, fuzzy-match rate, and exact-match rate when those evaluators ran.
* **Cross-run field view**: weakest fields across history, with a Worst / Best toggle.
* **History table**: status, source, model, credits, field-match accuracy, **VS Prev** delta, data range, and timestamps. Row actions depend on status and source type.

## Evaluation sources (API naming)

| Dashboard concept | `source_type` in APIs | What is scored |
| - | - | - |
| Skill | `skill` | Requests and executions using that skill ID in the window |
| Agent | `agent` | Executions for that agent ID/version |
| Request domain | `request_domain` | Requests tagged with that domain string |

The preview endpoint uses the same identifiers. Check counts there before you run.

## Evaluator types

You can combine evaluators in one run.

| UI label | API ID | Role | Field selection |
| - | - | - | - |
| Field accuracy | `field_accuracy` | Default. Per-field leaf comparison with light type coercion (e.g. numeric `"1"` vs `1.0`). | Yes |
| Fuzzy match | `fuzzy_field_match` | String similarity on text leaves; **0.7** similarity threshold by default. Non-strings fall back to equality. | Yes |
| LLM judge | `llm_judge` | Semantic score from a judge model over the full structured output. | No |
| Exact match | `equals_expected` | Strict per-field equality for **short** expected values only (see below). | Yes |

### Field accuracy (`field_accuracy`)

This score drives the field table and optimization hints.

### Fuzzy field match (`fuzzy_field_match`)

String leaves take the higher of character-level and token-level similarity. A leaf passes at similarity ≥ **0.7**.

### LLM judge (`llm_judge`)

Each sample gets a semantic score from 0 to 1. Use it when paraphrases or layout differences should not count as errors. The judge adds model latency and cost compared with the deterministic evaluators.

### Exact match (`equals_expected`)

Leaves must match exactly, including whitespace and casing. Only expected strings of **≤ 128 characters** are included. Longer leaves are skipped. If no leaf qualifies, the sample can be omitted from the exact-match rate.

<Note>
  **LLM judge** and **Exact match** are independent toggles. Turning on the judge does not replace exact match. Choose both only when you want both signals.
</Note>

### Choosing a combination

| Scenario | Good starting set |
| - | - |
| Structured extraction | `field_accuracy` + `fuzzy_field_match` |
| Lots of free text | Add `llm_judge` |
| Tight IDs / codes | Add `equals_expected` |
| Unsure | `field_accuracy` only |

## Field selection

By default, every field in the JSON output is scored. Pass a `fields` list of top-level keys or dotted leaf-path prefixes to limit scoring.

| `fields` value | Matches |
| - | - |
| `"name"` | `name`, `name.first`, `name.last` |
| `"address"` | `address`, `address.street`, `address.city`, and so on |
| `"line_items"` | `line_items` (the whole list as one atomic leaf) |

<Note>
  Lists are not recursed into. A leaf prefix like `line_items` matches the list itself, not `line_items[0].description`. To compare list contents semantically, enable **LLM judge** alongside `field_accuracy`.
</Note>

Field selection applies to **Field accuracy**, **Fuzzy match**, and **Exact match**. **LLM judge** always scores the full response.

Pass `fields` and other run options in the run or rerun body:

<CodeGroup>
  ```json Run Evaluation theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "source_type": "skill",
    "source_id": "<skill-id>",
    "source_label": "Invoice extraction v3",
    "model": "gemini-3.1-flash-lite-preview",
    "data_from": "2026-04-01T00:00:00Z",
    "data_to": "2026-04-30T23:59:59Z",
    "evaluators": ["field_accuracy", "fuzzy_field_match"],
    "fields": ["vendor_name", "total_amount", "line_items"],
    "infer_corrections": true,
    "skip_null_expected": true
  }
  ```

  ```json Rerun theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "evaluation_id": "<evaluation-id>",
    "skill_id": "<new-skill-id>",
    "model": "gemini-3.1-flash-lite-preview",
    "evaluators": ["field_accuracy"],
    "fields": ["vendor_name", "total_amount"]
  }
  ```
</CodeGroup>

When `fields` is omitted or `null`, all fields are evaluated. That default is backward-compatible. On [Rerun](#rerun-skill-evaluations-only), omitted `evaluators`, `infer_corrections`, and `skip_null_expected` are inherited from the original run's stored config.

## Interpreting accuracy

| Band | Reading | Next step |
| - | - | - |
| **95–100%** | Strong | Watch for regressions after deploys |
| **85–95%** | Solid | Tighten weakest fields surfaced in breakdown |
| **70–85%** | Mixed | Inspect samples and hints; adjust prompt/schema |
| **\< 70%** | Risky | Consider Optimize (skills) or deeper instruction changes |

## Actions on a run

### Optimize (skill evaluations only)

Optimize is available when `source_type` is **skill** and the run status is `completed`. The service samples up to **30** response/correction pairs by default. The API allows up to **200**. It calls the skill optimizer with a Gemini model and creates a **new skill version** with the same name.

The optimizer writes:

* A **prompt addendum** appended to the original prompt. It captures generic error patterns and includes no actual data values.
* **Per-field schema hints** on the JSON Schema descriptions for the fields with the most errors.

Success opens the skill detail page.

### Rerun (skill evaluations only)

**Rerun** is skill-only in the UI. It calls the platform rerun pipeline:

1. **Optimizes the source skill first** unless you pass a different skill via API.
2. **Re-executes** the underlying requests and executions against the new skill, swapping the model when one was selected.
3. **Copies feedback forward** onto the new request and execution IDs. It infers corrections from notes when that option is enabled.
4. **Re-scores** the new traffic and writes the result to a fresh run row.

<Tip>
  If you already have results for the target `(skill, model)` pair in the same window, Rerun **skips re-execution** and scores the existing items directly. This makes A/B comparisons across skill versions or models much cheaper when the new skill has already been used in production.
</Tip>

Omit `evaluators`, `fields`, `infer_corrections`, or `skip_null_expected` on the rerun request to inherit them from the original run's stored `config`. Pass any of them to override. You can re-score the same window under different conditions, for example `evaluators` set to `["llm_judge"]`, without rebuilding the full request.

<Note>
  Agent and domain evaluations still return metrics and samples. **Optimize** and **Rerun** are hidden because those flows need a skill to re-execute against.
</Note>

### Delete

Delete removes the run record. It is typically allowed for **completed** or **failed** runs. It does not delete requests, executions, or feedback.

## Programmatic feedback

Evaluations read feedback you already stored. They do not replace the feedback API. Submission formats, entity IDs (`request`, `agent_execution`, `chat`), and examples are in [Feedback & fine-tuning](/guides/feedback) and [Submit feedback](/api-reference/v1/post-submit-feedback).

Dashboard **run**, **optimize**, and **rerun** call internal evaluation services. Those routes are not in the public `api.vlm.run` OpenAPI bundle. Use the dashboard unless your integration team has exposed the same routes.

## Related pages

<CardGroup cols={2}>
  <Card title="Feedback & fine-tuning" icon="thumbs-up" href="/guides/feedback">
    Ground truth tied to requests and executions.
  </Card>

  <Card title="Submit feedback API" icon="server" href="/api-reference/v1/post-submit-feedback">
    HTTP reference for structured feedback.
  </Card>
</CardGroup>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.