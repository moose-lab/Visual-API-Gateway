"""Offline audit of six archived runs. Does not execute skill code or use network."""
import base64
from datetime import datetime, timezone
from decimal import Decimal
import hashlib
import json
from pathlib import Path
import shutil

from pypdf import PdfReader

ROOT = Path(__file__).resolve().parent
CAP = ROOT / "captures"
CASES = ("program", "replay", "agent", "fallback", "reference", "reference_replay")


def read(path):
    return json.loads(path.read_text(encoding="utf-8"))


def stamp(value):
    return datetime.fromisoformat(value.replace("Z", "+00:00"))


def digest(path):
    return hashlib.sha256(path.read_bytes()).hexdigest()


def audit():
    before = ROOT / "execution-audit-initial.json"
    destination = ROOT / "execution-audit.json"
    if not before.exists() and destination.exists():
        shutil.copyfile(destination, before)
    result = {
        "evidence": "STATIC", "source_evidence": "RUNTIME",
        "audited_at": datetime.now(timezone.utc).isoformat(),
        "captured_at": "2026-10-13",
        "scope": "Offline audit of six archived execution observations and captures; no network; raw captures unchanged.",
        "previous_audit": {"path": before.name, "sha256": digest(before)},
        "material_corrections": [
            "Initial audit covered five runs; this revision adds reference_replay and deduplicates costs by execution ID.",
            "Initial status_completed_at_consistent field checked final state only; this revision checks all submit/poll states and separately reports final consistency.",
            "Timestamp anomalies occur in five runs, not only the initial program run.",
        ],
        "cases": {}, "artifacts": {},
    }
    unique_costs = {}
    raw_checks = []
    for case in CASES:
        prefix = "execution_" + case
        observed = read(ROOT / (prefix + ".observation.json"))
        expected_file = ROOT / (prefix + ".expected.json")
        expectation = read(expected_file)
        final = observed["final"]
        request = read(CAP / (prefix + "_submit.request.json"))["body"]
        submit_file = CAP / (prefix + "_submit.response.json")
        submit = read(submit_file)
        files = sorted(CAP.glob(prefix + "_poll_*.response.json"))
        polls = []
        for path in files:
            response = read(path)
            polls.append({"file": path.name, **response})
        snapshots = [{"file": submit_file.name, **submit}, *polls]
        anomalies = []
        for snapshot in snapshots:
            completed, created = snapshot.get("completed_at"), snapshot.get("created_at")
            if completed and snapshot["status"] not in {"completed", "failed"}:
                anomalies.append({"kind": "nonterminal_completed_at", "file": snapshot["file"],
                                  "status": snapshot["status"], "created_at": created, "completed_at": completed})
            if completed and created and stamp(completed) < stamp(created):
                anomalies.append({"kind": "completed_before_created", "file": snapshot["file"],
                                  "seconds": (stamp(created) - stamp(completed)).total_seconds()})
        states = []
        for snapshot in snapshots:
            if not states or snapshot["status"] != states[-1]:
                states.append(snapshot["status"])
        response = final.get("response")
        nested = None
        if isinstance(response, dict) and isinstance(response.get("response"), str):
            try:
                nested = json.loads(response["response"])
            except json.JSONDecodeError:
                pass
        expected = expectation["expected"]
        execution_id = final["id"]
        amount = Decimal(str(final["usage"]["cost_dollars"]))
        if execution_id in unique_costs:
            assert unique_costs[execution_id] == amount
        unique_costs[execution_id] = amount
        final_consistent = final["status"] == "completed" and stamp(final["completed_at"]) >= stamp(final["created_at"])
        result["cases"][case] = {
            "execution_id": execution_id, "expected_file": expected_file.name,
            "expected_evidence": expectation["evidence"], "expected": expected,
            "submit_status": submit["status"], "poll_count": len(polls), "polls": polls,
            "observed_status_sequence": states, "final_status": final["status"],
            "requested_mode": request["config"]["mode"], "observed_execution_mode": final["execution_mode"],
            "final_response": response, "nested_response_parse": nested,
            "usage_final": final["usage"],
            "result_matches_expected": None if expected is None else response == expected,
            "nested_result_matches_expected": None if nested is None else nested == expected,
            "observation_matches_last_poll": final == read(files[-1]),
            "all_ids_match": all(snapshot["id"] == execution_id for snapshot in snapshots),
            "status_completed_at_consistent": not anomalies and final_consistent,
            "final_status_completed_at_consistent": final_consistent,
            "timestamp_anomalies": anomalies,
            "created_at_changed_from_submit": submit["created_at"] != final["created_at"],
            "created_at_submit": submit["created_at"], "created_at_final": final["created_at"],
            "created_at_change_seconds": (stamp(final["created_at"]) - stamp(submit["created_at"])).total_seconds(),
            "server_timestamp_duration_seconds": (stamp(final["completed_at"]) - stamp(final["created_at"])).total_seconds(),
            "duration_limit": "Usage duration and timestamp differences are server-reported; no worker timing or cause inferred.",
        }
        for meta_file in sorted(CAP.glob(prefix + "_*.meta.json")):
            raw_file = meta_file.with_name(meta_file.name.removesuffix(".meta.json") + ".response.raw")
            meta = read(meta_file)
            if raw_file.exists():
                raw_checks.append({"path": raw_file.name, "sha256_matches_meta": digest(raw_file) == meta["response_sha256"],
                                   "bytes_match_meta": raw_file.stat().st_size == meta["response_bytes"]})
        listing_file = CAP / (prefix + "_artifacts.response.json")
        if listing_file.exists():
            listing = read(listing_file)
            artifact = {"list_file": listing_file.name,
                        "list_status": read(CAP / (prefix + "_artifacts.meta.json"))["status"],
                        "list_response": listing, "namespace_matches_execution_id": listing["namespace_id"] == execution_id}
            bytes_file = CAP / (prefix + "_artifact_bytes.response.raw")
            if bytes_file.exists():
                payload = json.loads(bytes_file.read_bytes())
                meta = read(CAP / (prefix + "_artifact_bytes.meta.json"))
                redirect = read(CAP / (prefix + "_artifact_get.meta.json"))
                artifact.update({"download_file": bytes_file.name, "download_status": meta["status"],
                                 "download_response_bytes": bytes_file.stat().st_size,
                                 "download_response_sha256": digest(bytes_file), "download_response": payload,
                                 "download_matches_expected": payload == expected,
                                 "download_matches_final_response": payload == response,
                                 "redirect_status": redirect["status"], "redirect_response_bytes": redirect["response_bytes"]})
            else:
                artifact["download_observed_in_original_run"] = False
            result["artifacts"][case] = artifact

    pdf = ROOT / "synthetic_referral.pdf"
    fixture = read(ROOT / "synthetic_referral.json")
    reader = PdfReader(pdf)
    pdf_lines = reader.pages[0].extract_text().splitlines()
    request = read(CAP / "execution_reference_replay_submit.request.json")["body"]
    inline_pdf = base64.b64decode(request["inputs"]["doc_path"]["file_url"]["url"].split(",", 1)[1])
    response = result["cases"]["reference_replay"]["final_response"]
    # These are post-run audit comparisons with the input, not a pre-run expectation file.
    fields = [("type", "referral", 0), ("dateOfReferral", "2026-10-13", 3),
              ("reasonForReferral", "Routine vision evaluation", 4),
              ("patient.givenName", "Test", 1), ("patient.familyName", "Example", 1),
              ("patient.dateOfBirth", "2000-01-02", 2), ("schedulingPriority", "Routine", 5)]
    checks = []
    for path, expected, line in fields:
        parts = path.split(".")
        parent = response if len(parts) == 1 else response[parts[0]]
        value = parent[parts[-1]]
        metadata = parent[parts[-1] + "_metadata"]
        boxes = metadata["bboxes"]
        coords = boxes[0]["bbox"]["xywh"]
        x, y, width, height = coords
        checks.append({"field": path, "value": value, "input_derived_expected_value": expected,
                       "value_matches_input_comparison": value == expected,
                       "source_pdf_line_index": line, "source_pdf_line": pdf_lines[line],
                       "metadata_confidence": metadata["confidence"], "annotation_ids": metadata["annotation_ids"],
                       "annotation_id_matches_line_index": metadata["annotation_ids"] == ["L" + str(line)],
                       "bbox_count": len(boxes), "bbox_content": boxes[0]["content"],
                       "bbox_content_matches_pdf_line": boxes[0]["content"] == pdf_lines[line],
                       "bbox_page": boxes[0]["page"], "bbox_confidence": boxes[0]["confidence"],
                       "xywh": coords, "xywh_within_unit_page": 0 <= x < 1 and 0 <= y < 1 and width > 0 and height > 0 and x + width <= 1 and y + height <= 1})
    result["reference_replay_grounding"] = {
        "evidence": "STATIC", "source_response": "captures/execution_reference_replay_poll_02.response.json",
        "input_pdf": pdf.name, "input_pdf_sha256": digest(pdf),
        "pdf_hash_matches_fixture": digest(pdf) == fixture["sha256"],
        "request_pdf_matches_local_bytes": inline_pdf == pdf.read_bytes(),
        "pdf_page_count": len(reader.pages), "pdf_text_lines": pdf_lines,
        "pdf_text_matches_fixture_lines": pdf_lines == fixture["text_lines"], "field_checks": checks,
        "field_metadata_with_bboxes_count": len(checks),
        "unique_line_annotations_count": len(set(c["annotation_ids"][0] for c in checks)),
        "absent_provider_fields_are_null": all(response[name] is None for name in ["referringProvider", "receivingProvider"]),
        "absent_provider_metadata_low_empty": all(response[name + "_metadata"] == {"confidence": "lo", "annotation_ids": []} for name in ["referringProvider", "receivingProvider"]),
        "limits": ["Seven populated field metadata objects reuse six unique line annotations; patient names share L1.",
                   "type=referral is also fixed by the downloaded schema const; this run does not establish classifier behavior.",
                   "Bounding box text, page number and normalized range are checked; pixel geometry accuracy and confidence calibration are not established.",
                   "Pre-run expected.json was null; these field checks are explicitly post-run comparisons to the synthetic input."]}
    result["unique_execution_count"] = len(unique_costs)
    result["cost_by_execution_id"] = {key: str(value) for key, value in unique_costs.items()}
    total = sum(unique_costs.values(), Decimal("0"))
    result["total_observed_cost_dollars"] = float(total)
    result["total_observed_cost_dollars_exact"] = str(total)
    result["cost_basis"] = "One final usage.cost_dollars per unique execution ID. Not actual account billing; credits and repeated polls are not added."
    result["raw_capture_integrity_checks"] = raw_checks
    result["audit_findings"] = [
        "Six unique execution IDs completed; four reported agent and two reported program.",
        "program/replay requested program but reported agent; correct arithmetic alone does not prove a cached program path.",
        "reference/reference_replay reported program and steps=0; this field does not imply the document.extract call used no model or no tools.",
        "reference's non-referral invoice produced schema const referral with null data; not evidence of classification correctness.",
        "fallback outer response does not match the expected object; response.response parses into that object but extra parsing is required.",
        "Nineteen running snapshots across five runs have completed_at earlier than created_at; every run's created_at changes between submit and final response. Cause unknown.",
        "Three downloaded arithmetic artifacts independently match final response and input-derived expected values; they do not establish which unpublished runner code wrote them.",
        "reference_replay grounding returns seven populated field metadata objects spanning six input lines; all content strings and extracted fields match the synthetic PDF checks.",
    ]
    destination.write_text(json.dumps(result, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({"cases": len(result["cases"]), "unique_executions": len(unique_costs), "cost_usd": str(total),
                      "arithmetic_artifacts": sum("download_matches_expected" in v for v in result["artifacts"].values()),
                      "grounding_fields": len(checks), "integrity_checks": len(raw_checks),
                      "integrity_ok": all(c["sha256_matches_meta"] and c["bytes_match_meta"] for c in raw_checks)}))


if __name__ == "__main__":
    audit()
