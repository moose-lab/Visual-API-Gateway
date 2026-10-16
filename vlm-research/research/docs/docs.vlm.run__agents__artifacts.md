> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Multi-modal Artifacts

> Retrieve generated images, videos, audio, and documents from agent responses

Responses return a ref. Call `client.artifacts.get` with that ref to download the file.

## Object References

A ref is a 3-5 letter type prefix, an underscore, and a 6-digit hex string (`img_a1b2c3`).

| Artifact Type | Prefix | Reference Type | Python Return Type |
| - | - | - | - |
| Image | `img_` | `ImageRef` | `PIL.Image.Image` |
| Video | `vid_` | `VideoRef` | `Path` (mp4) |
| Audio | `aud_` | `AudioRef` | `Path` (mp3) |
| Document | `doc_` | `DocumentRef` | `Path` (pdf) |
| Reconstruction | `recon_` | `ReconRef` | `Path` (spz) |
| URL | `url_` | `UrlRef` | `Path` (any of the above) |
| Array | `arr_` | `ArrayRef` | `np.ndarray` |

```python theme={"theme":{"light":"github-light","dark":"dark-plus"}}
from vlmrun.types import ImageRef, VideoRef, AudioRef, DocumentRef, ReconRef, UrlRef
```

## Retrieving an Artifact

### In a Chat Completion

* `session_id` comes from the chat response.
* `object_id` comes from the ref in the JSON result.

<CodeGroup>
  ```python Python [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  from pathlib import Path
  from pydantic import BaseModel, Field
  from PIL import Image
  from vlmrun.client import VLMRun
  from vlmrun.types import ImageRef

  client = VLMRun(api_key="<VLMRUN_API_KEY>")

  # Define a response model with an ImageRef field
  class BlurredImageResponse(BaseModel):
      image: ImageRef = Field(..., description="The blurred image")

  # Make a chat completion request
  response = client.agent.completions.create(
      model="vlmrun-orion-1:auto",
      messages=[
          {
              "role": "user",
              "content": [
                  {"type": "text", "text": "Blur all the faces in this image"},
                  {"type": "image_url", "image_url": {"url": "https://example.com/photo.jpg"}}
              ]
          }
      ],
      response_format={
          "type": "json_schema",
          "schema": BlurredImageResponse.model_json_schema()
      }
  )

  # Parse the response
  result = BlurredImageResponse.model_validate_json(response.choices[0].message.content)

  # Retrieve the artifact using session_id and object_id
  blurred_image: Image.Image = client.artifacts.get(
      session_id=response.session_id,
      object_id=result.image.id
  )

  # Display or save the image
  blurred_image.save("blurred_output.jpg")
  ```

  ```typescript TypeScript [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
  Coming soon...
  ```
</CodeGroup>

## Common Use Cases

<CardGroup cols={2}>
  <Card title="Multi-modal Artifacts" icon="face-viewfinder">
    Generated images and videos.
  </Card>

  <Card title="Multiple Artifacts" icon="object-group">
    Multiple images in one response, such as a virtual try-on or video thumbnails.
  </Card>

  <Card title="Document Processing" icon="scissors">
    A redacted document returned as a PDF.
  </Card>

  <Card title="3D Reconstruction" icon="video">
    A 3D model returned as a ply or spz file.
  </Card>
</CardGroup>

## Best Practices

* The Python and Node SDKs write large artifacts, including videos, to disk. Check the file size before loading a video into memory.
* Use a ref type such as `ImageRef` or `VideoRef` on the response model. The Python and Node SDKs convert the ref when you call `artifacts.get`.

<Card title="API Reference" icon="code" href="/api-reference/v1/get-artifact-by-id">
  Retrieve an artifact by id.
</Card>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.