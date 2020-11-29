<script>
  import Header from '../organisms/Header.svelte'
  import Hero from '../organisms/Hero.svelte'
  import ProjectList from '../organisms/ProjectList.svelte'
  import type { Link } from '../../../types/link'

  export let headerLinks: Link[] = []
  export let headerTitle = ''
  export let heroPicture = ''
</script>

<Header links={headerLinks} heading={headerTitle} />
<Hero picture={heroPicture}>
  <span slot="heading">
    <slot name="heading" />
  </span>
  <span slot="subheading">
    <slot name="subheading" />
  </span>
</Hero>
<ProjectList />
