import { Octokit } from '@octokit/core';
export declare const Github: typeof Octokit & import("@octokit/core/dist-types/types").Constructor<import("@octokit/plugin-rest-endpoint-methods/dist-types/types").Api & {
    paginate: import("@octokit/plugin-paginate-rest").PaginateInterface;
}>;
export type Github = InstanceType<typeof Github>;
