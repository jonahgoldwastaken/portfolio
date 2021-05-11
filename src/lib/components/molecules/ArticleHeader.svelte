<script lang="ts">
  import observer from '$lib/actions/intersectionObserver'
  import { raf } from '$lib/actions/requestAnimationFrame'
  import { createRangeFromDomain } from '$lib/utils/numberRange'
  import { splitTextIntoWords } from '$lib/utils/textSplitters'
  import AnimatingHeading from '../atoms/AnimatingHeading.svelte'
  import AnimatingSubheading from '../atoms/AnimatingSubheading.svelte'
  import Image from '../atoms/Image.svelte'
  import Link from '../atoms/Link.svelte'

  export let title: string
  export let description: string
  export let client: string
  export let year: number
  export let src: string
  export let link: ProjectMetadata['link']

  let innerHeight: number
  let inView = false
  let scroll: number = 0

  $: scrollScale = createRangeFromDomain({
    rangeMax: 1,
    domainMax: innerHeight,
  })
</script>

<style lang="scss">
  header {
    grid-area: header;
    width: calc(var(--quadruple-space) * 2 + 100%);
    height: 100vh;
    position: relative;
    z-index: 0;
    overflow: hidden;
    padding: var(--double-space) var(--quadruple-space);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    align-items: center;

    div {
      grid-row: 2;
      grid-column: 1 / span 2;
      max-width: 60rem;
      justify-self: center;
      transform: translateZ(0);
    }
  }

  p,
  div :global(p) {
    margin: var(--half-space) 0 0;
    font-family: var(--font-heading);
    font-size: var(--step-0);
    color: var(--primary);
  }

  p {
    font-weight: 500;

    header > & {
      opacity: 0;
      animation: swipe-in 0.4s var(--easing) forwards;

      @media (prefers-reduced-motion: reduce) {
        animation-name: fade-in;
      }

      @for $i from 1 through 5 {
        &:nth-child(#{$i}) {
          animation-delay: #{($i / 40) + 0.8}s;
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

      &:nth-of-type(1) {
        grid-row: 3;
        grid-column: 1;
        align-self: end;
        justify-self: start;
      }

      &:nth-of-type(2) {
        grid-row: 3;
        grid-column: 2;
        align-self: end;
        justify-self: end;
      }
    }

    > :global(a) {
      font-weight: bold;
    }
  }

  header :global(img) {
    z-index: -2;
    transform: scale3d(
        calc(1 + 0.1 * var(--scroll, 0)),
        calc(1 + 0.1 * var(--scroll, 0)),
        calc(1 + 0.1 * var(--scroll, 0))
      )
      translate3d(0, 0, 0);
    animation: zoom-in 0.4s var(--easing);
    opacity: calc((1 - var(--scroll, 0)) * 0.4);
    will-change: transform, opacity;

    @media (prefers-reduced-motion: reduce) {
      animation-name: image-fade-in;
      transform: none;
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
  }
</style>

<svelte:window bind:innerHeight />

<header
  use:raf={{
    animate: inView,
    cb: () => {
      scroll = scrollScale(window.pageYOffset)
    },
  }}
  use:observer={bool => (inView !== bool ? (inView = bool) : null)}
>
  <div>
    <AnimatingHeading aria-label="Titel" animate delay content={title} />
    <AnimatingSubheading
      aria-label="Beschrijving"
      animate
      delay
      animationType="words"
      content={description}
    />
  </div>
  <p>
    {client} • <time datetime={`${year}`}>{year}</time>
  </p>
  <p>
    <Link target="_blank" href={link[1]} rel="external noopener noreferrer">
      Open {link[0] || 'website'}
    </Link>
  </p>
  <Image format="banner" --scroll={scroll} {src} />
</header>
