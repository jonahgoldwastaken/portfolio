<script>
  import Layout from './Layout.svelte'
  import Hero from '../organisms/Hero.svelte'
  import ProjectList from '../organisms/ProjectList.svelte'

  export let heroPicture = ''
</script>

<Layout>
  <Hero picture={heroPicture}>
    <slot slot="heading" name="heroHeading" />
    <slot slot="subheading" name="heroSubheading" />
  </Hero>
  <ProjectList />
</Layout>
