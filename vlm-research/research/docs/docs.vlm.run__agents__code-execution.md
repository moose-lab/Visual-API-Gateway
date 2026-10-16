> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Code Execution

> Orion-2 sandbox for composable visual pipelines

Orion-2 (`vlmrun-orion-2`) writes and runs Python in a sandbox.
One `execute_code` call runs the pipeline.
Orion-1 calls one tool per model round-trip.

## When to Use Orion-2

| Scenario | Recommended |
| - | - |
| Multi-step pipelines (detect → crop → annotate) | Orion-2 |
| Custom data transformations with numpy/matplotlib | Orion-2 |
| Iterative code refinement across turns | Orion-2 |
| Skill-based extraction with programmatic logic | Orion-2 |

## How It Works

Orion-2 turns the request into Python.
It runs that code in a sandbox.
It retries until the program finishes.
Independent calls run concurrently.
There is no model round-trip between tools.

<Note>
  Architecture, benchmarks, and examples: [Orion-2 blog post](https://vlm.run/blog/orion-2). Mastra agents with hybrid client and server tools: [Mastra Compatibility](/agents/integrations/integrations-mastra).
</Note>

### Orion-1 vs. Orion-2

**Orion-1** — one LLM round-trip per tool:

```python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
# Tools are called sequentially, with LLM reasoning at each step
boxes      = tool_call("detect", image, target="person")                   # call 1
person     = tool_call("crop", image, xywh=[0.22, 0.35, 0.04, 0.15])      # call 2
garment    = tool_call("detect", dress_img, target="garment")              # call 3
garment    = tool_call("crop", dress_img, xywh=[0.33, 0.41, 0.05, 0.13])  # call 4
result     = tool_call("generate", person, garment)                        # call 5
```

**Orion-2** — one program, parallel dispatch:

```python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
import asyncio

async def process(ctx, person_image, dress_img):
    vlmrun = ctx.import_lib("vlmrun")

    def crop(img, d):
        bx, by, bw, bh = d["xywh"]; W, H = img.width, img.height
        return img.crop(int(by * H), int((by + bh) * H), int(bx * W), int((bx + bw) * W))

    # Detect person and garment in parallel
    p_det, g_det = await asyncio.gather(
        vlmrun.image.detect(person_image, "person"),
        vlmrun.image.detect(dress_img, "garment"),
    )
    person_crop = crop(person_image, p_det["detections"][0])
    garment_crop = crop(dress_img, g_det["detections"][0])

    # Composite the try-on
    (composite,) = await vlmrun.image.generate(
        "virtual try-on", images=[person_crop, garment_crop]
    )
    return {"composite": composite}
```

## Available Libraries

Load libraries with `ctx.import_lib(...)`.

| Library | Import | Capabilities |
| - | - | - |
| OpenCV | `ctx.import_lib("cv2")` | Classical CV operations, drawing, color conversion |
| NumPy | `ctx.import_lib("numpy")` | Array operations, math, linear algebra |
| Matplotlib | `ctx.import_lib("matplotlib")` | Plotting, charts, visualization |
| VLM Run | `ctx.import_lib("vlmrun")` | Detection, OCR, captioning, segmentation, generation, video, documents, [LLM text extraction](#vlmrun-llm-extract) |
| FFmpeg | `ctx.import_lib("ffmpeg")` | Video processing, frame extraction, transcoding |

Stdlib modules (`json`, `math`, `re`, `pathlib`, `asyncio`, and others) use a normal `import`.

### VLM Run Proxy API

```python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
# Image operations
caption  = await vlmrun.image.caption(img, "describe this image")
dets     = await vlmrun.image.detect(img, "cars")
segments = await vlmrun.image.segment(img, "person")
points   = await vlmrun.image.point(img, "eyes")
ocr      = await vlmrun.image.ocr(img)
(gen,)   = await vlmrun.image.generate("a sunset over mountains")
recon    = await vlmrun.image.reconstruct_3d(img, mask_img, objects)

# Document operations
n        = await vlmrun.document.length(doc_path)
pages    = await vlmrun.document.get_pages(doc_path, offset=0, limit=3)
page_img = await vlmrun.document.get_page(doc_path, index=0)

# Video operations
report      = await vlmrun.video.caption(vid_path, segment_duration=60.0)
video_paths = await vlmrun.video.generate("a timelapse of clouds", resolution="720p")
result      = await vlmrun.video.segment(vid_path, prompts=["person", "car"])

# File I/O within the sandbox
content  = vlmrun.io.read_file("data.json")
vlmrun.io.write_file("output.csv", csv_content)
path     = await vlmrun.io.download("https://example.com/file.pdf")

# LLM-powered text extraction
result   = await vlmrun.llm.extract(text, json_schema=schema)
result   = await vlmrun.llm.extract(text)  # free-form JSON when no schema
```

### vlmrun.llm.extract

Runs text-only LLM extraction inside the sandbox.
A `json_schema` returns a validated `dict` matching the schema.
No schema returns free-form JSON parsed from the model response.

```python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
# Inside execute_code
schema = json.loads(vlmrun.io.read_file("skills/my-skill/schema.json"))
result = await vlmrun.llm.extract(raw_text, json_schema=schema)
```

## Example: Chat Completion with Orion-2

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.client import VLMRun

  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  response = client.agent.completions.create(
      model="vlmrun-orion-2:auto",
      messages=[
          {
              "role": "user",
              "content": [
                  {"type": "text", "text": "Detect all cars in this image, draw bounding boxes, and count them."},
                  {"type": "image_url", "image_url": {"url": "https://example.com/parking-lot.jpg"}}
              ]
          }
      ],
  )
  ```

  ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { VlmRun } from "vlmrun";

  const client = new VlmRun({
      baseURL: "https://api.vlm.run/v1",
      apiKey: "<VLMRUN_API_KEY>",
  });

  const response = await client.agent.completions.create({
      model: "vlmrun-orion-2:auto",
      messages: [
          {
              role: "user",
              content: [
                  { type: "text", text: "Detect all cars in this image, draw bounding boxes, and count them." },
                  { type: "image_url", image_url: { url: "https://example.com/parking-lot.jpg" } }
              ]
          }
      ],
  });
  ```

  ```bash cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  curl -X POST https://api.vlm.run/v1/openai/chat/completions \
    -H "Authorization: Bearer <VLMRUN_API_KEY>" \
    -H "Content-Type: application/json" \
    -d '{
      "model": "vlmrun-orion-2:auto",
      "messages": [
        {
          "role": "user",
          "content": [
            {"type": "text", "text": "Detect all cars in this image, draw bounding boxes, and count them."},
            {"type": "image_url", "image_url": {"url": "https://example.com/parking-lot.jpg"}}
          ]
        }
      ]
    }'
  ```
</CodeGroup>

The agent writes and runs code like this:

```python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
async def process(ctx, img):
    cv2 = ctx.import_lib("cv2")
    vlmrun = ctx.import_lib("vlmrun")

    dets = await vlmrun.image.detect(img, "cars")
    W, H = img.width, img.height

    for d in dets["detections"]:
        bx, by, bw, bh = d["xywh"]
        x, y, w, h = int(bx * W), int(by * H), int(bw * W), int(bh * H)
        cv2.rectangle(img, (x, y), (x + w, y + h), (0, 255, 0), 2)

    return {"count": len(dets["detections"]), "annotated_image": img}
```

## Skills with Orion-2

Attached skills land at `<workspace>/skills/<skill-name>/`.
Read `SKILL.md`, schemas, and templates with `vlmrun.io.read_file` or `cv2.imread`.

```python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
# Inside execute_code, the agent can read skill resources:
skill_instructions = await vlmrun.io.read_file("skills/invoice-extraction/SKILL.md")
schema = await vlmrun.io.read_file("skills/invoice-extraction/schema.json")
```

<Tip>
  Skills work with Orion-1 and Orion-2. Orion-1 injects skill instructions into the system prompt. Orion-2 writes skill files into the workspace.
</Tip>

## Program Execution

After an Orion-2 skill runs once, `pipeline.py` is cached in the skill bundle.
Later runs execute that file in the sandbox and skip the LLM agent loop.

### How it works

1. **First run (authoring):** The agent plans and writes `pipeline.py`. The code is stored in the skill bundle.
2. **Subsequent runs (replay):** Cached `pipeline.py` runs through `CodeExecutionRunner`. If execution fails or no cached pipeline exists, the system falls back to the full agent loop.

### Controlling execution mode

`mode` is `program` (default) or `agent`.

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.client import VLMRun
  from vlmrun.client.types import AgentExecutionConfig

  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  # Default: run the cached pipeline.py as a fixed program when available
  response = client.agent.execute(
      inputs={"file": "https://example.com/document.pdf"},
      model="vlmrun-orion-2:pro",
      config=AgentExecutionConfig(
          mode="program",  # default
          skills=[{"skill_id": "my-skill-id"}],
      ),
  )

  # Force full agent loop (e.g. for authoring or debugging)
  response = client.agent.execute(
      inputs={"file": "https://example.com/document.pdf"},
      model="vlmrun-orion-2:pro",
      config=AgentExecutionConfig(
          mode="agent",
          skills=[{"skill_id": "my-skill-id"}],
      ),
  )
  ```

  ```bash cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  # Program (default)
  curl -X POST https://api.vlm.run/v1/agent/execute \
    -H "Authorization: Bearer $VLMRUN_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "model": "vlmrun-orion-2:pro",
      "inputs": { "file": { "type": "file_url", "file_url": { "url": "https://example.com/document.pdf" } } },
      "config": {
        "mode": "program",
        "skills": [{ "skill_id": "my-skill-id" }]
      }
    }'

  # Force agent loop
  curl -X POST https://api.vlm.run/v1/agent/execute \
    -H "Authorization: Bearer $VLMRUN_API_KEY" \
    -H "Content-Type: application/json" \
    -d '{
      "model": "vlmrun-orion-2:pro",
      "inputs": { "file": { "type": "file_url", "file_url": { "url": "https://example.com/document.pdf" } } },
      "config": {
        "mode": "agent",
        "skills": [{ "skill_id": "my-skill-id" }]
      }
    }'
  ```
</CodeGroup>

The response field `execution_mode` records the path:

```json theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "execution_id": "exec_abc123",
  "status": "completed",
  "execution_mode": "program",
  "response": { ... }
}
```

| `execution_mode` | Meaning |
| - | - |
| `program` | Ran cached `pipeline.py` directly (no LLM orchestration) |
| `agent` | Ran the full LLM agent loop |

<Note>
  The Node.js SDK cannot select `mode` yet. `AgentExecutionConfig` drops a `mode` key before the request is sent. The response still includes `execution_mode`. See the [Node.js agent reference](/sdk-reference/node/components/agent#execution-mode).
</Note>

<Note>
  Program execution preserves structured output validation, grounding metadata, and billing accuracy. Billing covers sandbox and tool costs only. LLM orchestration tokens are zero.
</Note>

### Performance

In testing, a medical-referral document extraction skill finished in \~13s in program mode and \~160s with full agent orchestration.

## Security

* **Import restrictions**: Only allowlisted libraries (`cv2`, `numpy`, `matplotlib`, `vlmrun`, `ffmpeg`) via `ctx.import_lib()`, plus Python stdlib. Dangerous modules (`os`, `io`, `shutil`, `importlib`) are blocked at AST parse time.
* **Workspace confinement**: All file operations are restricted to the session workspace. Symlink traversal and absolute path escapes are rejected.
* **Introspection blocking**: Builtins like `eval`, `exec`, `compile`, `getattr`, and `__import__` are blocked to prevent sandbox escape.

## Model Variants

Every model ID below uses the same harness and runtime.

| Model ID | Description |
| - | - |
| `vlmrun-orion-2:fast` | Optimized for speed and cost-efficiency |
| `vlmrun-orion-2:auto` | Automatically routes to the best backend for each task (default) |
| `vlmrun-orion-2:pro` | Most capable tier for complex multi-step workflows |
| `vlmrun-orion-2:qwen3.6-35b-a3b` | Open-weight Qwen 3.6 35B — strong at code generation and reasoning |
| `vlmrun-orion-2:gemma4-26b-a4b` | Open-weight Gemma 4 26B — strong at localization and spatial tasks |
| `vlmrun-orion-2:kimi-2.6` | Kimi 2.6 — strong at multi-turn dialogue and long-context tasks |
| `vlmrun-orion-2:gpt-5.5` | GPT-5.5 — strong at instruction following and structured output |
| `vlmrun-orion-2:claude-opus-4.8` | Claude Opus 4.8 — strong at nuanced reasoning and analysis |


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.