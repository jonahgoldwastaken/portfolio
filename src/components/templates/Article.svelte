<script lang="ts">
  import Heading from '../atoms/Heading.svelte'
  import ArticleMeta from '../atoms/ArticleMeta.svelte'
  import Layout from '../templates/Layout.svelte'
  export let client = ''
  export let year = new Date().getFullYear()
</script>

<style lang="scss">
  article div {
    width: min(calc(100% - 1rem), 60rem);
    margin: 0 auto;
  }
</style>

<Layout>
  <article>
    <div>
      <Heading>
        <slot name="title" />
      </Heading>
      <ArticleMeta {client} {year} />
      <slot />
    </div>
  </article>
</Layout>
