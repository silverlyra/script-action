import * as fs from 'fs/promises'
import fetch from 'node-fetch'
import 'node-get-random-values/phonyfill'

import * as artifact from '@actions/artifact'
import * as core from '@actions/core'
import * as exec from '@actions/exec'
import * as glob from '@actions/glob'
import * as io from '@actions/io'
import chalk from 'chalk'

import {Github} from './github'

export {core, exec, glob, io}

export type Unknown = Record<string, unknown>

export async function run<T extends Unknown = Unknown>(
  context: T
): Promise<void> {
  const name = core.getInput('name')
  let script = core.getInput('script', {required: true})

  const resultEncoding = validateEncoding(
    'result',
    core.getInput('result-encoding') || process.env.INPUT_RESULT_ENCODING || ''
  )

  const cwd = core.getInput('cwd')
  if (cwd && cwd !== '.') {
    process.chdir(cwd)
  }

  if (scriptInputType(script) === 'path') {
    script = await fs.readFile(script, 'utf-8')
  }

  try {
    const result = await execute(script, {
      ...defaultContext(core.getInput('github-token') || undefined),
      ...context
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
  const inputEncoding = validateEncoding(
    'input',
    core.getInput('input-encoding') || process.env.INPUT_INPUT_ENCODING || ''
  )
  const inputRaw = core.getInput('input')

  const input =
    inputEncoding === 'json' ? JSON.parse(inputRaw || 'null') : inputRaw

  const github = githubToken ? new Github({auth: `token ${githubToken}`}) : null

  return {
    input,
    env: process.env,
    shell,

    fs,
    chalk,

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
  input: unknown
  env: typeof process.env
  shell: typeof shell

  fs: typeof fs
  chalk: typeof chalk

  core: typeof core
  exec: typeof exec
  fetch: typeof fetch

  artifact: typeof artifact
  github: Github | null
  glob: typeof glob
  io: typeof io
}

export function shell(
  command: string | string[],
  options?: exec.ExecOptions
): Promise<number>
export function shell(
  command: string | string[],
  options: {capture: true} & exec.ExecOptions
): Promise<exec.ExecOutput>
export async function shell(
  command: string | string[],
  options?: {capture?: true} & exec.ExecOptions
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> {
  const cmd = Array.isArray(command) ? command[0] : command
  const args: string[] | undefined = Array.isArray(command)
    ? command.slice(1)
    : undefined
  const capture = !!options?.capture

  return capture
    ? exec.getExecOutput(cmd, args, options)
    : exec.exec(cmd, args, options)
}

export function scriptInputType(script: string): 'inline' | 'path' {
  const singleLine = !script.includes('\n')
  return singleLine && /[.][a-z]+sx?$/i.test(script) ? 'path' : 'inline'
}

function validateEncoding(field: string, encoding: string): 'json' | 'string' {
  if (!['json', 'string'].includes(encoding))
    throw new Error(
      `${field}-encoding option must be either "string" or "json", not ${JSON.stringify(
        encoding
      )}`
    )

  return encoding as 'json' | 'string'
}
