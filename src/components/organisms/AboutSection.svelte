<script>
  import observer from '../../actions/intersectionObserver'
  import { letterAnimation } from '../../actions/textAnimation'

  export let animate = false
  let canAnimate = false
  $: console.log(canAnimate)
</script>

<style lang="scss">
  p {
    width: calc(50% - var(--base-space));
  }

  h1.animate :global,
  p.animate :global {
    [class*='ch'] {
      display: inline-block;
      opacity: 0;
    }
  }

  h1.animate :global {
    @for $i from 1 through 4 {
      .ch-#{$i} {
        animation: slide-in 0.4s #{$i / 80}s ease forwards;
      }
    }
  }
</style>

<svelte:head>
  <title>Over - Jonah Meijers</title>
</svelte:head>

<article>
  {#if animate}
    <h1
      use:observer={(bool, amnt) =>
        canAnimate === false && amnt >= 0.75 ? (canAnimate = bool) : null}
      class:animate={canAnimate}
      use:letterAnimation={'Over'}
    >
      Over
    </h1>
  {:else}
    <h1>Over</h1>
  {/if}
  <p class:animate>
    Met ruim 4 jaar ervaring is Jonah een Interaction Designer en (voornamelijk)
    Developer die het maximale uit de platformen wilt halen waarvoor hij
    ontwikkelt. Hij focust zich vooral op producten die een bepaald doel
    bereiken voor mensen op de best gevonden manier.
  </p>
  <p class:animate>
    Hij is op dit moment nog bezig met zijn studie, maar is in zijn vrije tijd
    al bezig met het verder uitwerken van concepten die hij bedenkt op school
    met opdrachten, of thuis.
  </p>
  <p>
    Verder houdt Jonah zich bezig met leren hoe je plaatjes draait, mist hij
    techno-feestjes heel erg en wilde gisteren weer een biertje doen met de
    jongens.
  </p>
</article>
