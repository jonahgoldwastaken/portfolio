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
  article > :global(header) {
    margin-bottom: var(--base-space);
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  main > :global(:not(figure)) {
    max-width: 80ch;
    width: 100%;
  }

  main > :global(*:not(:first-child)) {
    margin-top: var(--base-space);
  }

  main :global(ul, ol) {
    padding-left: 1.5em;
  }

  main :global(pre) {
    font-size: var(--step-0);
  }
</style>

<svelte:head>
  <title>
    {title} - Jonah Meijers
  </title>
  <meta name="description" content={description} />
  <link rel="stylesheet" href="/prism-theme.css" />
</svelte:head>

<article>
  <ArticleHeader {link} {title} {description} {client} {year} src={image} />
  <main>
    <slot />
  </main>
</article>
