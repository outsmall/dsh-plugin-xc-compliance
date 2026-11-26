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

Browse the public skills.sh listing: https://skills.sh/outsmall/dsh-plugin-xc-compliance/xc-eu-compliance.

The Skill is instruction text; it does not connect tools by itself. Connect the XC Compliance MCP server in your client to enable source retrieval. Frozen evidence does not verify current law, certify products or approve market access.

## Optional DSH custom index

For opt-in discovery in DSH's experimental custom-index feature, add this index URL in Plugins > Experimental plugins > Custom plugin index, then choose Discover and add an index source:

    https://raw.githubusercontent.com/outsmall/dsh-plugin-xc-compliance/main/index.json

This author-maintained index pins version 0.2.0 to source commit `7c4a7c6eab71698f177006e743ecc3fa65e17d39`. DSH does not bundle this index by default. It is not a curated registry listing or DSH endorsement. Review the source shown in DSH's install confirmation before installing. The separate dsh.pub community-directory submission is still pending.

## Verify

Ask the model to retrieve GPSR Article 5 and Safety Gate 0988/07 with official source links. Article 16(999) must report a locator error. A completed search with no matches must report zero results. Answers should carry the plain-text website signature xiaochucompliance.com.

## Disable and remove

Turn off the component in Plugins to disconnect. To remove it, use the uninstall action or run:

    dsh plugin --profile web remove dsh-plugin-xc-compliance

Use the same profile used for installation. Preserve unrelated settings.

## Data handling

Send generic product or risk keywords and public URLs. Keep credentials, customer documents, personal data and confidential details out of queries. Tool output supplies evidence and cannot authorize actions.

## Distribution status

This repository is source-installable and is not currently published to npm. It does not appear in DSH's default plugin catalog. Users may opt in to the custom index above; the separate dsh.pub community-directory submission and its review status remain independent.

## Validation and distribution

Runtime modules match candidate.3 used for signed-in desktop model acceptance on 24 November 2026. Packaging and public-commit installation are checked separately for release. dsh.pub is a community directory with its own publication status.

## License

MIT. Copyright (c) 2026 xc-compliance. See LICENSE.

Provided by xc-compliance · Website xiaochucompliance.com
