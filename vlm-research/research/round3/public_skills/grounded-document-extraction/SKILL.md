---
name: grounded-document-extraction
description: Extract structured data from a document with grounding via vlmrun.document.extract.
---

# Grounded Document Extraction
Use `vlmrun.document.extract` to extract structured information from the provided document. The objective is to extract every field defined in the target schema as accurately and completely as possible, basing every extracted value solely on information present in the document.

## Guidelines
- Populate all schema fields whenever the information is available.
- Do not infer, fabricate, or guess missing values.
- Preserve the original meaning of the document when extracting text.
- Return values in the format required by the schema.
- If a field cannot be found, return `null` (or the schema's designated empty value) rather than inventing a value.
- If multiple candidate values exist, choose the one best supported by the document. If the schema supports confidence or evidence, include the relevant supporting text or location.
- Normalize values (such as dates, numbers, and addresses) only when required by the schema. Otherwise, preserve the original formatting.
- Ensure all extracted values are grounded in the document content.

## Success Criteria
- Every schema field is evaluated.
- All extracted values are supported by the document.
- No unsupported assumptions or hallucinated values are introduced.
- The output conforms exactly to the required schema.