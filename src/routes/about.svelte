<script>
  import AboutSection from '$lib/components/organisms/AboutSection.svelte'
  import { headerSettings } from '$lib/stores/header'
  import { onMount } from 'svelte'

  onMount(() => {
    headerSettings.set({
      compact: false,
      padding: true,
      transparent: false,
    })
  })

</script>

<svelte:head>
  <title>Over - Jonah Meijers</title>
  <meta
    name="description"
    content="Over Jonah Meijers, waar hij vandaan komt, wat hij doet en waar hij zich mee bezig houdt."
  />
</svelte:head>

<AboutSection animate="both" />
