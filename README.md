# 霄楚合规 AI 助手 · xc-compliance

A read-only evidence connector bundle for DeepSeek Harness. For EU-bound manufacturers, exporters and importers. Connects two tools: `search_risk_cases` and `search_legal_sources`.

## Scope

The service returns bounded historical official safety alerts and frozen official law/guidance excerpts. It is not a live legal database, certification service or product approval. Official case links remain available. No full corpus is distributed.

Only necessary generic product/risk keywords or exact public official-source URLs should be sent. Do not send confidential reports, customer identities or credentials. The service invokes no upstream model; inference uses the customer's own host/provider entitlements.

## Integration

This configuration-only bundle uses the official `@deepseek-ai/dsh-mcp-client` fixed version. It has no lifecycle scripts or custom executable code. The remote endpoint is `https://agent.xiaochucompliance.com/agent-tools/mcp`.

The minimal source and third-party installation index are public. The index pins installation to commit `24436a61c0be7d23c76d475030fc2d523579608f`. On 2026-11-16, the official Cordis MCP plugin registered both tools, retrieved historical notification 0988/07 and a legal excerpt, then removed the tools and closed its connection on disposal. This check made no model calls. Full Harness profile/UI installation, model answers and follow-up acceptance remain pending. Public distribution is not official marketplace approval.

Index URL: https://raw.githubusercontent.com/outsmall/dsh-plugin-xc-compliance/main/index.json

In Harness, enable the experimental custom plugin index, open Discover, add this HTTPS index, and verify the repository and pinned commit in the installation confirmation. The customer configures their own model account; this service does not collect model keys.

The ordinary DeepSeek chat app is a different product. See the official [Harness site](https://www.deepseek.com/harness/) and [plugin index documentation](https://deepseek-harness.github.io/deepseek-harness/guide/plugin-market).

Provided by xc-compliance.

