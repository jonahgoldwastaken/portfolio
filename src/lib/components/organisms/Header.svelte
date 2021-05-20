<script lang="ts">
  import { page } from '$app/stores'
  import Logo from '../atoms/Logo.svelte'
  import ThemeChooser from '../atoms/ThemeChooser.svelte'
  import Navigation from '../molecules/Navigation.svelte'

  let innerHeight: number

  $: transparent = $page.path.startsWith('/project/')
</script>

<style lang="scss">
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--secondary);
    z-index: 10;
    padding: var(--double-space) 0;

    &.transparent {
      background: linear-gradient(to bottom, #11181cff, #11181c00);
      position: absolute;
      left: 0;
      width: 100%;
      padding: var(--double-space) var(--base-space);
    }

    div {
      display: flex;
      align-items: center;
    }

    div:nth-child(2) {
      display: none;
    }

    @media screen and (min-width: 50rem) {
      &,
      &.transparent {
        position: fixed;
        top: 0;
        left: 0%;
        width: 100%;
        padding: var(--double-space) var(--quadruple-space);
      }

      div:nth-child(2) {
        display: flex;
      }
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
    <h1>Jonah Meijers</h1>
  </div>
  <div>
    <Navigation />
    <ThemeChooser />
  </div>
</header>
