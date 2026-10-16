> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Skills

> Install the vlmrun-gw skill so coding agents call the Gateway

[`vlmrun-gw`](https://vlm.run/gateway/SKILL.md) gives a coding agent the model catalog, `vlmrun gw` commands, request knobs, response shapes, and errors. After install, a plain-language ask is enough.

Full skill URL: `https://vlm.run/gateway/SKILL.md`

## Install

<Steps>
  <Step title="Add the skill">
    Use the [skills CLI](https://skills.sh):

    ```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
    npx skills add vlm-run/skills@vlmrun-gw
    ```

    | Flag | Effect |
    | - | - |
    | `-g` | Install into the user skills directory instead of the current repo. |
    | `-a <id>` | Limit the install to one agent. Example: `-a claude-code`. |
  </Step>

  <Step title="Ask for the result">
    The agent runs `vlmrun gw chat`, the OpenAI SDK, or `VLMRun().gateway`.

    ```text wrap theme={"theme":{"light":"github-light","dark":"dark-plus"}}
    Convert invoice.pdf to markdown with zai-org/glm-ocr and save the output next to the PDF.
    ```
  </Step>
</Steps>

## Zero-install skill use

Point the agent at the skill file for one session.

```text wrap theme={"theme":{"light":"github-light","dark":"dark-plus"}}
Read https://vlm.run/gateway/SKILL.md, then OCR
https://storage.googleapis.com/vlm-data-public-prod/hub/examples/finance.sec-filings/tsla-8k.pdf
with glm-ocr and tell me the earliest event date in the filing.
```

## Related

<CardGroup cols={2}>
  <Card title="SKILL.md" icon="file-code" href="https://vlm.run/gateway/SKILL.md">
    Read the full skill source.
  </Card>

  <Card title="MCP Server" icon="plug" href="/gateway/mcp-server">
    Read tools for agents that call the Gateway over MCP instead of local commands.
  </Card>
</CardGroup>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.