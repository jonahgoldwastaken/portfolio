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
  figure {
    display: block;
    margin: 0;

    &:not(.full-width):not(.banner):not(.basic) img {
      border-radius: 12px;
    }
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: var(--fit, initial);
    object-position: var(--position, initial);
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
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    img {
      --fit: cover;
    }
  }

  .inline,
  .caption {
    font-size: var(--step-0);
    max-width: 80ch;
  }

  figcaption {
    font-size: var(--step--1);
    margin-top: var(--half-space);
  }
</style>

<figure class={format}>
  <img {src} {alt} aria-hidden={!alt} />
  {#if format === 'caption'}
    <figcaption>
      {caption ?? ''}
    </figcaption>
  {/if}
</figure>
