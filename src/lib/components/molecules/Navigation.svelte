<script lang="ts">
  import Link from '../atoms/Link.svelte'
</script>

<style lang="scss">
  ul {
    list-style: none;
    display: grid;
    grid-auto-columns: auto;
    grid-auto-flow: column;
    grid-gap: var(--half-space);
  }

  li {
    font-size: var(--step-0);

    :global(a) {
      --weight: normal;
    }
  }
</style>

<nav>
  <ul>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/projects">Projecten</Link>
    </li>
    <li>
      <Link href="/about">Over</Link>
    </li>
    <li>
      <Link href="https://github.com/theonejonahgold">GitHub</Link>
    </li>
  </ul>
</nav>
