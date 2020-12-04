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
  <slot slot="heading" name="heroHeading" />
  <slot slot="subheading" name="heroSubheading" />
</Hero>
<ProjectList />
