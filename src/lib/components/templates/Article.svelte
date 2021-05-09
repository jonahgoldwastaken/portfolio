<script lang="ts">
  import { headerSettings } from '$lib/stores/header'

  import { onMount } from 'svelte'

  import ArticleHeader from '../molecules/ArticleHeader.svelte'

  export let title = ''
  export let client = ''
  export let image = ''
  export let link
  export let year = new Date().getFullYear()

  onMount(() => {
    headerSettings.set({
      compact: true,
      transparent: true,
      padding: false,
    })
  })
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

  article > div:first-child {
    grid-area: banner;
    width: 100%;
    margin-left: calc(-1 * var(--double-space));
  }

  article > div:first-child :global(img) {
    width: calc(100% + var(--half-space) * 2);
  }

  @media screen and (min-width: 60rem) {
    article > div:first-child {
      margin-left: calc(-2 * var(--quadruple-space));
    }

    article > div:first-child :global(img) {
      width: calc(100% + 2 * var(--quadruple-space));
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
  }

  main :global(p) {
    line-height: 1.5em;
    font-size: var(--step-0);
    margin: 0;
  }

  main :global(p + p) {
    margin-top: var(--base-space);
  }

  :global(a) {
    font-weight: 500;
  }
</style>

<article>
  {#if $$slots.banner}
    <div>
      <slot name="banner" />
    </div>
  {/if}
  <ArticleHeader {link} {title} {client} {year} src={image} />
  <main>
    <slot />
  </main>
</article>
