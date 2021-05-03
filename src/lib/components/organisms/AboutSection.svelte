<script>
  import { splitTextIntoLetters } from '$lib/utils/textSplitters'
  import observer from '../../actions/intersectionObserver'

  export let animate: 'heading' | 'image' | 'both' | null = null
  let canHeadingAnimate = true
  let canImageAnimate = true
</script>

<style lang="scss">
  article {
    @media screen and (min-width: 90rem) {
      display: grid;
      grid-template-columns: 60rem 1fr;
      grid-auto-rows: min-content;
      grid-template-areas: 'heading heading' 'content image';
      gap: var(--double-space);
    }
  }

  main {
    grid-area: content;

    p:first-of-type {
      margin-top: 0;
    }
  }

  aside {
    grid-area: image;

    img {
      width: 100%;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.3);

      &.animating {
        visibility: hidden;
      }

      &.animate {
        visibility: visible;
        animation: slide-in-right 0.4s ease;
      }
    }
  }

  h1 {
    grid-area: heading;
    text-align: left;
    margin: 0;

    &.animating {
      visibility: hidden;
    }

    &.animate {
      visibility: visible;
    }
  }

  h1.animate :global {
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
  {#if animate === 'both' || animate === 'heading'}
    <h1
      use:observer={(bool, amnt) =>
        canHeadingAnimate === false && amnt >= 0.75
          ? (canHeadingAnimate = bool)
          : null}
      class="animating"
      class:animate={canHeadingAnimate}
    >
      {@html splitTextIntoLetters('Over')}
    </h1>
  {:else}
    <h1>Over</h1>
  {/if}
  <main>
    <p>
      Met ruim 4 jaar ervaring is Jonah een Interaction Designer en
      (voornamelijk) Developer die het maximale uit de platformen wilt halen
      waarvoor hij ontwikkelt. Hij focust zich vooral op producten die een
      bepaald doel bereiken voor mensen op de best gevonden manier.
    </p>
    <p>
      Hij is op dit moment nog bezig met zijn studie, maar is in zijn vrije tijd
      al bezig met het verder uitwerken van concepten die hij bedenkt op school
      met opdrachten, of thuis.
    </p>
    <p>
      Verder houdt Jonah zich bezig met leren hoe je plaatjes draait, mist hij
      techno-feestjes heel erg en wilde gisteren weer een biertje doen met de
      jongens.
    </p>
  </main>
  {#if animate === 'both' || animate === 'image'}
    <aside>
      <img
        use:observer={(bool, amnt) =>
          canImageAnimate === false && amnt >= 0.75
            ? (canImageAnimate = bool)
            : null}
        class="animating"
        class:animate={canImageAnimate}
        src="/profile-picture.jpg"
        alt="Picture of Jonah"
      />
    </aside>
  {:else}
    <aside>
      <img src="/profile-picture.jpg" alt="Picture of Jonah" />
    </aside>
  {/if}
</article>
