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
  li {
    display: block;
    width: 100%;
    height: 40rem;
    position: relative;
    margin: var(--step-0) 0;
    pointer-events: none;

    @media screen and (min-width: 60rem) {
      &:nth-child(even) article {
        margin-left: auto;
      }

      &:not(:first-child) {
        margin-top: -20rem;
      }
    }

    &:last-child {
      height: 20rem;
      margin: var(--step-0) 0;

      @media screen and (min-width: 60rem) {
        &:nth-child(even) article {
          margin-left: auto;
        }

        &:not(:first-child) {
          margin-top: -20rem;
        }
      }
    }
  }

  article {
    width: 100%;
    height: 100%;
    position: relative;
    color: var(--primary);
    transition: transform 0.1s var(--easing);
    pointer-events: all;

    @media screen and (min-width: 60rem) {
      width: calc(50% - var(--base-space));
    }

    &:hover,
    &:focus {
      transform: translateY(-2px);
    }
  }

  a {
    all: unset;
    color: var(--primary);

    &:before {
      background: none;
    }

    :global(h2) {
      background: linear-gradient(var(--primary), var(--primary)) no-repeat 0%
        100%/0% 2px;
      transition: 0.2s var(--easing);
    }

    &:hover,
    &:focus {
      background-clip: initial;
      -webkit-background-clip: initial;
      -webkit-text-fill-color: initial;

      color: var(--primary);

      & :global(*) {
        background-size: 100% 2px;
      }
    }
  }

  div:not(:first-child) {
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

    h2 {
      --font-size: var(--step-1);
      width: max-content;
    }
  }

  li.animate {
    pointer-events: none;
    visibility: hidden;
  }

  li.slide {
    animation: 0.4s var(--easing);
    visibility: visible;
    transition: none;
  }

  li.slide:nth-child(odd) {
    animation-name: slide-in-left;
  }

  li.slide:nth-child(even) {
    animation-name: slide-in-right;
  }

  @keyframes -global-slide-in-left {
    from {
      opacity: 0;
      transform: translateX(-10%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  @keyframes -global-slide-in-right {
    from {
      opacity: 0;
      transform: translateX(10%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
</style>

<li
  use:observer={(bool, amnt) =>
    slide === false && amnt >= 0.25 ? (slide = bool) : null}
  class:slide={!js || (animate && slide)}
  class:animate
>
  <article>
    {#if href}
      <a {href}>
        <slot name="image" />
        <div>
          <h2>
            <slot name="title" />
          </h2>
          <p><slot name="description" /></p>
        </div>
      </a>
    {:else}
      <slot name="image" />
      <div>
        <h2>
          <slot name="title" />
        </h2>
        <p><slot name="description" /></p>
      </div>
    {/if}
  </article>
</li>
