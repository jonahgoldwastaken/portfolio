<script lang="typescript">
  import Router from 'svelte-spa-router'
  import { routes } from './routes'
</script>

<style lang="scss">
  :global {
    /* @link https://utopia.fyi/generator-mk-ii?c=320,16,1.2,2560,24,1.333,5,0,1440-1920 */

    :root {
      --step--2: clamp(0.6944rem, 0.6729rem + 0.1071vw, 0.8444rem);
      --step--1: clamp(0.8331rem, 0.7914rem + 0.2085vw, 1.125rem);
      --step-0: clamp(1rem, 0.9286rem + 0.3571vw, 1.5rem);
      --step-1: clamp(1.2rem, 1.0858rem + 0.571vw, 1.9994rem);
      --step-2: clamp(1.44rem, 1.2649rem + 0.8754vw, 2.6656rem);
      --step-3: clamp(1.7281rem, 1.4674rem + 1.3036vw, 3.5531rem);
      --step-4: clamp(2.0738rem, 1.6934rem + 1.9018vw, 4.7363rem);
      --step-5: clamp(2.4881rem, 1.9417rem + 2.7321vw, 6.3131rem);

      --black: #2e3138;
      --brown: #60463b;
      --orange: #f55e00;
      --light-orange: #fe8234;

      color: var(--black);
      font-family: 'Noto Sans', sans-serif;
    }

    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      padding: 0 var(--step-2);

      @media screen and (min-width: 60rem) {
        padding: 0 var(--step-4);
      }
    }

    ul,
    ol {
      padding: 0;
      margin: 0;
    }
  }
</style>

<Router {routes} />
