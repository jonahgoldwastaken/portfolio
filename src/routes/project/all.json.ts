import type { RequestHandler } from '@sveltejs/kit'
import { fetchProjects } from './_api'

export const get: RequestHandler<
  Record<string, any>,
  undefined,
  ArticleMetadata[]
> = async () => ({
  status: 200,
  body: await fetchProjects(),
})
