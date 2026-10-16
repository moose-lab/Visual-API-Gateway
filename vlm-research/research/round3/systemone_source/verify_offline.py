"""RUNTIME-local checks only; synthetic requests use MockTransport, never a server."""
from __future__ import annotations

import hashlib
import importlib.metadata
import json
import math
from pathlib import Path
import socket
import sys
from datetime import datetime, timezone

sys.dont_write_bytecode = True
HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[2]
SDK = HERE / "typesafe-sdk-python" / "src"
sys.path.insert(0, str(SDK))
# Archived wheel metadata supplies the package version; code still resolves to SDK/src above.
sys.path.append(str(ROOT / "research/round2/packages/typesafe"))

# Prevent accidental network traffic throughout the offline verification.
def network_disabled(*args, **kwargs):
    raise AssertionError("Network is disabled for this verification")

socket.create_connection = network_disabled
socket.socket.connect = network_disabled

import httpx2
from jinja2 import Environment
from typesafe_sdk import TypeSafeClient, Choice, Noul, Score, RetryPolicy


def read_json(path):
    return json.loads(path.read_text(encoding="utf-8"))


records = []
captured_reply = read_json(ROOT / "research/runtime/probe_systemone_diffusion.response.json")


def check(name, condition, **details):
    records.append({"name": name, "passed": bool(condition), **details})


wire_calls = []


def handle(request):
    wire_calls.append({
        "method": request.method,
        "url": str(request.url),
        "body": json.loads(request.content),
        "header_names": sorted(request.headers.keys()),
        "auth_is_dummy": request.headers["authorization"] == "Bearer TOKEN",
    })
    return httpx2.Response(200, json=captured_reply, headers={"x-typesafe-request-id": "OFFLINE"})


with TypeSafeClient(
    api_key="TOKEN", base_url="https://gateway.vlm.run/typesafe/",
    model="google/diffusiongemma-26b-a4b-it",
    retry=RetryPolicy(max_retries=0), transport=httpx2.MockTransport(handle),
) as client:
    response = client.system_one(
        state={"synthetic_fixture": True, "items": ("a", "b")},
        questions={
            "yes": Noul(instructions="Synthetic yes/no question"),
            "category": Choice(criteria={"a": None, "b": "Synthetic description"}),
            "rating": Score(criteria=("low", "high")),
        },
        extra_body={"steps": 1, "samples": 2, "content": [{"type": "text", "text": "SYNTHETIC"}]},
    )
    check("base URL and route concatenation", wire_calls[-1]["url"] == "https://gateway.vlm.run/typesafe/v1/systemone")
    check("typed questions serialize, preserving labels and question IDs", wire_calls[-1]["body"]["questions"] == {
        "yes": {"type": "noul", "instructions": "Synthetic yes/no question"},
        "category": {"type": "choice", "criteria": {"a": None, "b": "Synthetic description"}},
        "rating": {"type": "score", "criteria": ["low", "high"]},
    })
    check("extensions passed as top-level fields", wire_calls[-1]["body"]["samples"] == 2 and wire_calls[-1]["body"]["steps"] == 1)
    check("typed usage discards Gateway extensions", response.usage.model_dump() == {"input_tokens": 135, "output_tokens": 0}, typed_usage=response.usage.model_dump())
    check("raw response retains Gateway usage and ID", response.raw_http_response.json() == captured_reply)
    override = {"overridden": {"type": "noul", "instructions": "OVERRIDE"}}
    client.system_one("initial", {"initial": Noul(instructions="INITIAL")}, extra_body={"state": "overridden", "questions": override})
    check("extra_body uses shallow last-write-wins", wire_calls[-1]["body"]["state"] == "overridden" and wire_calls[-1]["body"]["questions"] == override)
    client.system_one("fixture", {"single": {"type": "choice", "criteria": {"only": None}}, "raw_extra": {"type": "noul", "instructions": "?", "fixture_extension": True}})
    check("raw SDK inputs can reach transport despite stricter Gateway contract", wire_calls[-1]["body"]["questions"]["single"]["criteria"] == {"only": None} and wire_calls[-1]["body"]["questions"]["raw_extra"]["fixture_extension"] is True)

