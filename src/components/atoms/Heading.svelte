<script>
  type HeadingType = 'h1' | 'h2' | 'h3'

  export let type: HeadingType = 'h1'
</script>

<style>
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    --font-weight: 700;
    --font-size: var(--step-5);
    font: var(--font-weight) var(--font-size) Raleway, sans-serif;
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
