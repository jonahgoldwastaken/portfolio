<script lang="ts">
  import { iObservedRaf } from '$lib/actions/requestAnimationFrame'
  import textAnimation from '$lib/actions/textAnimation'
  import { createRangeFromDomain } from '$lib/utils/numberRange'
  import Link from '../atoms/Link.svelte'
  import Media from '../atoms/Media.svelte'

  export let title: string
  export let description: string
  export let client: string
  export let year: number
  export let src: string
  export let link: ArticleMetadata['link']

  let innerHeight: number
  let scroll: number = 0

  $: scrollScale = createRangeFromDomain({
    rangeMax: 1,
    domainMax: innerHeight,
  })
</script>

<style lang="scss">
  header {
    width: calc(var(--quadruple-space) * 2 + 100%);
    margin-left: calc(-1 * var(--quadruple-space));
    height: 100vh;
    position: relative;
    z-index: 0;
    overflow: hidden;
    padding: 0 var(--quadruple-space);
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;

    &.visible :global(figure) {
      will-change: transform, opacity;
    }

    h1 {
      font-size: var(--step-5);

      &,
      & + p {
        text-align: center;
      }
    }

    div {
      max-width: 60rem;
      transform: translateZ(0);
      grid-row: 2;
      align-self: start;
      grid-column: 1;
    }

    p,
    div p {
      margin: var(--half-space) 0 0;
      font-family: var(--font-heading);
      color: var(--primary);
      font-size: var(--step-1);
    }

    div p {
      font-weight: 700;
    }

    div ~ p,
    :global(div:nth-of-type(2)) {
      grid-column: 1;
      justify-self: center;
      align-self: end;
      grid-row: 3;
      opacity: 0;
      animation: swipe-in var(--base-time) var(--base-time) var(--easing)
        forwards;

      @media (prefers-reduced-motion: reduce) {
        animation-name: fade-in;
      }
    }

    div ~ p {
      font-weight: 500;
      font-size: var(--step-0);
      margin-bottom: calc(var(--base-space) + var(--quadruple-space));
    }

    :global(div:nth-of-type(2)) {
      margin-bottom: var(--double-space);
    }

    :global(div:not(:first-of-type)) {
      font-size: var(--step-0);
    }

    :global(figure) {
      z-index: -2;
      transform: scale3d(
          calc(1 + 0.1 * var(--scroll, 0)),
          calc(1 + 0.1 * var(--scroll, 0)),
          calc(1 + 0.1 * var(--scroll, 0))
        )
        translate3d(0, 0, 0);
      animation: zoom-in var(--base-time) var(--easing);
      opacity: calc((1 - var(--scroll, 0)) * 0.4);

      @media (prefers-reduced-motion: reduce) {
        animation-name: image-fade-in;
        transform: none;
      }
    }

    @media screen and (min-width: 50rem) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      align-items: center;
      padding: var(--double-space) var(--quadruple-space);

      div {
        grid-row: 2;
        grid-column: 1 / span 2;
        justify-self: center;
        align-self: center;
      }

      div ~ p {
        grid-row: 3;
        grid-column: 1;
        align-self: end;
        justify-self: start;
      }

      :global(div:not(:first-of-type)) {
        grid-row: 3;
        grid-column: 2;
        align-self: end;
        justify-self: end;
      }

      div ~ p,
      :global(div:nth-of-type(2)) {
        margin-bottom: 0;
      }
    }
  }

  @keyframes image-fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.4;
    }
  }

  @keyframes zoom-in {
    from {
      transform: scale3d(0.9, 0.9, 0.9);
      opacity: 0;
    }
    to {
      transform: scale3d(1, 1, 1);
      opacity: 0.4;
    }
  }

  @keyframes swipe-in {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0%);
      opacity: 1;
    }
  }
</style>

<svelte:window bind:innerHeight />

<header
  use:iObservedRaf={() => {
    scroll = scrollScale(window.pageYOffset)
  }}
>
  <div>
    <h1
      aria-label="Titel"
      use:textAnimation={{
        splitOn: 'letters',
        delay: true,
        text: title,
      }}
    >
      {title}
    </h1>
    {#if description}
      <p
        aria-label="Beschrijving"
        use:textAnimation={{
          splitOn: 'words',
          delay: true,
          text: description,
        }}
      >
        {description}
      </p>
    {/if}
  </div>
  {#if client && year}
    <p>
      {client} • <time datetime={`${year}`}>{year}</time>
    </p>
  {/if}
  {#if link}
    <Link href={link[1]}>
      Open {link[0] || 'website'}
    </Link>
  {/if}
  <Media format="banner" --scroll={scroll} {src} />
</header>
