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

<AboutSection animate="both" />
