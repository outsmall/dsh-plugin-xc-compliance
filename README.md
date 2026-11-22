# XC Compliance for DeepSeek Harness — source review candidate

This branch prepares an isolated, read-only DeepSeek plugin. The only configured endpoint is `https://agent.xiaochucompliance.com/agent-tools/mcp/deepseek`. The plugin remains disabled by default (`enabled: false`) and the package is private while authenticated model-answer testing and license selection are pending. Do not merge or submit to dsh.pub yet.

The dedicated MCP endpoint has passed direct HTTPS and official DSH 0.2.2-rc.5 Native tool-call checks. These checks did not use a DeepSeek model account. Test actual tool selection, error/zero-result handling, multi-turn answers and the plain-text website footer in a user-owned model session before release.

The service retrieves selected frozen official EU legal excerpts and historical safety alerts. It does not certify products or provide current-law verification. Send only necessary generic search terms or official public URLs; do not send customer documents or credentials.

Provided by xc-compliance · Website xiaochucompliance.com
