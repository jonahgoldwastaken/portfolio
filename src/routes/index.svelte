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

<script lang="ts">
  import AboutSection from '$lib/components/organisms/AboutSection.svelte'
  import Hero from '$lib/components/organisms/Hero.svelte'
  import ProjectList from '$lib/components/organisms/ProjectList.svelte'

  export let projects: ProjectMetadata[]
</script>

<svelte:head>
  <title>Jonah Meijers</title>
  <meta name="description" content="De portfolio van Jonah Meijers" />
</svelte:head>

<Hero />
<ProjectList {projects} animate="list" />
<AboutSection animate="image" />
