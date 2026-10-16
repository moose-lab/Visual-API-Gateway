> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# MCP Authentication

> Bearer tokens, OAuth, and discovery for the Gateway MCP server

`/mcp` accepts the same bearers as the REST API, plus an OAuth token where the deployment brokers one.

| Bearer | Accepted | Billed as |
| - | - | - |
| `Bearer <VLMRUN_API_KEY>` | Always | The key's organization. The tools forward the key to the Gateway. |
| Clerk OAuth access token | Where the deployment brokers [OAuth](#oauth). This is what a connector directory uses. | Your VLM Run account, when the sign-in matches an active VLM Run user: the organization selected on [app.vlm.run](https://app.vlm.run), at the authenticated tier. Otherwise the anonymous tier. |

Anonymous calls count against the MCP client's IP. Each client gets its own [anonymous bucket](/gateway/rate-limits).

Token handling on `/mcp`:

* **Missing or unknown token:** `401` with `WWW-Authenticate: Bearer`. Where OAuth is enabled, the challenge also carries `resource_metadata`, which is how a client starts the flow.
* **Key lookup fails:** `503` with no challenge. Retry. The key is not rejected.
* **Self-hosted, no identity provider:** `/mcp` runs without a token check.

<h2 id="oauth">
  OAuth
</h2>

Where the deployment enables it, `/mcp` is an OAuth 2.0 authorization server. Login goes through Clerk. Bearer tokens still work. A connector directory uses this mode, and the client registers itself instead of receiving a token out of band.

The issuer is `https://gateway.vlm.run/mcp`, with `/mcp/authorize`, `/mcp/token`, and `/mcp/register` under it. It implements Dynamic Client Registration (RFC 7591) and Client ID Metadata Documents, and it requires PKCE (`S256`). A client registers at connect time.

* **Scopes:** `openid`, `email`, and `profile`.
* **Refresh token:** Also request `offline_access`. Without it, the client sends the user back to sign in when the access token expires.
* **Persistence:** Registrations and sign-ins are shared by every replica and survive a restart, so a client does not register again after a deploy.

Discovery is at the origin's root, per RFC 8414 and RFC 9728, not under `/mcp`:

| Path | Asked for by |
| - | - |
| `/.well-known/oauth-protected-resource/mcp` | The first protected-resource probe |
| `/.well-known/oauth-protected-resource` | The fallback, and what the `401` challenge advertises |
| `/.well-known/oauth-authorization-server{,/mcp}` | Authorization-server metadata |
| `/.well-known/openid-configuration{,/mcp}` | OIDC aliases |

An unauthenticated call returns a transport-level `401` with `WWW-Authenticate: Bearer resource_metadata="…"`. That challenge is what makes a client show a connect prompt. The resource URL has to match the client URL character for character: `https://gateway.vlm.run/mcp`.


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.