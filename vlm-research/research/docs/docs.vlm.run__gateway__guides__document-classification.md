> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Document Classification

> Route documents by kind, with calibrated probabilities you can threshold on

## 1. Pick an approach

| | [System One](/gateway/system-one) | [Chat Completions](/gateway/api-reference/post-chat-completions) |
| - | - | - |
| Surface | `POST /typesafe/v1/systemone` | `POST /v1/openai/chat/completions` |
| Output | One label from your set, always | Generated text you parse |
| Off-schema answer | Impossible | Possible, needs handling |
| Probability per label | Yes | No |
| Confidence to threshold on | Yes | No |
| Takes a PDF directly | Yes, first 8 pages, as a `file` part | Only on the OCR models |
| Free-form reasoning | No | Yes |

Default to System One for a fixed label set. Use chat completions when the label set is not fixed. Use them when you need an explanation with the label.

## 2. Classify a page image

Add any yes/no checks the pipeline needs. Send the questions with an `image_url` part. The [System One quickstart](/gateway/system-one#quickstart) has the same call in Python, Node.js, cURL, and the CLI. It shows the shape of the reply.

```python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
QUESTIONS = {
    "kind": Choice(
        instructions="What kind of document is this page from?",
        criteria={
            "invoice": "A bill with amounts due",
            "receipt": "Proof of a completed payment",
            "contract": None,
            "form": None,
            "letter": None,
            "report": None,
            "other": None,
        },
    ),
    "handwriting": Noul(instructions="Does the page contain handwriting?"),
}
```

| Do | Why |
| - | - |
| Cover the space, including `other` | A read must pick one of your labels, so a missing label becomes a confident wrong answer. |
| Keep labels mutually exclusive | Overlapping labels split probability mass and depress `confidence` on both. |
| Describe only the ambiguous ones | A description costs prompt tokens; `null` is right for a label whose name is self-evident. |
| Stay under \~20 labels | Beyond that the distribution flattens and thresholds stop separating. |

<Tip>
  An input with no `detail` is read at 280 vision tokens. Classification rarely needs full page detail. Set `"detail": "low"` to read at 70, as the examples here do. That bills 4x fewer image tokens. Latency stays the same. See [Inputs](/gateway/system-one#inputs).
</Tip>

## 3. Classify a PDF

Pass the PDF as a `file` part. The route rasterises the first 8 pages at 96 DPI. That is one call, with no OCR pass before it. Keep `detail` at `low`. Document kind does not need small print.

<CodeGroup>
  ```python Python [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import base64, pathlib
  from typesafe_sdk import TypeSafeClient

  client = TypeSafeClient(
      api_key="<VLMRUN_API_KEY>",
      base_url="https://gateway.vlm.run/typesafe",
  )

  pdf = base64.b64encode(pathlib.Path("invoice.pdf").read_bytes()).decode()

  result = client.system_one(  # QUESTIONS as defined in step 2
      "Answer about the document.",
      QUESTIONS,
      extra_body={
          "content": [
              {
                  "type": "file",
                  "file": {
                      "filename": "invoice.pdf",
                      "file_data": f"data:application/pdf;base64,{pdf}",
                      "detail": "low",
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
  import { TypeSafeClient } from "@typesafe-ai/sdk";

  const client = new TypeSafeClient({
    apiKey: process.env.VLMRUN_API_KEY,
    baseURL: "https://gateway.vlm.run/typesafe",
    defaultModel: "google/diffusiongemma-26b-a4b-it",
  });

  const pdf = readFileSync("invoice.pdf").toString("base64");

  const request = {
    state: "Answer about the document.",
    questions: QUESTIONS, // as defined in step 2
    content: [
      { type: "file",
        file: { filename: "invoice.pdf",
                file_data: `data:application/pdf;base64,${pdf}`,
                detail: "low" } },
    ],
  };

  const { answers } = await client.systemOne(request);
  console.log(answers.kind.choice);
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  vlmrun gw s1 -s "Answer about the document." invoice.pdf --detail low \
    -m google/diffusiongemma-26b-a4b-it \
    --choice kind="invoice|receipt|contract|other"
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
                "detail": "low"}}
    ],
    "questions": {
      "kind": {
        "type": "choice",
        "instructions": "What kind of document is this?",
        "criteria": {"invoice": null, "receipt": null, "contract": null, "other": null}
      }
    }
  }
  JSON
  ```
</CodeGroup>

A request carries images or one document, never both. The document's pages are the read's images. A longer PDF is answered from its opening pages. To read every page, fan out per page on [chat completions](/gateway/guides/document-ocr).

<h2 id="4-act-on-the-confidence">
  4. Act on the confidence
</h2>

`confidence` runs from 1 (all mass on one label) to 0 (uniform).

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  kind = result.choices["kind"]
  top = kind.probabilities[kind.choice]

  if kind.confidence >= 0.5 and top >= 0.7:
      route_to(kind.choice)                # confident, run the pipeline
  elif top >= 0.4:
      route_to(kind.choice, review=True)   # plausible, flag for a spot-check
  else:
      route_to("manual_triage")            # guessing, do not pretend otherwise
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  const kind = answers.kind;
  const top = kind.probabilities[kind.choice];

  if (kind.confidence >= 0.5 && top >= 0.7) {
    routeTo(kind.choice);                  // confident, run the pipeline
  } else if (top >= 0.4) {
    routeTo(kind.choice, { review: true });// plausible, flag for a spot-check
  } else {
    routeTo("manual_triage");              // guessing, do not pretend otherwise
  }
  ```

  ```bash cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl -s https://gateway.vlm.run/typesafe/v1/systemone \
    -H "Authorization: Bearer $VLMRUN_API_KEY" \
    -H "Content-Type: application/json" \
    -d @request.json \
    | jq '.answers.kind | {choice, confidence, top: .probabilities[.choice]}'
  ```
</CodeGroup>

<Warning>
  Thresholds are model-specific. Tune them on a labelled sample of your own
  documents, and re-tune whenever you change models.
</Warning>

## Related

<CardGroup cols={2}>
  <Card title="System One" icon="scale-balanced" href="/gateway/system-one">
    Question types, images, confidence, and cost levers.
  </Card>

  <Card title="Document OCR" icon="file-lines" href="/gateway/guides/document-ocr">
    Reading documents to markdown or structured blocks.
  </Card>

  <Card title="System One API" icon="code" href="/gateway/api-reference/post-systemone">
    Request and response reference.
  </Card>

  <Card title="Models" icon="table-list" href="/gateway/models">
    Catalog, capabilities, and accepted inputs per model.
  </Card>
</CardGroup>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.