<script lang="ts">
  import { splitTextIntoWords } from '$lib/utils/textSplitters'

  import AnimatingHeading from '../atoms/AnimatingHeading.svelte'
  import HeroImage from '../molecules/HeroImage.svelte'

  let hovering = false

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

    :global(*) {
      text-align: center;
    }
  }

  section :global(h1),
  p {
    grid-column: 1;
  }

  p :global([class*='ch']) {
    opacity: 0;
    display: inline-block;
  }

  p :global {
    @for $i from 1 through 37 {
      span:nth-child(#{$i}) {
        animation: slide-in 0.4s #{$i / 80 + 0.2}s ease forwards;
      }
    }
  }

</style>

<section>
  <AnimatingHeading
    animate
    animationType="words"
    content={hovering
      ? 'Jonah poept soms op **tulpen**...'
      : 'Jonah bouwt producten voor **mensen**.'}
  />
  <p class="bold">
    {@html splitTextIntoWords(
      'Hij is een Interaction Designer en Developer van gefocuste concepten met een specifiek doel.'
    )}
  </p>
  <HeroImage bind:hovering />
</section>
