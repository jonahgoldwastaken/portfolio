import type { RequestHandler } from '@sveltejs/kit'

export const get: RequestHandler<null, null, ArticleMetadata[]> = async ({
  query,
}) => {
  const articleNames = query.getAll('articles')
  try {
    return {
      status: 200,
      body: await Promise.all(articleNames.map(fetchSingleArticle)),
    }
  } catch (err) {
    return {
      status: 400,
      body: err,
    }
  }
}

async function fetchSingleArticle(name: string) {
  const { metadata }: { metadata: ArticleMetadata } = await import(
    `./${name}.md`
  )
  return metadata
}
