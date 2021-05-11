<script lang="ts">
  import Logo from '../atoms/Logo.svelte'
  import Navigation from '../molecules/Navigation.svelte'
  import ThemeChooser from '../atoms/ThemeChooser.svelte'
  import { page } from '$app/stores'

  export let heading = ''
  let innerHeight: number

  $: transparent = $page.path.startsWith('/project/')
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
      padding: var(--double-space) var(--quadruple-space);
    }

    div {
      display: flex;
      align-items: center;
    }
  }

  h1 {
    font-weight: bold;
    font-size: var(--step-1);
    font-family: var(--font-heading);
    white-space: nowrap;
  }
</style>

<svelte:window bind:innerHeight />

<header class:transparent>
  <div>
    <Logo />
    <h1>{heading}</h1>
  </div>
  <div>
    <Navigation />
    <ThemeChooser />
  </div>
</header>
