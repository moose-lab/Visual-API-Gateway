> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Response Types

> Every payload type the Gateway returns for OCR, detection, segmentation, and keypoints

JSON mode is built for code that must not guess. The reply is type-safe and deterministic: for a given `(model, method)`, the shape is fixed before the call.

* **Type-safe:** `content` is one of the types below, tagged by `content.object`. Validate it with the Pydantic or Zod model shown for each type.
* **Deterministic:** the same `(model, method)` always returns the same type with the same keys. A reply never adds a key outside the type, and a payload is never a bare array.
* **Portable:** two models that run the same task return the same type, so a model swap does not touch your parser.

The payload is `content` in [JSON mode](/gateway/response-formats#json-mode) and a `json` block in [text mode](/gateway/response-formats#text-mode). Tags read `<domain>.<task>.<unit>`: what it describes (`doc`, `img`, `vid`, `world`), the operation, and what one `items` entry is. A markdown-kind method returns a plain string with no tag.

## Object types

* [`doc.ocr.lines`](#doc-ocr-lines): a recognized text line with its box.
* [`doc.ocr.bboxes`](#doc-ocr-bboxes): a text region, geometry only.
* [`doc.page.blocks`](#doc-page-blocks): a layout block with its text. Every document page in JSON mode.
* [`doc.layout.bboxes`](#doc-layout-bboxes): a layout region, no text.
* [`img.detect.bboxes`](#img-detect-bboxes): a detected object.
* [`img.segment.masks`](#img-segment-masks): a segmented instance, pixels on a label map.
* [`vid.segment.masks`](#vid-segment-masks): a tracked instance on one frame.
* [`img.pose.kpts`](#img-pose-kpts): a person with 2D keypoints.
* [`vid.pose.kpts`](#vid-pose-kpts): a person on one frame.
* [`world.pose.kpts`](#world-pose-kpts): a hand with 2D and 3D keypoints.

Each type below has a JSON sample, a Pydantic model, and a Zod schema.

## OCR

<h3 id="doc-ocr-lines">
  `doc.ocr.lines`
</h3>

One item is a recognized text line with its box and score. Produced by `pp-ocrv6` `ocr`, `deepseek-ocr-2` `grounding_ocr`, and `florence-2` `ocr_with_region`.

<CodeGroup>
  ```jsonc JSON theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "object": "doc.ocr.lines",
    "items": [
      {
        "bbox_xywh": [0.0797, 0.0742, 0.7894, 0.0258],  // x, y, w, h
        "poly_xy": [                                      // rotated outline
          [0.0797, 0.0742], [0.8691, 0.0773], [0.8691, 0.1], [0.0797, 0.0969]
        ],
        "text": "Give us feedback @ survey.walmart.com",  // recognized text
        "score": 0.9854                                   // confidence 0-1
      }
    ]
  }
  ```

  ```python Pydantic theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from typing import Annotated, Literal
  from pydantic import BaseModel, Field

  BBoxXYWH = Annotated[list[float], Field(min_length=4, max_length=4)]  # x, y, w, h
  Point2D = Annotated[list[float], Field(min_length=2, max_length=2)]


  class OcrLine(BaseModel):
      bbox_xywh: BBoxXYWH
      poly_xy: list[Point2D] | None = None
      text: str
      score: float


  class OcrLines(BaseModel):
      object: Literal["doc.ocr.lines"]
      items: list[OcrLine]
  ```

  ```typescript Zod theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { z } from "zod";

  const BBoxXYWH = z.tuple([z.number(), z.number(), z.number(), z.number()]); // x, y, w, h
  const Point2D = z.tuple([z.number(), z.number()]);

  const OcrLine = z.object({
    bbox_xywh: BBoxXYWH,
    poly_xy: z.array(Point2D).optional(),
    text: z.string(),
    score: z.number(),
  });

  const OcrLines = z.object({
    object: z.literal("doc.ocr.lines"),
    items: z.array(OcrLine),
  });
  ```
</CodeGroup>

<h3 id="doc-ocr-bboxes">
  `doc.ocr.bboxes`
</h3>

One item is a text region with geometry and no text. Produced by `pp-ocrv6` `detect`.

<CodeGroup>
  ```jsonc JSON theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "object": "doc.ocr.bboxes",
    "items": [
      {
        "bbox_xywh": [0.0797, 0.0742, 0.7894, 0.0258],  // axis-aligned box
        "poly_xy": [                                      // rotated outline: use it for skewed lines
          [0.0797, 0.0742], [0.8691, 0.0773], [0.8691, 0.1], [0.0797, 0.0969]
        ]
      }
    ]
  }
  ```

  ```python Pydantic theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from typing import Annotated, Literal
  from pydantic import BaseModel, Field

  BBoxXYWH = Annotated[list[float], Field(min_length=4, max_length=4)]  # x, y, w, h
  Point2D = Annotated[list[float], Field(min_length=2, max_length=2)]


  class OcrBox(BaseModel):
      bbox_xywh: BBoxXYWH
      poly_xy: list[Point2D]


  class OcrBoxes(BaseModel):
      object: Literal["doc.ocr.bboxes"]
      items: list[OcrBox]
  ```

  ```typescript Zod theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { z } from "zod";

  const BBoxXYWH = z.tuple([z.number(), z.number(), z.number(), z.number()]); // x, y, w, h
  const Point2D = z.tuple([z.number(), z.number()]);

  const OcrBox = z.object({
    bbox_xywh: BBoxXYWH,
    poly_xy: z.array(Point2D),
  });

  const OcrBoxes = z.object({
    object: z.literal("doc.ocr.bboxes"),
    items: z.array(OcrBox),
  });
  ```
</CodeGroup>

## Document layout

<h3 id="doc-page-blocks">
  `doc.page.blocks`
</h3>

One item is a layout block with its text. On a document page the container tag is always `doc.page.blocks`, whatever method read the page. A whole-page read is one block with `text` and no geometry. Produced by `dots.mocr` `parse_layout`, and every document page in JSON mode.

<CodeGroup>
  ```jsonc JSON theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "object": "doc.page.blocks",
    "items": [
      {
        "block_id": 0,                                        // position on the page, zero-based
        "bbox_xywh": [0.0846, 0.0766, 0.7837, 0.0223],        // absent on a whole-page read
        "label": "text",                                      // layout category, lower snake_case
        "text": "Give us feedback @ survey.walmart.com"       // absent when the block was not read
      }
    ]
  }
  ```

  ```python Pydantic theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from typing import Annotated, Literal
  from pydantic import BaseModel, Field

  BBoxXYWH = Annotated[list[float], Field(min_length=4, max_length=4)]  # x, y, w, h
  Point2D = Annotated[list[float], Field(min_length=2, max_length=2)]


  class DocBlock(BaseModel):
      block_id: int
      bbox_xywh: BBoxXYWH | None = None
      poly_xy: list[Point2D] | None = None
      label: str | None = None
      text: str | None = None
      text_format: Literal["text", "markdown", "html", "latex"] | None = None
      score: float | None = None
      parent_id: int | None = None
      child_ids: list[int] | None = None
      attributes: dict | None = None


  class DocPageBlocks(BaseModel):
      object: Literal["doc.page.blocks"]
      items: list[DocBlock]
  ```

  ```typescript Zod theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { z } from "zod";

  const BBoxXYWH = z.tuple([z.number(), z.number(), z.number(), z.number()]); // x, y, w, h
  const Point2D = z.tuple([z.number(), z.number()]);

  const DocBlock = z.object({
    block_id: z.number().int(),
    bbox_xywh: BBoxXYWH.optional(),
    poly_xy: z.array(Point2D).optional(),
    label: z.string().optional(),
    text: z.string().optional(),
    text_format: z.enum(["text", "markdown", "html", "latex"]).optional(),
    score: z.number().optional(),
    parent_id: z.number().int().optional(),
    child_ids: z.array(z.number().int()).optional(),
    attributes: z.record(z.unknown()).optional(),
  });

  const DocPageBlocks = z.object({
    object: z.literal("doc.page.blocks"),
    items: z.array(DocBlock),
  });
  ```
</CodeGroup>

<h4 id="document-block">
  Document block record
</h4>

Every key is optional except `block_id`, and one type covers every document method.

<input class="fold-rows" type="checkbox" id="fold-gateway-methods-1" />

| Key | Type | Notes |
| - | - | - |
| `block_id` | `int` | The block's position on the page, zero-based like `page_id`. |
| `bbox_xywh` | `[x, y, w, h]` | Normalized 0-1 box. Absent on a whole-page read. |
| `poly_xy` | `[[x, y], ...]` | Normalized polygon, from a quad or polygon detector. |
| `label` | `string` | Layout category, folded to lower `snake_case`. |
| `text` | `string` | Recognized text. Absent when the block was **not read**, for example a `picture` region. |
| `text_format` | `"text"`, `"markdown"`, `"html"`, `"latex"` | Format of `text`. Omitted means `markdown`. |
| `score` | `float` | Detector confidence 0-1. |
| `parent_id` | `int` | The `block_id` of the block that contains this one. |
| `child_ids` | `[int]` | The `block_id` of every block inside this one. |
| `attributes` | `object` | Metadata from a customized pipeline. Absent on the stock pipeline. |

<label class="fold-rows-label" for="fold-gateway-methods-1"><span class="when-closed">See all 10 rows</span><span class="when-open">Show less</span></label>

<h3 id="doc-layout-bboxes">
  `doc.layout.bboxes`
</h3>

One item is a layout region with no text. Produced by `dots.mocr` `parse_layout_only`.

<CodeGroup>
  ```jsonc JSON theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "object": "doc.layout.bboxes",
    "items": [
      { "bbox_xywh": [0.0846, 0.0766, 0.7894, 0.0223], "label": "text" },     // a text region
      { "bbox_xywh": [0.6358, 0.1184, 0.0593, 0.0469], "label": "picture" }   // a figure, nothing to read
    ]
  }
  ```

  ```python Pydantic theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from typing import Annotated, Literal
  from pydantic import BaseModel, Field

  BBoxXYWH = Annotated[list[float], Field(min_length=4, max_length=4)]  # x, y, w, h


  class LayoutBox(BaseModel):
      bbox_xywh: BBoxXYWH
      label: str


  class LayoutBoxes(BaseModel):
      object: Literal["doc.layout.bboxes"]
      items: list[LayoutBox]
  ```

  ```typescript Zod theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { z } from "zod";

  const BBoxXYWH = z.tuple([z.number(), z.number(), z.number(), z.number()]); // x, y, w, h

  const LayoutBox = z.object({
    bbox_xywh: BBoxXYWH,
    label: z.string(),
  });

  const LayoutBoxes = z.object({
    object: z.literal("doc.layout.bboxes"),
    items: z.array(LayoutBox),
  });
  ```
</CodeGroup>

## Detection

<h3 id="img-detect-bboxes">
  `img.detect.bboxes`
</h3>

One item is a detected object. Produced by `florence-2` `od`, `dense_region_caption`, and `region_proposal`.

<CodeGroup>
  ```jsonc JSON theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "object": "img.detect.bboxes",
    "items": [
      {
        "bbox_xywh": [0.0005, 0.0005, 0.998, 0.998],  // normalized 0-1
        "label": "poster"                              // class name
      }
    ]
  }
  ```

  ```python Pydantic theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from typing import Annotated, Literal
  from pydantic import BaseModel, Field

  BBoxXYWH = Annotated[list[float], Field(min_length=4, max_length=4)]  # x, y, w, h


  class Detection(BaseModel):
      bbox_xywh: BBoxXYWH
      label: str


  class DetectBoxes(BaseModel):
      object: Literal["img.detect.bboxes"]
      items: list[Detection]
  ```

  ```typescript Zod theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { z } from "zod";

  const BBoxXYWH = z.tuple([z.number(), z.number(), z.number(), z.number()]); // x, y, w, h

  const Detection = z.object({
    bbox_xywh: BBoxXYWH,
    label: z.string(),
  });

  const DetectBoxes = z.object({
    object: z.literal("img.detect.bboxes"),
    items: z.array(Detection),
  });
  ```
</CodeGroup>

## Segmentation

<h3 id="img-segment-masks">
  `img.segment.masks`
</h3>

One item is a segmented instance. The pixels are one PNG label map on the container, not one mask per item. Produced by `sam3.1` `segment` and `segment_box`.

<CodeGroup>
  ```jsonc JSON theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "object": "img.segment.masks",
    "items": [
      {
        "bbox_xywh": [0.0563, 0.3354, 0.875, 0.4354],  // normalized 0-1
        "label": "car",                                  // the prompt that matched
        "score": 0.9766,                                 // omitted when the backend reports no valid score
        "area": 0.2375,                                  // mask pixels as a fraction of the frame
        "instance_id": 1                                 // this instance's pixel value in the label map
      }
    ],
    "mask": {                                            // one label map for every instance
      "format": "png",
      "height": 480,
      "width": 640,
      "data": "data:image/png;base64,iVBORw0KGgo..."
    }
  }
  ```

  ```python Pydantic theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from typing import Annotated, Literal
  from pydantic import BaseModel, Field

  BBoxXYWH = Annotated[list[float], Field(min_length=4, max_length=4)]  # x, y, w, h
  Point2D = Annotated[list[float], Field(min_length=2, max_length=2)]


  class Mask(BaseModel):
      format: Literal["png"]
      height: int
      width: int
      data: str  # data:image/png;base64,...


  class SegmentInstance(BaseModel):
      bbox_xywh: BBoxXYWH
      label: str
      score: float | None = None
      area: float
      instance_id: int  # 1-255
      polys_xy: list[list[Point2D]] | None = None  # with method_params.polygons


  class SegmentMasks(BaseModel):
      object: Literal["img.segment.masks"]
      items: list[SegmentInstance]
      mask: Mask | None = None  # absent with mask_format="none"
  ```

  ```typescript Zod theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { z } from "zod";

  const BBoxXYWH = z.tuple([z.number(), z.number(), z.number(), z.number()]); // x, y, w, h
  const Point2D = z.tuple([z.number(), z.number()]);

  const Mask = z.object({
    format: z.literal("png"),
    height: z.number().int(),
    width: z.number().int(),
    data: z.string(), // data:image/png;base64,...
  });

  const SegmentInstance = z.object({
    bbox_xywh: BBoxXYWH,
    label: z.string(),
    score: z.number().optional(),
    area: z.number(),
    instance_id: z.number().int(), // 1-255
    polys_xy: z.array(z.array(Point2D)).optional(), // with method_params.polygons
  });

  const SegmentMasks = z.object({
    object: z.literal("img.segment.masks"),
    items: z.array(SegmentInstance),
    mask: Mask.optional(), // absent with mask_format="none"
  });
  ```
</CodeGroup>

<h4 id="label-map">
  Label map
</h4>

One 8-bit PNG holds every instance, and each pixel is an `instance_id` (image) or `track_id` (video). Pixel `0` is background, and ids run 1 to 255. Decode the PNG once, then filter items on `area`, `bbox_xywh`, or `score`. Set `mask_format: "none"` to keep `area` only.

<h3 id="vid-segment-masks">
  `vid.segment.masks`
</h3>

One item is a tracked instance on one frame. Produced by `sam3.1` `track`. Each frame has its own label map, where the pixel value is `track_id`.

<CodeGroup>
  ```jsonc JSON theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "object": "vid.segment.masks",
    "items": [
      {
        "bbox_xywh": [0.4719, 0.4333, 0.1641, 0.5667],
        "label": "person",
        "score": 0.9375,
        "area": 0.037,
        "frame_id": 0,                       // source frame number
        "track_id": 1                        // identity held across frames, 1-255
      }
    ],
    "frames": [                              // every sampled frame, including empty ones
      {
        "frame_id": 0,
        "frame_ts": 0.0,                     // seconds into the source clip
        "mask": { "format": "png", "height": 360, "width": 640, "data": "data:image/png;base64,iVBORw0KGgo..." }
      }
    ]
  }
  ```

  ```python Pydantic theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from typing import Annotated, Literal
  from pydantic import BaseModel, Field

  BBoxXYWH = Annotated[list[float], Field(min_length=4, max_length=4)]  # x, y, w, h


  class Mask(BaseModel):
      format: Literal["png"]
      height: int
      width: int
      data: str  # data:image/png;base64,...


  class Frame(BaseModel):
      frame_id: int
      frame_ts: float
      mask: Mask | None = None


  class TrackedInstance(BaseModel):
      bbox_xywh: BBoxXYWH
      label: str
      score: float | None = None
      area: float
      frame_id: int
      track_id: int  # 1-255


  class VideoSegmentMasks(BaseModel):
      object: Literal["vid.segment.masks"]
      items: list[TrackedInstance]  # sorted by (frame_id, track_id)
      frames: list[Frame]
  ```

  ```typescript Zod theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { z } from "zod";

  const BBoxXYWH = z.tuple([z.number(), z.number(), z.number(), z.number()]); // x, y, w, h

  const Mask = z.object({
    format: z.literal("png"),
    height: z.number().int(),
    width: z.number().int(),
    data: z.string(), // data:image/png;base64,...
  });

  const Frame = z.object({
    frame_id: z.number().int(),
    frame_ts: z.number(),
    mask: Mask.optional(),
  });

  const TrackedInstance = z.object({
    bbox_xywh: BBoxXYWH,
    label: z.string(),
    score: z.number().optional(),
    area: z.number(),
    frame_id: z.number().int(),
    track_id: z.number().int(), // 1-255
  });

  const VideoSegmentMasks = z.object({
    object: z.literal("vid.segment.masks"),
    items: z.array(TrackedInstance), // sorted by (frame_id, track_id)
    frames: z.array(Frame),
  });
  ```
</CodeGroup>

## Keypoints

<h3 id="img-pose-kpts">
  `img.pose.kpts`
</h3>

One item is a person with 2D joints. Produced by `vitpose-plus-large` `pose` on an image. An image with no person returns `"items": []`.

<CodeGroup>
  ```jsonc JSON theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "object": "img.pose.kpts",
    "kpts_labels": ["nose", "left_eye", "right_eye", /* ... 17 COCO joints */ "right_ankle"],
    "items": [
      {
        "bbox_xywh": [0.294, 0.135, 0.3716, 0.8568],
        "label": "person",
        "kpts_xy": [[0.4825, 0.3666], [0.4997, 0.3111], [0.4527, 0.3321] /* ... */],  // one [x, y] per joint, may fall outside 0-1
        "kpts_score": [0.9648, 0.9503, 0.9703 /* ... */]                              // one confidence per joint, same order
      }
    ]
  }
  ```

  ```python Pydantic theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from typing import Annotated, Literal
  from pydantic import BaseModel, Field

  BBoxXYWH = Annotated[list[float], Field(min_length=4, max_length=4)]  # x, y, w, h
  Point2D = Annotated[list[float], Field(min_length=2, max_length=2)]


  class Person(BaseModel):
      bbox_xywh: BBoxXYWH
      label: Literal["person"]
      kpts_xy: list[Point2D]
      kpts_score: list[float]


  class PoseKpts(BaseModel):
      object: Literal["img.pose.kpts"]
      kpts_labels: list[str]
      items: list[Person]
  ```

  ```typescript Zod theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { z } from "zod";

  const BBoxXYWH = z.tuple([z.number(), z.number(), z.number(), z.number()]); // x, y, w, h
  const Point2D = z.tuple([z.number(), z.number()]);

  const Person = z.object({
    bbox_xywh: BBoxXYWH,
    label: z.literal("person"),
    kpts_xy: z.array(Point2D),
    kpts_score: z.array(z.number()),
  });

  const PoseKpts = z.object({
    object: z.literal("img.pose.kpts"),
    kpts_labels: z.array(z.string()),
    items: z.array(Person),
  });
  ```
</CodeGroup>

<h3 id="vid-pose-kpts">
  `vid.pose.kpts`
</h3>

One item is a person on one frame. Produced by `vitpose-plus-large` `pose` on a video.

<CodeGroup>
  ```jsonc JSON theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "object": "vid.pose.kpts",
    "kpts_labels": ["nose", "left_eye", "right_eye", /* ... 17 COCO joints */ "right_ankle"],
    "items": [
      {
        "bbox_xywh": [0.6681, 0.7906, 0.0221, 0.0761],
        "label": "person",
        "kpts_xy": [[0.6846, 0.7979], [0.6845, 0.7958], [0.6839, 0.7958] /* ... */],
        "kpts_score": [0.8854, 0.8528, 0.8557 /* ... */],
        "frame_id": 3029,                    // source frame number
        "track_id": 1                        // the same person keeps this id across frames
      }
    ],
    "frames": [                              // every sampled frame, including empty ones
      { "frame_id": 0, "frame_ts": 0.0 },
      { "frame_id": 3029, "frame_ts": 126.335 }
    ]
  }
  ```

  ```python Pydantic theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from typing import Annotated, Literal
  from pydantic import BaseModel, Field

  BBoxXYWH = Annotated[list[float], Field(min_length=4, max_length=4)]  # x, y, w, h
  Point2D = Annotated[list[float], Field(min_length=2, max_length=2)]


  class Frame(BaseModel):
      frame_id: int
      frame_ts: float


  class TrackedPerson(BaseModel):
      bbox_xywh: BBoxXYWH
      label: Literal["person"]
      kpts_xy: list[Point2D]
      kpts_score: list[float]
      frame_id: int
      track_id: int


  class VideoPoseKpts(BaseModel):
      object: Literal["vid.pose.kpts"]
      kpts_labels: list[str]
      items: list[TrackedPerson]  # sorted by (frame_id, track_id)
      frames: list[Frame]
  ```

  ```typescript Zod theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { z } from "zod";

  const BBoxXYWH = z.tuple([z.number(), z.number(), z.number(), z.number()]); // x, y, w, h
  const Point2D = z.tuple([z.number(), z.number()]);

  const Frame = z.object({
    frame_id: z.number().int(),
    frame_ts: z.number(),
  });

  const TrackedPerson = z.object({
    bbox_xywh: BBoxXYWH,
    label: z.literal("person"),
    kpts_xy: z.array(Point2D),
    kpts_score: z.array(z.number()),
    frame_id: z.number().int(),
    track_id: z.number().int(),
  });

  const VideoPoseKpts = z.object({
    object: z.literal("vid.pose.kpts"),
    kpts_labels: z.array(z.string()),
    items: z.array(TrackedPerson), // sorted by (frame_id, track_id)
    frames: z.array(Frame),
  });
  ```
</CodeGroup>

<h3 id="world-pose-kpts">
  `world.pose.kpts`
</h3>

One item is a hand with 2D and 3D joints. Produced by `hamer` `pose`.

<CodeGroup>
  ```jsonc JSON theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  {
    "object": "world.pose.kpts",
    "kpts_labels": ["wrist", "thumb_mcp", "thumb_pip", /* ... 21 hand joints */],
    "items": [
      {
        "bbox_xywh": [0.4299, 0.8834, 0.1236, 0.1166],
        "label": "left_hand",                                                     // or "right_hand"
        "score": 1.0,                                                             // hand detection confidence
        "kpts_xy": [[0.5121, 0.9757], [0.4989, 0.9586] /* ... */],                // normalized 2D joints
        "kpts_xyz": [[-0.0949, 0.0063, 0.0061], [-0.1158, -0.0092, -0.0218] /* ... */]  // metric 3D joints
      }
    ]
  }
  ```

  ```python Pydantic theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from typing import Annotated, Literal
  from pydantic import BaseModel, Field

  BBoxXYWH = Annotated[list[float], Field(min_length=4, max_length=4)]  # x, y, w, h
  Point2D = Annotated[list[float], Field(min_length=2, max_length=2)]
  Point3D = Annotated[list[float], Field(min_length=3, max_length=3)]


  class Hand(BaseModel):
      bbox_xywh: BBoxXYWH
      label: Literal["left_hand", "right_hand"]
      score: float
      kpts_xy: list[Point2D]
      kpts_xyz: list[Point3D]


  class WorldPoseKpts(BaseModel):
      object: Literal["world.pose.kpts"]
      kpts_labels: list[str]
      items: list[Hand]
  ```

  ```typescript Zod theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { z } from "zod";

  const BBoxXYWH = z.tuple([z.number(), z.number(), z.number(), z.number()]); // x, y, w, h
  const Point2D = z.tuple([z.number(), z.number()]);
  const Point3D = z.tuple([z.number(), z.number(), z.number()]);

  const Hand = z.object({
    bbox_xywh: BBoxXYWH,
    label: z.enum(["left_hand", "right_hand"]),
    score: z.number(),
    kpts_xy: z.array(Point2D),
    kpts_xyz: z.array(Point3D),
  });

  const WorldPoseKpts = z.object({
    object: z.literal("world.pose.kpts"),
    kpts_labels: z.array(z.string()),
    items: z.array(Hand),
  });
  ```
</CodeGroup>

## Parse a reply

Validate the JSON-mode reply with the type for your `(model, method)`. This example parses a `florence-2` `od` reply.

<CodeGroup>
  ```python Pydantic theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from typing import Annotated, Literal
  from pydantic import BaseModel, Field

  BBoxXYWH = Annotated[list[float], Field(min_length=4, max_length=4)]  # x, y, w, h


  class Detection(BaseModel):
      bbox_xywh: BBoxXYWH
      label: str


  class DetectBoxes(BaseModel):
      object: Literal["img.detect.bboxes"]
      items: list[Detection]


  class DetectReply(BaseModel):
      model: str
      method: str
      image_width: int | None = None
      image_height: int | None = None
      content: DetectBoxes


  reply = DetectReply.model_validate_json(response.choices[0].message.content)
  ```

  ```typescript Zod theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { z } from "zod";

  const BBoxXYWH = z.tuple([z.number(), z.number(), z.number(), z.number()]); // x, y, w, h

  const DetectReply = z.object({
    model: z.string(),
    method: z.string(),
    image_width: z.number().int().optional(),
    image_height: z.number().int().optional(),
    content: z.object({
      object: z.literal("img.detect.bboxes"),
      items: z.array(z.object({ bbox_xywh: BBoxXYWH, label: z.string() })),
    }),
  });

  const reply = DetectReply.parse(JSON.parse(response.choices[0].message.content));
  ```
</CodeGroup>

A mismatch raises at the boundary: a different `object` tag, a missing key, or a wrong type. A video reply has `video_*` keys and a PDF reply has `pages`. See [JSON mode](/gateway/response-formats#json-mode).

## Item record

The keys an item can carry, across all types. `items` is a flat list: one row per thing, never nested per frame or per instance.

<input class="fold-rows" type="checkbox" id="fold-methods-items" />

| Key | Type | Notes |
| - | - | - |
| `bbox_xywh` | `[x, y, w, h]` | The single universal box: normalized 0-1, `precision` dp. There is no `bbox`, no `bbox_norm`, and no pixel or xyxy variant. |
| `poly_xy` | `[[x, y], ...]` | Normalized outline, when the model emits one (`paddleocr/pp-ocrv6`). |
| `polys_xy` | `[[[x, y], ...], ...]` | Mask outline rings, on `facebook/sam3.1` with `method_params.polygons: true`. Holes wind opposite to their outer ring. |
| `label` | `string` | Class, prompt match, or layout category. A layout category is folded to lower `snake_case`, so `doc_title` and `section_header` read the same whichever layout model produced them. A prompt or open-vocabulary label is verbatim. |
| `text` | `string` | Recognized text. |
| `score` | `float` | Confidence 0-1. Omitted on an item whose backend reported no valid score: `facebook/sam3.1` marks an invalid mask with a sentinel, and that item keeps its geometry but carries no `score`. |
| `area` | `float` | Mask pixels as a fraction of the frame, 0-1. A cheap scalar to filter on without decoding the mask. |
| `kpts_xy` | `[[x, y], ...]` | Normalized joints. Names are on the container as `kpts_labels`. A joint may fall outside 0-1. |
| `kpts_score` | `[float]` | One confidence per joint, in `kpts_xy` order, as the model reports it. |
| `kpts_xyz` | `[[x, y, z], ...]` | Joints in metric 3D, on `world.*` payloads only. |
| `instance_id` | `int` | 1-255. This instance's pixel value in the container's label map. Image payloads only. |
| `frame_id` | `int` | Source frame number. Video payloads only. |
| `track_id` | `int` | Identity held across frames, 1-255, and the pixel value in each frame's label map. Video payloads only. |
| `order` | `int` | A detector's own reading order, unedited. May start at 1. |

<label class="fold-rows-label" for="fold-methods-items"><span class="when-closed">See all 14 rows</span><span class="when-open">Show less</span></label>

Each model card names the tag every method returns under **Output by method**.

## Related

<CardGroup cols={2}>
  <Card title="Response Formats" icon="brackets-curly" href="/gateway/response-formats">
    Text, JSON, and JSON schema modes.
  </Card>

  <Card title="Methods" icon="list-check" href="/gateway/methods">
    Select what the model computes with `method`.
  </Card>

  <Card title="Visual Intelligence" icon="eye" href="/gateway/visual-intelligence">
    Request samples for detection, segmentation, and pose.
  </Card>

  <Card title="Models" icon="table-list" href="/gateway/models">
    Every model and its methods.
  </Card>
</CardGroup>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.