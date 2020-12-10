<script>
  export let bold: boolean = false
</script>

<style>
  p {
    font-family: var(--font-running);
    line-height: 1.5em;
    font-size: var(--step-0);
  }

  p.bold {
    font-weight: bold;
  }
</style>

<p class:bold {...$$restProps}>
  <slot />
</p>
