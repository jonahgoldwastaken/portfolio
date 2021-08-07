export async function fetchProjects() {
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
