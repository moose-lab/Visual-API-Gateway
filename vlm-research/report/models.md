# 24 项实时模型目录与能力

证据：RUNTIME，仅表示 2026-10-11 模型接口返回的元数据；未逐项执行全部能力。输入/价格来源：[research/runtime/gateway_models.response.json:1](../research/runtime/gateway_models.response.json)。

官网 served/routed 分类来源 STATIC：[research/frontend/catalog.static.json:1](../research/frontend/catalog.static.json)。空 provider 字段不单独证明自托管。

|模型 ID|官网类别|方法（空=无显式方法）|输入|图/视频上限|context|JSON object/schema|prompt/completion 价格字段|详情状态|
|---|---|---|---|---|---|---|---|---|
|`google/gemini-3.5-flash-lite`|routed|—|text, image_url, video_url, document_url, file_url|None / 1|1048576|True / True|0.3 / 2.5|404|
|`google/gemini-3.7-flash`|routed|—|text, image_url, video_url, document_url, file_url|None / 1|1048576|True / True|0.75 / 3.75|404|
|`meta/muse-spark-1.2`|routed|—|text, image_url, video_url|None / 1|1048576|True / True|1.25 / 4.25|404|
|`google/gemini-robotics-er-2-preview`|routed|—|text, image_url, video_url, document_url, file_url|None / 1|1048576|True / True|0.3 / 2.5|404|
|`moonshotai/kimi-k3`|routed|—|text, image_url, video_url|None / 1|262144|True / True|3.0 / 15.0|404|
|`minimax/minimax-m3`|routed|—|text, image_url, video_url|None / 1|1048576|True / True|0.3 / 1.2|404|
|`meta/muse-glimmer-30b`|routed|—|text, image_url, video_url|None / 1|131072|True / False|0.35 / 1.5|404|
|`microsoft/florence-2-base-ft`|served|caption, detailed_caption, more_detailed_caption, ocr, ocr_with_region, od, dense_region_caption, region_proposal|text, image_url|1 / 0|None|True / False|0.1 / 0.3|200|
|`geopavlakos/hamer`|served|pose|text, image_url|1 / 0|None|True / False|3.9 / 0.0|200|
|`nvidia/parakeet-tdt-0.6b-v3`|served|transcribe|text, image_url, video_url|None / None|None|True / True|16.67 / 0.0|200|
|`paddleocr/pp-ocrv6`|served|ocr, detect, text|image_url, document_url, file_url|1 / 0|None|True / False|0.02 / 0.4|200|
|`facebook/sam3.1`|served|segment, segment_box, track|text, image_url, video_url|1 / 1|None|True / False|0.0 / 0.0|200|
|`usyd-community/vitpose-plus-large`|served|pose|text, image_url, video_url|1 / 1|None|True / False|3.9 / 0.0|200|
|`deepseek-ai/deepseek-ocr-2`|served|ocr, markdown, free_ocr, grounding_ocr|text, image_url, document_url, file_url|1 / 0|32768|True / False|0.25 / 0.8|200|
|`google/diffusiongemma-26b-a4b-it`|served|—|text, image_url|8 / 0|16384|False / False|0.35 / 1.5|200|
|`rednote-hilab/dots.mocr`|served|parse_layout, parse_layout_only, ocr, markdown|text, image_url, document_url, file_url|1 / 0|32768|True / False|0.2 / 0.4|200|
|`google/gemma-4-26b-a4b-it`|served|—|text, image_url, video_url|64 / 1|81920|True / True|0.1 / 0.3|200|
|`zai-org/glm-ocr`|served|markdown|text, image_url, document_url, file_url|1 / 0|8192|True / False|0.1 / 0.2|200|
|`paddlepaddle/paddleocr-vl-1.6`|served|ocr, table, formula, chart|text, image_url, document_url, file_url|1 / 0|16384|True / False|0.15 / 0.35|200|
|`qwen/qwen3.5-0.8b`|served|—|text, image_url, video_url|64 / 1|262144|True / True|0.08 / 0.15|200|
|`qwen/qwen3.8-27b`|served|—|text, image_url, video_url|64 / 1|168000|True / True|0.35 / 2.55|200|
|`qwen/qwen3-vl-embedding-2b`|served|embed|text, image_url, video_url|None / None|8192|True / True|0.013 / 0.0|200|
|`baidu/unlimited-ocr`|served|markdown, multi_page|text, image_url, document_url, file_url|1 / 0|32768|True / False|0.25 / 0.55|200|
|`vlm-run/ocr:auto`|served|markdown, ocr, layout|text, image_url, document_url, file_url|1 / 0|None|True / False|0.0 / 0.0|200|

`null/None` 表示目录未给出该值，不等于无限制；价格列保留 API 原字段，单位按模型卡解释，不能统一理解成每百万 token。Parakeet 的 prompt 单位为每百万音频秒；SAM 的 image/video 字段另计。公开最低费用与实际 embedding cost=0 的差异见主报告。

## model list 与 model detail 不一致（STATIC 比较两个 RUNTIME 快照）

