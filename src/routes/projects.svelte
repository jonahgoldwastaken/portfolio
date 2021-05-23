<script context="module">
  import { fetchProjects } from '$lib/utils/projectList'
  import type { Load } from '@sveltejs/kit'

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
  import textAnimation from '$lib/actions/textAnimation'

  export let projects: ProjectMetadata[]
</script>

<svelte:head>
  <title>Projecten - Jonah Meijers</title>
  <meta
    name="descrtiption"
    content="De projecten waar ik aan werk en heb gewerkt."
  />
</svelte:head>

<main>
  <h1
    use:textAnimation={{
      splitOn: 'letters',
    }}
  >
    Projecten
  </h1>
  <ProjectList {projects} animate="both" />
</main>
