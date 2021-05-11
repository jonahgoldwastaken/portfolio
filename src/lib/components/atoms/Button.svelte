<script>
  export let type: 'button' | 'anchor' = 'button'
</script>

<style lang="scss">
  button {
    appearance: none;
    border: none;
    background: none;
  }

  a {
    all: unset;
    box-sizing: border-box;
    text-decoration: none;
  }

  button,
  a {
    display: inline-block;
    pointer-events: all;
    background: linear-gradient(
      to top right,
      var(--color-dark) 25%,
      var(--color-light)
    );
    color: var(--primary);
    font-weight: bold;
    border-radius: 12px;
    width: var(--width, auto);
    padding: var(--padding, var(--half-space) var(--base-space));
    text-align: center;
    font-size: var(--font-size, var(--step-0));
    transition: var(--interaction-transition);
    cursor: pointer;

    &:hover,
    &:focus {
      transform: translateY(-2px);
    }

    &:focus {
      outline: none;
    }
  }
</style>

{#if type === 'button'}
  <button on:click><slot /></button>
{:else}
  <!-- svelte-ignore a11y-missing-attribute -->
  <a on:click {...$$restProps}><slot /></a>
{/if}
