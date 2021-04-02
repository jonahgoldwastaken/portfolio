<script lang="ts">
  const formats = ['full-width', 'inline', 'caption'] as const
  type imageFormat = typeof formats[number]

  export let format: imageFormat
  export let src
  export let alt
  export let caption
</script>

<style lang="scss">
  img {
    display: block;

    &:not(.full-width) {
      border-radius: 12px;
    }
  }

  img.full-width {
    height: max(20rem, 75vh);
    object-fit: cover;
    width: calc(2 * var(--base-space) + 100%);

    @media screen and (min-width: 60rem) {
      width: calc(2 * var(--quadruple-space) + 100%);
    }
  }

  img.inline,
  img.caption {
    max-width: 60rem;
    margin: 0 auto;
  }

  figure {
    max-width: 60rem;
    margin: 0 auto;
  }

  figcaption {
    font-size: var(--step--1);
    margin-top: var(--half-space);
  }
</style>

{#if format === 'caption'}
  <figure>
    <img class={format} {src} {alt} />
    <figcaption>
      {caption ?? ''}
    </figcaption>
  </figure>
{:else}
  <img class={format} {src} {alt} />
{/if}
