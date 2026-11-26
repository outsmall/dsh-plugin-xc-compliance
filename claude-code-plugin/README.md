# XC Compliance for Claude Code

This is a third-party Claude Code plugin distributed from the public `xiaochu-compliance` marketplace in this repository. It is not part of Anthropic's official marketplace and has not yet been verified in a signed-in Claude Code client.

## Install

Add the marketplace and install the plugin:

```sh
claude plugin marketplace add outsmall/dsh-plugin-xc-compliance
claude plugin install xc-compliance@xiaochu-compliance
```

The skill is available as `/xc-compliance:xc-eu-compliance`. To confirm installation, use `claude plugin list` and `claude plugin details xc-compliance`.

## What it does

The skill guides evidence-linked EU product-compliance reference analysis. The plugin connects to the public, read-only MCP endpoint:

`https://agent.xiaochucompliance.com/agent-tools/mcp`

Available tools: `search_legal_sources` and `search_risk_cases`. The library contains selected frozen sources and historical alerts; it does not automatically verify current law, certify products, approve market access, or guarantee clearance.

Send generic product/risk keywords or public source URLs only. Do not send customer files, identities, personal data, or confidential business details.

## Source synchronization

The bundled skill is copied from the repository's portable source at `skills/xc-eu-compliance/SKILL.md`. Update both copies together when changing the skill. The marketplace entry and plugin manifest must keep the same name.

## Status

This marketplace route is self-hosted through GitHub. Public repository availability enables installation but does not mean Anthropic has reviewed, endorsed, or listed this plugin. Real Claude Code client acceptance remains to be completed.
