<script>
  import ArticleMeta from '../atoms/ArticleMeta.svelte'
  import ArticleLinkContainer from '../molecules/ArticleLinkContainer.svelte'

  export let title = ''
  export let client = ''
  export let year = new Date().getFullYear()
</script>

<style lang="css">
  article {
    display: grid;
    grid-template-columns: 100%;
    grid-gap: var(--base-space);
    grid-template-areas: 'banner' ' header' 'main';
    justify-items: center;
  }

  @media screen and (min-width: 90rem) {
    article {
      grid-template-columns: 1fr 60rem 1fr;
      grid-template-areas: 'banner banner banner' '. header .' 'main main main';
    }
  }

  header {
    grid-area: header;
    max-width: 60rem;
    width: 100%;
  }

  header:first-child {
    grid-row: 1 / span 2;
  }

  @media screen and (min-width: 90rem) {
    header:first-child ~ :global(aside) {
      grid-row-start: 1;
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
  <header>
    <h1>{title}</h1>
    <ArticleMeta {client} {year} />
  </header>
  <main>
    <slot />
  </main>
  <ArticleLinkContainer>
    <slot name="links" />
  </ArticleLinkContainer>
</article>
