<script lang="ts">
  import AnimatingHeading from '../atoms/AnimatingHeading.svelte'
  import AnimatingSubheading from '../atoms/AnimatingSubheading.svelte'
  import HeroImage from '../molecules/ProfilePicture.svelte'

  let easterEgg = false
</script>

<style lang="scss">
  section {
    display: grid;
    margin: 0 auto max(20rem, 8.75vh);
    height: 100vh;
    place-content: center;
    max-width: 70rem;
    grid-template-columns: 1fr;
    column-gap: var(--base-space);

    @media screen and (min-width: 60rem) {
      grid-template-columns: 2fr 1fr;
    }
  }

  section :global(h1, p) {
    grid-column: 1;
  }
</style>

<section>
  <AnimatingHeading
    animate
    delay
    animationType="words"
    content={easterEgg
      ? 'Jonah poept soms op **tulpen**...'
      : 'Jonah bouwt producten voor **mensen**.'}
  />
  <AnimatingSubheading
    animate
    delay
    animationType="words"
    content="Hij ontwerpt en bouwt doelgerichte websites en applicaties, en is op zoek naar een stage!"
  />
  <HeroImage bind:easterEgg />
</section>
