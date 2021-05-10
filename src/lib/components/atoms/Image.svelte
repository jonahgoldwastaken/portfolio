<script lang="ts">
  const formats = [
    'full-width',
    'banner',
    'inline',
    'caption',
    'basic',
  ] as const
  type imageFormat = typeof formats[number]

  export let format: imageFormat = 'basic'
  export let src: string
  export let alt: string = ''
  export let caption: string = ''
</script>

<style lang="scss">
  img {
    display: block;
    object-fit: var(--fit, initial);
    object-position: var(--position, initial);

    &:not(.full-width):not(.banner) {
      border-radius: 12px;
    }
  }

  .full-width {
    --fit: cover;
    height: max(20rem, 75vh);
    width: calc(2 * var(--base-space) + 100%);

    @media screen and (min-width: 60rem) {
      width: calc(2 * var(--quadruple-space) + 100%);
    }
  }

  .banner {
    --fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .inline,
  .caption {
    max-width: 60rem;
    margin: 0 auto;
  }

  .basic {
    width: 100%;
    height: 100%;
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
    <img class={format} {src} {alt} aria-hidden={!alt} />
    <figcaption>
      {caption ?? ''}
    </figcaption>
  </figure>
{:else}
  <img class={format} {src} {alt} aria-hidden={!alt} />
{/if}
