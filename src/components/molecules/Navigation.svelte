<script>
  import NavigationLink from '../atoms/NavigationLink.svelte'
  const links = [
    {
      title: 'E-Mail',
      href: 'mailto:jonahmeijers97@gmail.com',
    },
    {
      title: 'GitHub',
      href: 'https://github.com/theonejonahgold',
    },
  ]
</script>

<style>
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
