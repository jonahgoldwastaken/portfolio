<script lang="ts">
  import Header from '$lib/components/organisms/Header.svelte'
  import Footer from '$lib/components/organisms/Footer.svelte'

  export let heading = 'Jonah Meijers'
</script>

<style global lang="scss">
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

    --base-space: var(--step-0);
    --half-space: calc(var(--base-space) / 2);
    --quarter-space: calc(var(--base-space) / 4);
    --double-space: calc(var(--base-space) * 2);
    --threefold-space: calc(var(--base-space) * 3);
    --quadruple-space: calc(var(--base-space) * 4);

    --black: #11181c;
    --blue: #0074b3;
    --blue-opacity: #0074b3a6;
    --light-blue: #3cb3d1;
    --light-blue-opacity: #3cb3d1a6;
    --orange: #e07f00;
    --orange-opacity: #f08700a6;
    --yellow: #dec754;
    --yellow-opacity: #efca08a6;
    --white: #fff;

    --color-light: var(--yellow);
    --color-dark: var(--orange);
    --color-light-opacity: var(--yellow-opacity);
    --color-dark-opacity: var(--orange-opacity);

    --primary: var(--white);
    --secondary: var(--black);

    --font-heading: Raleway, sans-serif;
    --font-running: 'Noto Sans', sans-serif;

    --focus-border: 2px solid var(--white);

    color: var(--primary);
    font-family: var(--font-running);
    line-height: 1.5;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: var(--secondary);
  }

  body.blue {
    --color-light: var(--light-blue);
    --color-dark: var(--blue);
    --color-light-opacity: var(--light-blue-opacity);
    --color-dark-opacity: var(--blue-opacity);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.125;
  }

  h1,
  h2,
  h3 {
    --font-weight: 700;
    --font-size: var(--step-5);
    font-weight: var(--font-weight);
    font-size: var(--font-size);
    font-family: var(--font-heading);
    letter-spacing: -0.02em;
    margin: 0 auto;
  }

  h2,
  .h2 {
    --font-weight: 700;
    --font-size: var(--step-4);
  }

  h3,
  .h3 {
    --font-weight: 500;
    --font-size: var(--step-2);
  }

  p {
    font-family: var(--font-running);
    line-height: 1.5em;
    font-size: var(--step-0);
  }

  p.bold {
    font-weight: bold;
  }

  strong {
    color: var(--color-dark);
    font-weight: inherit;
    background: linear-gradient(
      to right,
      var(--color-dark),
      var(--color-light)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  ul,
  ol {
    padding: 0;
    margin: 0;
  }

  a {
    position: relative;
    font-size: inherit;
    font-family: 'Noto Sans', sans-serif;
    text-decoration: none;
    color: var(--primary);
    transition: color 0.2s ease;
  }

  a:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, var(--color-dark), var(--color-light))
      no-repeat bottom left/0 1px;
    transition: background-size 0.2s ease;
  }

  a:hover,
  a:focus {
    outline: none;
    background: linear-gradient(
      to right,
      var(--color-dark),
      var(--color-light)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  a:hover:before {
    background-size: 100% 1px;
  }

  a:focus {
    border: 2px solid var(--white);
    padding: 0em 0.1em;
    border-radius: 0.25rem;
  }

  #svelte {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 var(--double-space);

    @media screen and (min-width: 60rem) {
      padding: 0 var(--quadruple-space);
    }
  }
</style>

<Header {heading} />
<slot />
<Footer />
