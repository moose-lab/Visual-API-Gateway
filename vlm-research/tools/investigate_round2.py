"""Preserve second-round public sources and documented API probes separately.

Credentials are accepted from VLM_API_KEY or a single stdin line and never saved.
This script reads public catalogues; it doesn't discover unlisted server paths.
"""
import argparse
import base64
from concurrent.futures import ThreadPoolExecutor
import datetime as dt
import hashlib
import getpass
import json
import os
import re
import secrets
from pathlib import Path
import sys
import time
import uuid
import urllib.parse
import urllib.request
import requests

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "research/round2"


def save_json(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2), encoding="utf-8")


def request(name, url, body=None, key="", headers=None, secrets=(), client=None, timeout=50, follow_public_redirects=False):
    folder = OUT / "captures"
    folder.mkdir(parents=True, exist_ok=True)
    hidden = [s for s in (key, *secrets) if s]
    def redact(data):
        for value in hidden:
            data = data.replace(value.encode(), b"[REDACTED]")
        return re.sub(rb'("(?:media_token|session_token|access_token|refresh_token)"\s*:\s*")[^"\r\n]*(")',
                      rb'\1[REDACTED]\2', data)
    method = "GET" if body is None else "POST"
    hdrs = {"User-Agent": "VLM-interface-research/2.0", "Accept": "application/json"}
    hdrs.update(headers or {})
    if key:
        if url.split('/')[2] not in {"gateway.vlm.run", "api.vlm.run"}:
            raise ValueError("Credential destination is not a documented API host")
        hdrs["Authorization"] = "Bearer " + key
    req = {"url": url, "method": method, "auth": "Bearer [REDACTED]" if key else "none", "body": body}
    (folder / f"{name}.request.json").write_bytes(redact(json.dumps(req, indent=2).encode()))
    meta = {"evidence": "RUNTIME", "captured_at": dt.datetime.now(dt.timezone.utc).isoformat(), "url": url, "method": method}
    start = time.monotonic()
    response = None
    parsed = None
    try:
        if follow_public_redirects and (key or headers or body is not None):
            raise ValueError("Redirect following is only supported for uncredentialed public GETs")
        response = (client or requests).request(method, url, json=body, headers=hdrs, timeout=timeout, allow_redirects=follow_public_redirects)
        raw = redact(response.content)
        (folder / f"{name}.response.raw").write_bytes(raw)
        text = raw.decode("utf-8", errors="replace")
        try:
            parsed = json.loads(text)
        except ValueError:
            if "text/event-stream" in response.headers.get("content-type", ""):
                events = []
                for line in text.splitlines():
                    if line.startswith("data:") and line[5:].strip() != "[DONE]":
                        try:
                            events.append(json.loads(line[5:]))
                        except ValueError:
                            pass
                parsed = events[0] if len(events) == 1 else events
            (folder / f"{name}.response.txt").write_text(text, encoding="utf-8")
        if parsed is not None:
            save_json(folder / f"{name}.response.json", parsed)
        meta.update(status=response.status_code, final_url=response.url, response_sha256=hashlib.sha256(raw).hexdigest(), response_bytes=len(raw),
                    headers={k: v for k, v in response.headers.items() if k.lower() in {
                        "content-type", "server", "date", "x-request-id", "retry-after", "www-authenticate"}})
    except Exception as exc:
        meta["error"] = redact(str(exc).encode()).decode()
    meta["elapsed_seconds"] = round(time.monotonic() - start, 3)
    save_json(folder / f"{name}.meta.json", meta)
    print(json.dumps({"name": name, "status": meta.get("status"), "bytes": meta.get("response_bytes"), "error": meta.get("error")}), flush=True)
    return response, parsed


def public():
    jobs = [
        ("github_repositories", "https://api.github.com/orgs/vlm-run/repos?per_page=100&type=public"),
        ("github_vlmrt_search", "https://api.github.com/search/repositories?q=vlmrt"),
        ("pypi_vlmrt", "https://pypi.org/pypi/vlmrt/json"),
        ("pypi_vlmrun", "https://pypi.org/pypi/vlmrun/json"),
        ("pypi_typesafe", "https://pypi.org/pypi/typesafe-sdk/json"),
        ("oauth_resource", "https://gateway.vlm.run/.well-known/oauth-protected-resource/mcp"),
        ("oauth_server", "https://gateway.vlm.run/.well-known/oauth-authorization-server/mcp"),
        ("docs_index", "https://docs.vlm.run/llms.txt"),
    ]
    with ThreadPoolExecutor(max_workers=4) as pool:
        list(pool.map(lambda job: request(*job), jobs))


