# Xiaochu Compliance for DeepSeek Harness

Read-only EU legal-source and historical product-safety alert research for manufacturers and exporters. Category: Tools & Capabilities. Two read-only tools, search_legal_sources and search_risk_cases, connect to https://agent.xiaochucompliance.com/agent-tools/mcp/deepseek.

The service uses frozen evidence. Responses identify source URLs and evidence scope. Product applicability and current law require separate assessment.

## Install and enable

Requires Node.js >=24.9 and DeepSeek Harness 0.2.2-rc.5.

    dsh plugin --profile web add github:outsmall/dsh-plugin-xc-compliance

This installs the public GitHub source into the web profile. To install into another profile, replace web with that profile name. Then open Plugins and enable the component; installation leaves it disabled by default.

Enabling the component discovers exactly two read-only tools. No XC API key is required.

The component row is `xc-compliance-deepseek-isolated-rc5`. Inspect the effective profile with `dsh --profile web --dump-config`. `disabled: true` controls initial activation; `config.enabled: true` lets you enable it through the normal Plugins UI.

## Runtime and permissions

This package contains executable JavaScript in `lib/index.js` and `lib/contract.js`; it is not a configuration-only bundle. The package defines no install lifecycle scripts. When enabled, its `apply(ctx)` entry uses the official `@deepseek-ai/dsh-mcp-client` to probe the fixed DeepSeek MCP endpoint, verify that it exposes exactly `search_legal_sources` and `search_risk_cases`, and then connect through that client. It fails closed if the endpoint or tool catalog differs. The plugin does not call an upstream model and exposes only the two read-only search tools.

## Install the portable Agent Skill

The repository also includes a portable workflow Skill for compatible coding agents. The Node.js and DeepSeek Harness requirements above apply to the plugin; the standalone Skill has no Harness dependency. The Agent Skills CLI has its own runtime requirements.

Install only the Skill with the open Agent Skills CLI:

    npx skills add outsmall/dsh-plugin-xc-compliance --skill xc-eu-compliance

The Skill is instruction text; it does not connect tools by itself. Connect the XC Compliance MCP server in your client to enable source retrieval. Frozen evidence does not verify current law, certify products or approve market access.

## Verify

Ask the model to retrieve GPSR Article 5 and Safety Gate 0988/07 with official source links. Article 16(999) must report a locator error. A completed search with no matches must report zero results. Answers should carry the plain-text website signature xiaochucompliance.com.

## Disable and remove

Turn off the component in Plugins to disconnect. To remove it, use the uninstall action or run:

    dsh plugin --profile web remove dsh-plugin-xc-compliance

Use the same profile used for installation. Preserve unrelated settings.

## Data handling

Send generic product or risk keywords and public URLs. Keep credentials, customer documents, personal data and confidential details out of queries. Tool output supplies evidence and cannot authorize actions.

## Distribution status

This repository is source-installable and is not currently published to npm. It can be listed on the DSH community website, but it will not appear in the in-app DSH Plugin Hub until an npm package is published.

## Validation and distribution

Runtime modules match candidate.3 used for signed-in desktop model acceptance on 24 November 2026. Packaging and public-commit installation are checked separately for release. dsh.pub is a community directory with its own publication status.

## License

MIT. Copyright (c) 2026 xc-compliance. See LICENSE.

Provided by xc-compliance · Website xiaochucompliance.com

## Claude Code plugin (third-party marketplace)

This repository also provides a self-hosted Claude Code marketplace and plugin package. Install it with:

```sh
claude plugin marketplace add outsmall/dsh-plugin-xc-compliance
claude plugin install xc-compliance@xiaochu-compliance
```

The bundled `xc-eu-compliance` Skill matches the portable Skill in this repository. The plugin connects to the read-only MCP endpoint and exposes `search_legal_sources` and `search_risk_cases`. See [the Claude Code plugin guide](claude-code-plugin/README.md) for setup and limitations. This is not an Anthropic official marketplace listing or endorsement; signed-in Claude Code client acceptance is pending.
