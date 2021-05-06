<script lang="ts">
  import Logo from '../atoms/Logo.svelte'
  import HeaderHeading from '../atoms/HeaderHeading.svelte'
  import Navigation from '../molecules/Navigation.svelte'
  import ThemeChooser from '../atoms/ThemeChooser.svelte'

  export let heading = ''
  let scrollY: number
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
    padding: var(--double-space) var(--double-space);
    background: var(--secondary);
    transition: padding 0.2s var(--easing);

    @media screen and (min-width: 60rem) {
      padding: var(--threefold-space) var(--quadruple-space);
    }

    &.scrolled {
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
</style>

<svelte:window bind:scrollY bind:innerHeight />

<header class:scrolled={scrollY > innerHeight / 10}>
  <div>
    <Logo />
    <HeaderHeading>{heading}</HeaderHeading>
  </div>
  <div>
    <Navigation />
    <ThemeChooser />
  </div>
</header>