def mcp(key):
    url = "https://gateway.vlm.run/mcp"
    with requests.Session() as client:
        hdr = {"Accept": "application/json, text/event-stream"}
        resp, init = request("mcp_initialize", url, {"jsonrpc": "2.0", "id": 1, "method": "initialize", "params": {
            "protocolVersion": "2025-03-26", "capabilities": {}, "clientInfo": {"name": "vlm-catalog-research", "version": "2.0"}}}, key, hdr, client=client)
        if resp is None or resp.status_code != 200 or not isinstance(init, dict) or init.get("error"):
            return
        hdr["MCP-Protocol-Version"] = init.get("result", {}).get("protocolVersion", "2025-03-26")
        session = resp.headers.get("Mcp-Session-Id")
        if session:
            hdr["Mcp-Session-Id"] = session
        request("mcp_initialized", url, {"jsonrpc": "2.0", "method": "notifications/initialized"}, key, hdr, client=client)
        for number, method in enumerate(("prompts/list", "resources/list", "resources/templates/list"), 2):
            resp, data = request("mcp_" + method.replace('/', '_'), url, {"jsonrpc": "2.0", "id": number, "method": method, "params": {}}, key, hdr, client=client)
            if resp is not None and resp.status_code in (401, 402, 403, 429):
                break


def websocket_probe(key):
    import websocket
    url = "wss://gateway.vlm.run/typesafe/ws"
    body = {"type": "session.create", "model": "google/diffusiongemma-26b-a4b-it",
            "state": "Answer about the synthetic invoice image.",
            "questions": {"invoice": {"type": "noul", "instructions": "Does this document show an invoice identifier?"}},
            "detail": "low", "max_inflight": 1}
    frame = (ROOT / "research/runtime/synthetic_page_1.png").read_bytes()
    log = {"evidence": "RUNTIME", "captured_at": dt.datetime.now(dt.timezone.utc).isoformat(), "url": url,
           "request": body, "client": "websocket-client", "frame_sha256": hashlib.sha256(frame).hexdigest(), "events": []}
    start = time.monotonic()
    conn = None
    try:
        proxy = urllib.request.getproxies().get("https")
        opts = {}
        if proxy:
            config = urllib.parse.urlparse(proxy)
            opts = {"http_proxy_host": config.hostname, "http_proxy_port": config.port,
                    "proxy_type": "http" if config.scheme in {"http", "https"} else config.scheme}
            if config.username:
                opts["http_proxy_auth"] = (urllib.parse.unquote(config.username), urllib.parse.unquote(config.password or ""))
        log["uses_configured_proxy"] = bool(proxy)
        conn = websocket.create_connection(url, header={"Authorization": "Bearer " + key}, timeout=35, **opts)
        conn.send(json.dumps(body))
        def receive():
            value = json.loads(conn.recv())
            log["events"].append({"elapsed_s": round(time.monotonic() - start, 3), "message": value})
            return value
        if receive().get("type") == "session.created":
            conn.send_binary(frame)
            for _ in range(5):
                if receive().get("type") in {"decision", "frame.dropped", "error"}:
                    break
            conn.send(json.dumps({"type": "session.close"}))
            receive()
    except Exception as exc:
        log["error"] = str(exc).replace(key, "[REDACTED]")
    finally:
        if conn:
            conn.close()
    log["elapsed_seconds"] = round(time.monotonic() - start, 3)
    save_json(OUT / "websocket.json", log)
    print(json.dumps({"ws_events": [x['message'].get('type') for x in log['events']], "error": log.get('error')}), flush=True)


