<script>
  import { fly } from 'svelte/transition'
  import Header from '../organisms/Header.svelte'
  import type { Link } from '../../../types/link'

  export let heading = 'Jonah Meijers'
  export let links: Link[] = [
    { title: 'Home', href: '/' },
    { title: 'E-Mail', href: 'mailto:jonahmeijers97@gmail.com' },
    { title: 'GitHub', href: 'https://github.com/theonejonahgold' },
  ]
</script>

<style>
  div:not(.content) {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0 var(--step-2);

    @media screen and (min-width: 60rem) {
      padding: 0 var(--step-4);
    }
  }
</style>

<div>
  <Header {heading} {links} />
  <div
    in:fly={{ duration: 200, y: 20 }}
    out:fly={{ duration: 200, y: -20 }}
    class="content"
  >
    <slot />
  </div>
</div>
