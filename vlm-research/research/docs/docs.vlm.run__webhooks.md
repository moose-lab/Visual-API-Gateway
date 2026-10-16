> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Webhooks

> Receive real-time notifications when your async processing jobs complete

## Overview

Submit with `batch=True` and `callback_url`. Skip polling the predictions endpoint.

VLM Run then:

1. POSTs the full response to `callback_url`.
2. Includes an HMAC signature when a webhook secret is set.

## Setting Up Webhooks

### 1. Configure Your Webhook Secret

1. Log in to your [VLM Run Dashboard](https://app.vlm.run)
2. Navigate to Settings → API Keys
3. Set your webhook secret (keep this secure and never share it)

### 2. Create a Webhook Endpoint

The endpoint must:

* Accept POST requests
* Verify the HMAC signature (recommended)
* Process the webhook payload
* Return a 2xx status code to acknowledge receipt

### 3. Submit Requests with Callback URL

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from vlmrun.client import VLMRun

  # Initialize the client
  client = VLMRun()

  response = client.document.generate(
      file_id="file_abc123",
      domain="document.invoice",
      batch=True,
      callback_url="https://your-domain.com/webhooks/vlmrun"
  )


  print(f"Request ID: {response.id}")
  # Your webhook endpoint will receive the results when processing completes
  ```

  ```javascript Node.js SDK theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { VlmRun } from 'vlmrun';

  const client = new VlmRun({
    apiKey: 'your-api-key',
  });

  const response = await client.document.generate({
    fileId: 'file_abc123',
    domain: 'document.invoice',
    batch: true,
    callbackUrl: 'https://your-domain.com/webhooks/vlmrun'
  });

  console.log(`Request ID: ${response.id}`);
  // Your webhook endpoint will receive the results when processing completes
  ```
</CodeGroup>

## Verifying Webhook Signatures

`X-VLMRun-Signature` carries an HMAC of the raw body. The key is your webhook secret. Verify the signature before processing the payload.

### Using the SDK (Recommended)

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import os
  import json
  from vlmrun.common.webhook import verify_webhook

  # In your webhook handler, obtain the raw request body (bytes),
  # signature header, and webhook secret
  raw_body = request.body()  # Must be bytes, not parsed JSON
  signature = request.headers.get("X-VLMRun-Signature")
  secret = os.environ["VLMRUN_WEBHOOK_SECRET"]

  # Verify signature using SDK
  if not verify_webhook(raw_body, signature, secret):
      return {"error": "Invalid signature"}, 401

  # Parse and process webhook
  data = json.loads(raw_body)
  print(f"Received webhook for prediction: {data['id']}")

  # Handle the completed prediction
  if data["status"] == "completed":
      response_data = data["response"]
      # ... your business logic here

  return {"status": "success"}
  ```

  ```javascript Node.js SDK theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import { verifyWebhook } from 'vlmrun';

  // In your webhook handler, obtain the raw request body (Buffer),
  // signature header, and webhook secret
  const rawBody = req.body;  // Must be Buffer, not parsed JSON
  const signature = req.headers['x-vlmrun-signature'];
  const secret = process.env.VLMRUN_WEBHOOK_SECRET;

  // Verify signature using SDK
  if (!verifyWebhook(rawBody, signature, secret)) {
      return res.status(401).json({ error: 'Invalid signature' });
  }

  // Parse and process webhook
  const data = JSON.parse(rawBody.toString('utf8'));
  console.log(`Received webhook for prediction: ${data.id}`);

  // Handle the completed prediction
  if (data.status === 'completed') {
      const responseData = data.response;
      // ... your business logic here
  }

  res.json({ status: 'success' });
  ```
</CodeGroup>

Verify the raw body before JSON parsing. On Express, use `express.raw({ type: 'application/json' })`. That keeps the body a Buffer.

### Manual Verification (Alternative)

<CodeGroup>
  ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  import hmac
  import hashlib

  def verify_webhook(raw_body: bytes, signature_header: str, secret: str) -> bool:
      if not signature_header or not signature_header.startswith("sha256="):
          return False

      received_sig = signature_header[len("sha256="):]
      expected_sig = hmac.new(
          secret.encode("utf-8"),
          raw_body,
          hashlib.sha256
      ).hexdigest()

      return hmac.compare_digest(received_sig, expected_sig)

  # Usage in your webhook handler
  raw_body = request.body()
  signature = request.headers.get("X-VLMRun-Signature")
  secret = os.environ["VLMRUN_WEBHOOK_SECRET"]

  if not verify_webhook(raw_body, signature, secret):
      return {"error": "Invalid signature"}, 401
  ```

  ```javascript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  const crypto = require('crypto');

  function verifyWebhook(rawBody, signatureHeader, secret) {
      if (!signatureHeader || !signatureHeader.startsWith('sha256=')) {
          return false;
      }

      const receivedSig = signatureHeader.replace('sha256=', '');
      const expectedSig = crypto
          .createHmac('sha256', secret)
          .update(rawBody)
          .digest('hex');

      try {
          return crypto.timingSafeEqual(
              Buffer.from(receivedSig, 'hex'),
              Buffer.from(expectedSig, 'hex')
          );
      } catch (error) {
          return false;
      }
  }

  // Usage in your webhook handler (with express.raw middleware)
  const rawBody = req.body;
  const signature = req.headers['x-vlmrun-signature'];
  const secret = process.env.VLMRUN_WEBHOOK_SECRET;

  if (!verifyWebhook(rawBody, signature, secret)) {
      return res.status(401).json({ error: 'Invalid signature' });
  }
  ```
</CodeGroup>

## Webhook Delivery

### Retry Logic

Failed deliveries retry with exponential backoff.

* **Maximum retries:** 2 attempts
* **Timeout:** 30 seconds per request
* **Backoff:** Exponential (1s, 2s, 4s, etc.)

A delivery fails when:

* The endpoint returns a non-2xx status code
* The request times out after 30 seconds
* A network connection error occurs

## Testing Webhooks Locally

Expose a local endpoint with [ngrok](https://ngrok.com/), [Cloudflare Tunnel](https://www.cloudflare.com/products/tunnel/), or [localtunnel](https://localtunnel.github.io/www/). Use that public URL as `callback_url`.

## Related Resources

* [Predictions API Reference](/api-reference/v1/predictions/get-predictions-by-id)
* [Batch Processing Guide](/guides/doc-ai/guide-parsing-documents#batch-processing)
* [Error Codes](/error-codes)


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.