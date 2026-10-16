"""One-frame System One probe using the documented WebSocket protocol."""
import asyncio
import datetime as dt
import getpass
import hashlib
import inspect
import json
import os
from pathlib import Path
import time
import websockets

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "research" / "runtime"
URL = "wss://gateway.vlm.run/typesafe/ws"


async def main():
    key = os.environ.get("VLM_API_KEY") or getpass.getpass("VLM_API_KEY (hidden): ")
    request = {"type": "session.create", "model": "google/diffusiongemma-26b-a4b-it",
               "state": "Answer about the synthetic document image.",
               "questions": {"invoice": {"type": "noul", "instructions": "Does this document show an invoice identifier?"}},
               "detail": "high"}
    frame = (OUT / "synthetic_page_1.png").read_bytes()
    log = {"evidence": "RUNTIME", "captured_at": dt.datetime.now(dt.timezone.utc).isoformat(),
           "url": URL, "request": request, "frame": "synthetic_page_1.png",
           "frame_sha256": hashlib.sha256(frame).hexdigest(), "events": []}
    start = time.monotonic()
    try:
        header_arg = "additional_headers" if "additional_headers" in inspect.signature(websockets.connect).parameters else "extra_headers"
        async with websockets.connect(URL, **{header_arg: {"Authorization": "Bearer " + key}}, open_timeout=30) as ws:
            await ws.send(json.dumps(request))
            created = json.loads(await asyncio.wait_for(ws.recv(), timeout=40))
            log["events"].append({"elapsed_s": round(time.monotonic() - start, 3), "message": created})
            if created.get("type") == "session.created":
                await ws.send(frame)
                while True:
                    event = json.loads(await asyncio.wait_for(ws.recv(), timeout=40))
                    log["events"].append({"elapsed_s": round(time.monotonic() - start, 3), "message": event})
                    if event.get("type") in {"decision", "error", "frame.dropped"}:
                        break
                await ws.send(json.dumps({"type": "session.close"}))
                log["events"].append({"elapsed_s": round(time.monotonic() - start, 3), "message": json.loads(await asyncio.wait_for(ws.recv(), timeout=10))})
    except Exception as exc:
        log["error"] = f"{type(exc).__name__}: {exc}".replace(key, "[REDACTED]")
    log["elapsed_seconds"] = round(time.monotonic() - start, 3)
    (OUT / "probe_websocket.json").write_text(json.dumps(log, ensure_ascii=False, indent=2).replace(key, "[REDACTED]"), encoding="utf-8")
    print(json.dumps(log, ensure_ascii=False), flush=True)


if __name__ == "__main__":
    asyncio.run(main())
