<script lang="ts">
  import { page } from '$app/stores'
  import HamburgerNav from '$lib/components/molecules/HamburgerNav.svelte'
  import Link from '../atoms/Link.svelte'
  import Logo from '../atoms/Logo.svelte'
  import ThemeChooser from '../atoms/ThemeChooser.svelte'
  import Navigation from '../molecules/Navigation.svelte'

  let innerHeight: number

  $: transparent = $page.path.startsWith('/project/') || $page.path.startsWith(‘/article/‘)
</script>

<style lang="scss">
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--secondary);
    z-index: 10;
    padding: var(--base-space) 0;

    &.transparent {
      background: linear-gradient(to bottom, #11181cff, #11181c00);
      position: absolute;
      left: 0;
      width: 100%;
      padding: var(--base-space);
    }

    div {
      display: flex;
      align-items: center;
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
    }
  }

  h1 {
    font-weight: bold;
    font-size: var(--step-1);
    font-family: var(--font-heading);
    white-space: nowrap;
    color: transparent;

    @media screen and (min-width: 50rem) {
      color: var(--primary);
    }
  }
</style>

<svelte:window bind:innerHeight />

<header class:transparent>
  <div>
    <Logo />
    <h1>Jonah Meijers</h1>
  </div>
  <div>
    <Navigation>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/projects">Projecten</Link>
      </li>
      <li>
        <Link href="/about">Over</Link>
      </li>
      <li>
        <Link href="#contact">Contact</Link>
      </li>
    </Navigation>
    <HamburgerNav>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/projects">Projecten</Link>
      </li>
      <li>
        <Link href="/about">Over</Link>
      </li>
      <li>
        <Link href="#contact">Contact</Link>
      </li>
    </HamburgerNav>
    <ThemeChooser />
  </div>
</header>
