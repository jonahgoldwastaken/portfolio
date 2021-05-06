<script lang="ts">
  import { splitTextIntoWords } from '$lib/utils/textSplitters'
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
    grid-template-columns: 2fr 1fr;
    column-gap: var(--base-space);

    :global(*) {
      text-align: center;
    }
  }

  h1,
  p {
    grid-column: 1;
  }

  h1 :global([class*='ch']),
  p :global([class*='ch']) {
    opacity: 0;
    display: inline-block;
  }

  h1 :global {
    .w {
      display: inline-block;
    }

    @for $i from 1 through 6 {
      .ch-#{$i} {
        animation: slide-in 0.4s #{$i / 80}s ease forwards;
      }
    }
  }

  p :global {
    @for $i from 1 through 37 {
      span:nth-child(#{$i}) {
        animation: slide-in 0.4s #{$i / 80 + 0.2}s ease forwards;
      }
    }
  }

  img {
    grid-column: 2;
    grid-row: 1 / span 2;
    width: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
</style>

<section>
  <h1>
    {#if hovering}
      {@html splitTextIntoWords('Jonah poept soms op **tulpen**...')}
    {:else}
      {@html splitTextIntoWords('Jonah bouwt producten voor **mensen**.')}
    {/if}
  </h1>
  <p class="bold">
    {@html splitTextIntoWords(
      'Hij is een Interaction Designer en Developer van gefocuste concepten met een specifiek doel.'
    )}
  </p>
  <HeroImage bind:hovering />
</section>
