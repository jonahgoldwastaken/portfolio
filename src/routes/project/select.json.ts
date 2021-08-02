import type { RequestHandler } from '@sveltejs/kit'

export const get: RequestHandler<null, string[], ArticleMetadata[]> = async ({
  query,
}) => {
  const projectNames = query.getAll('projects')
  try {
    return {
      status: 200,
      body: await Promise.all(projectNames.map(fetchSingleProject)),
    }
  } catch (err) {
    return {
      status: 400,
      body: err,
    }
  }
}

async function fetchSingleProject(name: string) {
  const { metadata }: { metadata: ArticleMetadata } = await import(
    `./${name}.md`
  )
  return metadata
}
