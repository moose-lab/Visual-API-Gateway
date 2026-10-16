import json


async def process(ctx, doc_path):
    vlmrun = ctx.import_lib("vlmrun")
    schema = json.loads(vlmrun.io.read_file("skills/grounded-document-extraction/schema.json"))
    data = await vlmrun.document.extract(
        doc_path, json_schema=schema, grounding=True, confidence=True
    )
    return data
