<script lang="ts">
  import { onMount } from 'svelte'
  import observer from '../../actions/intersectionObserver'
  import Image from '../atoms/Image.svelte'

  export let animate = false
  export let href: string
  export let image: string
  let slide = false
  let js = false

  onMount(() => {
    js = true
  })
</script>

<style lang="scss">
  article {
    color: var(--primary);
    transition: var(--interaction-transition);
    height: clamp(30rem, 30vh, 40rem);
    background: var(--black);
    width: 100%;
    position: relative;
    z-index: 0;
    overflow: hidden;
    display: grid;
    border-radius: 12px;

    > :global(*) {
      position: relative;
      grid-row: 1;
      grid-column: 1;
      min-height: 0;
    }

    &.animate {
      visibility: hidden;
    }

    &.slide {
      animation: slide-in-subtle var(--base-time) var(--easing);
      visibility: visible;

      @media (prefers-reduced-motion: reduce) {
        animation-name: fade-in;
      }
    }

    h2,
    p,
    span {
      transition: transform var(--half-time) var(--easing),
        opacity var(--half-time) var(--easing);
    }

    h2,
    p {
      transform: scale(1);
      opacity: 1;
      font-weight: 700;
      text-align: center;
    }

    h2 {
      --font-size: var(--step-4);
      margin-bottom: var(--quarter-space);
    }

    a {
      display: block;
      color: var(--primary);
      text-decoration: none;
      display: grid;
      align-items: center;
      justify-items: center;
      z-index: 1;

      span {
        display: block;
        opacity: 0;
        transform: translateY(20%) rotateX(45deg) translateZ(0);
        font-size: var(--step-1);
        font-weight: 500;

        &:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, var(--primary), var(--primary))
            no-repeat bottom left/0 1px;
          transition: background-size var(--half-time) var(--easing);
        }
      }
    }

    :global(figure) {
      z-index: -1;
      transition: transform var(--half-time) var(--easing);
      opacity: 0.4;
      --fit: cover;
      --position: center center;
    }

    &:hover,
    &:focus {
      h2,
      p {
        transform: translateY(-20%) rotateX(-45deg);
        opacity: 0;
      }

      :global(figure) {
        transform: scale(1.1) translateZ(0);
      }

      a span {
        transform: translateY(0) rotateX(0deg) translateZ(0);
        opacity: 1;

        &:before {
          background-size: 100% 2px;
        }
      }
    }
  }

  div {
    display: grid;
    place-items: center;
    place-content: center;
    padding: var(--base-space);
    transform: translateZ(0);
  }
</style>

<article
  use:observer={(bool, amnt) =>
    slide === false && amnt >= 0.25 ? (slide = bool) : null}
  class:slide={!js || (animate && slide)}
  class:animate
>
  <Image src={image} />
  <div>
    <h2><slot name="title" /></h2>
    <p><slot name="description" /></p>
  </div>
  <a {href}><span>Bekijk project</span></a>
</article>
