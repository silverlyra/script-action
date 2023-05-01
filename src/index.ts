import {readFile} from 'fs/promises'
import fetch from 'node-fetch'
import 'node-get-random-values/phonyfill'

import * as artifact from '@actions/artifact'
import * as core from '@actions/core'
import * as exec from '@actions/exec'
import {getOctokit} from '@actions/github'
import * as glob from '@actions/glob'
import * as io from '@actions/io'

export {core, exec, glob, io}

export type Unknown = Record<string, unknown>

export async function run<T extends Unknown = Unknown>(
  context: T
): Promise<void> {
  const name = core.getInput('name')
  let script = core.getInput('script', {required: true})

  const resultEncoding =
    core.getInput('result-encoding') || process.env.INPUT_RESULT_ENCODING || ''
  if (!['json', 'string'].includes(resultEncoding))
    throw new Error(
      `result-encoding option must be either "string" or "json", not ${JSON.stringify(
        resultEncoding
      )}`
    )

  const cwd = core.getInput('cwd')
  if (cwd && cwd !== '.') {
    process.chdir(cwd)
  }

  if (scriptInputType(script) === 'path') {
    script = await readFile(script, 'utf-8')
  }

  try {
    const result = await execute(script, {
      ...defaultContext(core.getInput('github-token') || undefined),
      context
    })
    core.setOutput(
      'result',
      resultEncoding === 'json'
        ? JSON.stringify(result ?? null)
        : String(result ?? '')
    )
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error((err as Error).stack ?? err)
    core.setFailed(`Error in ${name}: ${err}`)
  }
}

export async function execute<T extends object>(
  source: string,
  context: T
): Promise<unknown> {
  const AsyncFunction = Object.getPrototypeOf(async () => null).constructor

  try {
    const impl: (...ctx: unknown[]) => Promise<unknown> = new AsyncFunction(
      ...Object.keys(context),
      source
    )
    return await impl(...Object.values(context))
  } catch (err) {
    core.error(err instanceof Error ? err : new Error(`${err}`))
    throw err
  }
}

export type Context<V extends object> = DefaultContext & V

export function defaultContext(githubToken?: string): DefaultContext {
  const github = githubToken ? getOctokit(githubToken) : null

  return {
    core,
    exec,

    fetch,

    artifact,
    github,
    glob,
    io
  }
}

export interface DefaultContext {
  core: typeof core
  exec: typeof exec

  fetch: typeof fetch

  artifact: typeof artifact
  github: ReturnType<typeof getOctokit> | null
  glob: typeof glob
  io: typeof io
}

export function scriptInputType(script: string): 'inline' | 'path' {
  const singleLine = !script.includes('\n')
  return singleLine && /[.][a-z]+sx?$/i.test(script) ? 'path' : 'inline'
}
