> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Settings

> API keys, team members, and billing.

## API Keys

* **Create new keys** for different users and projects (coming soon).
* **Revoke keys** instantly if compromised or no longer needed.
* **View usage** per key. Usage shows which integration is consuming credits.

<Warning>
  Treat API keys like passwords. Never commit them to source control or share them in plain text. Use environment variables or a secrets manager.
</Warning>

<Tip>
  Set your key as the `VLMRUN_API_KEY` environment variable. The Python SDK, Node.js SDK, and CLI pick it up automatically.
</Tip>

## Team

Members share skills, chat history, the Observe dashboard, and billing.

* **Invite a member.** Send an email invitation. They receive a link to join the workspace.
* **View members.** The list shows email and role.
* **Remove a member.** Workspace access ends. Their API keys, if any, are revoked.

## Billing

The panel shows the current plan. Upgrade or downgrade from this panel. See [Pricing](/pricing) for model token rates, fixed-price tools, and service-tier multipliers.

| | **Pay-as-You-Go** | **Pro Plan** | **Enterprise** |
| - | - | - | - |
| **Price** | \$0.01 per credit/month (billed on usage) | \$799/month | Custom |
| **Billing** | Monthly based on usage | Monthly subscription + Overages | Invoiced, tier-based with volume discounts |
| **Credits** | 100 free on sign-up, then pay as you go | Up to 100K images or pages/month | Custom |
| **Rate limit** | Up to 10 requests/minute | Up to 100 requests/minute | Custom |
| **Support** | Community | Dedicated Slack | Dedicated Slack + custom SLAs + priority support |
| **Data retention** | Standard | Zero-Data Retention (ZDR) | ZDR, In-VPC deployments |
| **Compliance** | | | SOC2, HIPAA, BAA execution |

* **Credit balance.** Credits remaining in the current billing cycle, and when the cycle resets.
* **Usage trends.** A chart of daily credit consumption.
* **Upgrade.** Move from Starter to Pro, or contact sales for an Enterprise agreement.
* **Additional credits.** Buy top-up credit packs before the cycle resets.
* **Invoices.** Download past invoices.

## Related

<CardGroup cols={2}>
  <Card title="Dashboard" icon="gauge-high" href="https://app.vlm.run/">
    Sign in to the platform.
  </Card>

  <Card title="API Keys" icon="dollar-sign" href="https://app.vlm.run/dashboard/settings/api-keys">
    Create, revoke, and view usage.
  </Card>

  <Card title="Team" icon="gauge" href="https://app.vlm.run/dashboard/settings/organization">
    Invite, view, or remove members.
  </Card>

  <Card title="Billing" icon="gauge" href="https://app.vlm.run/dashboard/settings/billing">
    Plan, credit balance, usage, and invoices.
  </Card>
</CardGroup>


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.