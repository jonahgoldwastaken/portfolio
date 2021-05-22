<script>
  export let ordered = false
  export let markers = true
</script>

<style>
  ol,
  ul {
    &:not(.markers) {
      list-style: none;
      padding: 0;
    }
  }
</style>

{#if ordered}
  <ol class:markers>
    <slot />
  </ol>
{:else}
  <ul class:markers>
    <slot />
  </ul>
{/if}
