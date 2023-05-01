import fetch from 'node-fetch';
import * as artifact from '@actions/artifact';
import * as core from '@actions/core';
import * as exec from '@actions/exec';
import { getOctokit } from '@actions/github';
import * as glob from '@actions/glob';
import * as io from '@actions/io';
export { core, exec, glob, io };
export type Unknown = Record<string, unknown>;
export declare function run<T extends Unknown = Unknown>(context: T): Promise<void>;
export declare function execute<T extends object>(source: string, context: T): Promise<unknown>;
export type Context<V extends object> = DefaultContext & V;
export declare function defaultContext(githubToken?: string): DefaultContext;
export interface DefaultContext {
    input: unknown;
    env: typeof process.env;
    core: typeof core;
    exec: typeof exec;
    fetch: typeof fetch;
    artifact: typeof artifact;
    github: ReturnType<typeof getOctokit> | null;
    glob: typeof glob;
    io: typeof io;
}
export declare function scriptInputType(script: string): 'inline' | 'path';
