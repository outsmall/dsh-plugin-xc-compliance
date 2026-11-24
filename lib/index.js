import z from '@deepseek-ai/schemastery'
import * as client from '@deepseek-ai/dsh-mcp-client'
import { ENDPOINT, makeApply } from './contract.js'

export const name = 'xc-compliance-deepseek-isolated'
export const inject = ['tools']
export const Config = z.object({ enabled: z.boolean().default(false), endpoint: z.string().default(ENDPOINT) })
// Async by design: Cordis must await initial probe and tool discovery.
export const apply = makeApply(client)
