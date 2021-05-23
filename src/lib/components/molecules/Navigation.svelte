<script lang="ts">
  import HorizontalList from './HorizontalList.svelte'
</script>

<style lang="scss">
  nav {
    @media (pointer: coarse), (pointer: fine) and (max-width: 40rem) {
      display: none;
    }
  }

  :global {
    li {
      font-size: var(--step-0);

      a {
        --weight: normal;
      }
    }
  }
</style>

<nav>
  <HorizontalList noWrap --margin="var(--quarter-space)">
    <slot />
  </HorizontalList>
</nav>