def native_pdf():
    stream = b"BT /F1 18 Tf 50 740 Td (ROUND2 INVOICE NATIVE-013) Tj 0 -30 Td (Total USD 17.25) Tj ET"
    objects = [b"<< /Type /Catalog /Pages 2 0 R >>", b"<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
               b"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
               b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>", b"<< /Length " + str(len(stream)).encode() + b" >>\nstream\n" + stream + b"\nendstream"]
    raw = b"%PDF-1.4\n"
    offsets = [0]
    for number, obj in enumerate(objects, 1):
        offsets.append(len(raw))
        raw += str(number).encode() + b" 0 obj\n" + obj + b"\nendobj\n"
    position = len(raw)
    raw += b"xref\n0 6\n0000000000 65535 f \n" + b"".join(f"{o:010d} 00000 n \n".encode() for o in offsets[1:])
    raw += f"trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n{position}\n%%EOF\n".encode()
    (OUT / "native_text.pdf").write_bytes(raw)
    return raw


def inference(key):
    OUT.mkdir(parents=True, exist_ok=True)
    image_url = "data:image/png;base64," + base64.b64encode((ROOT / "research/runtime/synthetic_page_1.png").read_bytes()).decode()
    pdf_url = "data:application/pdf;base64," + base64.b64encode(native_pdf()).decode()
    jobs = [
        ("ocr_auto_ocr", {"model": "vlm-run/ocr:auto", "method": "ocr", "messages": [{"role": "user", "content": [{"type": "image_url", "image_url": {"url": image_url}}]}]}),
        ("ocr_auto_markdown_native_pdf", {"model": "vlm-run/ocr:auto", "method": "markdown", "messages": [{"role": "user", "content": [{"type": "document_url", "document_url": {"url": pdf_url}}]}]}),
        ("diffusion_json", {"model": "google/diffusiongemma-26b-a4b-it", "messages": [{"role": "user", "content": "Return a JSON object with a single key status and string value ROUND2_OK."}], "response_format": {"type": "json_object"}, "max_tokens": 96, "temperature": 0}),
    ]
    for name, body in jobs:
        resp, _ = request(name, "https://gateway.vlm.run/v1/openai/chat/completions", body, key, timeout=100)
        if resp is None or resp.status_code in (401, 402, 403, 429):
            return
    session_id = str(uuid.uuid4())
    token = secrets.token_urlsafe(32)
    challenge = "VLM_ROUND2_" + secrets.token_hex(32)
    expected = hashlib.sha256(challenge.encode()).hexdigest()
    code = "import hashlib\nasync def process(ctx):\n    vlmrun = ctx.import_lib('vlmrun')\n    digest = hashlib.sha256(" + repr(challenge) + ".encode('utf-8')).hexdigest()\n    vlmrun.log.print('ROUND2_SHA256=' + digest)\n    return {'sha256': digest}\n"
    save_json(OUT / "hash_challenge.json", {"input": challenge, "encoding": "UTF-8", "expected_sha256": expected,
              "session_id": session_id, "purpose": "A computational output check, not proof of sandbox isolation or internal deployment."})
    body = {"model": "vlmrun-orion-2", "messages": [{"role": "user", "content":
            "Run the following tiny Python computation with execute_code, then return its computed SHA-256. Use no network, media, or filesystem access. Do not guess a hash. If execution fails, report that failure.\n```python\n" + code + "```"}],
            "session_id": session_id, "session_token": token, "stream": True, "preview": True,
            "expose_server_tool_calls": True, "max_tokens": 2048}
    resp, data = request("orion_hash", "https://api.vlm.run/v1/openai/chat/completions", body, key, secrets=(token,), timeout=150)
    if resp is None or resp.status_code in (401, 402, 403, 429):
        return
    request("orion_hash_history", "https://api.vlm.run/v1/chat/messages?session_id=" + session_id,
            key=key, headers={"X-Session-Token": token}, secrets=(token,))
    if isinstance(data, list):
        content = "".join(choice.get("delta", {}).get("content") or "" for event in data for choice in event.get("choices", []))
        calls = [call for event in data for choice in event.get("choices", []) for call in choice.get("delta", {}).get("tool_calls", [])]
        save_json(OUT / "hash_check.json", {"evidence": "STATIC", "expected_hash_in_response_content": expected in content,
                  "tool_call_events": len(calls), "event_count": len(data), "usage": [event['usage'] for event in data if event.get('usage')],
                  "scope": "Checks output against a local calculation; does not attest the remote implementation."})


def packages():
    import zipfile
    import io
    for name in ("vlmrun", "typesafe"):
        metadata = json.loads((OUT / f"captures/pypi_{name}.response.json").read_text(encoding="utf-8"))
        wheel = next(file for file in metadata['urls'] if file['filename'].endswith('.whl'))
        response, _ = request("wheel_" + name, wheel['url'])
        if response is None or response.status_code != 200:
            continue
        raw = response.content
        if hashlib.sha256(raw).hexdigest() != wheel['digests']['sha256']:
            raise ValueError("PyPI SHA256 mismatch")
        destination = OUT / "packages" / name
        names = []
        with zipfile.ZipFile(io.BytesIO(raw)) as archive:
            for item in archive.infolist():
                target = (destination / item.filename).resolve()
                if not target.is_relative_to(destination.resolve()):
                    raise ValueError("Invalid archive path")
                names.append(item.filename)
                if not item.is_dir() and (item.filename.endswith(('.py', '.json', '.txt', '.md', '.toml')) or item.filename.endswith('METADATA')):
                    target.parent.mkdir(parents=True, exist_ok=True)
                    target.write_bytes(archive.read(item))
        save_json(destination / 'archive_manifest.json', {"source": wheel['url'], "sha256": wheel['digests']['sha256'], "files": names})


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("mode", choices=["public", "mcp", "manifest", "ws", "inference", "packages"])
    parser.add_argument("--manifest", type=Path)
    args = parser.parse_args()
    if args.mode == "public":
        public()
        return
    if args.mode == "packages":
        packages()
        return
    key = os.environ.get("VLM_API_KEY")
    if not key:
        print("Awaiting credential on stdin; input is not written to files.", flush=True)
        key = getpass.getpass("API key (hidden): ") if sys.stdin.isatty() else sys.stdin.readline().strip()
    if not key:
        raise SystemExit("No credential supplied")
    if args.mode == "mcp":
        mcp(key)
    elif args.mode == "ws":
        websocket_probe(key)
    elif args.mode == "inference":
        inference(key)
    else:
        jobs = json.loads(args.manifest.read_text(encoding="utf-8"))
        for job in jobs:
            resp, data = request(job["name"], job["url"], job.get("body"), key, timeout=120)
            if resp is None or resp.status_code in (401, 402, 403, 429):
                break


if __name__ == "__main__":
    main()
