---
name: medical-multi-schema-extraction
description: Classifies a medical document as referral, medical_record_request, or progress_note_office_visit, selects the matching schema, then extracts structured data with grounding and confidence.
---

# Medical Multi-Schema Extraction

Classify a medical document as one of the supported types, load the matching schema under `schemas/`, then extract with grounding. Prefer the cached pipeline:

```
execute_code(path="skills/medical-multi-schema-extraction/pipeline.py", inputs={"doc_path": <doc_ref>})
```

Supported `documentType` values (each maps onto a schema under `schemas/`):

- `referral`
- `medical_record_request`
- `progress_note_office_visit`

Flow (implemented in `pipeline.py`):

1. Call `vlmrun.document.extract` on `doc_path` with a small classification schema (`documentType`, `classificationRationale`).
2. Read `documentType` and `classificationRationale` from the classification result.
3. Load exactly one schema: `schemas/<documentType>.json` from this skill directory.
4. Call `vlmrun.document.extract` again with that schema and `grounding=True, confidence=True`.
5. Return `{schemaUsed, documentType, classificationRationale, data}` where:
- `schemaUsed` identifies which schema was loaded for extraction (currently the same as `documentType`, but can be distinct depending on the schema names)
- `documentType` is the classified document type
- `classificationRationale` is a short explanation of why that type was chosen
- `data` is `{"pages": [<extract result>]}`

## Notes

- Pass schemas with `json_schema=` (a bare second positional binds to `prompt`).
- Do **not** put hand-written `*_metadata` / `bounding_boxes` in schemas. With `grounding=True`, the runtime instruments fields and fills `*_metadata.annotation_ids` + server-side `bboxes`.
- Return the `process()` result as the final answer.
- Never download URLs, load all schemas at once, or `write_file`.
