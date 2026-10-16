> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# vlmrun.yaml

> Execution configuration for agent-powered skills

`vlmrun.yaml` defines how a skill executes within VLM Run's Orion agent. It specifies the model, available toolsets, and a state machine graph that orchestrates the agent's workflow.

## Format

```yaml theme={"theme":{"light":"github-light","dark":"dark-plus"}}
apiVersion: vlm.run/v1alpha
metadata: {}
model: vlmrun-orion-1:auto
toolsets:
  - core
  - image
graph: |
  stateDiagram-v2
    AnalyzeImage: Analyze input image content
    Output: Produce structured output conforming to the target schema

    [*] --> AnalyzeImage
    AnalyzeImage --> Output
    Output --> [*]
```

## Fields

| Field | Type | Required | Description |
| - | - | - | - |
| `apiVersion` | `string` | Yes | API version — currently `vlm.run/v1alpha` |
| `metadata` | `object` | No | Reserved for future use (pass `{}`) |
| `model` | `string` | Yes | Orion model variant to use |
| `toolsets` | `string[]` | Yes | Tool categories available to the agent |
| `graph` | `string` | Yes | State machine definition in Mermaid `stateDiagram-v2` format |
| `plan` | `string` | No | Human-readable explanation of the state machine |

### Model Variants

| Model | Description |
| - | - |
| `vlmrun-orion-1:fast` | Optimized for speed |
| `vlmrun-orion-1:auto` | Balanced speed and quality (recommended) |
| `vlmrun-orion-1:pro` | Maximum quality |

### Toolsets

| Toolset | Description |
| - | - |
| `core` | Basic operations (file I/O, text processing) |
| `image` | Image analysis and understanding |
| `image-gen` | Image generation and editing |
| `video` | Video analysis and understanding |
| `document` | Document extraction and layout understanding |

## State Machine Graph

The `graph` field uses [Mermaid stateDiagram-v2](https://mermaid.js.org/syntax/stateDiagram.html) syntax to define the agent's execution flow. Each state represents a step the agent performs, with transitions defining the order.

### Syntax

```
stateDiagram-v2
  StateName: Description of what the agent does in this state

  [*] --> FirstState        # Entry point
  FirstState --> NextState   # Transition
  FinalState --> [*]         # Exit point
```

### Simple Example (2 states)

A basic image analysis skill with analyze → output flow:

```yaml theme={"theme":{"light":"github-light","dark":"dark-plus"}}
graph: |
  stateDiagram-v2
    AnalyzeImage: Analyze and process image content using multi-modal vision capabilities to identify objects, extract visual features, detect text, and understand spatial relationships within the scene
    Output: Aggregate and reason over all analysis results, validate extracted information for consistency, and produce a well-structured output conforming to the target schema

    [*] --> AnalyzeImage
    AnalyzeImage --> Output
    Output --> [*]
```

### Multi-Step Example (3+ states)

A video analysis skill with multiple processing stages:

```yaml theme={"theme":{"light":"github-light","dark":"dark-plus"}}
graph: |
  stateDiagram-v2
    AnalyzeVideo: Watch the full video to understand the narrative structure and identify key segments
    ExtractHighlights: For each identified segment, extract detailed highlight data including timestamps and categories
    Output: Aggregate all extracted highlights, validate for consistency, and produce structured output

    [*] --> AnalyzeVideo
    AnalyzeVideo --> ExtractHighlights
    ExtractHighlights --> Output
    Output --> [*]
```

## Plan Field

The optional `plan` field provides a human-readable explanation of the state machine. It helps document the skill's workflow for other developers:

```yaml theme={"theme":{"light":"github-light","dark":"dark-plus"}}
plan: |
  ## Objective
  Analyze videos to detect and label key moments, scene transitions, and highlights.

  ## Nodes
  - `AnalyzeVideo`: Watch the full video to understand the overall narrative
  - `ExtractHighlights`: Identify each highlight with timestamps and categories
  - `Output`: Compile results into the target schema format
```

<Tip>
  Write descriptive state names and descriptions. The agent uses them to understand what to do at each step — more detail leads to better execution.
</Tip>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.