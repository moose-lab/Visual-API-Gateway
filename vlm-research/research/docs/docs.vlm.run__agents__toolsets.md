> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Toolsets

> The vision tools Orion runs, grouped by the media you send.

Orion runs real vision tools, not a chat model's guess. Pick the toolset by the media you have. Orion-1 calls one tool per model round-trip. Orion-2 imports the same tools in code, for example `vlmrun.image.detect(image, "person")`. See [Code Execution](/agents/code-execution).

## Image

<CardGroup cols={2}>
  <Card title="Caption & Tag" icon="tag" href="/agents/capabilities/image/captioning">
    Captions and tags for images.
  </Card>

  <Card title="Detection" icon="crosshairs" href="/agents/capabilities/image/detection">
    Bounding boxes and confidence scores for objects, faces, and people.
  </Card>

  <Card title="Segmentation" icon="object-group" href="/agents/capabilities/image/segmentation">
    Pixel-level masks for objects, regions, and features.
  </Card>

  <Card title="Pointing" icon="bullseye" href="/agents/capabilities/image/pointing">
    Key points and structural features, with sub-pixel accuracy.
  </Card>

  <Card title="Generate & Edit" icon="wand-magic-sparkles" href="/agents/capabilities/image/generation">
    From a text prompt, a sketch, or an existing image.
  </Card>

  <Card title="UI Parsing" icon="window-maximize" href="/agents/capabilities/image/ui-parsing">
    Buttons and interactive components in screenshots.
  </Card>

  <Card title="Image Tools" icon="crop" href="/agents/capabilities/image/tools">
    Crop, rotate, upscale, and colorize.
  </Card>
</CardGroup>

## Documents

<CardGroup cols={2}>
  <Card title="Layout Detection" icon="table-columns" href="/agents/capabilities/document/layout-understanding">
    Layout elements with bounding boxes and reading order.
  </Card>

  <Card title="Visual Grounding" icon="location-crosshairs" href="/agents/capabilities/document/visual-grounding">
    Map text in a document to its location on the page.
  </Card>

  <Card title="Multi-Page Analysis" icon="copy" href="/agents/capabilities/document/multi-page-analysis">
    Correlate pages and documents in one request.
  </Card>
</CardGroup>

## Video

<CardGroup cols={2}>
  <Card title="Caption & Tag" icon="tag" href="/agents/capabilities/video/captioning">
    Topic, summary, timestamped chapters, and content tags.
  </Card>

  <Card title="Generate & Edit" icon="clapperboard" href="/agents/capabilities/video/generation">
    Generate a video from a text prompt.
  </Card>

  <Card title="Video Tools" icon="scissors" href="/agents/capabilities/video/tools">
    Trim, sample, and extract video segments.
  </Card>
</CardGroup>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.