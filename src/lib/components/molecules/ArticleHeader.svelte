<script lang="ts">
  import observer from '$lib/actions/intersectionObserver'
  import { raf } from '$lib/actions/requestAnimationFrame'
  import { createRangeFromDomain } from '$lib/utils/numberRange'
  import { splitTextIntoWords } from '$lib/utils/textSplitters'
  import AnimatingHeading from '../atoms/AnimatingHeading.svelte'
  import Link from '../atoms/Link.svelte'

  export let title: string
  export let description: string
  export let client: string
  export let year: number
  export let src: string
  export let link: ProjectMetadata['link']

  let innerHeight: number
  let inView = false
  let img: HTMLImageElement
  let scroll: number

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

      > p {
        text-align: center;
        font-weight: 700;

        :global([class*='ch']) {
          opacity: 0;
          display: inline-block;
        }

        :global {
          @for $i from 1 through 37 {
            span:nth-child(#{$i}) {
              animation: slide-in 0.4s #{$i / 80 + 0.6}s ease forwards;
            }
          }
        }
      }
    }
  }

  p {
    margin: var(--half-space) 0 0;
    font-family: var(--font-heading);
    font-size: var(--step-0);
    color: var(--primary);
    font-weight: 500;

    header > & {
      opacity: 0;
      animation: swipe-in 0.4s var(--easing) forwards;

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
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    object-fit: cover;
    object-position: center center;
    transform: scale3d(
        calc(1 + 0.1 * var(--scroll)),
        calc(1 + 0.1 * var(--scroll)),
        calc(1 + 0.1 * var(--scroll))
      )
      translate3d(0, 0, 0);
    animation: zoom-in 0.4s var(--easing);
    opacity: calc((1 - var(--scroll)) * 0.4);
    will-change: transform, opacity;

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
    <p aria-label="Beschrijving">{@html splitTextIntoWords(description)}</p>
  </div>
  <p>
    {client} • <time datetime={`${year}`}>{year}</time>
  </p>
  <p>
    <Link
      --weight="bold"
      target="_blank"
      href={link[1]}
      rel="external noopener noreferrer"
    >
      Open {link[0] || 'website'}
    </Link>
  </p>
  <img
    style="--scroll: {scroll};"
    bind:this={img}
    {src}
    aria-hidden="true"
    alt=""
  />
</header>
