import {Octokit} from '@octokit/core'
import {restEndpointMethods} from '@octokit/plugin-rest-endpoint-methods'
import {paginateRest} from '@octokit/plugin-paginate-rest'

export const Github = Octokit.plugin(
  restEndpointMethods,
  paginateRest
).defaults({
  baseUrl: process.env.GITHUB_API_URL || 'https://api.github.com'
})

export type Github = InstanceType<typeof Github>
