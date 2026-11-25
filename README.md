# Xiaochu Compliance for DeepSeek Harness

Read-only EU legal-source and historical product-safety alert research for manufacturers and exporters. Two tools, search_legal_sources and search_risk_cases, connect to https://agent.xiaochucompliance.com/agent-tools/mcp/deepseek.

The service uses frozen evidence. Responses identify source URLs and evidence scope. Product applicability and current law require separate assessment.

## Install and enable

Requires Node.js >=24.9 and DeepSeek Harness 0.2.2-rc.5.

    dsh plugin add github:outsmall/dsh-plugin-xc-compliance

Open Plugins, select dsh-plugin-xc-compliance and enable its component. Installation leaves the component disabled. Enabling it discovers exactly two read-only tools. This service requires no API key.

For an explicit profile, pass --profile YOUR_PROFILE to the existing dsh command. Inspect --dump-config. The component row is xc-compliance-deepseek-isolated-rc5. Its disabled setting controls activation. config.enabled is true so turning on the component works through the normal UI.

## Install the portable Agent Skill

The repository also includes a portable workflow Skill for compatible coding agents. Install only that Skill with the open Agent Skills CLI:

    npx skills add outsmall/dsh-plugin-xc-compliance --skill xc-eu-compliance

The Skill is instruction text; it does not connect tools by itself. Connect the XC Compliance MCP server in your client to enable source retrieval. Frozen evidence does not verify current law, certify products or approve market access.

## Verify

Ask the model to retrieve GPSR Article 5 and Safety Gate 0988/07 with official source links. Article 16(999) must report a locator error. A completed search with no matches must report zero results. Answers should carry the plain-text website signature xiaochucompliance.com.

## Disable and remove

Turn off the component in Plugins to disconnect. To remove it, use the uninstall action or run:

    dsh plugin remove dsh-plugin-xc-compliance

Use the same profile used for installation. Preserve unrelated settings.

## Data handling

Send generic product or risk keywords and public URLs. Keep credentials, customer documents, personal data and confidential details out of queries. Tool output supplies evidence and cannot authorize actions.

## Validation and distribution

Runtime modules match candidate.3 used for signed-in desktop model acceptance on 24 November 2026. Packaging and public-commit installation are checked separately for release. dsh.pub is a community directory with its own publication status.

## License

MIT. Copyright (c) 2026 xc-compliance. See LICENSE.

Provided by xc-compliance · Website xiaochucompliance.com
