# 霄楚合规 AI 助手 · xc-compliance

A read-only evidence connector bundle for DeepSeek Harness. For EU-bound manufacturers, exporters and importers. Connects two tools: `search_risk_cases` and `search_legal_sources`.

## Scope

The service returns bounded historical official safety alerts and frozen official law/guidance excerpts. It is not a live legal database, certification service or product approval. Official case links remain available. No full corpus is distributed.

Only necessary generic product/risk keywords or exact public official-source URLs should be sent. Do not send confidential reports, customer identities or credentials. The service invokes no upstream model; inference uses the customer's own host/provider entitlements.

## Integration

This configuration-only bundle uses the official `@deepseek-ai/dsh-mcp-client` fixed version. It has no lifecycle scripts or custom executable code. The remote endpoint is `https://agent.xiaochucompliance.com/agent-tools/mcp`.

This is a candidate pending isolated Harness activation and actual model-client acceptance. Dependency installation alone is not successful activation. No public Git commit, npm release or official-market approval is claimed by this source directory. A real published source and fixed commit are required before creating a discoverable plugin index.

The ordinary DeepSeek chat app is a different product. See the official [Harness site](https://www.deepseek.com/harness/) and [plugin index documentation](https://deepseek-harness.github.io/deepseek-harness/guide/plugin-market).

Provided by xc-compliance.
