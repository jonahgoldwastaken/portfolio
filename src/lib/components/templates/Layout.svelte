<script lang="ts">
  import Header from '../organisms/Header.svelte'
  import Footer from '../organisms/Footer.svelte'

  export let heading = 'Jonah Meijers'
</script>

<style lang="scss">
</style>

<Header {heading} />
<slot />
<Footer />
