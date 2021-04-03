<script lang="ts">
  import { browser } from '$app/env'

  let light =
    browser && document.body.classList.contains('blue')
      ? 'var(--yellow)'
      : 'var(--light-blue)'
  let dark =
    browser && document.body.classList.contains('blue')
      ? 'var(--orange)'
      : 'var(--blue)'

  function changThemeColour() {
    if (!browser) return
    document.body.classList.toggle('blue')
    if (document.body.classList.contains('blue')) {
      light = 'var(--yellow)'
      dark = 'var(--orange)'
      return
    }
    light = 'var(--light-blue)'
    dark = 'var(--blue)'
  }
</script>

<style lang="scss">
  button {
    appearance: none;
    border: none;
    width: var(--step-0);
    height: var(--step-0);
    border-radius: 50%;
    overflow: hidden;
    color: transparent;
    user-select: none;
    background: linear-gradient(to bottom left, var(--light), var(--dark));
    margin-left: var(--base-space);
    cursor: pointer;
    transition: transform 0.1s ease;

    &:hover {
      transform: translateY(-2px);
    }

    &:active {
      transform: scale(0.9) translateY(-2px);
    }

    &:focus {
      outline: none;
      border: var(--focus-border);
      transform: translateY(-2px);
    }
  }
</style>

<button on:click={changThemeColour} style="--light: {light}; --dark: {dark};"
  >Change theme</button
>
