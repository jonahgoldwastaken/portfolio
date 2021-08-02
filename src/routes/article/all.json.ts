import type { RequestHandler } from '@sveltejs/kit'

export const get: RequestHandler<
  Record<string, any>,
  undefined,
  ArticleMetadata[]
> = async () => ({
  status: 200,
  body: await fetchArticles(),
})

async function fetchArticles() {
  const modules = Object.values(import.meta.glob('./*.md'))
  const projects: ArticleMetadata[] = await Promise.all(
    modules.map(project =>
      project().then(({ metadata }: { metadata: ArticleMetadata }) => metadata)
    )
  )
  return projects.sort((a, b) =>
    a.index > b.index ? -1 : a.index === b.index ? 0 : 1
  )
}
