<script lang="ts">
  import Layout from './Layout.svelte'
  import Hero from '../organisms/Hero.svelte'
  import ProjectList from '../organisms/ProjectList.svelte'
  import About from '../organisms/AboutSection.svelte'
</script>

<Layout>
  <Hero />
  <ProjectList animate="list" />
  <About />
</Layout>
