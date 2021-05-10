export async function fetchProjects() {
  const modules = Object.entries(import.meta.glob('../../routes/project/*.md'))
  const projects: ProjectMetadata[] = await Promise.all(
    modules.map(([_, project]) =>
      project().then(({ metadata }: { metadata: ProjectMetadata }) => metadata)
    )
  )
  return projects.sort((a, b) =>
    a.index > b.index ? -1 : a.index === b.index ? 0 : 1
  )
}