|模型|字段|list|detail|
|---|---|---|---|
|`nvidia/parakeet-tdt-0.6b-v3`|`methods`|`["transcribe"]`|`[]`|
|`nvidia/parakeet-tdt-0.6b-v3`|`capabilities`|`{"max_images": null, "max_videos": null, "supports_text_only": true, "supports_document_url": false, "supports_json_object": true, "supports_json_schema": true, "supported_input_types": ["text", "image_url", "video_url"]}`|`{"max_images": 0, "max_videos": 1, "supports_text_only": false, "supports_document_url": false, "supports_json_object": true, "supports_json_schema": false, "supported_input_types": ["audio_url", "video_url"]}`|
|`paddleocr/pp-ocrv6`|`aliases`|`["pp-ocrv6"]`|`[]`|
|`paddleocr/pp-ocrv6`|`capabilities`|`{"max_images": 1, "max_videos": 0, "supports_text_only": false, "supports_document_url": true, "supports_json_object": true, "supports_json_schema": false, "supported_input_types": ["image_url", "document_url", "file_url"]}`|`{"max_images": 1, "max_videos": 0, "supports_text_only": false, "supports_document_url": true, "supports_json_object": true, "supports_json_schema": false, "supported_input_types": ["text", "image_url", "document_url", "file_url", "file"]}`|
|`deepseek-ai/deepseek-ocr-2`|`aliases`|`["deepseek-ai/DeepSeek-OCR-2", "deepseek-ocr-2"]`|`["deepseek-ai/DeepSeek-OCR-2"]`|
|`deepseek-ai/deepseek-ocr-2`|`capabilities`|`{"max_images": 1, "max_videos": 0, "supports_text_only": false, "supports_document_url": true, "supports_json_object": true, "supports_json_schema": false, "supported_input_types": ["text", "image_url", "document_url", "file_url"]}`|`{"max_images": 1, "max_videos": 0, "supports_text_only": false, "supports_document_url": true, "supports_json_object": true, "supports_json_schema": false, "supported_input_types": ["text", "image_url", "document_url", "file_url", "file"]}`|
|`google/diffusiongemma-26b-a4b-it`|`methods`|`[]`|`["chat"]`|
|`google/diffusiongemma-26b-a4b-it`|`aliases`|`["diffusiongemma-26b-a4b-it", "google/DiffusionGemma-26B-A4B-it"]`|`["google/DiffusionGemma-26B-A4B-it"]`|
|`google/diffusiongemma-26b-a4b-it`|`capabilities`|`{"max_images": 8, "max_videos": 0, "supports_text_only": true, "supports_document_url": false, "supports_json_object": false, "supports_json_schema": false, "supported_input_types": ["text", "image_url"]}`|`{"max_images": 8, "max_videos": 0, "supports_text_only": true, "supports_document_url": false, "supports_json_object": true, "supports_json_schema": false, "supported_input_types": ["text", "image_url", "video_url"]}`|
|`rednote-hilab/dots.mocr`|`aliases`|`["dots.mocr"]`|`[]`|
|`rednote-hilab/dots.mocr`|`capabilities`|`{"max_images": 1, "max_videos": 0, "supports_text_only": false, "supports_document_url": true, "supports_json_object": true, "supports_json_schema": false, "supported_input_types": ["text", "image_url", "document_url", "file_url"]}`|`{"max_images": 1, "max_videos": 0, "supports_text_only": false, "supports_document_url": true, "supports_json_object": true, "supports_json_schema": false, "supported_input_types": ["text", "image_url", "document_url", "file_url", "file"]}`|
|`google/gemma-4-26b-a4b-it`|`methods`|`[]`|`["chat"]`|
|`google/gemma-4-26b-a4b-it`|`aliases`|`["google/gemma-4-26B-A4B-it"]`|`["google/gemma-4-26B-A4B-it", "nvidia/Gemma-4-26B-A4B-NVFP4"]`|
|`zai-org/glm-ocr`|`methods`|`["markdown"]`|`["ocr", "markdown"]`|
|`zai-org/glm-ocr`|`aliases`|`["glm-ocr", "zai-org/GLM-OCR"]`|`["zai-org/GLM-OCR"]`|
|`zai-org/glm-ocr`|`capabilities`|`{"max_images": 1, "max_videos": 0, "supports_text_only": false, "supports_document_url": true, "supports_json_object": true, "supports_json_schema": false, "supported_input_types": ["text", "image_url", "document_url", "file_url"]}`|`{"max_images": 1, "max_videos": 0, "supports_text_only": false, "supports_document_url": true, "supports_json_object": true, "supports_json_schema": false, "supported_input_types": ["text", "image_url", "document_url", "file_url", "file"]}`|
|`paddlepaddle/paddleocr-vl-1.6`|`aliases`|`["PaddlePaddle/PaddleOCR-VL", "PaddlePaddle/PaddleOCR-VL-1.6", "paddleocr-vl", "paddleocr-vl-1.6", "paddlepaddle/paddleocr-vl"]`|`["PaddlePaddle/PaddleOCR-VL-1.6", "paddlepaddle/paddleocr-vl", "paddleocr-vl", "PaddlePaddle/PaddleOCR-VL"]`|
|`paddlepaddle/paddleocr-vl-1.6`|`capabilities`|`{"max_images": 1, "max_videos": 0, "supports_text_only": false, "supports_document_url": true, "supports_json_object": true, "supports_json_schema": false, "supported_input_types": ["text", "image_url", "document_url", "file_url"]}`|`{"max_images": 1, "max_videos": 0, "supports_text_only": false, "supports_document_url": true, "supports_json_object": true, "supports_json_schema": false, "supported_input_types": ["text", "image_url", "document_url", "file_url", "file"]}`|
|`qwen/qwen3.5-0.8b`|`methods`|`[]`|`["chat"]`|
|`qwen/qwen3.5-0.8b`|`aliases`|`[]`|`["Qwen/Qwen3.5-0.8B"]`|
|`qwen/qwen3.8-27b`|`methods`|`[]`|`["chat"]`|
|`qwen/qwen3.8-27b`|`aliases`|`["Qwen/Qwen3.8-27B", "Qwen/Qwen3.8-27B-FP8"]`|`["Qwen/Qwen3.8-27B"]`|
|`qwen/qwen3-vl-embedding-2b`|`methods`|`["embed"]`|`[]`|
|`qwen/qwen3-vl-embedding-2b`|`aliases`|`[]`|`["Qwen/Qwen3-VL-Embedding-2B"]`|
|`qwen/qwen3-vl-embedding-2b`|`capabilities`|`{"max_images": null, "max_videos": null, "supports_text_only": true, "supports_document_url": false, "supports_json_object": true, "supports_json_schema": true, "supported_input_types": ["text", "image_url", "video_url"]}`|`{"max_images": null, "max_videos": null, "supports_text_only": true, "supports_document_url": false, "supports_json_object": true, "supports_json_schema": false, "supported_input_types": ["text", "image_url", "video_url"]}`|
|`baidu/unlimited-ocr`|`aliases`|`["baidu/Unlimited-OCR", "unlimited-ocr"]`|`["baidu/Unlimited-OCR"]`|
|`baidu/unlimited-ocr`|`capabilities`|`{"max_images": 1, "max_videos": 0, "supports_text_only": false, "supports_document_url": true, "supports_json_object": true, "supports_json_schema": false, "supported_input_types": ["text", "image_url", "document_url", "file_url"]}`|`{"max_images": 32, "max_videos": 0, "supports_text_only": false, "supports_document_url": true, "supports_json_object": true, "supports_json_schema": false, "supported_input_types": ["text", "image_url", "document_url", "file_url", "file"]}`|
|`vlm-run/ocr:auto`|`aliases`|`["ocr:auto"]`|`[]`|
|`vlm-run/ocr:auto`|`capabilities`|`{"max_images": 1, "max_videos": 0, "supports_text_only": false, "supports_document_url": true, "supports_json_object": true, "supports_json_schema": false, "supported_input_types": ["text", "image_url", "document_url", "file_url"]}`|`{"max_images": 1, "max_videos": 0, "supports_text_only": false, "supports_document_url": true, "supports_json_object": true, "supports_json_schema": false, "supported_input_types": ["text", "image_url", "document_url", "file_url", "file"]}`|

