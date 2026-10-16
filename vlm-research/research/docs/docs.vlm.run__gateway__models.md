> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Models

> Gateway models live on the catalog.

<Frame caption="Live preview of the Gateway model catalog. The first 10 models are shown.">
  <img src="https://mintcdn.com/autonomiai/Zrh5Zpd35f1RBQsx/images/gateway-models-catalog.png?fit=max&auto=format&n=Zrh5Zpd35f1RBQsx&q=85&s=dae6a62e38a55ef20a4d0182b1997b25" alt="Gateway model catalog table with capabilities, inputs, context, and prices" width="2116" height="1414" data-path="images/gateway-models-catalog.png" />
</Frame>

Models, inputs, methods, caps, and prices are on the [catalog](https://vlm.run/gateway/models).

## Addressing Models

A model is addressable by these name variants. They resolve to the same model.

* **Full id (always works):** `<org>/<slug>`, for example `zai-org/glm-ocr`.
* **Short form:** the slug alone, for example `glm-ocr`. Most models accept it.
* **Hugging Face id:** the model's repo id, for example `zai-org/GLM-OCR`. Most models accept it.

The reply reports the canonical id in `model`. [`GET /v1/openai/models`](/gateway/api-reference/get-models) is the live list.

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from openai import OpenAI

  client = OpenAI(
      base_url="https://gateway.vlm.run/v1/openai",
      api_key="<VLMRUN_API_KEY>",
  )
  for model in ("zai-org/glm-ocr", "glm-ocr", "zai-org/GLM-OCR"):  # all address the same model
      response = client.chat.completions.create(
          model=model,
          messages=[{"role": "user", "content": [{"type": "image_url", "image_url": {"url": "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.receipt/playground/2.jpg"}}]}],
      )
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import OpenAI from "openai";

  const client = new OpenAI({
    baseURL: "https://gateway.vlm.run/v1/openai",
    apiKey: process.env.VLMRUN_API_KEY,
  });
  for (const model of ["zai-org/glm-ocr", "glm-ocr", "zai-org/GLM-OCR"]) { // all address the same model
    const response = await client.chat.completions.create({
      model,
      messages: [{ role: "user", content: [{ type: "image_url", image_url: { url: "https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.receipt/playground/2.jpg" } }] }],
    });
  }
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  vlmrun gw chat https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.receipt/playground/2.jpg -m zai-org/glm-ocr
  vlmrun gw chat https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.receipt/playground/2.jpg -m glm-ocr
  vlmrun gw chat https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.receipt/playground/2.jpg -m zai-org/GLM-OCR
  ```
</CodeGroup>

## VQA, detection, and segmentation

See [Visual Intelligence](/gateway/visual-intelligence#vqa-detection-and-segmentation) for more details.

* [`qwen/qwen3.5-0.8b`](https://vlm.run/gateway/models/qwen-qwen3.5-0.8b)
* [`qwen/qwen3.8-27b`](https://vlm.run/gateway/models/qwen-qwen3.8-27b)
* [`microsoft/florence-2-base-ft`](https://vlm.run/gateway/models/microsoft-florence-2-base-ft)
* [`facebook/sam3.1`](https://vlm.run/gateway/models/facebook-sam3.1)

## Pose estimation

Body pose with `vitpose-plus-large`, hand pose with `hamer`. See [Visual Intelligence](/gateway/visual-intelligence#pose-estimation) for more details.

* [`usyd-community/vitpose-plus-large`](https://vlm.run/gateway/models/usyd-community-vitpose-plus-large)
* [`geopavlakos/hamer`](https://vlm.run/gateway/models/geopavlakos-hamer)

## Document OCR models

Markdown models first, then PP-OCR. See [Visual Intelligence](/gateway/visual-intelligence#document-ocr-models) for more details.

* [`zai-org/glm-ocr`](https://vlm.run/gateway/models/zai-org-glm-ocr)
* [`paddlepaddle/paddleocr-vl-1.6`](https://vlm.run/gateway/models/paddlepaddle-paddleocr-vl-1.6)
* [`deepseek-ai/deepseek-ocr-2`](https://vlm.run/gateway/models/deepseek-ai-deepseek-ocr-2)
* [`rednote-hilab/dots.mocr`](https://vlm.run/gateway/models/rednote-hilab-dots.mocr)
* [`baidu/unlimited-ocr`](https://vlm.run/gateway/models/baidu-unlimited-ocr)
* [`paddleocr/pp-ocrv6`](https://vlm.run/gateway/models/paddleocr-pp-ocrv6)

## Chat and reasoning

General chat completions.

* [`google/gemma-4-26b-a4b-it`](https://vlm.run/gateway/models/google-gemma-4-26b-a4b-it)
* [`google/diffusiongemma-26b-a4b-it`](https://vlm.run/gateway/models/google-diffusiongemma-26b-a4b-it)
* [`meta/muse-glimmer-30b`](https://vlm.run/gateway/models/meta-muse-glimmer-30b)
* [`moonshotai/kimi-k3`](https://vlm.run/gateway/models/moonshotai-kimi-k3)
* [`minimax/minimax-m3`](https://vlm.run/gateway/models/minimax-minimax-m3)
* [`google/gemini-3.5-flash-lite`](https://vlm.run/gateway/models/google-gemini-3.5-flash-lite) (Pro)
* [`google/gemini-3.7-flash`](https://vlm.run/gateway/models/google-gemini-3.7-flash) (Pro)
* [`google/gemini-robotics-er-2-preview`](https://vlm.run/gateway/models/google-gemini-robotics-er-2-preview) (Pro)
* [`meta/muse-spark-1.2`](https://vlm.run/gateway/models/meta-muse-spark-1.2) (Pro)

## Embeddings

* [`qwen/qwen3-vl-embedding-2b`](https://vlm.run/gateway/models/qwen-qwen3-vl-embedding-2b)

## Transcriptions

* [`nvidia/parakeet-tdt-0.6b-v3`](https://vlm.run/gateway/models/nvidia-parakeet-tdt-0.6b-v3)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.