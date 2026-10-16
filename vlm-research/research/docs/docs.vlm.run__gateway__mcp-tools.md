> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# MCP Tools

> read_document, read_image, read_audio, and read_video

A read tool is mounted only when this gateway serves a model that fits it. `tools/list` is that set.

| Tool | Reads | Key arguments |
| - | - | - |
| [`read_document`](#read_document) | PDFs and images | `url`, `model`, `dpi`, `pages`, `method`, `method_params`, `json_mode` |
| [`read_image`](#read_image) | One still image | `url`, `model`, `prompt`, `method`, `method_params`, `json_mode` |
| [`read_audio`](#read_audio) | Speech audio | `url`, `model`, `language`, `json_mode` |
| [`read_video`](#read_video) | Video | `url`, `model`, `prompt`, `fps`, `max_frames`, `encoder`, `encoder_params`, `method`, `method_params`, `json_mode` |
| [`list_models`](/gateway/mcp-reference#list_models) | The read tools' model menus | `modality` |
| [`get_model_info`](/gateway/mcp-reference#get_model_info) | One model's methods and reply schemas | `model` |
| [`get_completion`](/gateway/mcp-reference#get_completion) | Metadata for a prior read | `completion_id` |

`read_document` and `read_image` both accept a JPEG or a PNG. Use `read_document` when the value is printed text. It OCRs into Markdown and keeps headings, lists, and tables. Use `read_image` for what a picture depicts: a photo, a chart, or a screenshot.

`url` is an `http(s)` URL, a `data:` URI, or a bare base64 string. It is never a local path. Host the file, or inline it, before you call.

`json_mode: false` returns the native text: `<document>` blocks for documents, and plain text for images, audio, and video. `json_mode: true` returns the same flat object the REST API returns in JSON mode.

Nothing on this server writes. Clients can run these tools without a confirmation prompt.

| Tools | `readOnlyHint` | `destructiveHint` | `idempotentHint` | `openWorldHint` |
| - | - | - | - | - |
| `read_*` | `true` | `false` | `true` | `true`, because `url` reaches any host |
| `list_models`, `get_model_info`, `get_completion` | `true` | `false` | `true` | `false` |

<Tip>
  `model` is a fixed menu per tool, built at mount from the models this gateway serves.

  * **`read_document`:** OCR models that accept a `document_url`.
  * **`read_image` and `read_video`:** The chat VLMs plus the region models named below.
  * **`read_audio`:** The transcription models.
  * **No menu:** Routed provider models and embedding models.
  * **Default:** The preferred default leads its menu when that model is served.

  Call `list_models` for the ids a tool accepts. A model id passed to the wrong tool is rejected.
</Tip>

<h2 id="pick-a-method">
  Pick a method by what you need
</h2>

Each `read_document` method returns a different result from the same page. `list_models` tags each method with a capability. Pick the capability, then call the method that carries it.

| Capability | What you get | Needs `json_mode` |
| - | - | - |
| `document_markdown` | Text with the structure kept: headings, lists, tables. | No |
| `text_extraction` | The text, as a plain string. | No |
| `layout_regions` | Labelled areas, such as `title`, `table`, `figure`. | Yes |
| `reading_order` | The regions in the order a person reads them. | Yes |
| `text_citations` | Each piece of text with the box it came from. | Yes |
| `text_highlighting` | Boxes to draw over the page. | Yes |

`rednote-hilab/dots.mocr` carries `document_markdown` on `markdown` and `text_citations` on `parse_layout`. `paddleocr/pp-ocrv6` carries `text_citations` on `ocr` and `text_extraction` on `text`.

<h2 id="read_document">
  `read_document`
</h2>

OCR a PDF or image into Markdown, or into structured JSON. Use it for invoices, forms, reports, slide decks, screenshots, and scanned pages.

| Argument | Type | Default | Description |
| - | - | - | - |
| `url` | `string` | required | The PDF or image. |
| `model` | enum | `rednote-hilab/dots.mocr` | OCR model to run. On `gateway.vlm.run` the menu is `rednote-hilab/dots.mocr`, `deepseek-ai/deepseek-ocr-2`, `zai-org/glm-ocr`, `baidu/unlimited-ocr`, `paddleocr/pp-ocrv6`, and the auto-routing `vlm-run/ocr:auto`. A model is on the menu only when it serves the method the tool sends. Call [`list_models`](/gateway/mcp-reference#list_models) for the set this gateway actually serves. |
| `dpi` | `integer` | `96` | Rasterization DPI (72-400) per PDF page before OCR. Higher is sharper on small text, and slower. |
| `method` | `string` | model default | Backend method run on each page: `markdown` on the generative OCR models, `ocr` on `paddleocr/pp-ocrv6`. A method the model does not advertise is rejected before the call. See [Pick a method](#pick-a-method). |
| `method_params` | `object` | unset | Keyword arguments for `method`, forwarded as-is. |
| `pages` | `list[int \| list[int]]` | every page (max 128) | 0-indexed page selection. Each entry is a page index or a `[start, stop]` half-open range (`start` inclusive, `stop` exclusive). Negative indices count from the end. Only the selected pages are rasterized, and they are re-numbered from 0 in the response. `document_npages` counts the pages you selected, not the pages in the file. Indices past the end are ignored. |
| `json_mode` | `boolean` | `false` | `false` returns the `<document>` / `<page>` text blocks. `true` returns the flat reply: `model`, `method`, file and document metadata, and `pages`. |

#### Page selection

* `[0, 2, 4]` reads pages 0, 2, and 4
* `[[0, 3]]` reads pages 0-2
* `[[0, 3], [5, 7], -1]` reads pages 0, 1, 2, 5, 6, and the last page

<Note>
  One call reads at most 128 pages. For a longer document, call once per range and combine the results. The error names the ranges to use.
</Note>

#### JSON mode

<Tabs>
  <Tab title="json_mode: false">
    Left unset, the tool returns the same text blocks as the REST API. One `<document>` block per PDF wraps one `<page>` block per page, in reading order.

    ```text theme={"theme":{"light":"github-light","dark":"dark-plus"}}
    <document file_name="invoice.pdf" file_hash="sha256:1b7f04c3…" file_bytes="48213" mimetype="application/pdf" npages="2" dpi="96">
    <page id="0" format="markdown" width="612" height="792">
    </page>
    <page id="1" format="markdown" width="612" height="792">
    </page>
    </document>
    ```

    A page that failed OCR is self-closing, with `status="error"` and no body. A single image returns the Markdown alone, with no wrapper.
  </Tab>

  <Tab title="json_mode: true">
    `json_mode: true` returns the flat reply in `data`, including boxes from a region method.

    ```json [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
    {
      "model": "paddleocr/pp-ocrv6",
      "method": "ocr",
      "file_name": "invoice.pdf",
      "file_hash": "sha256:1b7f04c3…",
      "file_bytes": 48213,
      "document_mimetype": "application/pdf",
      "document_npages": 2,
      "document_dpi": 96,
      "pages": [
        {
          "object": "doc.page",
          "page_id": 0,
          "page_width": 612,
          "page_height": 792,
          "content": {
            "object": "doc.page.blocks",
            "items": [
              {
                "block_id": 0,
                "bbox_xywh": [0.3987, 0.0896, 0.1993, 0.0164],
                "text": "ACME Corp",
                "score": 0.9998
              }
            ]
          }
        }
      ]
    }
    ```
  </Tab>
</Tabs>

Leave `json_mode` at `false` for agent use. Set it to `true` only when code parses the reply. Both shapes are documented under [Text mode](/gateway/response-formats#text-mode) and [JSON mode](/gateway/response-formats#json-mode).

<h2 id="read_image">
  `read_image`
</h2>

Send one still image and get the model's answer. Use it for photos, charts, diagrams, product shots, and UI screenshots. A region model returns records instead of prose: masks from `facebook/sam3.1`, keypoints from `usyd-community/vitpose-plus-large`, or boxes and captions from `microsoft/florence-2-base-ft`. Those records need `json_mode: true`.

| Argument | Type | Default | Description |
| - | - | - | - |
| `url` | `string` | required | The image. |
| `model` | enum | `qwen/qwen3.5-0.8b` | Model that looks at the image. On `gateway.vlm.run` the menu is the chat VLMs `qwen/qwen3.5-0.8b`, `qwen/qwen3.8-27b`, `google/gemma-4-26b-a4b-it` and `google/diffusiongemma-26b-a4b-it`, and the region models `facebook/sam3.1`, `usyd-community/vitpose-plus-large` and `microsoft/florence-2-base-ft`. No OCR models. Printed text goes to `read_document`. |
| `prompt` | `string` | "Describe this image in detail." | The question or the instruction, for example "What is the total on this receipt?". On `facebook/sam3.1` it is the segmentation target. |
| `method` | `string` | the model's default | Region-model method, as on `read_document`. Unset runs the model's own default. |
| `method_params` | `object` | unset | Keyword arguments for `method`, forwarded as-is. `segment_box` takes `method_params.bbox_xywh`, normalized. |
| `json_mode` | `boolean` | `false` | `false` returns the answer as a string. `true` asks the model for JSON, which a chat VLM returns unenveloped. A region model's records need `true`. See [Chat VLMs are not enveloped](/gateway/response-formats#chat-vlms-are-not-enveloped). |

The `read_image` menu has no OCR model. `read_document` accepts an image URL, and a single image comes back as Markdown with no wrapper.

<h2 id="read_audio">
  `read_audio`
</h2>

Transcribe speech audio (`wav`, `mp3`, `m4a`, `flac`, `ogg`, and the rest) into text.

| Argument | Type | Default | Description |
| - | - | - | - |
| `url` | `string` | required | The audio file. |
| `model` | enum | `nvidia/parakeet-tdt-0.6b-v3` | Speech-to-text model. The menu lists the served transcription models. |
| `language` | `string` | auto-detect | ISO-639-1 hint (`en`, `es`, and so on). Pass it when you already know the language, to skip detection. |
| `json_mode` | `boolean` | `false` | `false` returns the transcript. `true` returns the transcription object, text plus metadata. |

<h2 id="read_video">
  `read_video`
</h2>

Describe or transcribe a video. The clip goes to a model that ingests video natively. There is no gateway-side video-to-image step, and a model without video support is refused. A region model returns one record per sampled frame: tracks from `facebook/sam3.1` (`track`), or keypoints from `usyd-community/vitpose-plus-large` (`pose`). Those records need `json_mode: true`.

<input class="fold-rows" type="checkbox" id="fold-gateway-mcp-tools-1" />

| Argument | Type | Default | Description |
| - | - | - | - |
| `url` | `string` | required | The video file. |
| `model` | enum | `qwen/qwen3.5-0.8b` | Model that reads the clip. On `gateway.vlm.run` the menu is `qwen/qwen3.5-0.8b`, `qwen/qwen3.8-27b`, `google/gemma-4-26b-a4b-it`, `facebook/sam3.1` (`track`) and `usyd-community/vitpose-plus-large` (`pose`). |
| `prompt` | `string` | "Transcribe and describe the content of this video in detail." | What to produce. On `facebook/sam3.1` it is the object to track. |
| `fps` | `number` | the model's own default | Frames sampled per second. Maps to the REST field `video_fps`. Higher captures more motion and costs more. |
| `max_frames` | `integer` | model default | Upper bound on sampled frames. Maps to `video_max_frames`. |
| `encoder` | `native` | `native` | How the clip reaches the model. `native` is the only accepted value: the clip is forwarded whole. Kept so a later encoder can be added without a new argument. |
| `encoder_params` | `object` | unset | Parameters for `encoder`. Nothing to set while `native` is the only encoder. |
| `method` | `string` | the model's default | Region-model method: `track` on `facebook/sam3.1`, `pose` on `usyd-community/vitpose-plus-large`. |
| `method_params` | `object` | unset | Keyword arguments for `method`, forwarded as-is. |
| `json_mode` | `boolean` | `false` | `false` returns the description as a string. `true` asks the model for JSON, which a chat VLM returns unenveloped. A region model's records need `true`. |

<label class="fold-rows-label" for="fold-gateway-mcp-tools-1"><span class="when-closed">See all 10 rows</span><span class="when-open">Show less</span></label>

On the REST API, `encoder` and `encoder_params` map to [`video_encoder` and `video_encoder_params`](/gateway/extra-kwargs).


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.