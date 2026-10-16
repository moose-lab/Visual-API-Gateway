"""Capture documented VLM Run API calls without persisting credentials.

Set VLM_API_KEY or enter it at the prompt. Discovery is read-only.
Inference calls are explicit and saved with their exact request payloads.
"""
import argparse
import datetime as dt
import getpass
import hashlib
import json
import os
from pathlib import Path
import time
import urllib.error
import urllib.request
import urllib.parse

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "research" / "runtime"
GATEWAY = "https://gateway.vlm.run"
AGENT = "https://api.vlm.run"


def capture(name, url, key="", payload=None, timeout=90):
    OUT.mkdir(parents=True, exist_ok=True)
    method = "POST" if payload is not None else "GET"
    headers = {"User-Agent": "VLM-public-interface-research/1.0", "Accept": "application/json"}
    if key:
        headers["Authorization"] = "Bearer " + key
    data = None
    if payload is not None:
        headers["Content-Type"] = "application/json"
        data = json.dumps(payload).encode()
    request_record = {"method": method, "url": url, "auth": "Bearer [REDACTED]" if key else "none", "body": payload}
    (OUT / f"{name}.request.json").write_text(json.dumps(request_record, ensure_ascii=False, indent=2), encoding="utf-8")
    started = dt.datetime.now(dt.timezone.utc).isoformat()
    tick = time.monotonic()
    try:
        request = urllib.request.Request(url, data=data, headers=headers, method=method)
        try:
            response = urllib.request.urlopen(request, timeout=timeout)
        except urllib.error.HTTPError as exc:
            response = exc
        with response:
            raw = response.read()
            status = response.status
            safe_headers = {k: v for k, v in response.headers.items() if k.lower() in {
                "content-type", "server", "date", "x-request-id", "retry-after",
                "x-ratelimit-limit", "x-ratelimit-remaining", "x-ratelimit-reset",
            }}
        # Defensive redaction; the unredacted API key never belongs in evidence.
        if key:
            raw = raw.replace(key.encode(), b"[REDACTED]")
        (OUT / f"{name}.response.raw").write_bytes(raw)
        try:
            body = json.loads(raw)
            (OUT / f"{name}.response.json").write_text(json.dumps(body, ensure_ascii=False, indent=2), encoding="utf-8")
        except (ValueError, UnicodeError):
            body = raw.decode("utf-8", errors="replace")
            (OUT / f"{name}.response.txt").write_text(body, encoding="utf-8")
        metadata = {"evidence": "RUNTIME", "captured_at": started, "method": method, "url": url,
                    "status": status, "elapsed_seconds": round(time.monotonic() - tick, 3),
                    "headers": safe_headers, "response_sha256": hashlib.sha256(raw).hexdigest(), "response_bytes": len(raw)}
        (OUT / f"{name}.meta.json").write_text(json.dumps(metadata, indent=2), encoding="utf-8")
        print(json.dumps({"name": name, **metadata}, ensure_ascii=False), flush=True)
        return status, body
    except Exception as exc:
        error = str(exc).replace(key, "[REDACTED]") if key else str(exc)
        metadata = {"evidence": "RUNTIME", "captured_at": started, "url": url, "error": error,
                    "elapsed_seconds": round(time.monotonic() - tick, 3)}
        (OUT / f"{name}.meta.json").write_text(json.dumps(metadata, indent=2), encoding="utf-8")
        print(json.dumps({"name": name, **metadata}), flush=True)
        return None, None


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("mode", choices=["discover", "request", "batch"])
    parser.add_argument("--name")
    parser.add_argument("--url")
    parser.add_argument("--payload", type=Path)
    parser.add_argument("--manifest", type=Path)
    parser.add_argument("--public", action="store_true")
    args = parser.parse_args()
    key = "" if args.public else os.environ.get("VLM_API_KEY") or getpass.getpass("VLM_API_KEY (hidden): ")
    if args.mode == "discover":
        for name, url in [
            ("gateway_health", GATEWAY + "/health"),
            ("agent_health", AGENT + "/v1/openai/health"),
            ("gateway_models", GATEWAY + "/v1/openai/models"),
            ("gateway_typesafe_models", GATEWAY + "/typesafe/v1/models"),
            ("agent_models", AGENT + "/v1/openai/models"),
        ]:
            capture(name, url, "" if name.endswith("health") else key)
    elif args.mode == "batch":
        if not args.manifest:
            parser.error("batch needs --manifest")
        jobs = json.loads(args.manifest.read_text(encoding="utf-8"))
        for job in jobs:
            if urllib.parse.urlparse(job["url"]).netloc not in {"gateway.vlm.run", "api.vlm.run"}:
                parser.error("Only the documented VLM Run API hosts are accepted")
            status, body = capture(job["name"], job["url"], "" if job.get("public") else key, job.get("body"))
            if status in {401, 402, 403, 429} and job.get("body") is not None:
                print("Stopping inference batch on authentication, credit, or rate-limit response.", flush=True)
                break
    else:
        if not args.name or not args.url:
            parser.error("request needs --name and --url")
        if urllib.parse.urlparse(args.url).netloc not in {"gateway.vlm.run", "api.vlm.run"}:
            parser.error("Only the documented VLM Run API hosts are accepted")
        payload = json.loads(args.payload.read_text(encoding="utf-8")) if args.payload else None
        capture(args.name, args.url, key, payload)


if __name__ == "__main__":
    main()
