"""Read the documented Gateway MCP handshake and tools catalog; no tool execution."""
import datetime as dt
import getpass
import hashlib
import json
import os
from pathlib import Path
import time
import requests

OUT = Path(__file__).resolve().parents[1] / "research" / "runtime"
URL = "https://gateway.vlm.run/mcp"


def decode(text):
    try:
        return json.loads(text)
    except ValueError:
        for line in text.splitlines():
            if line.startswith("data:"):
                try:
                    return json.loads(line[5:])
                except ValueError:
                    pass
    return None


def main():
    key = os.environ.get("VLM_API_KEY") or getpass.getpass("VLM_API_KEY (hidden): ")
    client = requests.Session()
    client.headers.update({"Authorization": "Bearer " + key, "Accept": "application/json, text/event-stream"})

    def call(name, body):
        start = time.monotonic()
        stamp = dt.datetime.now(dt.timezone.utc).isoformat()
        response = client.post(URL, json=body, timeout=45, allow_redirects=False)
        raw = response.content.replace(key.encode(), b"[REDACTED]")
        parsed = decode(raw.decode("utf-8", errors="replace"))
        (OUT / f"{name}.response.raw").write_bytes(raw)
        (OUT / f"{name}.request.json").write_text(json.dumps({"url": URL, "method": "POST", "body": body, "auth": "Bearer [REDACTED]"}, indent=2), encoding="utf-8")
        if parsed is not None:
            (OUT / f"{name}.response.json").write_text(json.dumps(parsed, indent=2, ensure_ascii=False), encoding="utf-8")
        meta = {"evidence": "RUNTIME", "captured_at": stamp, "url": URL, "method": "POST", "status": response.status_code,
                "elapsed_seconds": round(time.monotonic() - start, 3), "response_sha256": hashlib.sha256(raw).hexdigest(),
                "headers": {k: v for k, v in response.headers.items() if k.lower() in {"content-type", "server", "x-request-id"}}}
        (OUT / f"{name}.meta.json").write_text(json.dumps(meta, indent=2), encoding="utf-8")
        print(name, response.status_code, len(raw), flush=True)
        if response.headers.get("Mcp-Session-Id"):
            client.headers["Mcp-Session-Id"] = response.headers["Mcp-Session-Id"]
        return response.status_code, parsed

    try:
        status, result = call("mcp_initialize", {"jsonrpc": "2.0", "id": 1, "method": "initialize", "params": {"protocolVersion": "2025-03-26", "capabilities": {}, "clientInfo": {"name": "vlm-evidence-catalog", "version": "1.0"}}})
        if status != 200 or not result or result.get("error"):
            return
        client.headers["MCP-Protocol-Version"] = result.get("result", {}).get("protocolVersion", "2025-03-26")
        call("mcp_initialized", {"jsonrpc": "2.0", "method": "notifications/initialized"})
        call("mcp_tools", {"jsonrpc": "2.0", "id": 2, "method": "tools/list", "params": {}})
    except Exception as exc:
        error = str(exc).replace(key, "[REDACTED]")
        (OUT / "mcp_error.json").write_text(json.dumps({"evidence": "RUNTIME", "error": error}), encoding="utf-8")
        print(type(exc).__name__, error)
    finally:
        client.close()


if __name__ == "__main__":
    main()
