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
    grid-gap: var(--step-0);

    > div {
      grid-row: 2;
      grid-column: 1;
    }

    @media screen and (min-width: 60rem) {
      grid-template-columns: 1fr 1fr;

      > div {
        grid-row: 1;
      }
    }
  }

  :global(.article img) {
    grid-row: 1;
    width: 100%;
    max-width: 60rem;
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
