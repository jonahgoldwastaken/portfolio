<script context="module">
  import type { Load } from '@sveltejs/kit'

  const projects = Object.entries(import.meta.glob('./project/*.md'))

  const body: Promise<ProjectMetadata>[] = projects.map(([_, project]) =>
    project().then(({ metadata }: { metadata: ProjectMetadata }) => metadata)
  )

  export const load: Load = async function ({}) {
    const projects = (await Promise.all(body)).sort((a, b) =>
      a.index > b.index ? -1 : a.index === b.index ? 0 : 1
    )
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
  import { onDestroy, onMount } from 'svelte'
  import { projectsStore } from '$lib/stores/projects'
  import { headerSettings } from '$lib/stores/header'
  import { browser } from '$app/env'

  export let heading = 'Jonah Meijers'

  export let projects: ProjectMetadata[]

  onMount(() => projectsStore.set(projects))

  const unsubscribe = headerSettings.subscribe(val => {
    if (!browser) return
    document.body.classList[val.padding ? 'add' : 'remove']('header-padding')
  })

  onDestroy(unsubscribe)
</script>

<Header {heading} />
<slot />
<Footer />
