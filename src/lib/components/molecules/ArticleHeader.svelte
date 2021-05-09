<script lang="ts">
  import observer from '$lib/actions/intersectionObserver'
  import { createRangeFromDomain } from '$lib/utils/numberRange'
  import AnimatingHeading from '../atoms/AnimatingHeading.svelte'
  import Link from '../atoms/Link.svelte'

  export let title: string
  export let client: string
  export let year: number
  export let src: string
  export let link: ProjectMetadata['link']

  let scrollY: number
  let innerHeight: number
  let inView = false

  $: bgScale = createRangeFromDomain({
    rangeMin: 0,
    rangeMax: 0.8,
    domainMax: innerHeight,
  })

  $: zoomScale = createRangeFromDomain({
    rangeMin: 1,
    rangeMax: 1.1,
    domainMax: innerHeight,
  })

  $: scrollPercentage = inView ? bgScale(scrollY) : 0
  $: zoomPercentage = inView ? zoomScale(scrollY) : 1.1
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

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &:before {
      z-index: -1;
      box-shadow: inset 0 0 25vmax var(--secondary);
      opacity: calc(1 * var(--scroll));
      animation: opacity 0.4s var(--easing);

      @keyframes opacity {
        from {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    }

    &:after {
      z-index: -2;
      background: #11181cbb;
      opacity: var(--scroll);
    }

    :global(h1) {
      grid-row: 2;
      grid-column: 1 / span 2;
    }
  }

  p {
    margin: var(--half-space) 0 0;
    opacity: 0;
    font-family: var(--font-heading);
    font-size: var(--step-0);
    color: var(--primary);
    font-weight: 500;

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

    &:first-of-type {
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

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    object-fit: cover;
    object-position: center center;
    transform: scale(var(--zoom), var(--zoom));
    animation: zoom-in 0.4s var(--easing);
    opacity: 0.4;

    @keyframes zoom-in {
      from {
        transform: scale(0.9, 0.9);
        opacity: 0;
      }
      to {
        transform: scale(1, 1);
        opacity: 0.4;
      }
    }
  }
</style>

<svelte:window bind:scrollY bind:innerHeight />

<header
  style="--scroll: {scrollPercentage}"
  use:observer={bool => (inView = bool)}
>
  <AnimatingHeading animate delay content={title} />
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
      Open {link[0]}
    </Link>
  </p>
  <img {src} aria-hidden="true" alt="" style="--zoom: {zoomPercentage}" />
</header>
