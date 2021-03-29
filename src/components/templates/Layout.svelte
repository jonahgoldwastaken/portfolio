<script>
  import { fade } from 'svelte/transition'
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

<style>
  div:not(.content) {
    position: absolute;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 var(--step-2);

    @media screen and (min-width: 60rem) {
      padding: 0 var(--step-4);
    }
  }

  .content {
    background: var(--secondary);
  }
</style>

<div>
  <Header {heading} {links} />
  <div in:fade={{ duration: 150 }} out:fade={{ duration: 150 }} class="content">
    <slot />
    <Footer />
  </div>
</div>
