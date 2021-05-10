<script lang="ts">
  import Home from '$lib/components/templates/Home.svelte'
  import { headerSettings } from '$lib/stores/header'
  import { onMount } from 'svelte'

  onMount(() => {
    headerSettings.set({
      compact: false,
      padding: false,
      transparent: false,
    })
  })

</script>

<svelte:head>
  <title>Jonah Meijers</title>
  <meta name="description" content="De portfolio van Jonah Meijers" />
</svelte:head>

<Home />
