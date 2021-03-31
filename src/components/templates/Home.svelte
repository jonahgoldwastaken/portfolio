<script lang="ts">
  import Layout from './Layout.svelte'
  import Hero from '../organisms/Hero.svelte'
  import ProjectList from '../organisms/ProjectList.svelte'
</script>

<Layout>
  <Hero>
    <slot slot="heading" name="heroHeading" />
    <slot slot="subheading" name="heroSubheading" />
  </Hero>
  <ProjectList />
</Layout>
