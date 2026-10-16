> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Models

> The engines that answer typed, calibrated decisions

Several engines answer the same questions and return the same answer shapes.

A **diffusion** read seeds a canvas and denoises it once. A **generative** read writes the answer template under a grammar. Nothing is parsed. An answer cannot be off-schema.

| Model | Read | Notes |
| - | - | - |
| `google/diffusiongemma-26b-a4b-it` | diffusion | The default engine, and the most peaked distributions. |
| `google/gemma-4-26b-a4b-it` | generative | The sparse sibling of the default: 4B active, so a read costs a fraction of its size. |
| `qwen/qwen3.8-27b` | generative | The largest generative engine on this route. |
| `qwen/qwen3.5-0.8b` | generative | The smallest engine on this route. Decisions are less peaked than the default's. |

Each id also accepts its Hugging Face spelling, such as `Qwen/Qwen3.8-27B`.

<Warning>
  **Generative reads are experimental:** The diffusion engine reads probabilities straight off the canvas. The shape is guaranteed. The calibration is not. On the smaller engines, measured probabilities sit much closer to uniform. A confident-looking answer can still be wrong. Treat `confidence` from a generative read as a weak signal. Validate on your own labelled data before you threshold on it. Prefer `google/diffusiongemma-26b-a4b-it` wherever the decision matters.
</Warning>

## Naming a model

<Warning>
  **There is no catch-all alias:** Name the model you want. An id the deployment does not serve is a `404`. Override the TypeSafe SDK's `jev-latest` default. See [TypeSafe SDK Compatibility](/gateway/jev-compatibility).
</Warning>

Which engines a deployment serves varies. A decision reports the id that answered it. Read the live list: [`GET /typesafe/v1/models`](/gateway/api-reference/get-typesafe-models). Do not hard-code an id.

## Which one to reach for

| If you need | Reach for |
| - | - |
| Calibrated probabilities you will threshold on | `google/diffusiongemma-26b-a4b-it` |
| The lowest cost per read | `qwen/qwen3.5-0.8b` |
| A reasoning budget before the answer | Any generative engine, via `reasoning_effort` |

`reasoning_effort` applies to generative engines only. A diffusion engine rejects it with a `422`. See [Gateway extensions](/gateway/system-one#gateway-extensions).

## Related

<CardGroup cols={2}>
  <Card title="System One" icon="scale-balanced" href="/gateway/system-one">
    Question types, inputs, confidence, and cost levers.
  </Card>

  <Card title="List Models" icon="table-list" href="/gateway/api-reference/get-typesafe-models">
    The live list for a deployment.
  </Card>
</CardGroup>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.