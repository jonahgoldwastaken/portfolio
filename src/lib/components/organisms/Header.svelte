<script lang="ts">
  import Logo from '../atoms/Logo.svelte'
  import Navigation from '../molecules/Navigation.svelte'
  import ThemeChooser from '../atoms/ThemeChooser.svelte'
  import { headerSettings } from '$lib/stores/header'
  import { raf } from '$lib/actions/requestAnimationFrame'

  export let heading = ''
  let scrolled = false
  let innerHeight: number

</script>

<style lang="scss">
  header {
    position: fixed;
    top: 0;
    left: 0%;
    width: 100%;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--double-space);
    background: var(--secondary);
    transition: padding 0.2s var(--easing);

    &.transparent {
      background: linear-gradient(to bottom, #11181cff, #11181c00);
    }

    @media screen and (min-width: 60rem) {
      padding: var(--threefold-space) var(--quadruple-space);
    }

    &.scrolled,
    &.compact {
      padding: var(--base-space) var(--double-space);

      @media screen and (min-width: 60rem) {
        padding: var(--base-space) var(--quadruple-space);
      }
    }

    div {
      display: flex;
      align-items: center;
    }
  }

  h1 {
    font-weight: bold;
    font-size: var(--step-0);
    font-family: var(--font-heading);
    white-space: nowrap;
  }

</style>

<svelte:window bind:innerHeight />

<header
  use:raf={{
    animate: true,
    cb: () => {
      if (window.pageYOffset > innerHeight / 10) {
        scrolled = true
        return
      }
      scrolled = false
    },
  }}
  class:transparent={$headerSettings.transparent}
  class:compact={$headerSettings.compact}
  class:scrolled
>
  <div>
    <Logo />
    <h1>{heading}</h1>
  </div>
  <div>
    <Navigation />
    <ThemeChooser />
  </div>
</header>
