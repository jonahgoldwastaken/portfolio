<script context="module">
  import type { Load } from '@sveltejs/kit'

  const projects = Object.entries(import.meta.glob('./project/*.md'))

  const body: Promise<TileProject>[] = projects.map(([_, project]) =>
    project().then(({ metadata }: { metadata: TileProject }) => metadata)
  )

  export const load: Load = async function ({}) {
    const projects = await Promise.all(body)
    return {
      props: {
        projects,
      },
    }
  }
</script>

<script lang="ts">
  import '../app.scss'
  import Header from '$lib/components/organisms/Header.svelte'
  import Footer from '$lib/components/organisms/Footer.svelte'
  import { page } from '$app/stores'
  import { onMount } from 'svelte'
  import { projectsStore } from '$lib/stores/projects'

  export let heading = 'Jonah Meijers'
  $: headerPadding = $page.path !== '/'

  export let projects: TileProject[]

  onMount(() => projectsStore.set(projects))
</script>

<svelte:head>
  {#if headerPadding}
    <style>
      #svelte {
        padding-top: calc(69px + (var(--double-space) * 2));
      }

      @media screen and (min-width: 90rem) {
        #svelte {
          padding-top: calc(69px + (var(--quadruple-space) * 2));
        }
      }
    </style>
  {/if}
</svelte:head>

<Header {heading} />
<slot />
<Footer />
