<script>
  import AnimatingHeading from '../atoms/AnimatingHeading.svelte'

  export let animate: 'heading' | 'image' | 'both' | null = null

</script>

<style lang="scss">
  article {
    @media screen and (min-width: 90rem) {
      display: grid;
      grid-template-columns: 2fr 1fr;
      grid-auto-rows: min-content;
      grid-template-areas: 'heading heading' 'content image';
      row-gap: var(--base-space);
    }
  }

  main {
    grid-area: content;

    p:not(:first-of-type) {
      margin-top: var(--base-space);
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
        animation: slide-in-right 0.4s var(--easing);
      }
    }
  }

  article :global(h1) {
    grid-area: heading;
  }

</style>

<svelte:head>
  <title>Over - Jonah Meijers</title>
</svelte:head>

<article>
  {#if animate === 'both' || animate === 'heading'}
    <AnimatingHeading --alignment="left" observe content="Over" />
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
  <!-- {#if animate === 'both' || animate === 'image'}
    <aside>
      <img
        use:observer={(bool, amnt) =>
          canImageAnimate === false && amnt >= 0.75
            ? (canImageAnimate = bool)
            : null}
        class="animating"
        class:animate={canImageAnimate}
        src="/profile-picture.jpg"
        alt="Jonah standing in between the Cube houses in Rotterdam with a warm smile, black leather jacket and his orange backpack."
      />
    </aside>
  {:else}
    <aside>
      <img
        src="/profile-picture.jpg"
        alt="Jonah standing in between the Cube houses in Rotterdam with a warm smile, black leather jacket and his orange backpack."
      />
    </aside>
  {/if} -->
</article>
