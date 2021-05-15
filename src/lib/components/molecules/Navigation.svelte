<script lang="ts">
  import Link from '../atoms/Link.svelte'
  import HorizontalList from './HorizontalList.svelte'
</script>

<style lang="scss">
  li {
    font-size: var(--step-0);

    :global(a) {
      --weight: normal;
    }
  }
</style>

<nav>
  <HorizontalList noWrap --margin="var(--quarter-space)">
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
      <Link href="mailto:jonahmeijers97@gmail.com">Contact</Link>
    </li>
    <li>
      <Link href="https://github.com/theonejonahgold">GitHub</Link>
    </li>
  </HorizontalList>
</nav>
