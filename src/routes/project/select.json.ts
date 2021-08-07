import type { RequestHandler } from '@sveltejs/kit'
import { fetchProjects } from './_api'

export const get: RequestHandler<null, string[], ArticleMetadata[]> = async ({
  query,
}) => {
  const projectNames = query.getAll('projects')
  try {
    return {
      status: 200,
      body: await fetchSelectProjects(projectNames),
    }
  } catch (err) {
    return {
      status: 400,
      body: err,
    }
  }
}

async function fetchSelectProjects(names: string[]) {
  const projects = await fetchProjects()
  console.log(projects)
  return projects.filter(project =>
    names.includes(project.slug.replace('project/', ''))
  )
}
