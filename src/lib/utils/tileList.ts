export async function fetchProjects() {
  const modules = Object.values(import.meta.glob('../../routes/project/*.md'))
  const projects: ArticleMetadata[] = await Promise.all(
    modules.map(project =>
      project().then(({ metadata }: { metadata: ArticleMetadata }) => metadata)
    )
  )
  return projects.sort((a, b) =>
    a.index > b.index ? -1 : a.index === b.index ? 0 : 1
  )
}

export async function fetchSingleProject(name: string) {
  const { metadata }: { metadata: ArticleMetadata } = await import(
    `../../routes/project/${name}.md`
  )
  return metadata
}

export async function fetchArticles() {
  const modules = Object.values(import.meta.glob('../../routes/article/*.md'))
  const projects: ArticleMetadata[] = await Promise.all(
    modules.map(project =>
      project().then(({ metadata }: { metadata: ArticleMetadata }) => metadata)
    )
  )
  return projects.sort((a, b) =>
    a.index > b.index ? -1 : a.index === b.index ? 0 : 1
  )
}

export async function fetchSingleArticle(name: string) {
  const { metadata }: { metadata: ArticleMetadata } = await import(
    `../../routes/article/${name}.md`
  )
  return metadata
}
