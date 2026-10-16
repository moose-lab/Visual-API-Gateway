> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Instructor Compatibility

> Use the Instructor Python SDK with the OpenAI-compatible API.

Use [Instructor](https://github.com/instructor-ai/instructor) with the [OpenAI-compatible API](/api-reference/v1/post-chat-completions).

## Configure the OpenAI-compatible Instructor Client with VLM Run

Set `base_url` and `api_key` the same way as [OpenAI Compatibility](/agents/integrations/integrations-openai-compatibility#configure-the-default-endpoint-and-api-key).

```python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
import instructor
import openai

# Configure the OpenAI client
client = openai.OpenAI(
    base_url="https://api.vlm.run/v1/openai",
    api_key="<VLMRUN_API_KEY>"
)

# Configure the Instructor client
inst_client = instructor.from_openai(
    client, mode=instructor.Mode.MD_JSON
)
```

## 1. Chat Completion with Instructor

```python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
from pydantic import BaseModel, Field

# Let's define a simplified Pydantic model to represent the outputs. Let's say we want to generate an image of big ben at a distance, and crop into the clock face.
class AgentResponse(BaseModel):
    image_url: str = Field(description="The pre-signed URL of the image generated.")
    clock_image_url: str = Field(description="The pre-signed URL of the image of the clock face cropped from the generated image.")
    crop_xywh: tuple[float, float, float, float] = Field(description="The (x, y, width, height) of the clock face cropped from the generated image.")

# Now we can use the Instructor client to create a chat completion
response = inst_client.chat.completions.create(
    model="vlmrun-orion-1:auto",
    max_retries=0,
    messages=[
        {
            "role": "user",
            "content": [
                {"type": "text", "text": "Generate an image of big ben at a distance. Crop into the clock face and provide a close up of the clock face."},
            ],
        }
    ],
    response_model=AgentResponse,
)
logger.debug(f"type={type(response)}, response={response}")
```

## 2. Guided Chat Completion with Instructor

The first request treats the JSON schema as an instruction only.

Pass the `json_schema` extra body parameter to enforce that schema.

```python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
# Adapt the above example with an additional "json_schema" parameter
# to enforce guided decoding of the JSON in the schema.
response = inst_client.chat.completions.create(
    ... # same as above
    response_model=AgentResponse,
    response_format={"type": "json_schema", "json_schema": AgentResponse.model_json_schema()},
)
```


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.