<script lang="ts">
  import NavigationLink from '../atoms/NavigationLink.svelte'
  import type { Link } from '../../../types/link'

  const links: Link[] = [
    { title: 'Home', href: '/' },
    { title: 'Projecten', href: '/projects/' },
    { title: 'GitHub', href: 'https://github.com/theonejonahgold' },
  ]
</script>

<style lang="scss">
  ul {
    list-style: none;
    display: grid;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    grid-gap: var(--half-space);
    margin: 0;
    padding: 0;
  }
</style>

<nav>
  <ul>
    <NavigationLink href="/">Home</NavigationLink>
    <NavigationLink href="/projects/">Projecten</NavigationLink>
    <NavigationLink href="/about/">Over</NavigationLink>
    <NavigationLink href="https://github.com/theonejonahgold">
      GitHub
    </NavigationLink>
  </ul>
</nav>
