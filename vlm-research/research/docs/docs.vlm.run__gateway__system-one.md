> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# System One

> Typed, calibrated decisions over text, JSON, and images in a single read

Chat models are strong at text and weak at automation. Code that branches on a model needs a label it can trust. A chat model returns a string that you must parse and validate, states its confidence loosely, and generates one token at a time. That is too slow and too loose for a request path.

TypeSafe introduced System One models, starting with Jev, for this gap. You send a block of state and a set of typed questions. The model answers all of them in parallel as typed values, each with a calibrated probability. Classify, route, score, and guard become `if` statements over probabilities.

The state that drives automation is often pixels: a scanned page, a camera frame, a product photo. Today an image decision goes through a VLM that writes a sentence, and you parse it. Jev was released for text and structured state. The Gateway applies the same contract to images.

`POST /typesafe/v1/systemone` answers typed questions about a **state** (text, JSON, or images) in one forward pass. Each answer is one of your labels with a calibrated probability. Nothing is generated or parsed, so an answer cannot be off-schema. Over a socket the measured p50 is \~44 ms. Edit `criteria` to change the question.

The route is wire-compatible with TypeSafe's Jev API. Point the `typesafe-sdk` client at `https://gateway.vlm.run/typesafe`. It works unchanged. See [TypeSafe SDK Compatibility](/gateway/jev-compatibility).

