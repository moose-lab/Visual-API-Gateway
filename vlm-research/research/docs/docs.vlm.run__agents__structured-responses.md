> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Structured Responses

> Agents return JSON via chat completions, with schema validation.

<Tip>
  Using the OpenAI SDK? See [OpenAI Compatibility](/agents/integrations/integrations-openai-compatibility).
</Tip>

## Extract structured JSON

<CodeGroup>
  ```python Python (json_object) theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.client import VLMRun

  # Initialize the VLMRun client
  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  # Ask the agent for structured output using a loose JSON object
  response = client.agent.completions.create(
      model="vlmrun-orion-1:auto",
      messages=[
          {
              "role": "user",
              "content": [
                  {"type": "text", "text": "Extract invoice number, dates, totals, and vendor in JSON."},
                  {"type": "image_url", "image_url": {"url": "https://example.com/invoice.jpg"}}
              ]
          }
      ],
      response_format={"type": "json_object"},
  )
  print(response.choices[0].message.content)
  >>> '{"invoice_number":"INV-2024-001","invoice_date":"2024-09-15","total_amount":1250.00,"vendor_name":"Acme Corporation"}'
  ```

  ```python Python (json_schema) theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.client import VLMRun
  from pydantic import BaseModel, Field

  ## Structured Response Formats

  # Initialize the VLMRun client
  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  # Ask the agent for structured output using a strict JSON Schema
  response = client.agent.completions.create(
      model="vlmrun-orion-1:auto",
      messages=[
          {
              "role": "user",
              "content": [
                  {"type": "text", "text": "Extract invoice number, dates, totals, and vendor in JSON."},
                  {"type": "image_url", "image_url": {"url": "https://example.com/invoice.jpg"}}
              ]
          }
      ],
      response_format={"type": "json_schema", "json_schema": Invoice.model_json_schema()},
  )

  # Validate the response
  invoice = Invoice.model_validate_json(response.choices[0].message.content)
  print(invoice)
  ```

  ```typescript Node.js (json_object) theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { VlmRun } from "vlmrun";

  // Initialize the VLMRun client
  const client = new VlmRun({
    apiKey: "<VLMRUN_API_KEY>",
    baseURL: "https://api.vlm.run/v1"
  });

  // Ask the agent for structured output using a loose JSON object
  const response = await client.agent.completions.create({
    model: "vlmrun-orion-1:auto",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "Extract invoice number, dates, totals, and vendor in JSON." },
          { type: "image_url", image_url: { url: "https://example.com/invoice.jpg" } }
        ]
      }
    ],
    response_format: { type: "json_object" }
  });
  ```

  ```typescript Node.js (json_schema) theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { VlmRun } from "vlmrun";
  import { z } from "zod";
  import { zodToJsonSchema } from "zod-to-json-schema";

  // Define the schema with Zod
  const InvoiceSchema = z.object({
    invoice_number: z.string().describe("The number of the invoice"),
    date: z.string().describe("The date of the invoice"),
    total_amount: z.number().describe("The total amount of the invoice"),
    vendor_name: z.string().describe("The name of the vendor")
  });

  // Initialize the VLMRun client
  const client = new VlmRun({
    apiKey: "<VLMRUN_API_KEY>",
    baseURL: "https://api.vlm.run/v1"
  });

  // Ask the agent for structured output using a strict JSON Schema
  const response = await client.agent.completions.create({
    model: "vlmrun-orion-1:auto",
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "Extract invoice number, dates, totals, and vendor in JSON." },
          { type: "image_url", image_url: { url: "https://example.com/invoice.jpg" } }
        ]
      }
    ],
    response_format: { type: "json_schema", schema: zodToJsonSchema(InvoiceSchema) }
  });

  // Validate the response
  const invoice = InvoiceSchema.parse(JSON.parse(response.choices[0].message.content));
  console.log(invoice);
  ```
</CodeGroup>

## JSON Response

```json JSON theme={"theme":{"light":"github-light","dark":"dark-plus"}}
{
  "invoice_number": "INV-2024-001",
  "invoice_date": "2024-09-15T00:00:00",
  "total_amount": 1250.00,
  "vendor_name": "Acme Corporation"
}
```

## Response Format Types

| Type | Description |
| - | - |
| `json_object` | Valid JSON object without specific schema |
| `json_schema` | Strict JSON conforming to provided schema |


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.