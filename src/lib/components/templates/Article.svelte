<script context="module">
  import a from '../atoms/Link.svelte'
  export { a }
</script>

<script lang="ts">
  import ArticleHeader from '../molecules/ArticleHeader.svelte'

  export let title = ''
  export let client = ''
  export let image = ''
  export let link
  export let description = ''
  export let year = new Date().getFullYear()
</script>

<style lang="scss">
  article {
    display: grid;
    grid-template-columns: 100%;
    grid-gap: var(--base-space);
    grid-template-areas: ' header' 'main';
    justify-items: center;
  }

  @media screen and (min-width: 90rem) {
    article {
      grid-template-columns: 1fr 60rem 1fr;
      grid-template-areas: 'header header header' 'main main main';
    }
  }

  main {
    grid-area: main;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  main :global(:first-child) {
    margin-top: 0;
  }

  main > :global(:not(img)) {
    max-width: 60rem;
    width: 100%;
  }

  main > :global(*:not(:first-child)) {
    margin-top: var(--base-space);
  }

  main :global(ul),
  main :global(ol) {
    padding: initial;
  }
</style>

<svelte:head>
  <title>
    {title} - Jonah Meijers
  </title>
  <meta name="description" content={description} />
</svelte:head>

<article>
  <ArticleHeader {link} {title} {description} {client} {year} src={image} />
  <main>
    <slot />
  </main>
</article>
