<script lang="ts">
  import { letterAnimation, wordAnimation } from '../../actions/textAnimation'
  import observer from '../../actions/intersectionObserver'

  const heading = 'Ik bouw producten die iets bereiken.'
  const subheading =
    '    Ik ben een Communication & Multimedia Design student die graag bouwt aan een\n' +
    '    toekomst waar de balans tussen mens en technologie meer in balans is, zodat\n' +
    '    technologie iedereen de kracht geeft te bereiken wat ze willen.'

  let animateHeading = false
  let animateParagraph = false
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

  h1.animate :global {
    .w {
      display: inline-block;
    }

    @for $i from 1 through 50 {
      .ch-#{$i} {
        opacity: 0;
        display: inline-block;
        animation: slide-in 0.3s #{$i / 80}s ease forwards;
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
    @for $i from 1 through 50 {
      span:nth-child(#{$i}) {
        display: inline-block;
        opacity: 0;
        animation: slide-in 0.3s #{($i - 1) / 120 + 0.35}s ease forwards;
      }
    }
  }
</style>

<section>
  <h1
    use:observer={(bool, amnt) =>
      animateHeading === false && amnt >= 0.75 ? (animateHeading = bool) : null}
    class:animate={animateHeading}
    use:letterAnimation={heading}
  />
  <p
    class="bold"
    use:observer={(bool, amnt) =>
      animateParagraph === false && amnt >= 0.75
        ? (animateParagraph = bool)
        : null}
    class:animate={animateParagraph}
    use:wordAnimation={subheading}
  />
</section>
