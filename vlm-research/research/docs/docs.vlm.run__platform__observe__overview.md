> ## Documentation Index
> Fetch the complete documentation index at: https://docs.vlm.run/llms.txt
> Use this file to discover all available pages before exploring further.

# Observe

> Requests, executions, completions, and usage metrics.

<div className="platform-figure">
  <img src="https://mintcdn.com/autonomiai/31N4NFzIelpYJkPB/images/platform-observe-overview.png?fit=max&auto=format&n=31N4NFzIelpYJkPB&q=85&s=301f311a66f371a2b8b90520e63a55ed" alt="Observe dashboard overview" width="2712" height="1512" data-path="images/platform-observe-overview.png" />
</div>

<Tip>The same data is available through the API. Query requests, executions, and completions in the [API reference](/api-reference/index).</Tip>

## Filtering

Click the date picker in the top right to set the time window.

<div className="platform-figure">
  <img src="https://mintcdn.com/autonomiai/31N4NFzIelpYJkPB/images/platform-observe-filter-date.png?fit=max&auto=format&n=31N4NFzIelpYJkPB&q=85&s=e59412c0fec2240056ab30b24577f1ee" alt="Filter by date range" width="2712" height="1518" data-path="images/platform-observe-filter-date.png" />
</div>

Click the grouping button in the top right of the two large charts. Group by:

* Daily
* Weekly
* Monthly
* Quarterly
* Yearly

<div className="platform-figure">
  <img src="https://mintcdn.com/autonomiai/31N4NFzIelpYJkPB/images/platform-observe-grouping.png?fit=max&auto=format&n=31N4NFzIelpYJkPB&q=85&s=ced115dc966048c46b3f493528e7ebb7" alt="Change chart grouping" width="2712" height="1520" data-path="images/platform-observe-grouping.png" />
</div>

<Tip>Hover a chart to see the breakdown and credits used for that period.</Tip>

<div className="platform-figure">
  <img src="https://mintcdn.com/autonomiai/31N4NFzIelpYJkPB/images/platform-observe-hover.png?fit=max&auto=format&n=31N4NFzIelpYJkPB&q=85&s=4d45492fc660262492abe8292130a882" alt="Hover over chart for breakdown" width="2712" height="1518" data-path="images/platform-observe-hover.png" />
</div>

## Drill Down

Click a chart to list the requests, executions, and completions for that period. Click an item to open its details page.

<div className="platform-figure">
  <img src="https://mintcdn.com/autonomiai/31N4NFzIelpYJkPB/images/platform-observe-drilldown.png?fit=max&auto=format&n=31N4NFzIelpYJkPB&q=85&s=7575c583c8408967fc5d434cbd168b3b" alt="Drill-down view" width="2712" height="1522" data-path="images/platform-observe-drilldown.png" />
</div>

## Dashboard Metrics

| Metric | What it tells you |
| - | - |
| **Total Activity** | The number of requests, executions, and completions in the selected time window |
| **Success Rate** | The percentage of calls that completed without errors |
| **Average Latency** | Mean response time across all endpoints, broken down by type |
| **Credits Used** | Total credit consumption with trend over time |


This documentation is built and hosted on [Mintlify](https://mintlify.com), a developer documentation platform.