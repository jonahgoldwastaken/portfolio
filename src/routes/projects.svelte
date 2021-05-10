<script context="module">
  import type { Load } from '@sveltejs/kit'
  import { fetchProjects } from '$lib/utils/projectList'

  export const load: Load = async function ({}) {
    const projects = await fetchProjects()
    return {
      props: {
        projects,
      },
    }
  }
</script>

<script>
  import ProjectList from '$lib/components/organisms/ProjectList.svelte'

  export let projects: ProjectMetadata[]
</script>

<svelte:head>
  <title>Projecten - Jonah Meijers</title>
  <meta
    name="descrtiption"
    content="De projecten waar ik aan werk en heb gewerkt."
  />
</svelte:head>

<ProjectList {projects} animate="both" />
