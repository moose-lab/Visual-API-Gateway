> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Pricing

> How the Gateway bills a request. Live rates are on the model catalog.

Prices are on the [model catalog](https://vlm.run/gateway/models) and [`GET /v1/models/{model_id}`](/gateway/api-reference/get-model-by-id).

* **`usage.cost`:** that call's charge in USD, to six decimals. `0.0` is a charge of zero.
* **Included in:** chat, including streamed chat, embeddings, and transcription.
* **Transcription:** uses `input_audio_seconds`.

## Billing variations

USD per 1 million tokens, unless that model's catalog page says otherwise. `method` and `response_format` do not change the price.

<Tabs>
  <Tab title="By tokens">
    Most models bill per token. For example, [google/gemma-4-26b-a4b-it](https://vlm.run/gateway/models/google-gemma-4-26b-a4b-it) bills \$0.10 / 1M input tokens and \$0.30 / 1M output tokens.

    | Field | Bills |
    | - | - |
    | `prompt` | Uncached input tokens |
    | `input_cache_read` | Cached input tokens |
    | `input_cache_write` | Always \$0.00 |
    | `completion` | Output tokens |
  </Tab>

  <Tab title="By images">
    [facebook/sam3.1](https://vlm.run/gateway/models/facebook-sam3.1) bills per image (for example, \$1 / 1K images).

    <a id="routed-models" />

    | Field | Bills |
    | - | - |
    | `image` | One image, or one PDF page |
    | `prompt` | \$0.00 for [facebook/sam3.1](https://vlm.run/gateway/models/facebook-sam3.1) |
    | `video` | Once per video, when the rate is set |
  </Tab>

  <Tab title="By seconds">
    Transcription models bill by audio length. For example, [nvidia/parakeet-tdt-0.6b-v3](https://vlm.run/gateway/models/nvidia-parakeet-tdt-0.6b-v3) bills \$16.67 / 1M audio seconds (about \$0.06 per hour of audio).

    | Field | Bills |
    | - | - |
    | `prompt` | USD per 1 million audio seconds. Listed on [`GET /v1/openai/models`](/gateway/api-reference/get-models) |
    | `completion` | \$0.00 |

    `json` and `verbose_json` are billed. `text`, `srt`, and `vtt` return the transcript only.
  </Tab>
</Tabs>

## Billing transparency

Rates are published, not quoted. You can read what a model costs before you call it, then check what a call cost after.

* **Before the call:** every model lists its rates in `pricing` on [`GET /v1/openai/models`](/gateway/api-reference/get-models) and [`GET /v1/models/{model_id}`](/gateway/api-reference/get-model-by-id). The same rates appear on the [model catalog](https://vlm.run/gateway/models).
* **After the call:** `usage.cost` is the charge for that request in USD.

The unit in `pricing` follows how the model bills: tokens, images, or audio seconds.

<Tabs>
  <Tab title="By tokens">
    For the example below, [google/gemma-4-26b-a4b-it](https://vlm.run/gateway/models/google-gemma-4-26b-a4b-it) is priced in USD per 1 million tokens.

    <CodeGroup>
      ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      from openai import OpenAI

      client = OpenAI(
          base_url="https://gateway.vlm.run/v1/openai",
          api_key="<VLMRUN_API_KEY>",
      )
      model = next(m for m in client.models.list() if m.id == "google/gemma-4-26b-a4b-it")
      print(model.pricing)
      # {'prompt': 0.1, 'completion': 0.3, 'input_cache_read': 0.05, 'input_cache_write': 0.0, 'image': 0.0, 'video': 0.0}
      ```

      ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      import OpenAI from "openai";

      const client = new OpenAI({
        baseURL: "https://gateway.vlm.run/v1/openai",
        apiKey: process.env.VLMRUN_API_KEY,
      });
      const models = await client.models.list();
      const model = models.data.find((m) => m.id === "google/gemma-4-26b-a4b-it");
      console.log(model.pricing);
      // {
      //   prompt: 0.1,
      //   completion: 0.3,
      //   input_cache_read: 0.05,
      //   input_cache_write: 0,
      //   image: 0,
      //   video: 0,
      // }
      ```

      ```bash cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      curl -s "https://gateway.vlm.run/v1/models/google%2Fgemma-4-26b-a4b-it" \
        -H "Authorization: Bearer $VLMRUN_API_KEY" | jq .pricing
      # {
      #   "prompt": 0.1,
      #   "completion": 0.3,
      #   "input_cache_read": 0.05,
      #   "input_cache_write": 0.0,
      #   "image": 0.0,
      #   "video": 0.0
      # }
      ```
    </CodeGroup>
  </Tab>

  <Tab title="By images">
    For the example below, [facebook/sam3.1](https://vlm.run/gateway/models/facebook-sam3.1) is priced in USD per 1 million images or clips. `prompt` and `completion` are `0.0`.

    <CodeGroup>
      ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      from openai import OpenAI

      client = OpenAI(
          base_url="https://gateway.vlm.run/v1/openai",
          api_key="<VLMRUN_API_KEY>",
      )
      model = next(m for m in client.models.list() if m.id == "facebook/sam3.1")
      print(model.pricing)
      # {'prompt': 0.0, 'completion': 0.0, 'input_cache_read': 0.0, 'input_cache_write': 0.0, 'image': 1000.0, 'video': 34800.0}
      ```

      ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      import OpenAI from "openai";

      const client = new OpenAI({
        baseURL: "https://gateway.vlm.run/v1/openai",
        apiKey: process.env.VLMRUN_API_KEY,
      });
      const models = await client.models.list();
      const model = models.data.find((m) => m.id === "facebook/sam3.1");
      console.log(model.pricing);
      // {
      //   prompt: 0,
      //   completion: 0,
      //   input_cache_read: 0,
      //   input_cache_write: 0,
      //   image: 1000,
      //   video: 34800,
      // }
      ```

      ```bash cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      curl -s "https://gateway.vlm.run/v1/models/facebook%2Fsam3.1" \
        -H "Authorization: Bearer $VLMRUN_API_KEY" | jq .pricing
      # {
      #   "prompt": 0.0,
      #   "completion": 0.0,
      #   "input_cache_read": 0.0,
      #   "input_cache_write": 0.0,
      #   "image": 1000.0,
      #   "video": 34800.0
      # }
      ```
    </CodeGroup>
  </Tab>

  <Tab title="By seconds">
    For the example below, [nvidia/parakeet-tdt-0.6b-v3](https://vlm.run/gateway/models/nvidia-parakeet-tdt-0.6b-v3) is priced in USD per 1 million audio seconds, in `prompt`.

    <CodeGroup>
      ```python Python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      from openai import OpenAI

      client = OpenAI(
          base_url="https://gateway.vlm.run/v1/openai",
          api_key="<VLMRUN_API_KEY>",
      )
      model = next(m for m in client.models.list() if m.id == "nvidia/parakeet-tdt-0.6b-v3")
      print(model.pricing)
      # {'prompt': 16.67, 'completion': 0.0, 'input_cache_read': 16.67, 'input_cache_write': 0.0, 'image': 0.0, 'video': 0.0}
      ```

      ```typescript Node.js theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      import OpenAI from "openai";

      const client = new OpenAI({
        baseURL: "https://gateway.vlm.run/v1/openai",
        apiKey: process.env.VLMRUN_API_KEY,
      });
      const models = await client.models.list();
      const model = models.data.find((m) => m.id === "nvidia/parakeet-tdt-0.6b-v3");
      console.log(model.pricing);
      // {
      //   prompt: 16.67,
      //   completion: 0,
      //   input_cache_read: 16.67,
      //   input_cache_write: 0,
      //   image: 0,
      //   video: 0,
      // }
      ```

      ```bash cURL theme={"theme":{"light":"github-light","dark":"dark-plus"}}
      curl -s "https://gateway.vlm.run/v1/models/nvidia%2Fparakeet-tdt-0.6b-v3" \
        -H "Authorization: Bearer $VLMRUN_API_KEY" | jq .pricing
      # {
      #   "prompt": 16.67,
      #   "completion": 0.0,
      #   "input_cache_read": 16.67,
      #   "input_cache_write": 0.0,
      #   "image": 0.0,
      #   "video": 0.0
      # }
      ```
    </CodeGroup>
  </Tab>
</Tabs>

<CardGroup cols={2}>
  <Card title="Model catalog" icon="table-list" href="https://vlm.run/gateway/models">
    Current rates for every model.
  </Card>

  <Card title="Get Model" icon="cube" href="/gateway/api-reference/get-model-by-id">
    Full response schema, including `pricing`.
  </Card>
</CardGroup>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.