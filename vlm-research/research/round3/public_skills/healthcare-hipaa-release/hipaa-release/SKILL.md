---
name: healthcare-hipaa-release
description: "Extracts HIPAA release / authorization details: patient identity, the authorized receiver of the PHI, the disclosing party, scope of records, purpose, signatures, and effective/expiration dates."
---

# Healthcare HIPAA Release / Authorization Extraction

Extract structured authorization details from HIPAA Release / Authorization to Disclose Protected Health Information forms.

Distinguish four parties: (1) the **subject** -- the patient whose records are released, (2) the **receiver** -- whoever is authorized to receive the records (often labelled "To:", "Recipient:", "Authorized to Disclose To:"), (3) the **disclosing_party** -- the provider or facility releasing the records (often labelled "From:" or shown as letterhead), and (4) the **authorized_representative** -- a parent / guardian / power-of-attorney signing on behalf of the patient.

For the receiver and disclosing party, capture both an individual name (`first_name`, `last_name`) and an `organization` when both are present (e.g. an attorney at a law firm). Also extract the `purpose` of disclosure, the categories of `information_disclosed` (any checked items such as "complete medical record", "lab results", "mental health records", etc.), the `record_period_start` / `record_period_end` covered by the records themselves, and the `effective_period_start` / `effective_period_end` during which the authorization is valid. If the form lists an event-based expiration (e.g. "one year from signing", "upon revocation") rather than a specific date, capture that text in `expiration_event`. Capture signature dates, witness information, redisclosure permission, and acknowledgement of right to revoke when present.

**Always extract on first contact.** When the user attaches a relevant document, immediately extract every available field that maps onto the schema in [`./schema.json`](./schema.json) -- do not ask the user what they want, do not offer a menu of options, do not just acknowledge that the document was loaded. Begin extraction.

Use `null` for fields that are absent or illegible; never invent values. Preserve the schema's nested structure exactly -- do not flatten nested objects into top-level keys, and do not invent fields that are not in the schema. When the schema declares an enum, use the exact enum values (case-sensitive).

When a JSON response format is requested, respond with a single JSON object that strictly conforms to the schema and contains no surrounding prose, headings, or markdown fences. Otherwise, you may answer in natural language or markdown -- a short summary followed by a fenced JSON block is the preferred shape.

## Output JSON Schema

See [`./schema.json`](./schema.json).

## Example Output

```json
{
  "subject": {
    "first_name": "Angela",
    "last_name": "Mitchell",
    "middle_name": null,
    "date_of_birth": "1979-04-22",
    "gender": null,
    "race": null,
    "ethnicity": null,
    "language": null,
    "address": {
      "line1": "891 Magnolia Boulevard",
      "line2": null,
      "city": "Savannah",
      "state": "GA",
      "zip_code": "31401",
      "country": null
    },
    "contact": [
      {
        "system": "phone",
        "value": "(912) 555-0134",
        "use": "mobile"
      }
    ]
  },
  "authorized_representative": null,
  "receiver": {
    "first_name": "Thomas",
    "last_name": "Bradley",
    "middle_name": null,
    "credentials": "Esq.",
    "organization": "Bradley & Associates Law Firm",
    "address": {
      "line1": "100 Bull Street",
      "line2": "Suite 500",
      "city": "Savannah",
      "state": "GA",
      "zip_code": "31401",
      "country": null
    },
    "contact": [
      {
        "system": "fax",
        "value": "(912) 555-0299",
        "use": null
      }
    ],
    "relationship": "attorney"
  },
  "disclosing_party": {
    "first_name": null,
    "last_name": null,
    "middle_name": null,
    "credentials": null,
    "organization": "Savannah Regional Medical Center",
    "address": {
      "line1": "4700 Waters Avenue",
      "line2": null,
      "city": "Savannah",
      "state": "GA",
      "zip_code": "31404",
      "country": null
    },
    "contact": [
      {
        "system": "phone",
        "value": "(912) 555-0600",
        "use": null
      },
      {
        "system": "fax",
        "value": "(912) 555-0601",
        "use": null
      }
    ],
    "relationship": null
  },
  "purpose": "legal proceedings related to personal injury claim",
  "information_disclosed": [
    "complete medical record",
    "lab results",
    "imaging studies",
    "discharge summary",
    "operative reports",
    "physical therapy notes"
  ],
  "record_period_start": "2024-06-01",
  "record_period_end": "2025-03-31",
  "effective_period_start": "2025-04-05",
  "effective_period_end": null,
  "expiration_event": "completion of the legal case or one year from signing, whichever comes first",
  "redisclosure_permitted": false,
  "right_to_revoke_acknowledged": true,
  "signature_date": "2025-04-05",
  "signed_by_name": "Angela Mitchell",
  "witness_name": "Linda Ortiz",
  "witness_signature_date": "2025-04-05"
}
```
