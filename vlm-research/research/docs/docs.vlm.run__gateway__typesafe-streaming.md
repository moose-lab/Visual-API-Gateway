> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Streaming

> Typed decisions per frame, over one WebSocket

A reply is one `decision`. It carries the same `answers` and `usage` as a posted read.

| | Posted read | Streamed read |
| - | - | - |
| Route | `POST /typesafe/v1/systemone` | `WS /typesafe/ws` |
| Media | Content parts, base64 in JSON | One binary message per frame, raw bytes |
| Questions | Sent every request | Sent once, at `session.create` |
| Schema work | Per request | Once per session |

## Example

```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
pip install "vlmrun[typesafe,video]" websockets
```

<Note>
  `websockets` is installed here because the `vlmrun[ws]` extra ships in the next SDK release. The `--ws` and `--fps` CLI flags arrive with that release. The Python tab works on the current release.
</Note>

`VLMRun(...)` defaults to `https://gateway.vlm.run/v1`. Set `VLMRUN_GATEWAY_URL` for another gateway. The socket URL is derived from it. `https://gw.internal/v1` becomes `wss://gw.internal/typesafe/ws`.

<Warning>
  Do not pass the Gateway URL as `VLMRun(base_url=...)`. That argument is the platform API. The client health-checks it on construction. A Gateway URL there fails before a read is sent. Use `VLMRUN_GATEWAY_URL` for this route.
</Warning>

<CodeGroup>
  ```python Python [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.client import VLMRun
  from vlmrun.common.video import VideoReader

  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  QUESTIONS = [{"id": "has_people", "type": "noul", "instructions": "Are people visible?"}]

  with client.gateway.systemone.stream(
      questions=QUESTIONS,
      state="Answer about the frame.",
      model="google/diffusiongemma-26b-a4b-it",
      detail="low",
      concurrency=8,          # requested as the session's max_inflight
      transport="ws",         # one socket; "http" sends a request per frame
  ) as stream, VideoReader("clip.mp4") as video:
      for decision in stream.map(video.frames(fps=1)):
          print(decision.timestamp_s, decision.response.nouls["has_people"].noul)
  ```

  ```bash CLI theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  vlmrun gw s1 clip.mp4 --fps 1 --ws -c 8 \
    -m google/diffusiongemma-26b-a4b-it --detail low \
    --noul has_people="Are people visible?"
  ```

  ```python Python (websockets) [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import asyncio, json, pathlib
  import websockets

  URL = "wss://gateway.vlm.run/typesafe/ws"

  async def main(frames: list[bytes]) -> None:
      async with websockets.connect(
          URL, additional_headers={"Authorization": "Bearer <VLMRUN_API_KEY>"}
      ) as ws:
          await ws.send(json.dumps({
              "type": "session.create",
              "model": "google/diffusiongemma-26b-a4b-it",
              "state": "Answer about the frame.",
              "questions": {
                  "has_people": {"type": "noul", "instructions": "Are people visible?"}
              },
              "detail": "low",
          }))
          created = json.loads(await ws.recv())
          print(created["session_id"], created["max_frame_bytes"])

          for frame in frames:          # raw JPEG/PNG/WebP/GIF bytes, no base64
              await ws.send(frame)

          seen = 0
          while seen < len(frames):
              event = json.loads(await ws.recv())
              if event["type"] == "decision":
                  print(event["frame"], event["answers"]["has_people"]["noul"])
                  seen += 1
              elif event["type"] == "frame.dropped":
                  seen += 1             # arrived with every read slot busy
              elif event["type"] == "error":
                  raise RuntimeError(event["message"])

          await ws.send(json.dumps({"type": "session.close"}))
          print(json.loads(await ws.recv()))   # session.stats

  asyncio.run(main([pathlib.Path("frame1.jpg").read_bytes()]))
  ```

  ```typescript Node.js [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import WebSocket from "ws";
  import { readFileSync } from "node:fs";

  const URL = "wss://gateway.vlm.run/typesafe/ws";
  const frames = [readFileSync("frame1.jpg")];   // raw bytes, no base64

  const ws = new WebSocket(URL, {
    headers: { Authorization: `Bearer ${process.env.VLMRUN_API_KEY}` },
  });

  let seen = 0;

  ws.on("open", () => {
    ws.send(JSON.stringify({
      type: "session.create",
      model: "google/diffusiongemma-26b-a4b-it",
      state: "Answer about the frame.",
      questions: {
        has_people: { type: "noul", instructions: "Are people visible?" },
      },
      detail: "low",
    }));
  });

  ws.on("message", (data) => {
    const event = JSON.parse(data.toString());

    if (event.type === "session.created") {
      console.log(event.session_id, event.max_frame_bytes);
      for (const frame of frames) ws.send(frame);
      return;
    }
    if (event.type === "decision") {
      console.log(event.frame, event.answers.has_people.noul);
      seen++;
    } else if (event.type === "frame.dropped") {
      seen++;                                    // every read slot was busy
    } else if (event.type === "error") {
      throw new Error(event.message);
    } else if (event.type === "session.stats") {
      console.log(event);
      ws.close();
      return;
    }

    if (seen === frames.length) ws.send(JSON.stringify({ type: "session.close" }));
  });
  ```
