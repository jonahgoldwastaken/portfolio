<script context="module">
  import type { Load } from '@sveltejs/kit'
  import { fetchProjects } from '$lib/utils/projectList'

  export const load: Load = async function ({}) {
    const projects = (await fetchProjects()).filter(
      project =>
        project.slug === 'triptop' ||
        project.slug === 'cube' ||
        project.slug === 'empower'
    )
    return {
      props: {
        projects,
      },
    }
  }
</script>

<script lang="ts">
  import ProjectListCTA from '$lib/components/molecules/ProjectListCTA.svelte'
  import AboutSection from '$lib/components/organisms/AboutSection.svelte'
  import Hero from '$lib/components/organisms/Hero.svelte'
  import ProjectList from '$lib/components/organisms/ProjectList.svelte'

  export let projects: ProjectMetadata[]
</script>

<style lang="scss">
  section :global(li:last-child a) {
    margin-top: var(--base-space);
  }
</style>

<svelte:head>
  <title>STAGE GEZOCHT - Jonah Meijers</title>
  <meta name="description" content="De portfolio van Jonah Meijers" />
</svelte:head>

<Hero />
<section>
  <h1>Werk waar ik trots op ben</h1>
  <ProjectList {projects} animate="list">
    <ProjectListCTA animate slot="cta" href="/projects">
      <svelte:fragment slot="heading">Maar dat was niet alles!</svelte:fragment>
      <svelte:fragment slot="button">Bekijk de rest</svelte:fragment>
    </ProjectListCTA>
  </ProjectList>
</section>
<AboutSection animate="image" />
