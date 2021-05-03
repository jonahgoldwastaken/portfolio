<script lang="ts">
  import { splitTextIntoWords } from '$lib/utils/textSplitters'
</script>

<style lang="scss">
  section {
    display: grid;
    margin: 0 auto max(20rem, 8.75vh);
    height: max(40rem, 78.75vh);
    place-content: center;
    max-width: 60rem;

    :global(*) {
      text-align: center;
    }
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
</style>

<section>
  <h1>
    {@html splitTextIntoWords('Jonah bouwt producten voor **mensen**.')}
  </h1>
  <p class="bold">
    {@html splitTextIntoWords(
      'Hij is een Interaction Designer en Developer van gefocuste concepten met een specifiek doel.'
    )}
  </p>
</section>
