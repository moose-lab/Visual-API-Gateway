import json


async def process(ctx, doc_path):
    vlmrun = ctx.import_lib("vlmrun")
    skill_dir = "skills/medical-multi-schema-extraction"
    # Step 1: Classify document
    classification = await vlmrun.document.extract(
        doc_path,
        json_schema={
            "type": "object",
            "required": ["documentType", "classificationRationale"],
            "properties": {
                "documentType": {
                    "type": "string",
                    "enum": [
                        "referral",
                        "medical_record_request",
                        "progress_note_office_visit",
                    ],
                },
                "classificationRationale": {"type": "string"},
            },
        },
    )
    document_type = classification["documentType"]
    rationale = classification["classificationRationale"]
    # Step 2: Load the schema corresponding to classified documentType
    schema_path = f"{skill_dir}/schemas/{document_type}.json"
    schema = json.loads(vlmrun.io.read_file(schema_path))
    # Step 3: Extract with grounding and confidence
    extracted = await vlmrun.document.extract(
        doc_path, json_schema=schema, grounding=True, confidence=True
    )
    return {
        "schemaUsed": document_type,
        "documentType": document_type,
        "classificationRationale": rationale,
        "data": {"pages": [extracted]},
    }
