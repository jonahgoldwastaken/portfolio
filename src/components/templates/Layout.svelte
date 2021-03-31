<script lang="ts">
  import Header from '../organisms/Header.svelte'
  import Footer from '../organisms/Footer.svelte'
  import type { Link } from '../../../types/link'

  export let heading = 'Jonah Meijers'
  export let links: Link[] = [
    { title: 'Home', href: '/' },
    // { title: 'E-Mail', href: 'mailto:jonahmeijers97@gmail.com' },
    { title: 'GitHub', href: 'https://github.com/theonejonahgold' },
  ]
</script>

<style lang="scss">
</style>

<Header {heading} {links} />
<slot />
<Footer />
