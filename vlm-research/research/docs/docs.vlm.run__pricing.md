> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Pricing

> Dollar and token based pricing for VLM Run Orion agents.

Orion agents are priced in **US dollars**. Every response includes the run cost.

## What makes up your cost

* **Fixed-price tools:** GPU and API actions charged at a flat rate per unit.
  * Examples: image generation and editing, OCR and layout, and video generation and editing.
* **Token-billed model usage:** Orion reasoning and LLM-backed tools charged by input and output tokens.
  * Examples: image captioning, document extraction, and video analysis.

## How a run adds up

```
run cost   = token-billed usage + fixed-price tools
total cost = run cost × service-tier multiplier
```

The [service tier](#service-tiers) sets the multiplier.

## The per-span cost ledger

Every Orion 2 run returns a **per-span cost ledger**. Each line is one billable action. Each action is a fixed-price tool or token-billed usage.

| Span Type | Priced By | Example |
| - | - | - |
| `mllm` | Model tokens (input + cached + output) | One LLM reasoning turn |
| `execute_code` | Fixed price (\$0.001/call) | One sandbox code execution |
| `tool` (fixed-price) | Fixed dollar price | `vlmrun.image.generate`, `vlmrun.image.segment` |
| `tool` (token-billed) | Model tokens consumed | `vlmrun.document.extract`, `vlmrun.video.caption` |

The multiplier applies once, at the run level (`effective_cost = SUM(span.cost) × multiplier`).

| Response Field | What It Tells You |
| - | - |
| `cost_dollars` | What you actually pay, after the service-tier multiplier |
| `standard_cost_dollars` | Baseline cost at the standard tier |
| `savings_dollars` | Amount saved versus standard (positive on `flex`) |
| `service_tier` | Which delivery tier ran the request |

### An example ledger

Illustrative ballpark for one document on Orion 2 Auto in [program mode](/agents/code-execution). Actual token usage and cost vary with the document and the requested output.

| Span | Billed Usage | Cost |
| - | - | - |
| `execute_code` | Fixed price | \$0.0010 |
| `vlmrun.document.extract` | 6,000 input + 1,000 output tokens | \$0.0020 |
| `vlmrun.document.grounding` | Fixed price | \$0.0010 |
| **Total** | **2 fixed-price spans, 7,000 tokens** | **\$0.0040** |

## Choose your tiers

Model quality and the service tier are independent. Quality selects the models. The service tier scales the bill.

### Model quality

Use Fast, Auto, or Pro as a curated default. Token rates vary by model.

| Tier | Model ID | When to Use |
| - | - | - |
| **Fast** | `vlmrun-orion-2:fast` | Speed and cost-efficiency. Lighter models, fastest processing. |
| **Auto** | `vlmrun-orion-2:auto` | Recommended default. Uses Fast tools, upgrades to Pro for complex tasks. |
| **Pro** | `vlmrun-orion-2:pro` | Maximum quality. More powerful models, higher cost, longer processing. |

<Note>
  VLM Run hosts additional Orion-2 backbones, open-weight and frontier models, beyond these three tiers. Pass any supported `model` ID on [chat completions](/api-reference/v1/post-chat-completions) or agent execute to pin a backbone.
</Note>

### Service tiers

The service tier uses the same models, tools, and output. It changes how quickly the result comes back.

<table align="center">
  <thead>
    <tr>
      <th align="left">Tier</th>
      <th align="center">Multiplier</th>
      <th align="center">Cost Effect</th>
      <th>Best For</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td><code>standard</code> <em>(default)</em></td>
      <td align="center">1.0×</td>
      <td align="center">Base USD price</td>
      <td>Most production workloads.</td>
    </tr>

    <tr>
      <td><code>flex</code></td>
      <td align="center">0.5×</td>
      <td align="center">50% of standard</td>
      <td>Background jobs with no one waiting: overnight batches, backfills.</td>
    </tr>

    <tr>
      <td><code>priority</code></td>
      <td align="center">1.8×</td>
      <td align="center">180% of standard</td>
      <td>Interactive or blocking workflows where latency is user-visible.</td>
    </tr>
  </tbody>
</table>

A \$1.00 standard run costs \$0.50 at `flex` and \$1.80 at `priority`. Set `service_tier` per request:

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  # Flex tier: 50% discount on total agent cost
  response = client.agent.execute(
      name="my-orion-agent",
      inputs={...},
      service_tier="flex",
  )
  # response.usage.cost_dollars   → effective cost
  # response.usage.savings_dollars → amount saved
  ```

  ```javascript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  // Priority tier: 1.8x premium, lowest latency
  const response = await client.agent.execute({
    name: "my-orion-agent",
    inputs: {...},
    serviceTier: "priority",
  });
  ```

  ```bash cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl -X POST https://api.vlm.run/v1/agent/execute \
    -H "Authorization: Bearer $VLMRUN_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "name": "my-orion-agent",
      "inputs": {...},
      "service_tier": "flex"
    }'
  ```
</CodeGroup>

## What a run actually costs

`cost_dollars` in the response is the exact figure.

<AccordionGroup>
  <Accordion title="Image segmentation + generation">
    | Component | Type | Auto |
    | - | - | - |
    | Segment objects in 1 image | Fixed-price (1×) | \$0.01 |
    | Generate 1 image | Fixed-price (1×) | \$0.04 |
    | LLM orchestration | Tokens (approx.) | \~\$0.01 |
    | **Estimated total** | | **\~\$0.06** |
  </Accordion>

  <Accordion title="50-page document: OCR + extraction with Flex">
    | Component | Type | Standard Cost |
    | - | - | - |
    | OCR & layout (50 pp) | Fixed-price: \$0.01/page | \$0.50 |
    | Parse / extract data | Token-billed | Varies by complexity |
    | LLM orchestration | Tokens (approx.) | \~\$0.02–\$0.05 |
    | **Estimated standard subtotal** | | **\~\$0.52–\$0.55** |
    | Flex service tier | 0.5× multiplier | × 0.5 |
    | **Estimated total with Flex** | | **\~\$0.26–\$0.28** |
  </Accordion>
</AccordionGroup>

## Gateway

<Card title="Gateway pricing" icon="network-wired" href="/gateway/pricing">
  How a Gateway request is billed. Live model rates are on the catalog.
</Card>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.