</CodeGroup>

A `FrameDecision` carries `index`, `timestamp_s`, and `response`. Results stay in input order.

### Why the socket

The saving is round trips. It grows with frame count. 60 frames from a 60 s clip:

| Reads in flight | HTTP | WebSocket |
| - | - | - |
| 4 | 2458 ms | 1525 ms |
| 8 | 1969 ms | **904 ms** |

Tokens and cost match HTTP. Ask for the concurrency you want. A session that omits it is throttled to 2.

<Note>
  Node's built-in `WebSocket` cannot set request headers. It cannot send `Authorization`. Use `ws`.
</Note>

```json Decision theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "type": "decision",
  "frame": 1,
  "answers": { "is_receipt": { "type": "noul", "noul": 0.56 } },
  "usage": {
    "input_tokens": 145,
    "input_tokens_details": { "cached_tokens": 128, "image_tokens": 70, "text_tokens": 17 },
    "reads": 1, "cost": 0.000012
  }
}
```

The schema is prefix-cached across frames. Most of each prompt returns as `cached_tokens`. Those tokens bill at the cache rate.

## Messages

| Client sends | Effect |
| - | - |
| `session.create` | Opens the session and resolves the plan. Every schema error surfaces here. |
| binary message | One frame. A read fires every `stride` frames over the newest `window`. |
| `state` | Re-pins the state later frames read against. Not a read. |
| `decide` | `{id?, state?, content?}`, one read with its own body, validated like a posted request. |
| `session.close` | Replies `session.stats`, then closes. |

| Server sends | Payload |
| - | - |
| `session.created` | `{session_id, model, questions, groups, canvas_widths, window, stride, max_inflight, max_frame_bytes}` |
| `decision` | `{frame, answers, usage, latency_ms, id?}` |
| `frame.dropped` | `{frame, inflight}` |
| `error` | `{error_type, message, frame?, retry_after?}`, the HTTP error vocabulary |
| `session.stats` | `{session_id, frames, decisions, dropped, errors, reads, input_tokens, cached_tokens, cost, p50_ms, p95_ms, fps}` |

`session.create` fields:

<input class="fold-rows" type="checkbox" id="fold-gateway-typesafe-streaming-1" />

| Field | Constraint |
| - | - |
| `model` | Required |
| `questions` | Required |
| `state` | Optional |
| `detail` | Optional |
| `steps` | Optional |
| `samples` | Optional |
| `reasoning_effort` | Optional |
| `window` | Frames per read, up to 8 |
| `stride` | Frames between reads |
| `max_inflight` | Reads at once. Default 2. Max 8 |

<label class="fold-rows-label" for="fold-gateway-typesafe-streaming-1"><span class="when-closed">See all 10 rows</span><span class="when-open">Show less</span></label>

## Backpressure

<Warning>
  **Backpressure drops. It never queues.** A frame that arrives while `max_inflight` reads are running is dropped and reported on `frame.dropped`. Answering it would answer for a frame you have moved past. A `decide` message is never dropped.
</Warning>

Raise `stride` before `max_inflight`. Reading fewer frames costs less. Consecutive frames rarely change a decision.

## Limits and billing

| Limit | Value |
| - | - |
| Frame size | 2 MiB, reported as `max_frame_bytes` |
| Sessions per replica | 64, then the socket closes with `1013` |
| Idle timeout | 30 seconds of silence, before `session.create` or between frames |
| Throughput | Not rate-limited per frame. The ceiling is `max_inflight`, then the engine's queue |
| Billing | One row per decision, priced per token, never by connection time. Skipped, dropped and failed frames, and idle time, bill nothing |

The socket does not appear in the OpenAPI schema, because the schema does not describe WebSocket routes.

## Related

<CardGroup cols={2}>
  <Card title="System One" icon="scale-balanced" href="/gateway/system-one">
    Question types, inputs, confidence, and cost levers.
  </Card>

  <Card title="System One API" icon="code" href="/gateway/api-reference/post-systemone">
    The HTTP route for the same questions. The socket reuses its `answers` and `usage` shapes.
  </Card>
</CardGroup>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.