import type { EventPayloadMap, WebhookEvent } from '@octokit/webhooks-types';
export type EventName = keyof EventPayloadMap;
export type EventPayload<N extends EventName | unknown = unknown> = N extends EventName ? EventPayloadMap[N] : WebhookEvent;
export interface Event<N extends EventName = EventName> {
    name: N;
    data: EventPayload<N>;
}
export type { EventPayloadMap };
export declare function readEvent(): Promise<Event>;
