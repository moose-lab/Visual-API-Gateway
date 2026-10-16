> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Changelog

> Monthly Gateway highlights: models, features, billing, and limits.

Newest first. The roadmap lists planned work. Scope and timing can change.

### Roadmap

<span className="changelog-tag">Planned</span> `teleocr` for document OCR.

<span className="changelog-tag">Planned</span> Marigold v2 for monocular depth.

<span className="changelog-tag">Planned</span> Sapiens 2, starting with human pose.

<span className="changelog-tag">Planned</span> New calibrated [System One](/gateway/system-one) models: `clef`, `kev`, and more. Each returns a calibrated probability per label, like [`google/diffusiongemma-26b-a4b-it`](https://vlm.run/gateway/models/google-diffusiongemma-26b-a4b-it).

<span className="changelog-tag">Planned</span> Video encoders beyond `native`. [`video_encoder`](/gateway/extra-kwargs#video) and [`video_encoder_params`](/gateway/extra-kwargs#video) are reserved today.

### October 2026

<span className="changelog-tag">Docs</span> New [model catalog](https://vlm.run/gateway/models). One card per model with inputs, methods, parameters, and request and response samples. [Models](/gateway/models) links each card.

<span className="changelog-tag">Docs</span> New [Methods](/gateway/methods), [Response Formats](/gateway/response-formats), [Response Types](/gateway/response-types), and [Extra Kwargs](/gateway/extra-kwargs) pages. JSON mode for code with typed replies, text mode for agents and MCP.

<span className="changelog-tag">Docs</span> New [Supported Inputs](/gateway/multimodal-inputs) tabs for single image, multiple images, documents, and video. Added caption, segment, and pose samples to [Visual Intelligence](/gateway/visual-intelligence).

<span className="changelog-tag">API</span> System One accepts remote `http(s)` URLs in `image_url` parts.

### September 2026

#### System One

<span className="changelog-tag">Feature</span> Added [System One](/gateway/system-one) at `POST /typesafe/v1/systemone`. Typed decisions (`choice`, `score`, `noul`) with a calibrated probability per label, read off [`google/diffusiongemma-26b-a4b-it`](https://vlm.run/gateway/models/google-diffusiongemma-26b-a4b-it) in one denoise step. Nothing is generated or parsed, so an answer cannot be off-schema.

<span className="changelog-tag">Feature</span> Wire-compatible with the TypeSafe Jev API. The `typesafe-sdk` works with a new `base_url`. See [TypeSafe SDK Compatibility](/gateway/jev-compatibility).

<span className="changelog-tag">Feature</span> Added [`WS /typesafe/ws`](/gateway/typesafe-streaming) for decisions per frame. `session.create` validates the questions once, then each frame is one binary message and each reply is one `decision` event. Backpressure drops a frame and names it. It never queues.

<span className="changelog-tag">Model</span> Generative engines read decisions too: [`google/gemma-4-26b-a4b-it`](https://vlm.run/gateway/models/google-gemma-4-26b-a4b-it), [`qwen/qwen3.8-27b`](https://vlm.run/gateway/models/qwen-qwen3.8-27b), and [`qwen/qwen3.5-0.8b`](https://vlm.run/gateway/models/qwen-qwen3.5-0.8b). The engine writes the answer template under a regex that admits only the schema labels, in one constrained pass. Label logprobs are read before the grammar mask, so the constraint does not move the ratio. See [TypeSafe models](/gateway/typesafe-models).

<span className="changelog-tag">Feature</span> `reasoning_effort` on generative engines: `none`, `minimal`, and `low` spend 0, 32, and 64 reasoning tokens before the answer. Diffusion engines reject it with `422`.

<span className="changelog-tag">Feature</span> Parallel constrained decoding. A generative engine reads one question per call over a shared prefix, so decode depth falls from `2N-1` to 1. At 16 questions the measured speedup is 2.03x on [`gemma-4-26b-a4b-it`](https://vlm.run/gateway/models/google-gemma-4-26b-a4b-it), 1.10x on [`qwen3.8-27b`](https://vlm.run/gateway/models/qwen-qwen3.8-27b), and 0.94x on [`qwen3.5-0.8b`](https://vlm.run/gateway/models/qwen-qwen3.5-0.8b). A parallel decision reports `usage.input_tokens` for every call.

<span className="changelog-tag">Feature</span> The `steps` field sets denoise steps per read, 1 to 8, on diffusion engines. The default of 1 is the Jev contract.

#### Visual Intelligence

<span className="changelog-tag">Model</span> Added [`facebook/sam3.1`](https://vlm.run/gateway/models/facebook-sam3.1) for `segment`, `segment_box`, and `track`, and [`geopavlakos/hamer`](https://vlm.run/gateway/models/geopavlakos-hamer) for hand pose with 2D and 3D joints.

<span className="changelog-tag">API</span> One flat, typed reply per structured request: `{model, method, <input details>, content | pages}`. Input details are `image_*`, `video_*`, or `file_*` fields. Type tags follow `<domain>.<task>.<unit>`.

<span className="changelog-tag">API</span> Masks are one PNG label map per image, where the pixel value is `instance_id`. Per video frame the pixel value is `track_id`. Ids run 1 to 255 and 0 means none. Every `track_id` starts at 1, and every float rounds to the request's `precision`.

<span className="changelog-tag">API</span> Structured models take one image, video, or PDF per request. A second input returns `400`. [`pp-ocrv6`](https://vlm.run/gateway/models/paddleocr-pp-ocrv6) moved from 8 images to 1. Chat and VQA models still accept several images.

<span className="changelog-tag">API</span> `video_max_frames` defaults to 128 for [`sam3.1`](https://vlm.run/gateway/models/facebook-sam3.1) `track`. A larger value returns `400`.

<span className="changelog-tag">MCP</span> `read_image` and `read_video` serve the region models: [`sam3.1`](https://vlm.run/gateway/models/facebook-sam3.1), [`vitpose-plus-large`](https://vlm.run/gateway/models/usyd-community-vitpose-plus-large), and [`florence-2`](https://vlm.run/gateway/models/microsoft-florence-2-base-ft). `get_model_info` returns the JSON schema of each method's reply.

#### VQA models

<span className="changelog-tag">Model</span> Added [`qwen/qwen3.8-27b`](https://vlm.run/gateway/models/qwen-qwen3.8-27b), [`google/gemma-4-26b-a4b-it`](https://vlm.run/gateway/models/google-gemma-4-26b-a4b-it), and [`meta/muse-glimmer-30b`](https://vlm.run/gateway/models/meta-muse-glimmer-30b) for visual question answering and chat.

<span className="changelog-tag">API</span> [`qwen/qwen3.8-27b`](https://vlm.run/gateway/models/qwen-qwen3.8-27b) streams its reasoning and forwards thinking controls.

#### Platform

<span className="changelog-tag">Release</span> Gateway beta on 26-09-15.

<span className="changelog-tag">API</span> `GET /v1/openai/models` always returns `pricing`, in USD per 1M tokens. A `null` price means unknown, not free.

<span className="changelog-tag">API</span> Per-model deadlines: `ttft_timeout_s` (default 30) and `total_timeout_s` (default 600). A first-token expiry returns `504` with `ttft_timeout`, and the engine work is cancelled. [`qwen3.8-27b`](https://vlm.run/gateway/models/qwen-qwen3.8-27b) and [`unlimited-ocr`](https://vlm.run/gateway/models/baidu-unlimited-ocr) use 60 s for first token.

<span className="changelog-tag">API</span> `stream=true` on a verbatim OCR reply (`markdown`, `ocr`, `text`) forwards the engine's own deltas instead of re-chunking the finished reply.

<span className="changelog-tag">API</span> Invalid API keys return `401` and key lookup outages return `503`. See [error codes](/gateway/error-codes).

<span className="changelog-tag">MCP</span> The [MCP server](/gateway/mcp-server) accepts VLM Run API keys and the anonymous sentinel next to OAuth.

<span className="changelog-tag">Docs</span> Published the [`vlmrun-gw` skill](/gateway/skills) and expanded the `vlmrun gw` CLI reference.

<span className="changelog-tag">Release</span> Gateway alpha on 26-09-01.

### August 2026

#### Models

<span className="changelog-tag">Model</span> Added [`baidu/unlimited-ocr`](https://vlm.run/gateway/models/baidu-unlimited-ocr) on vLLM with a sliding-window `multi_page` method. One forward pass reads a window of pages sized to the 32K context and carries the tail of the previous window. A page went from 32 s to 2.9 s, and decode from 24 to 218 tok/s.

<span className="changelog-tag">Model</span> Added [`paddlepaddle/paddleocr-vl-1.6`](https://vlm.run/gateway/models/paddlepaddle-paddleocr-vl-1.6) with `markdown`, `ocr`, `table`, `formula`, and `chart`. The 1.5 ids stay as aliases.

<span className="changelog-tag">Model</span> Added [`deepseek-ai/deepseek-ocr-2`](https://vlm.run/gateway/models/deepseek-ai-deepseek-ocr-2) with `grounding_ocr` to locate a phrase on the page.

<span className="changelog-tag">Model</span> Added [`usyd-community/vitpose-plus-large`](https://vlm.run/gateway/models/usyd-community-vitpose-plus-large) for body pose, with per-person tracks on video.

<span className="changelog-tag">Model</span> Added [`qwen/qwen3.5-0.8b`](https://vlm.run/gateway/models/qwen-qwen3.5-0.8b) and [`qwen/qwen3.8-27b`](https://vlm.run/gateway/models/qwen-qwen3.8-27b) on the OpenAI route.

#### Platform

<span className="changelog-tag">Feature</span> vLLM chat models serve on `/v1/openai` with the OpenAI request shape. `GET /v1/openai/models` reports `capabilities`, `methods`, `default_method`, and throughput.

<span className="changelog-tag">Feature</span> `response_format` with `json_schema` constrains generation on [`qwen3.5`](https://vlm.run/gateway/models/qwen-qwen3.5-0.8b) and [`qwen3.8-27b`](https://vlm.run/gateway/models/qwen-qwen3.8-27b). A model that cannot enforce it returns `400` with `capability_violation`. `json_object` works everywhere.

<span className="changelog-tag">Feature</span> One response contract per model and method. Every served pair renders through a typed response spec, in text and in JSON mode.

<span className="changelog-tag">API</span> JSON-mode replies stream as SSE when `stream=true`.

<span className="changelog-tag">API</span> `video_fps` reaches the engine, or the request says it cannot.

<span className="changelog-tag">API</span> Inference timeouts return `504`. See [error codes](/gateway/error-codes#inference-timeout-504).

<span className="changelog-tag">Limits</span> `429` carries `Retry-After` computed from the caller's stacked windows. A `503` for a cold-starting deployment carries `Retry-After: 30`. See [rate limits](/gateway/rate-limits).

<span className="changelog-tag">Pricing</span> Per-token billing debits the wallet on every chat completion. Rates were repriced on 08-31. Every call bills at least `$0.001`. See [pricing](/gateway/pricing).

<span className="changelog-tag">MCP</span> The [MCP server](/gateway/mcp-server) runs stateless, so it needs no session affinity. Added `read_image` and `get_completion` for token usage. `read_document` takes `method` and `method_params`, and `json_mode` replaces `response_format`.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.