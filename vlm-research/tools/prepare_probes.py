"""Build small synthetic research fixtures and explicit API probe bodies.

Fixtures and prompts are generated test inputs, not recovered product internals.
"""
import base64
import json
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "research" / "runtime"
OUT.mkdir(parents=True, exist_ok=True)
font = ImageFont.truetype("C:/Windows/Fonts/arial.ttf", 32)
pages = []
for page, words in enumerate([
    ["VLM RESEARCH TEST", "Invoice: TEST-042", "Total: USD 12.50"],
    ["VLM RESEARCH TEST PAGE TWO", "Reference: PAGE-002", "Total: USD 7.25"],
], 1):
    img = Image.new("RGB", (720, 220), "white")
    draw = ImageDraw.Draw(img)
    for row, word in enumerate(words):
        draw.text((24, 22 + row * 60), word, font=font, fill="black")
    img.save(OUT / f"synthetic_page_{page}.png")
    pages.append(img)
pages[0].save(OUT / "synthetic_two_pages.pdf", save_all=True, append_images=pages[1:], resolution=96.0)


def data_url(path, media):
    return "data:" + media + ";base64," + base64.b64encode(path.read_bytes()).decode()


image = {"type": "image_url", "image_url": {"url": data_url(OUT / "synthetic_page_1.png", "image/png")}}
pdf = {"type": "document_url", "document_url": {"url": data_url(OUT / "synthetic_two_pages.pdf", "application/pdf")}}
gateway = "https://gateway.vlm.run"
chat = gateway + "/v1/openai/chat/completions"
small = "qwen/qwen3.5-0.8b"
schema = {"type": "object", "properties": {"invoice_id": {"type": "string"}, "currency": {"type": "string"}, "total": {"type": "number"}}, "required": ["invoice_id", "currency", "total"], "additionalProperties": False}
jobs = [
    {"name": "probe_text", "url": chat, "body": {"model": small, "messages": [{"role": "user", "content": "Reply with exactly: VLM_GATEWAY_OK"}], "temperature": 0, "max_tokens": 64, "chat_template_kwargs": {"enable_thinking": False}}},
    {"name": "probe_vision_schema", "url": chat, "body": {"model": small, "messages": [{"role": "user", "content": [{"type": "text", "text": "Extract the invoice_id, currency and total from this synthetic test image."}, image]}], "temperature": 0, "max_tokens": 128, "chat_template_kwargs": {"enable_thinking": False}, "response_format": {"type": "json_schema", "json_schema": {"name": "invoice", "strict": True, "schema": schema}}}},
    {"name": "probe_sse", "url": chat, "body": {"model": small, "messages": [{"role": "user", "content": "Reply with exactly: STREAM_OK"}], "max_tokens": 64, "stream": True, "chat_template_kwargs": {"enable_thinking": False}}},
    {"name": "probe_ocr", "url": chat, "body": {"model": "paddleocr/pp-ocrv6", "messages": [{"role": "user", "content": [image]}], "method": "ocr"}},
    {"name": "probe_pdf", "url": chat, "body": {"model": "paddleocr/pp-ocrv6", "messages": [{"role": "user", "content": [pdf]}], "method": "text", "document_max_pages": 2, "document_dpi": 96}},
    {"name": "probe_embedding", "url": gateway + "/v1/openai/embeddings", "body": {"model": "qwen/qwen3-vl-embedding-2b", "input": ["A red square.", "A blue circle."], "dimensions": 32, "encoding_format": "float"}},
    {"name": "probe_systemone", "url": gateway + "/typesafe/v1/systemone", "body": {"model": small, "state": {"invoice_id": "TEST-042", "total": 12.5}, "questions": {"over_ten": {"type": "noul", "instructions": "Is the invoice total greater than 10?"}}}},
]
(OUT / "probe_manifest.json").write_text(json.dumps(jobs, ensure_ascii=False, indent=2), encoding="utf-8")
print(f"Prepared {len(jobs)} explicit probes with generated fixtures.")
