<script>
  import { navigating } from '$app/stores'
  import VerticalList from './VerticalList.svelte'

  let input: HTMLInputElement

  $: {
    if (input) input.checked = !!$navigating
  }
</script>

<style lang="scss">
  nav {
    height: var(--base-space);

    @media (pointer: fine) and (min-width: 40rem) {
      display: none;
    }

    input {
      appearance: none;
      margin: 0;
      width: var(--base-space);
      height: var(--base-space);
      position: relative;
      z-index: 11;

      &:before,
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 2px;
        background: var(--primary);
        transform-origin: center;
        transition: transform 0.2s var(--easing);
      }

      &:before {
        top: 0;
      }

      &:after {
        bottom: 2px;
      }

      &:focus {
        outline-color: var(--color-dark);
        outline-style: double;
        outline-offset: 2px;
      }
    }

    :global {
      ul {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        display: grid;
        place-content: center;
        gap: var(--double-space);
        text-align: center;
        transform: translateX(100%);
        transition: transform 0.2s var(--easing);
        z-index: 10;
        background: var(--secondary);

        @media (prefers-reduced-motion: reduce) {
          opacity: 0;
          pointer-events: none;
          transform: translateX(0);
          transition: opacity 0.2s var(--easing);
        }

        li {
          font-size: var(--step-2);
        }
      }
    }

    input:checked {
      &:before {
        transform: translateY(calc(var(--half-space) - 50%)) rotate(45deg);
      }

      &:after {
        transform: translateY(calc(-1 * var(--half-space) + 100%))
          rotate(-45deg);
      }

      + :global(ul) {
        transform: translateX(0);

        @media (prefers-reduced-motion: reduce) {
          opacity: 1;
          pointer-events: auto;
        }
      }
    }
  }
</style>

<nav>
  <input
    bind:this={input}
    aria-hidden="true"
    role="switch"
    type="checkbox"
    name="Open menu"
  />
  <VerticalList markers={false}>
    <slot />
  </VerticalList>
</nav>
