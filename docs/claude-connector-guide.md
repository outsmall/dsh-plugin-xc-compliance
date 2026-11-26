# Use Xiaochu EU Compliance with Claude

Xiaochu EU Compliance provides read-only searches over a centrally hosted, bounded library of official EU product legislation and guidance excerpts and historical public product-safety alerts.

The library is frozen reference material. It does not automatically verify current law, certify a product, approve market access, or replace assessment by a qualified professional. Check the linked official source and its current status before relying on it.

## What the connector can do

The remote MCP server exposes two read-only tools:

- `search_legal_sources`: search the included official EU law and guidance excerpts.
- `search_risk_cases`: search historical public product-safety alert records.

Both return matching evidence and available official source links. They do not accept or process product files, customer records, identity documents, or confidential case files. Ask questions using general product descriptions, hazards, and regulatory topics; do not include personal or confidential information.

## Connect from Claude

Claude's interface and plan eligibility can change. Follow Anthropic's current [instructions for adding a custom remote MCP connector](https://support.claude.com/en/articles/11175166-get-started-with-custom-connectors-using-remote-mcp). In the connector URL field, enter:

```
https://agent.xiaochucompliance.com/agent-tools/mcp
```

The endpoint currently requires no sign-in or API key. The URL points to a public read-only service. Connecting a custom connector is separate from installing a Skill or plugin, and does not mean this connector has been approved or listed by Anthropic.

## Try a harmless query

After connecting and enabling the connector, ask Claude to search for a well-known public topic, for example:

> Search the included EU sources for GPSR Article 5. Show the exact source link and explain whether this is frozen reference evidence or a live legal check.

Or:

> Search historical public safety alerts for Safety Gate notification 0988/07. Give the notification identifier, source link, and the limits of this historical search.

Confirm that Claude actually invokes the corresponding search tool, reports the result accurately, and provides the source link. A successful connection or tool invocation does not establish that a product complies with applicable law.

## Data and privacy

The server receives the search query and any necessary filters to perform the lookup. A limited in-memory cache may temporarily retain a small number of search conditions and results until replaced or the service restarts. Operational logs may include source IP, access time, endpoint path, and response status. The application access logs are not designed to record query text, request headers, or passwords.

Read the [privacy policy](https://agent.xiaochucompliance.com/legal/privacy) and [data-management information](https://agent.xiaochucompliance.com/legal/data-management). For product or security questions, contact [support@xiaochucompliance.com](mailto:support@xiaochucompliance.com).

## Troubleshooting

- **Claude cannot connect:** confirm the URL is exactly `https://agent.xiaochucompliance.com/agent-tools/mcp`, including the path, then retry. Check Anthropic's current remote MCP requirements and service availability.
- **No search tool appears:** disconnect and re-add the connector, then enable it for the current conversation.
- **No matching result:** the evidence library is bounded and frozen. Try a concise product, hazard, or source identifier; an empty result does not mean that no applicable law or alert exists.
- **A result looks incomplete:** follow the official source link and verify the current document and status independently.

## Service identity and status

Service: Xiaochu EU Compliance  
Website: https://xiaochucompliance.com  
Support: support@xiaochucompliance.com

This guide describes the custom connector endpoint and is not evidence of a Claude client acceptance test, Anthropic directory submission, review, or approval.
