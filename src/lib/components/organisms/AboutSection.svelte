<script>
  import AnimatingHeading from '../atoms/AnimatingHeading.svelte'
  import Link from '../atoms/Link.svelte'

  export let animate: 'heading' | 'image' | 'both' | null = null
</script>

<style lang="scss">
  article {
    @media screen and (min-width: 90rem) {
      display: grid;
      font-size: var(--step-0);
      grid-template-columns: 80ch 1fr;
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

  article :global(h1) {
    grid-area: heading;
  }
</style>

<article>
  {#if animate === 'both' || animate === 'heading'}
    <AnimatingHeading --alignment="left" observe content="Over" />
  {:else}
    <h1>Over</h1>
  {/if}
  <main>
    <p>
      Jonah is een Interaction Designer en (voornamelijk) Web Developer die de
      puntjes op de i zet. Zijn projecten zijn gebouwd voor een specifiek doel,
      namelijk om het doel van de gebruiker in zo'n kort mogelijke tijd te
      bereiken. Het vergt veel creativiteit, aandacht, empathie en
      doorzettingsvermogen om tot strak uitgewerkte applicaties te komen waar
      mensen echt wat aan hebben.
    </p>
    <p>
      Op zijn opleiding, Communication &amp; Multimedia Design, komt deze
      skillset zeer goed van pas. Jonah bedenkt concept na concept waar de
      docenten van onder de indruk zijn. Hij zit daar echt op zijn plek.
    </p>
    <p>
      Naast zijn studie maakt Jonah tijd voor het ontwikkelen van concepten waar
      binnenkort meer over gedeeld zal worden.
    </p>
    <p>
      Tevens is hij druk op zoek naar een stage. Mocht je nog een stageplek vrij
      hebben, <Link noGradient href="mailto:jonahmeijers97@gmail.com">
        neem dan vooral contact op</Link
      >!
    </p>
  </main>
</article>
