<script lang="ts">
  import Logo from '../atoms/Logo.svelte'
  import HeaderHeading from '../atoms/HeaderHeading.svelte'
  import Navigation from '../molecules/Navigation.svelte'
  import ThemeChooser from '../atoms/ThemeChooser.svelte'

  export let heading = ''
</script>

<style lang="scss">
  header {
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--double-space) 0;
    background: var(--secondary);
    transition: padding 0.2s ease-in-out;

    @media screen and (min-width: 60rem) {
      padding: var(--threefold-space) 0;
    }

    div {
      display: flex;
      align-items: center;
    }
  }
</style>

<header>
  <div>
    <Logo />
    <HeaderHeading>{heading}</HeaderHeading>
  </div>
  <div>
    <Navigation />
    <ThemeChooser />
  </div>
</header>
