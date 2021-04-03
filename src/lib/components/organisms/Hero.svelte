<script lang="ts">
  import { wordAnimation } from '../../actions/textAnimation'
  import observer from '../../actions/intersectionObserver'

  let animate = false
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

  h1,
  p {
    visibility: hidden;
  }

  h1.animate,
  p.animate {
    visibility: visible;
  }

  h1 :global([class*='ch']),
  p :global([class*='ch']) {
    opacity: 0;
    display: inline-block;
  }

  h1.animate :global {
    .w {
      display: inline-block;
    }

    @for $i from 1 through 6 {
      .ch-#{$i} {
        animation: slide-in 0.4s #{$i / 80}s ease forwards;
      }
    }

    @keyframes -global-slide-in {
      from {
        opacity: 0;
        transform: translateY(50%) rotateX(45deg);
      }
      to {
        opacity: 1;
        transform: translateY(0rem) rotateX(0deg);
      }
    }
  }

  p.animate :global {
    @for $i from 1 through 37 {
      span:nth-child(#{$i}) {
        animation: slide-in 0.4s #{$i / 80 + 0.2}s ease forwards;
      }
    }
  }
</style>

<section
  use:observer={(bool, amnt) =>
    animate === false && amnt >= 0.75 ? (animate = bool) : null}
>
  <h1
    class:animate
    use:wordAnimation={'Jonah bouwt producten voor **mensen**.'}
  >
    Jonah bouwt producten voor <strong>mensen</strong>.
  </h1>
  <p
    class="bold"
    class:animate
    use:wordAnimation={'Hij is een Interaction Designer en Developer van gefocuste concepten met een specifiek doel.'}
  >
    Hij is een Interaction Designer en Developer van gefocuste concepten met een
    specifiek doel.
  </p>
</section>
