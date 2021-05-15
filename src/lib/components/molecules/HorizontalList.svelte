<script>
  export let noWrap = false
</script>

<style lang="scss">
  ul {
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    width: calc(2 * var(--margin, var(--half-space)) + 100%);
    margin: 0 0 0 calc(var(--margin, var(--half-space)) * -1);
    padding: 0;

    &.no-wrap {
      flex-flow: row nowrap;

      :global(li) {
        margin-top: 0;
        margin-bottom: 0;
      }
    }

    :global(li) {
      margin: var(--margin, var(--half-space));
    }
  }
</style>

<ul class:no-wrap={noWrap}>
  <slot />
</ul>
