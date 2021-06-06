<script context="module">
  import { fetchSingleProject } from '$lib/utils/tileList'
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async function ({}) {
    const items = await Promise.all([
      fetchSingleProject('devex'),
      fetchSingleProject('cube'),
      fetchSingleProject('triptop'),
      fetchSingleProject('empower'),
      fetchSingleProject('bbwal'),
    ])

    return {
      props: {
        items,
      },
    }
  }
</script>

<script lang="ts">
  import ProjectListCTA from '$lib/components/molecules/TileListCTA.svelte'
  import Hero from '$lib/components/organisms/Hero.svelte'
  import ProjectList from '$lib/components/organisms/TileList.svelte'

  export let items: ArticleMetadata[]
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
  <ProjectList {items} animate="list">
    <ProjectListCTA slot="cta" animate href="/projects">
      <svelte:fragment slot="heading">Maar dat was niet alles!</svelte:fragment>
      <svelte:fragment slot="button">Bekijk de rest</svelte:fragment>
    </ProjectListCTA>
  </ProjectList>
</section>
