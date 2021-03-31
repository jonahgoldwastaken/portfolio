<script lang="ts">
  import NavigationLink from '../atoms/NavigationLink.svelte'
  import type { Link } from '../../../types/link'
  export let links: Link[] = []
</script>

<style lang="scss">
  ul {
    list-style: none;
    display: grid;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    grid-gap: 0.75rem;
    margin: 0;
    padding: 0;
  }
</style>

<nav>
  <ul>
    {#each links as link (link.title)}
      <NavigationLink href={link.href}>{link.title}</NavigationLink>
    {/each}
  </ul>
</nav>