The VLM Run SDKs also wrap the route as `client.gateway.systemone`, with friendly question
specs and media helpers: see the [Python](/sdk-reference/components/gateway#system-one)
and [Node.js](/sdk-reference/node/components/gateway#system-one) references.

## Quickstart

Set `detail` to `high` for small print.

<CodeGroup>
  ```python Python [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import base64, pathlib
  from typesafe_sdk import Choice, Noul, Score, TypeSafeClient

  client = TypeSafeClient(
      api_key="<VLMRUN_API_KEY>",
      base_url="https://gateway.vlm.run/typesafe",
  )

  page = base64.b64encode(pathlib.Path("invoice-page.jpg").read_bytes()).decode()

  result = client.system_one(
      "Answer about the attached page.",
      {
          "kind": Choice(
              instructions="What kind of document is this page from?",
              criteria={"invoice": None, "receipt": None, "contract": None, "other": None},
          ),
          "has_total": Noul(instructions="Is a total amount due visible on the page?"),
          "legibility": Score(
              instructions="How legible is the text?",
              criteria=["unreadable", "partly legible", "clear"],
          ),
      },
      extra_body={
          "content": [
              {
                  "type": "image_url",
                  "image_url": {
                      "url": f"data:image/jpeg;base64,{page}",
                      "detail": "high",
                  },
              }
          ]
      },
      model="google/diffusiongemma-26b-a4b-it",
  )

  print(result.choices["kind"].choice, result.nouls["has_total"].noul)
  ```

  ```typescript Node.js [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { readFileSync } from "node:fs";
  import { choice, noul, score, TypeSafeClient } from "@typesafe-ai/sdk";

  const client = new TypeSafeClient({
    apiKey: process.env.VLMRUN_API_KEY,
    baseURL: "https://gateway.vlm.run/typesafe",
    defaultModel: "google/diffusiongemma-26b-a4b-it",
  });

  const page = readFileSync("invoice-page.jpg").toString("base64");

  // Extra fields such as `content` are forwarded from a request variable.
  // An inline object literal would trip TypeScript's excess-property check.
  const request = {
    state: "Answer about the attached page.",
    questions: {
      kind: choice("What kind of document is this page from?", {
        invoice: null,
        receipt: null,
        contract: null,
        other: null,
      }),
      has_total: noul("Is a total amount due visible on the page?"),
      legibility: score("How legible is the text?", [
        "unreadable",
        "partly legible",
        "clear",
      ]),
    },
    content: [
      { type: "image_url",
        image_url: { url: `data:image/jpeg;base64,${page}`, detail: "high" } },
    ],
  };

  const { answers } = await client.systemOne(request);
  console.log(answers.kind.choice, answers.has_total.noul);
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  vlmrun gw s1 -s "Answer about the attached page." invoice-page.jpg --detail high \
    -m google/diffusiongemma-26b-a4b-it \
    --choice kind="invoice|receipt|contract|other" \
    --noul has_total="Is a total amount due visible on the page?" \
    --score legibility="unreadable|partly legible|clear"
  ```

  ```bash cURL [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  IMAGE=$(base64 -w0 invoice-page.jpg)

  curl https://gateway.vlm.run/typesafe/v1/systemone \
    -H "Authorization: Bearer $VLMRUN_API_KEY" \
    -H "Content-Type: application/json" \
    -d @- <<JSON
  {
    "model": "google/diffusiongemma-26b-a4b-it",
    "state": "Answer about the attached page.",
    "content": [
      {"type": "image_url",
       "image_url": {"url": "data:image/jpeg;base64,$IMAGE", "detail": "high"}}
    ],
    "questions": {
      "kind": {
        "type": "choice",
        "instructions": "What kind of document is this page from?",
        "criteria": {"invoice": null, "receipt": null, "contract": null, "other": null}
      },
      "has_total": {"type": "noul", "instructions": "Is a total amount due visible on the page?"},
      "legibility": {
        "type": "score",
        "instructions": "How legible is the text?",
        "criteria": ["unreadable", "partly legible", "clear"]
      }
    }
  }
  JSON
  ```
</CodeGroup>

```json Response [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "model": "google/diffusiongemma-26b-a4b-it",
  "answers": {
    "kind": {
      "type": "choice",
      "choice": "invoice",
      "probabilities": { "invoice": 0.88, "receipt": 0.07, "contract": 0.02, "other": 0.03 },
      "confidence": 0.64
    },
    "has_total": { "type": "noul", "noul": 0.91 },
    "legibility": {
      "type": "score",
      "score": 1.74,
      "legend": { "0": "unreadable", "1": "partly legible", "2": "clear" },
      "probabilities": { "0": 0.02, "1": 0.22, "2": 0.76 },
      "confidence": 0.47
    }
  },
  "usage": {
    "input_tokens": 486,
    "output_tokens": 0,
    "input_tokens_details": { "cached_tokens": 0, "image_tokens": 280, "text_tokens": 206 },
    "reads": 1,
    "cost": 0.000129
  }
}
```

## Models

Name the model on the request. The response reports the id that answered. See [Models](/gateway/typesafe-models).

## When to use a read

| Ask | Use | Why |
| - | - | - |
| "Is this scanned page an invoice?" | System One | One calibrated probability, never off-schema. |
| "Which of these 6 kinds is this scan?" | System One | Full distribution over labels, plus a confidence. |
| "Should I run the expensive extraction pass?" | System One | Cheap gate ahead of OCR or structured extraction. |
| "Transcribe this page to markdown" | [Chat Completions](/gateway/api-reference/post-chat-completions) | The answer is free-form text, not a label. |
| "Summarize this video" | [Chat Completions](/gateway/api-reference/post-chat-completions) | Generation, not a decision. |

A read costs the prompt prefill plus **one** forward pass. Generating the same answer pays a full decode plus parsing. The parse can still fail.

## Question types

| `type` | Ask it when | You get back |
| - | - | - |
| `noul` | The answer is yes or no. | A probability that the answer is yes. |
| `choice` | The answer is one label from a fixed set. | The winning label, a probability for every label, and a confidence. |
| `score` | The answer is a level on an ordered scale. | The expected level, a legend, per-level probabilities, and a confidence. |

A `score` is the expected level. A 3-level question returns a number from 0 to 2. For the exact `criteria` and limits, see the [request reference](/gateway/api-reference/post-systemone#question-object).

### Confidence

`confidence` runs from **1** (all mass on one label) to **0** (uniform). Threshold it to route the case to a human or a larger model. [Document Classification](/gateway/guides/document-classification#4-act-on-the-confidence) is a full routing example.

<Note>
  Probabilities are the model's own at temperature 1. They are not a parsed guess. They are model-specific. Revalidate your thresholds when you change models.
</Note>

## Inputs

`content` is a list of content parts. Each part names its type. One list can carry images, a document, and text.

| Content part | Limit | Notes |
| - | - | - |
| `image_url` | 8 per request, 5 MB each | JPEG, PNG, WebP, or GIF, as a `data:` or `http(s)` URL. |
| `file` or `document_url` | 1 document per request | A PDF. Its first 8 pages are rasterised for you at 96 DPI. |
| `text` | any | Read after the `state`. |

Put media parts first and the `state` after them. A bare string in `content` counts as one `text` part.

<Warning>
  **Send images or one document, never both:** A document's pages become the read's images. The two compete for the same 8 slots. Sending both is a `422`.
</Warning>

<Note>
  A read has no roles and no message array. It denoises a single canvas over a single state, so there is no turn to address and no history to carry.
</Note>

The `detail` field sets how closely the model reads each image.

* Default `auto`: 280 vision tokens.
* `"detail": "low"`: 70 vision tokens. 4x fewer billed image tokens. Same latency. Usually enough for classifying or routing.
* The cap applies per request. One `high` or `auto` part lifts the whole read.

For accepted part shapes and the full `detail` table, see the [request reference](/gateway/api-reference/post-systemone#content-parts).

### Classify a PDF

Set `file_data` to a base64 data URL or an `http(s)` URL.

<CodeGroup>
  ```python Python [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import base64, pathlib
  from typesafe_sdk import Choice, Noul, TypeSafeClient

  client = TypeSafeClient(
      api_key="<VLMRUN_API_KEY>",
      base_url="https://gateway.vlm.run/typesafe",
  )

  pdf = base64.b64encode(pathlib.Path("invoice.pdf").read_bytes()).decode()

  result = client.system_one(
      "Answer about the document.",
      {
          "kind": Choice(
              instructions="What kind of document is this?",
              criteria={"invoice": None, "contract": None, "report": None, "other": None},
          ),
          "has_total": Noul(instructions="Is a total amount due visible?"),
      },
      extra_body={
          "content": [
              {
                  "type": "file",
                  "file": {
                      "filename": "invoice.pdf",
                      "file_data": f"data:application/pdf;base64,{pdf}",
                      "detail": "high",
                  },
              }
          ]
      },
      model="google/diffusiongemma-26b-a4b-it",
  )

  print(result.choices["kind"].choice)
  ```

  ```typescript Node.js [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { readFileSync } from "node:fs";
  import { choice, noul, TypeSafeClient } from "@typesafe-ai/sdk";

  const client = new TypeSafeClient({
    apiKey: process.env.VLMRUN_API_KEY,
    baseURL: "https://gateway.vlm.run/typesafe",
    defaultModel: "google/diffusiongemma-26b-a4b-it",
  });

  const pdf = readFileSync("invoice.pdf").toString("base64");

  const request = {
    state: "Answer about the document.",
    questions: {
      kind: choice("What kind of document is this?", {
        invoice: null,
        contract: null,
        report: null,
        other: null,
      }),
      has_total: noul("Is a total amount due visible?"),
    },
    content: [
      { type: "file",
        file: { filename: "invoice.pdf",
                file_data: `data:application/pdf;base64,${pdf}`,
                detail: "high" } },
    ],
  };

  const { answers } = await client.systemOne(request);
  console.log(answers.kind.choice);
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  vlmrun gw s1 -s "Answer about the document." invoice.pdf --detail high \
    -m google/diffusiongemma-26b-a4b-it \
    --choice kind="invoice|contract|report|other" \
    --noul has_total="Is a total amount due visible?"
  ```

  ```bash cURL [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  PDF=$(base64 -w0 invoice.pdf)

  curl https://gateway.vlm.run/typesafe/v1/systemone \
    -H "Authorization: Bearer $VLMRUN_API_KEY" \
    -H "Content-Type: application/json" \
    -d @- <<JSON
  {
    "model": "google/diffusiongemma-26b-a4b-it",
    "state": "Answer about the document.",
    "content": [
      {"type": "file",
       "file": {"filename": "invoice.pdf",
                "file_data": "data:application/pdf;base64,$PDF",
                "detail": "high"}}
    ],
    "questions": {
      "kind": {
        "type": "choice",
        "instructions": "What kind of document is this?",
        "criteria": {"invoice": null, "contract": null, "report": null, "other": null}
      },
      "has_total": {"type": "noul", "instructions": "Is a total amount due visible?"}
    }
  }
  JSON
  ```
</CodeGroup>

A PDF longer than 8 pages is answered from its opening pages. That covers classifying or routing. Reading every page of a long document uses the Gateway's per-page document pipeline.

## Streaming

`WS /typesafe/ws` answers the same questions per frame. Use it for a video or an image stream.

* **Questions:** send them once.
* **Frames:** each frame is raw binary.
* **Decisions:** every `decision` carries the same `answers` and `usage` as a posted read.

See [Streaming](/gateway/typesafe-streaming).

## Gateway extensions

Three optional fields extend Jev's contract.

| Field | Applies to | Notes |
| - | - | - |
| `reasoning_effort` | Generative engines | `none` (default), `minimal`, or `low`: 0, 32, or 64 tokens of reasoning before the answer. |
| `steps` | Diffusion engines | Denoise steps per read, 1 to 8. Default `1`, which is Jev's contract. |
| `samples` | Any | Noise draws to average, 1 to 32. **Every draw is billed.** |

`reasoning_effort` notes:

* **Default:** off. A read is a prefill. A reasoning budget turns it into a generation.
* **`medium` and `high`:** 128 and 256 tokens. They are declared. They return a `422` until an engine holds the latency target.
* **Diffusion engines:** reject any reasoning budget with a `422`.

See the [request reference](/gateway/api-reference/post-systemone#request-body) for ranges and defaults. Unknown fields return a `422`.

## Cost levers, in order of effect

| Lever | Effect |
| - | - |
| Read, do not generate | One forward pass instead of a full decode plus a parse. |
| Ask the same questions of many states | The schema is prefix-cached, so a fixed question set pays its prefill once per replica. |
| Batch questions into one request | Around 20 short questions fit one read; more are grouped and read concurrently, one prefill each. |
| Set `detail: "low"` where the question allows | 70 vision tokens instead of the default 280, so 4x fewer billed image tokens at the same latency. |
| Leave `samples` unset | Averaging over noise draws multiplies cost without steadying a borderline answer. Sharpen `instructions` instead. |

## Next steps

<CardGroup cols={2}>
  <Card title="System One API" icon="scale-balanced" href="/gateway/api-reference/post-systemone">
    Full request and response reference, plus error envelopes.
  </Card>

  <Card title="TypeSafe SDK Compatibility" icon="arrow-right-arrow-left" href="/gateway/jev-compatibility">
    Point an existing Jev client at the Gateway with three environment variables.
  </Card>

  <Card title="Chat Completions" icon="comments" href="/gateway/api-reference/post-chat-completions">
    OCR, VQA, and document inference when you need generated text.
  </Card>

  <Card title="Rate Limits" icon="gauge-high" href="/gateway/rate-limits">
    Per-tier quotas and how they apply to a read.
  </Card>

  <Card title="Streaming" icon="bolt" href="/gateway/typesafe-streaming">
    `WS /typesafe/ws`, for per-frame decisions over video or an image stream.
  </Card>

  <Card title="CLI" icon="terminal" href="/cli/gateway/systemone">
    `vlmrun gw s1` for one-off reads, gates that guard a script, and dry runs.
  </Card>
</CardGroup>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.