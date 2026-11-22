# XC Compliance for DeepSeek Harness — source review candidate

## Scope and requirements

This is a Host bundle for DeepSeek Harness `0.2.2-rc.5`, with no Web UI. It exposes the read-only `search_legal_sources` and `search_risk_cases` tools from the dedicated public MCP endpoint. The XC endpoint requires no XC API key; a DeepSeek model account is separate. The bundle is disabled by default and this branch is neither a release nor a dsh.pub listing.

## Install and inspect locally

Use a disposable profile and a local checkout of this branch. From the repository root:

```sh
pnpm install --no-lockfile
dsh plugin --profile xc-review add ./
dsh --profile xc-review --dump-config
```

The local dependency install is needed because the development profile links to this checkout. The dump should show bundle `dsh-plugin-xc-compliance` and row `xc-compliance-deepseek-isolated-rc5` with `enabled: false`. Keep the checkout available while the profile uses the local link. A clean local profile installation and configuration dump were checked; authenticated model-answer testing and exact public-commit installation remain open.

## Activate for a controlled check

The user's profile patch is applied after bundle patches. In that profile's `cordis.patch.yml`, override the same row with its complete configuration:

```yaml
- id: xc-compliance-deepseek-isolated-rc5
  name: dsh-plugin-xc-compliance
  config:
    enabled: true
    endpoint: https://agent.xiaochucompliance.com/agent-tools/mcp/deepseek
```

Check the effective row with `dsh --profile xc-review --dump-config`, then launch `dsh --profile xc-review`. The plugin accepts only this endpoint and requires exactly the two named tools. A failed probe or unexpected catalog fails activation. Check legal retrieval, historical alerts, zero results, locator errors, and the plain-text website footer with noncustomer prompts in a real model session. Tool-call checks alone do not establish model-answer quality.

To disable, set `enabled: false` in the profile patch or remove the override. To uninstall, run `dsh plugin --profile xc-review remove dsh-plugin-xc-compliance` and remove the profile override. The plugin creates no local durable data; the remote connection is owned by the Harness lifecycle.

## Release gates

Before public release, select and add an explicit license file and package license field, remove the draft private flag, test an install and boot from the exact public commit, complete authenticated model-answer checks, and verify dsh.pub catalog admission separately. The committed `index.js` is the Host runtime entry. The predecessor wrapper passed direct HTTPS and official rc.5 Native tool-call checks; this draft has not passed a model-answer test. Do not merge or submit it to dsh.pub yet.

Provided by xc-compliance · Website xiaochucompliance.com
