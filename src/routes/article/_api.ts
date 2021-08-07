export async function fetchArticles() {
  const modules = Object.values(import.meta.glob('./*.md'))
  const articles: ArticleMetadata[] = await Promise.all(
    modules.map(project =>
      project().then(({ metadata }: { metadata: ArticleMetadata }) => metadata)
    )
  )
  return articles.sort((a, b) =>
    a.index > b.index ? -1 : a.index === b.index ? 0 : 1
  )
}