模型详情原始证据为 `research/runtime/detail_<model>.response.json`。7 个 routed model 详情均 404，17 个 served model 详情均 200；这不自动说明 7 个模型无法推理。单次 Gemini 推理另返回账户 entitlement 403。

## System One 与 Agent

System One: [research/runtime/gateway_typesafe_models.response.json:1](../research/runtime/gateway_typesafe_models.response.json)

```json
{
  "models": [
    {
      "name": "google/diffusiongemma-26b-a4b-it",
      "description": "Calibrated yes/no, choice and score decisions over text, JSON and up to 8 images, read from DiffusionGemma-26B-A4B in one denoise step.",
      "release_date": "2026-09-20"
    },
    {
      "name": "qwen/qwen3.5-0.8b",
      "description": "The same decisions read from Qwen3.5-0.8B in one constrained pass. The smallest engine that serves this route; decisions are less peaked than the default's.",
      "release_date": "2026-09-23"
    },
    {
      "name": "google/gemma-4-26b-a4b-it",
      "description": "The same decisions read from Gemma-4-26B-A4B in one constrained pass. The sparse sibling of the default engine: 4B active, so a read costs a fraction of its size.",
      "release_date": "2026-09-23"
    },
    {
      "name": "qwen/qwen3.8-27b",
      "description": "The same decisions read from Qwen3.8-27B in one constrained pass, on the chat engine the OpenAI routes already serve.",
      "release_date": "2026-09-23"
    }
  ]
}
```

Agent: [research/runtime/agent_models.response.json:1](../research/runtime/agent_models.response.json)

```text
vlmrun-orion-1
vlmrun-orion-1:auto
vlmrun-orion-1:fast
vlmrun-orion-1:pro
vlmrun-orion-2
vlmrun-orion-2:auto
vlm-1
vlmrun-orion-2:qwen3.8-27b
```
