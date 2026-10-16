> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# schema.json

> JSON Schema for validating skill output

`schema.json` is [JSON Schema draft-07](https://json-schema.org/draft-07/json-schema-release-notes) for a skill's output. On each run, the platform validates the agent's response against it.

## Format

```json theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "invoice-extraction",
  "description": "Structured data extracted from an invoice document",
  "properties": {
    "invoice_id": {
      "type": "string",
      "description": "Unique invoice identifier"
    },
    "invoice_date": {
      "type": "string",
      "format": "date",
      "description": "Invoice date in ISO 8601 format"
    },
    "total_amount": {
      "type": "number",
      "description": "Total invoice amount"
    }
  },
  "required": ["invoice_id", "invoice_date", "total_amount"],
  "additionalProperties": false
}
```

## Key Fields

| Field | Description |
| - | - |
| `$schema` | JSON Schema version — use `http://json-schema.org/draft-07/schema#` |
| `type` | Top-level type — typically `"object"` |
| `title` | Human-readable name for the schema |
| `description` | What the schema validates |
| `properties` | Object properties with types and descriptions |
| `required` | Array of mandatory field names |
| `additionalProperties` | Set to `false` to disallow extra fields |

## Property Types

| Type | Example | Use Case |
| - | - | - |
| `string` | `"invoice-001"` | Text fields, IDs, descriptions |
| `number` | `42.5` | Amounts, scores, measurements |
| `integer` | `3` | Counts, indices |
| `boolean` | `true` | Flags, binary classifications |
| `array` | `[...]` | Lists of items |
| `object` | `{...}` | Nested structures |

### String Constraints

```json theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "date": {
    "type": "string",
    "format": "date",
    "description": "Date in YYYY-MM-DD format"
  },
  "category": {
    "type": "string",
    "enum": ["invoice", "receipt", "purchase_order"],
    "description": "Document category"
  },
  "timestamp": {
    "type": "string",
    "pattern": "^\\d{2}:\\d{2}$",
    "description": "Timestamp in MM:SS format"
  }
}
```

### Array Items

```json theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "line_items": {
    "type": "array",
    "description": "List of invoice line items",
    "items": {
      "type": "object",
      "properties": {
        "description": { "type": "string" },
        "quantity": { "type": "integer" },
        "unit_price": { "type": "number" }
      },
      "required": ["description", "quantity", "unit_price"]
    }
  }
}
```

## Relationship to Skill Creation

Pass `json_schema` when [creating a skill from a prompt](/skills/manage/create). The platform writes that object to `schema.json` in the skill package.

```python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
skill = client.agent.skills.create(
    prompt="Extract invoice data",
    json_schema={
        "type": "object",
        "properties": {
            "invoice_id": {"type": "string"},
            "total_amount": {"type": "number"}
        },
        "required": ["invoice_id", "total_amount"]
    }
)
```

For a zip upload, include `schema.json` in the skill directory.

<Tip>
  Include `description` on every property. The model uses those descriptions to decide what to extract and how to format it.
</Tip>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.