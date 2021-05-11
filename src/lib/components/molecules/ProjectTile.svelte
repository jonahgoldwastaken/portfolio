<script lang="ts">
  import { onMount } from 'svelte'
  import observer from '../../actions/intersectionObserver'

  export let animate = false
  export let href: string
  let slide = false
  let js = false

  onMount(() => {
    js = true
  })
</script>

<style lang="scss">
  article {
    height: 40rem;
    color: var(--primary);
    transition: var(--interaction-transition);

    &:hover,
    &:focus {
      transform: translateY(-2px);
    }

    &.animate {
      pointer-events: none;
      visibility: hidden;
    }

    &.slide {
      animation: slide-in-subtle 0.4s var(--easing);
      visibility: visible;

      @media (prefers-reduced-motion: reduce) {
        animation-name: fade-in;
      }
    }
  }

  a {
    all: unset;
    display: block;
    color: var(--primary);
    width: 100%;
    height: 100%;
    position: relative;
    pointer-events: all;

    &:before {
      background: none;
    }

    &:hover,
    &:focus {
      background-clip: initial;
      -webkit-background-clip: initial;
      -webkit-text-fill-color: initial;
      color: var(--primary);

      h2 {
        background-size: 100% 2px;
      }
    }
  }

  div {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: var(--base-space);
    background: linear-gradient(
      to top right,
      var(--color-dark),
      var(--color-light)
    );
    width: 100%;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  h2 {
    --font-size: var(--step-1);
    width: max-content;
    background: linear-gradient(var(--primary), var(--primary)) no-repeat 0%
      100%/0% 2px;
    transition: 0.2s var(--easing);
  }
</style>

<article
  use:observer={(bool, amnt) =>
    slide === false && amnt >= 0.25 ? (slide = bool) : null}
  class:slide={!js || (animate && slide)}
  class:animate
>
  <a {href}>
    <slot name="image" />
    <div>
      <h2>
        <slot name="title" />
      </h2>
      <p><slot name="description" /></p>
    </div>
  </a>
</article>
