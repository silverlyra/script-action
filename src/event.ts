import {readFile} from 'fs/promises'

import type {EventPayloadMap, WebhookEvent} from '@octokit/webhooks-types'

export type EventName = keyof EventPayloadMap
export type EventPayload<N extends EventName | unknown = unknown> =
  N extends EventName ? EventPayloadMap[N] : WebhookEvent

export interface Event<N extends EventName = EventName> {
  name: N
  data: EventPayload<N>
}

export type {EventPayloadMap}

export async function readEvent(): Promise<Event> {
  const name = env('GITHUB_EVENT_NAME') as EventName
  const data = JSON.parse(await readFile(env('GITHUB_EVENT_PATH'), 'utf-8'))

  return {name, data}
}

function env(name: string): string {
  const value = process.env[name]

  if (typeof value !== 'string') throw new Error(`$${name} is not set`)
  if (!value) throw new Error(`$${name} is empty`)

  return value
}
