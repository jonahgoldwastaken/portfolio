<script context="module">
  import { fetchProjects } from '$lib/utils/projectList'
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async function ({}) {
    const projects = (await fetchProjects()).filter(
      project =>
        project.slug === 'triptop' ||
        project.slug === 'empower' ||
        project.slug === 'bbwal' ||
        project.slug === 'cube'
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
  @media screen and (min-width: 120rem) {
    section :global(li:last-child) {
      grid-column: 3;
      margin-top: -20rem;
    }
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
