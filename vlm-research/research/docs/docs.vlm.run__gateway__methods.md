> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Methods

> Select what the model computes with method and method_params

Some models expose more than one entrypoint for visual understanding. One set of weights can read a page as Markdown, return a layout, or segment an object from a prompt. A chat API has no field to choose between them, so the Gateway adds one: `method`. It is a request kwarg that gives you direct access to each entrypoint.

| Model | Methods | One model, different outputs |
| - | - | - |
| [rednote-hilab/dots.mocr](https://vlm.run/gateway/models/rednote-hilab-dots.mocr) | `markdown`, `parse_layout`, `parse_layout_only`, `ocr` | Page text as Markdown, layout blocks with text, or layout regions without text. |
| [facebook/sam3.1](https://vlm.run/gateway/models/facebook-sam3.1) | `segment`, `segment_box`, `track` | Masks from a text prompt, masks from a box, or masks tracked across video frames. |
| [microsoft/florence-2-base-ft](https://vlm.run/gateway/models/microsoft-florence-2-base-ft) | `od`, `caption`, `dense_region_caption`, `ocr_with_region`, ... | Boxes, captions, or text with regions. |

* **Default:** omit `method` and the model's `default_method` applies, so a plain call still works.
* **Pick the entrypoint, not the model:** to change the output, change `method`. Keep the model.
* **Output shape:** the method fixes the payload type, for example `doc.ocr.lines` or `img.detect.bboxes`. See [content object tags](/gateway/response-types).
* **All kwargs:** the full list of Gateway request fields is on [Extra Kwargs](/gateway/extra-kwargs).
* **Discovery:** each model lists its `methods` on [`GET /v1/openai/models`](/gateway/api-reference/get-models) and on its [catalog card](https://vlm.run/gateway/models).

[`response_format`](/gateway/response-formats) is independent. It selects how the result is serialized, and any method combines with any format.

## The `method` field

Pass `method` (and optional `method_params`) at the top level of the request body, or via `extra_body` in the OpenAI Python SDK. Omit `method` and the model's `default_method` applies, on an image and on every page of a `document_url`. Each [model card](https://vlm.run/gateway/models) lists its methods, its default, and what each one returns.

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  response = client.chat.completions.create(
      model="paddleocr/pp-ocrv6",
      messages=[{"role": "user", "content": [{"type": "image_url", "image_url": {"url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.receipt/playground/2.jpg"}}]}],
      extra_body={"method": "ocr"},
  )
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  const response = await client.chat.completions.create({
    model: "paddleocr/pp-ocrv6",
    messages: [{ role: "user", content: [{ type: "image_url", image_url: { url: "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.receipt/playground/2.jpg" } }] }],
    method: "ocr",
  });
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  vlmrun gw chat https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.receipt/playground/2.jpg \
    -m paddleocr/pp-ocrv6 --method ocr
  ```

  ```bash cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl https://gateway.vlm.run/v1/openai/chat/completions \
    -X POST \
    -H "Authorization: Bearer $VLMRUN_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "model": "paddleocr/pp-ocrv6",
      "method": "ocr",
      "messages": [{"role": "user", "content": [{"type": "image_url", "image_url": {"url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.receipt/playground/2.jpg"}}]}]
    }'
  ```
</CodeGroup>

Live `methods`, `default_method`, and `extra_body_help` are on [`GET /v1/openai/models`](/gateway/api-reference/get-models). A method a model does not advertise is a `400`.

<h2 id="method-parameters">
  Method Parameters
</h2>

`method_params` sits beside `method`, or in `extra_body`. An unknown key is a `400`. Keys are on the [catalog card](https://vlm.run/gateway/models).

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  response = client.chat.completions.create(
      model="paddleocr/pp-ocrv6",
      messages=[{"role": "user", "content": [{"type": "image_url", "image_url": {"url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.receipt/playground/2.jpg"}}]}],
      extra_body={
          "method": "ocr",
          "method_params": {"lang": "en", "score_threshold": 0.5},
      },
  )
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  const response = await client.chat.completions.create({
    model: "paddleocr/pp-ocrv6",
    messages: [{ role: "user", content: [{ type: "image_url", image_url: { url: "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.receipt/playground/2.jpg" } }] }],
    method: "ocr",
    method_params: { lang: "en", score_threshold: 0.5 },
  });
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  vlmrun gw chat https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.receipt/playground/2.jpg \
    -m paddleocr/pp-ocrv6 --method ocr \
    --method-params '{"lang": "en", "score_threshold": 0.5}'
  ```

  ```bash cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl https://gateway.vlm.run/v1/openai/chat/completions \
    -X POST \
    -H "Authorization: Bearer $VLMRUN_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "model": "paddleocr/pp-ocrv6",
      "method": "ocr",
      "method_params": {
        "lang": "en",
        "score_threshold": 0.5
      },
      "messages": [{"role": "user", "content": [{"type": "image_url", "image_url": {"url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.receipt/playground/2.jpg"}}]}]
    }'
  ```
</CodeGroup>

`video_fps` is the cadence for a native `video_url`. [`facebook/sam3.1`](https://vlm.run/gateway/models/facebook-sam3.1) `track` reads sampling from `method_params`.

## Related

<CardGroup cols={2}>
  <Card title="Response Formats" icon="brackets-curly" href="/gateway/response-formats">
    JSON mode for programmatic use, text mode for agents and MCP.
  </Card>

  <Card title="Models" icon="table-list" href="/gateway/models">
    Models grouped by task, with their methods.
  </Card>

  <Card title="Visual Intelligence" icon="eye" href="/gateway/visual-intelligence">
    Detection, segmentation, pose, and OCR samples.
  </Card>

  <Card title="Document OCR" icon="file-lines" href="/gateway/guides/document-ocr">
    End-to-end recipe from model selection to response parsing.
  </Card>
</CardGroup>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.