for name, answer in captured_reply["answers"].items():
    if "probabilities" not in answer:
        continue
    p = list(answer["probabilities"].values())
    h = -sum(value * math.log(value) for value in p if value > 0)
    confidence = 1 - h / math.log(len(p))
    check("archived confidence agrees with entropy formula", abs(confidence - answer["confidence"]) < 1e-12,
          question=name, probability_sum=sum(p), computed_confidence=confidence,
          archived_confidence=answer["confidence"], tolerance=1e-12)
    # SOURCE: TypeSafe's /confidence page fetched 2026-10-13, Choice section.
    # This is the upstream provider's public formula, not VLM's implementation.
    upstream_confidence = (max(p) - 1 / len(p)) / (1 - 1 / len(p))
    check("upstream Choice formula differs from archived VLM confidence", abs(upstream_confidence - answer["confidence"]) > 1e-6,
          question=name, upstream_formula="(max(p)-1/K)/(1-1/K)", upstream_computed=upstream_confidence,
          archived_vlm_confidence=answer["confidence"], absolute_difference=abs(upstream_confidence - answer["confidence"]),
          source="https://docs.typesafe.ai/confidence#choice", vlm_capture_date="2026-10-11", upstream_docs_capture_date="2026-10-13")

template_path = ROOT / "research/round2/captures/hf_diffusion_chat_template_jinja.response.txt"
template = Environment().from_string(template_path.read_text(encoding="utf-8"))
fixtures = {
    "plain_chat": {"messages": [{"role": "user", "content": "SYNTHETIC_USER"}]},
    "explicit_system": {"messages": [{"role": "system", "content": "SYNTHETIC_SYSTEM"}, {"role": "user", "content": "SYNTHETIC_USER"}]},
    "thinking_enabled": {"messages": [{"role": "user", "content": "SYNTHETIC_USER"}], "enable_thinking": True},
    "processor_image_shape": {"messages": [{"role": "user", "content": [{"type": "image"}, {"type": "text", "text": "SYNTHETIC_USER"}]}]},
    "unadapted_openai_image_url": {"messages": [{"role": "user", "content": [{"type": "image_url", "image_url": {"url": "https://example.invalid/SYNTHETIC.png"}}, {"type": "text", "text": "SYNTHETIC_USER"}]}]},
}
renders = {}
for name, fixture in fixtures.items():
    renders[name] = {"fixture": fixture, "rendered": template.render(bos_token="<bos>", add_generation_prompt=True, tools=[], **fixture)}
check("upstream plain template contains no fixed instruction", renders["plain_chat"]["rendered"] == "<bos><|turn>user\nSYNTHETIC_USER<turn|>\n<|turn>model\n")
check("upstream supplied system content emitted", "<|turn>system\nSYNTHETIC_SYSTEM<turn|>" in renders["explicit_system"]["rendered"])
check("upstream thinking flag adds token", "<|think|>" in renders["thinking_enabled"]["rendered"])
check("upstream template sees processor image type", "<|image|>" in renders["processor_image_shape"]["rendered"])
check("upstream template does not directly render OpenAI image_url type", "<|image|>" not in renders["unadapted_openai_image_url"]["rendered"])

wheel = ROOT / "research/round2/packages/typesafe/typesafe_sdk"
source = SDK / "typesafe_sdk"
different = []
same_count = 0
for path in wheel.rglob("*.py"):
    rel = path.relative_to(wheel)
    remote = source / rel
    if remote.exists() and remote.read_text(encoding="utf-8") == path.read_text(encoding="utf-8"):
        same_count += 1
    else:
        different.append(str(rel))
check("SDK commit source matches archived wheel Python source", not different, same_python_files=same_count, different_python_files=different)

out = {
    "evidence": "RUNTIME", "scope": "local offline execution only; no VLM/TypeSafe requests",
    "captured_at": datetime.now(timezone.utc).isoformat(),
    "sdk_commit": "e70bf99a89f27102247613bcd5d1aa8923a1cda9",
    "synthetic_fixture_notice": "wire_calls and Jinja fixtures are synthetic local inputs; returned JSON is replayed archived VLM data",
    "packages": {name: importlib.metadata.version(name) for name in ["httpx2", "pydantic", "pydantic-core", "jinja2", "tenacity"]},
    "script_sha256": hashlib.sha256(Path(__file__).read_bytes()).hexdigest(),
    "template_sha256": hashlib.sha256(template_path.read_bytes()).hexdigest(),
    "checks": records, "passed": sum(item["passed"] for item in records), "total": len(records),
    "wire_calls": wire_calls, "template_renders": renders,
}
(HERE / "offline-verification.json").write_text(json.dumps(out, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
print(json.dumps({"passed": out["passed"], "total": out["total"], "scope": out["scope"]}))
raise SystemExit(0 if out["passed"] == out["total"] else 1)
