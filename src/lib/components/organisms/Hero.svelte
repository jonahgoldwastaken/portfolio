<script lang="ts">
  import textAnimation from '$lib/actions/textAnimation'
  import HeroImage from '../molecules/ProfilePicture.svelte'

  let easterEgg = false
</script>

<style lang="scss">
  section {
    display: grid;
    margin: var(--base-space) auto var(--quadruple-space);
    place-content: center;
    font-size: var(--step-0);
    max-width: 80ch;
    grid-template-columns: 1fr;
    gap: var(--base-space);

    @media screen and (min-width: 50rem),
      (min-aspect-ratio: 1/1) and (min-width: 40rem) {
      grid-template-columns: 2fr 1fr;

      section :global {
        h1,
        p {
          grid-column: 1;
        }
      }
    }

    @media screen and (min-aspect-ratio: 1/1) and (min-width: 40rem) {
      margin: var(--base-space) auto var(--quadruple-space);
    }

    @media screen and (min-width: 50rem) {
      height: 100vh;
      margin: 0 auto max(20rem, 8.75vh);
    }
  }

  h1,
  p {
    text-align: center;
  }

  p {
    font-weight: bold;
  }
</style>

<section>
  <h1
    use:textAnimation={{
      splitOn: 'words',
      text: easterEgg
        ? 'Ik poep soms op tulpen...'
        : 'Ik bouw producten voor mensen.',
    }}
  >
    Ik bouw producten voor mensen.
  </h1>
  <p
    use:textAnimation={{
      splitOn: 'words',
    }}
  >
    Ik ontwerp en ontwikkel websites en applicaties die helpen je doelen te
    bereiken.
  </p>
  <HeroImage bind:easterEgg />
</section>
