export const ENDPOINT = 'https://agent.xiaochucompliance.com/agent-tools/mcp/deepseek'
export const SERVER_NAME = 'xc-compliance-deepseek'
export const EXPECTED_TOOLS = ['search_legal_sources', 'search_risk_cases']

export function inputConfig(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('XC_CONFIG_INVALID')
  if (Object.keys(value).some(key => !['enabled', 'endpoint'].includes(key))) throw new Error('XC_CONFIG_UNKNOWN_FIELD')
  if (value.enabled !== true) throw new Error('XC_DEDICATED_ENDPOINT_NOT_ENABLED')
  if (value.endpoint !== ENDPOINT) throw new Error('XC_DEDICATED_ENDPOINT_REQUIRED')
  return {
    serverName: SERVER_NAME,
    transport: 'streamable-http',
    url: ENDPOINT,
    headers: {},
    startupTimeoutMs: 20000,
    toolCallTimeoutMs: 30000,
    closeTimeoutMs: 5000,
    maxInstructionBytes: 32768,
    expandTemplates: false,
    failOnStartupError: true,
    reconnect: { enabled: false },
  }
}

// No custom tools or result conversion: the official client's complete contract
// (canonical values, isError, cancellation and effect-owned teardown) is retained.
export function makeApply(client) {
  return async function apply(ctx, config) {
    const resolved = client.Config(inputConfig(config))
    const controller = new AbortController()
    ctx.effect(() => () => controller.abort(), 'xc-deepseek.probe')
    // A finite, non-registering probe refuses unexpected tool catalogs before
    // activation. The accepted deployment must keep the same two-tool contract.
    const probe = await client.probeServer(ctx, resolved, { timeoutMs: 20000, maxPages: 2, maxToolNames: 3, signal: controller.signal })
    if (controller.signal.aborted) throw new Error('XC_ACTIVATION_ABORTED')
    if (!probe.closeConfirmed || probe.cleanupError) throw new Error('XC_PROBE_CLEANUP_FAILED')
    const names = [...(probe.toolNames ?? [])].sort()
    if (!probe.ok || probe.truncated || JSON.stringify(names) !== JSON.stringify(EXPECTED_TOOLS)) throw new Error('XC_TWO_TOOL_CONTRACT_REQUIRED')
    await client.apply(ctx, resolved)
  }
}
