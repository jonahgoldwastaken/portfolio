<script lang="ts">
  type HeadingType = 'h1' | 'h2' | 'h3'

  export let type: HeadingType = 'h1'
</script>

<style lang="scss">
  h1,
  h2,
  h3 {
    --font-weight: 700;
    --font-size: var(--step-5);
    font-weight: var(--font-weight);
    font-size: var(--font-size);
    font-family: var(--font-heading);
    letter-spacing: -1pt;
    margin: 0;
  }

  h2 {
    --font-weight: 700;
    --font-size: var(--step-4);
  }

  h3 {
    --font-weight: 500;
    --font-size: var(--step-3);
  }
</style>

{#if type === 'h2'}
  <h2 {...$$restProps}>
    <slot />
  </h2>
{:else if type === 'h3'}
  <h3 {...$$restProps}>
    <slot />
  </h3>
{:else}
  <h1 {...$$restProps}>
    <slot />
  </h1>
{/if}
