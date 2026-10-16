> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# MCP Server

> Connect any MCP-aware agent to the VLM Run Gateway over Streamable HTTP

The Gateway runs a Model Context Protocol server on [FastMCP](https://gofastmcp.com). Agents such as Pydantic AI, LangChain, Mastra, the OpenAI Agents SDK, and Claude Code call the same pipeline as [`chat/completions`](/gateway/api-reference/post-chat-completions). Authentication, billing, and metering match the REST API. Tiers are on [Authentication](/gateway/authentication) and [Rate Limits](/gateway/rate-limits).

| Property | Value |
| - | - |
| Server name | `vlmrun` |
| Endpoint | `POST https://gateway.vlm.run/mcp` |
| Transport | Streamable HTTP (FastMCP), stateless: no session id, no session affinity |
| Auth | [Bearer token](/gateway/mcp-authentication#authentication), or [OAuth](/gateway/mcp-authentication#oauth) where the deployment enables it |
| Tools | [`read_document`](/gateway/mcp-tools#read_document), [`read_image`](/gateway/mcp-tools#read_image), [`read_audio`](/gateway/mcp-tools#read_audio), [`read_video`](/gateway/mcp-tools#read_video), [`list_models`](/gateway/mcp-reference#list_models), [`get_model_info`](/gateway/mcp-reference#get_model_info), [`get_completion`](/gateway/mcp-reference#get_completion) |

## Quickstart

<Steps>
  <Step title="Add the server">
    ```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
    claude mcp add --transport http vlmrun https://gateway.vlm.run/mcp \
      --header "Authorization: Bearer $VLMRUN_API_KEY"
    ```

    To click through the tools, run `npx @modelcontextprotocol/inspector`. Set the transport to Streamable HTTP and point it at the same URL.
  </Step>

  <Step title="Ask the agent to parse a document">
    ```text theme={"theme":{"light":"github-light","dark":"dark-plus"}}
    Read https://storage.googleapis.com/vlm-data-public-prod/hub/examples/finance.sec-filings/tsla-8k.pdf
    and tell me the date of the earliest event reported.
    ```

    The agent picks `read_document` on its own.
  </Step>

  <Step title="Inspect the response">
    ```text theme={"theme":{"light":"github-light","dark":"dark-plus"}}
    <document file_name="tsla-8k.pdf" file_hash="sha256:1b7f04c3…" file_bytes="48213" mimetype="application/pdf" npages="5" dpi="96">
    <page id="0" format="markdown" width="612" height="792">
    ...
    Date of report (Date of earliest event reported): October 2, 2024
    </page>
    </document>
    ```

    Every `read_*` tool returns text like this, plus a typed [`ReadResult`](/gateway/mcp-reference#return-shape) with the model that ran and its cost.
  </Step>
</Steps>

## In this section

| Page | Covers |
| - | - |
| [Authentication](/gateway/mcp-authentication) | Bearer tokens, OAuth, and discovery endpoints |
| [Connect an Agent](/gateway/mcp-clients) | Client configs, and calling the server without a framework |
| [Tools](/gateway/mcp-tools) | `read_document`, `read_image`, `read_audio`, `read_video` |
| [Reference](/gateway/mcp-reference) | `list_models`, `get_model_info`, `get_completion`, the return shape, and errors |

## Related

<CardGroup cols={2}>
  <Card title="Chat Completions API" icon="comments" href="/gateway/api-reference/post-chat-completions">
    The REST surface behind the same pipeline.
  </Card>

  <Card title="List models" icon="table-list" href="/gateway/api-reference/get-models">
    The live model catalog and capabilities.
  </Card>

  <Card title="Authentication" icon="key" href="/gateway/authentication">
    Bearer tokens, tiers, and anonymous access.
  </Card>

  <Card title="Supported Inputs" icon="images" href="/gateway/multimodal-inputs">
    Content part types, document limits, and video knobs.
  </Card>
</CardGroup>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.