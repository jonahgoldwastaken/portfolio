<script lang="typescript">
  import { Route } from 'tinro'
  import Loadable from 'svelte-loadable'
  import Index from './pages/Index.svelte'
  import NotFound from './pages/NotFound.svelte'
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

    //--primary: var(--black);
    //--secondary: var(--white);

    //@media (prefers-color-scheme: dark) {
    --primary: var(--white);
    --secondary: var(--black);
    //}

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

  ul,
  ol {
    padding: 0;
    margin: 0;
  }

  a {
    font-size: inherit;
    font-family: 'Noto Sans', sans-serif;
    text-decoration: none;
    color: var(--primary);
    transition: color 0.1s ease;
  }

  a:hover,
  a:focus {
    outline: none;
    background: linear-gradient(
      to top right,
      var(--color-dark),
      var(--color-light)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  #app {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 var(--step-2);

    @media screen and (min-width: 60rem) {
      padding: 0 var(--step-4);
    }
  }
</style>

<Route>
  <Route path="/project/cube">
    <Loadable loader={() => import('./pages/projects/Cube.svelte')} />
  </Route>
  <Route path="/project/triptop">
    <Loadable loader={() => import('./pages/projects/Triptop.svelte')} />
  </Route>
  <Route path="/project/empower">
    <Loadable loader={() => import('./pages/projects/Empower.svelte')} />
  </Route>
  <Route path="/project/datastory">
    <Loadable loader={() => import('./pages/projects/Datastory.svelte')} />
  </Route>
  <Route path="/project/bbwal">
    <Loadable loader={() => import('./pages/projects/Blauwburgwal.svelte')} />
  </Route>
  <Route path="/project/xsi">
    <Loadable
      loader={() => import('./pages/projects/ExtremeSpaceInvaders.svelte')}
    />
  </Route>
  <Route path="/">
    <Index />
  </Route>
  <Route fallback>
    <NotFound />
  </Route>
</Route>
