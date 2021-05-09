<script>
  import ProjectList from '$lib/components/organisms/ProjectList.svelte'
  import { headerSettings } from '$lib/stores/header'
  import { onMount } from 'svelte'

  export const padding = true

  onMount(() => {
    headerSettings.set({
      compact: false,
      padding: true,
      transparent: false,
    })
  })
</script>

<svelte:head>
  <title>Projecten - Jonah Meijers</title>
</svelte:head>

<ProjectList animate="both" />
