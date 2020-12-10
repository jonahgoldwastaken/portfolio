<script>
  import Heading from '../atoms/Heading.svelte'
  import ArticleMeta from '../atoms/ArticleMeta.svelte'
  import Layout from '../templates/Layout.svelte'
  export let client = ''
  export let year = new Date().getFullYear()
</script>

<style>
  .article {
    display: grid;

    @media screen and (min-width: 60rem) {
      grid-template-columns: 1fr 1fr;
    }
  }

  :global(.article img) {
    width: 100%;
    max-width: 40rem;
    border-radius: 12px;

    @media screen and (min-width: 60rem) {
      grid-column: 2;
      justify-self: end;
    }
  }
</style>

<Layout>
  <article class="article">
    <div>
      <Heading>
        <slot name="title" />
      </Heading>
      <ArticleMeta {client} {year} />
      <slot />
    </div>
    <slot name="image" />
  </article>
</Layout>
