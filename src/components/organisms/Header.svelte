<script>
  import HeaderHeading from '../atoms/HeaderHeading.svelte'
  import Navigation from '../molecules/Navigation.svelte'
  import type { Link } from '../../../types/link'

  export let heading = ''
  export let links: Link[] = []
</script>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: calc(var(--step-2) / 4 * 3) 0;

    @media screen and (min-width: 60rem) {
      padding: calc(var(--step-4) / 4 * 3) 0;
    }
  }
</style>

<header>
  <HeaderHeading>{heading}</HeaderHeading>
  <Navigation {links} />
</header>
