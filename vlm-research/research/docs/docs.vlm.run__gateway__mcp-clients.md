> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Connect an Agent

> Client configs for Claude Code, Claude Desktop, Cursor, and agent frameworks

Set your API key once, and every client below uses the same URL and bearer header.

```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
export VLMRUN_API_KEY="your-api-key"
```

<Tabs>
  <Tab title="Hosted HTTP">
    ```json theme={"theme":{"light":"github-light","dark":"dark-plus"}}
    {
      "mcpServers": {
        "vlmrun": {
          "type": "http",
          "url": "https://gateway.vlm.run/mcp",
          "headers": {
            "Authorization": "Bearer <VLMRUN_API_KEY>"
          }
        }
      }
    }
    ```

    <Warning>
      Claude Desktop cannot use this shape. See the
      [Claude Desktop](#claude-desktop) tab.
    </Warning>
  </Tab>

  <Tab title="Pydantic AI">
    ```python [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
    from pydantic_ai import Agent
    from pydantic_ai.capabilities import MCP

    agent = Agent(
        "anthropic:claude-sonnet-5",
        capabilities=[
            MCP(
                "https://gateway.vlm.run/mcp",
                headers={"Authorization": "Bearer <VLMRUN_API_KEY>"},
            )
        ],
    )

    result = agent.run_sync(
        "Read https://storage.googleapis.com/vlm-data-public-prod/hub/examples/document.invoice/sample-invoice.pdf and tell me the total amount due."
    )
    print(result.output)
    ```

    `native=False` is the default: Pydantic AI connects and calls the tools. `native=True` sends the URL to the model provider (OpenAI Responses, Anthropic, xAI), and the provider connects.
  </Tab>

  <Tab title="LangChain">
    ```python [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
    from langchain_mcp_adapters.client import MultiServerMCPClient
    from langgraph.prebuilt import create_react_agent

    client = MultiServerMCPClient(
        {
            "vlmrun": {
                "url": "https://gateway.vlm.run/mcp",
                "transport": "streamable_http",
                "headers": {"Authorization": "Bearer <VLMRUN_API_KEY>"},
            }
        }
    )

    tools = await client.get_tools()
    agent = create_react_agent("anthropic:claude-sonnet-5", tools)
    ```

    Install with `pip install langchain-mcp-adapters langgraph`.
  </Tab>

  <Tab title="Mastra">
    ```typescript theme={"theme":{"light":"github-light","dark":"dark-plus"}}
    import { MCPClient } from "@mastra/mcp";

    const mcp = new MCPClient({
      servers: {
        vlmrun: {
          url: new URL("https://gateway.vlm.run/mcp"),
          requestInit: {
            headers: { Authorization: `Bearer ${process.env.VLMRUN_API_KEY}` },
          },
        },
      },
    });

    const tools = await mcp.getTools();
    ```

    Pass `tools` to any Mastra `Agent`. Install with `npm install @mastra/mcp`.
  </Tab>

  <Tab title="OpenAI Agents SDK">
    ```python [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
    from agents import Agent, Runner
    from agents.mcp import MCPServerStreamableHttp

    async with MCPServerStreamableHttp(
        params={
            "url": "https://gateway.vlm.run/mcp",
            "headers": {"Authorization": "Bearer <VLMRUN_API_KEY>"},
        }
    ) as server:
        agent = Agent(
            name="Assistant",
            mcp_servers=[server],
        )
        result = await Runner.run(agent, "Summarize the attached PDF.")
        print(result.final_output)
    ```
  </Tab>

  <Tab title="Claude Code">
    ```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
    claude mcp add --transport http vlmrun https://gateway.vlm.run/mcp \
      --header "Authorization: Bearer $VLMRUN_API_KEY"
    ```
  </Tab>

  <Tab title="Claude Desktop" id="claude-desktop">
    Claude Desktop speaks MCP over stdio, and its connector UI cannot send `Authorization`. Bridge it with [`mcp-remote`](https://www.npmjs.com/package/mcp-remote) in `claude_desktop_config.json` (macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`, Windows: `%APPDATA%\Claude\claude_desktop_config.json`):

    ```json [expandable] theme={"theme":{"light":"github-light","dark":"dark-plus"}}
    {
      "mcpServers": {
        "vlmrun": {
          "command": "/path/to/node/bin/npx",
          "args": [
            "-y",
            "mcp-remote",
            "https://gateway.vlm.run/mcp",
            "--transport",
            "http-only",
            "--header",
            "Authorization:${VLM_AUTH}"
          ],
          "env": {
            "PATH": "/path/to/node/bin:/usr/local/bin:/usr/bin:/bin",
            "VLM_AUTH": "Bearer <VLMRUN_API_KEY>"
          }
        }
      }
    }
    ```

    Replace `/path/to/node` with the directory that holds Node.js. If `npx` is at `/usr/local/bin/npx`, use `/usr/local`. Claude Desktop does not inherit your shell `PATH`, so set `command`, `PATH`, and `VLM_AUTH` yourself. Node.js 18 or newer is required.
  </Tab>
</Tabs>

<Note>
  `initialize` returns server instructions that name each tool. Most clients inject them as the system message, so keep your own steering in the user turn. A second system message breaks strict OpenAI-compatible endpoints.
</Note>

## Call it without a framework

One POST calls a tool. The server issues no session id, so each request carries its own headers and any replica can answer. Send `Accept: application/json, text/event-stream`. The reply is a Server-Sent Events stream. The endpoint accepts POST only. `GET /mcp` returns `405`.

```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
MCP=https://gateway.vlm.run/mcp
HDRS=(-H "Authorization: Bearer $VLMRUN_API_KEY"
      -H "Content-Type: application/json"
      -H "Accept: application/json, text/event-stream")

curl -sN -X POST $MCP "${HDRS[@]}" \
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/call","params":{
       "name":"list_models","arguments":{"modality":"document"}}}'
```

`initialize` returns the server instructions. It does not open a session.

```bash theme={"theme":{"light":"github-light","dark":"dark-plus"}}
curl -sN -X POST $MCP "${HDRS[@]}" \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{
       "protocolVersion":"2025-06-18","capabilities":{},
       "clientInfo":{"name":"curl","version":"1"}}}'
```


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.