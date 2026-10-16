> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Visual Intelligence

> VQA, detection, segmentation, pose, and document OCR through the OpenAI chat route

Vision models use the same `POST /v1/openai/chat/completions` route as chat models. Pick the output with `method`. Region models return a JSON string in `choices[0].message.content`. OCR models return text.

* **One route:** the same OpenAI client, the same message shape, any model on this page.
* **Two request fields:** `method` goes in `extra_body`. `response_format` is a standard OpenAI parameter, so pass it as a normal argument.
* **Images and video:** pass an `image_url` or a `video_url` part. Video replies add per-frame records and tracks.

Live `methods` and `default_method` are on [`GET /v1/openai/models`](/gateway/api-reference/get-models). A method a model does not list is a `400`.

## VQA, detection, and segmentation

| Task | Model | Methods |
| - | - | - |
| Visual question answering | [qwen/qwen3.5-0.8b](https://vlm.run/gateway/models/qwen-qwen3.5-0.8b), [qwen/qwen3.8-27b](https://vlm.run/gateway/models/qwen-qwen3.8-27b) | `chat` |
| Object detection and captions | [microsoft/florence-2-base-ft](https://vlm.run/gateway/models/microsoft-florence-2-base-ft) | `od`, `caption`, `detailed_caption`, `more_detailed_caption`, `dense_region_caption`, `region_proposal`, `ocr`, `ocr_with_region` |
| Segmentation and tracking | [facebook/sam3.1](https://vlm.run/gateway/models/facebook-sam3.1) | `segment`, `segment_box`, `track` |

### Detect objects

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from openai import OpenAI

  client = OpenAI(
      base_url="https://gateway.vlm.run/v1/openai",
      api_key="<VLMRUN_API_KEY>",
  )
  response = client.chat.completions.create(
      model="microsoft/florence-2-base-ft",
      messages=[{"role": "user", "content": [{"type": "image_url", "image_url": {"url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.receipt/playground/2.jpg"}}]}],
      response_format={"type": "json_object"},
      extra_body={"method": "od"},
  )
  print(response.choices[0].message.content)
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import OpenAI from "openai";

  const client = new OpenAI({
    baseURL: "https://gateway.vlm.run/v1/openai",
    apiKey: process.env.VLMRUN_API_KEY,
  });
  const response = await client.chat.completions.create({
    model: "microsoft/florence-2-base-ft",
    messages: [{ role: "user", content: [{ type: "image_url", image_url: { url: "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.receipt/playground/2.jpg" } }] }],
    response_format: { type: "json_object" },
    method: "od",
  });
  console.log(response.choices[0].message.content);
  ```

  ```bash cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl https://gateway.vlm.run/v1/openai/chat/completions \
    -X POST \
    -H "Authorization: Bearer $VLMRUN_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "model": "microsoft/florence-2-base-ft",
      "method": "od",
      "response_format": {"type": "json_object"},
      "messages": [{"role": "user", "content": [{"type": "image_url", "image_url": {"url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.receipt/playground/2.jpg"}}]}]
    }'
  ```
</CodeGroup>

```json theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "object": "img.detect.bboxes",
  "items": [
    { "bbox_xywh": [0.0005, 0.0005, 0.998, 0.998], "label": "poster" }
  ]
}
```

### Caption an image

Use `caption`, `detailed_caption`, or `more_detailed_caption` for a sentence or paragraph. With `json_object`, the string is in `content`. The samples below reuse `client` from the first example.

```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
IMAGE_URL = "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.receipt/playground/2.jpg"

response = client.chat.completions.create(
    model="microsoft/florence-2-base-ft",
    messages=[{"role": "user", "content": [{"type": "image_url", "image_url": {"url": IMAGE_URL}}]}],
    response_format={"type": "json_object"},
    extra_body={"method": "caption"},
)
```

```json theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "model": "microsoft/Florence-2-base-ft",
  "method": "caption",
  "image_width": 1230,
  "image_height": 2560,
  "content": "A receipt from Walmart with a barcode on it."
}
```

### Segment an object

Name the target in a text part next to the image. `segment` returns one instance per match, with a normalized box, a score, and the covered `area`. The pixels are one PNG label map on the container, not one mask per item.

```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
response = client.chat.completions.create(
    model="facebook/sam3.1",
    messages=[{"role": "user", "content": [
        {"type": "image_url", "image_url": {"url": IMAGE_URL}},
        {"type": "text", "text": "receipt"},
    ]}],
    response_format={"type": "json_object"},
    extra_body={"method": "segment"},
)
```

```json theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "model": "facebook/sam3.1",
  "method": "segment",
  "content": {
    "object": "img.segment.masks",
    "items": [
      { "bbox_xywh": [0.0, 0.0, 1.0, 1.0], "label": "receipt", "score": 0.793, "area": 0.962, "instance_id": 1 }
    ],
    "mask": { "format": "png", "height": 2560, "width": 1230, "data": "data:image/png;base64,iVBORw0KGgo..." }
  }
}
```

## Pose estimation

| Body part | Model | Method | Returns |
| - | - | - | - |
| Body | [usyd-community/vitpose-plus-large](https://vlm.run/gateway/models/usyd-community-vitpose-plus-large) | `pose` | One item per person, 2D joints |
| Hand | [geopavlakos/hamer](https://vlm.run/gateway/models/geopavlakos-hamer) | `pose` | One item per hand, 2D and 3D joints |

An image with no person or hand returns `"items": []`.

```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
response = client.chat.completions.create(
    model="usyd-community/vitpose-plus-large",
    messages=[{"role": "user", "content": [{"type": "image_url", "image_url": {"url": "<IMAGE_WITH_PEOPLE_URL>"}}]}],
    response_format={"type": "json_object"},
    extra_body={"method": "pose"},
)
```

Each item carries these fields:

| Field | Meaning |
| - | - |
| `kpts_xy` | Normalized joints as `[x, y]`. A joint can fall outside 0 to 1. |
| `kpts_score` | One confidence per joint, in the same order. |
| `kpts_xyz` | Metric 3D joints. `hamer` only. |

The full item record is in [Response Types](/gateway/response-types#item-record).

## Document OCR models

OCR models read a page image or a `document_url` PDF. Two families:

| Family | Model | Methods | Use it for |
| - | - | - | - |
| Markdown | [zai-org/glm-ocr](https://vlm.run/gateway/models/zai-org-glm-ocr) | `markdown` | Pages to Markdown |
| Markdown | [paddlepaddle/paddleocr-vl-1.6](https://vlm.run/gateway/models/paddlepaddle-paddleocr-vl-1.6) | `markdown` (default), `ocr`, `table`, `formula`, `chart` | Pages, plus tables, equations, or charts as text |
| Markdown | [deepseek-ai/deepseek-ocr-2](https://vlm.run/gateway/models/deepseek-ai-deepseek-ocr-2) | `markdown` (default), `grounding_ocr` | Pages, or locating a phrase on the page |
| Markdown | [rednote-hilab/dots.mocr](https://vlm.run/gateway/models/rednote-hilab-dots.mocr) | `markdown` (default), `parse_layout`, `parse_layout_only`, `ocr` | Pages with structured layout |
| PP-OCR | [paddleocr/pp-ocrv6](https://vlm.run/gateway/models/paddleocr-pp-ocrv6) | `detect`, `ocr`, `text` | Text lines with bounding polygons |

For PDFs, treat the model, `method`, and `document_dpi` as one unit. See [Document OCR](/gateway/guides/document-ocr).

### Markdown models

Omit `method` to use the model's default.

```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
response = client.chat.completions.create(
    model="zai-org/glm-ocr",
    messages=[{"role": "user", "content": [{"type": "image_url", "image_url": {"url": IMAGE_URL}}]}],
)
print(response.choices[0].message.content)
```

```text theme={"theme":{"light":"github-light","dark":"dark-plus"}}
Walmart
702-839 3620 Mgr:SARAH
8060 W TROPICAL PKWY
LAS VEGAS NV 89149
...
SUBTOTAL 27.43
TAX 1 8.375 % 2.30
TOTAL 29.73
```

### PP-OCR models

`detect` returns one box and one polygon per text line. `ocr` and `text` add the recognized text.

```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
response = client.chat.completions.create(
    model="paddleocr/pp-ocrv6",
    messages=[{"role": "user", "content": [{"type": "image_url", "image_url": {"url": IMAGE_URL}}]}],
    response_format={"type": "json_object"},
    extra_body={"method": "detect"},
)
```

```json theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "model": "paddleocr/pp-ocrv6",
  "method": "detect",
  "image_width": 1230,
  "image_height": 2560,
  "content": {
    "object": "doc.ocr.bboxes",
    "items": [
      {
        "bbox_xywh": [0.0797, 0.0742, 0.7894, 0.0258],
        "poly_xy": [[0.0797, 0.0742], [0.8691, 0.0773], [0.8691, 0.1], [0.0797, 0.0969]]
      }
    ]
  }
}
```

## Read the result

| Payload | Type tag | What to do |
| - | - | - |
| Boxes | `img.detect.bboxes` | Multiply `bbox_xywh` by `image_width` and `image_height` for pixels. |
| Masks | `img.segment.masks` | Decode the PNG once. Filter items on `area`, `bbox_xywh`, or `score`. |
| Keypoints | `img.pose.kpts` | Pair `kpts_xy` with `kpts_labels` on the container. |
| Text boxes | `doc.ocr.bboxes` | Use `poly_xy` for rotated or skewed lines. |
| Video | `vid.*` | Read `frames[]` for per-frame data. Items carry a `track_id`. |

Coordinates are normalized to the image. Set [`precision`](/gateway/extra-kwargs) to change the decimal places.

## Related

<CardGroup cols={2}>
  <Card title="Methods" icon="list-check" href="/gateway/methods">
    Select the operation with `method` and `method_params`.
  </Card>

  <Card title="Response Formats" icon="brackets-curly" href="/gateway/response-formats">
    JSON mode for code, text mode for agents.
  </Card>

  <Card title="Models" icon="cube" href="/gateway/models">
    Every vision model and its methods.
  </Card>

  <Card title="Supported Inputs" icon="images" href="/gateway/multimodal-inputs">
    Image and video content parts, limits, and formats.
  </Card>

  <Card title="Document OCR" icon="file-lines" href="/gateway/guides/document-ocr">
    Page ranges, DPI, and method choice for PDFs.
  </Card>
</CardGroup>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.