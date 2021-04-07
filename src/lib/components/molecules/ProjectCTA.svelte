<script>
  import observer from '../../actions/intersectionObserver'

  export let animate = false
  let slide = false
</script>

<style lang="scss">
  li {
    height: clamp(2.5rem, 30vh, 20rem);
    margin: var(--step-0) 0;

    @media screen and (min-width: 50rem) {
      &:nth-child(even) div {
        margin-left: auto;
      }

      &:not(:first-child) {
        margin-top: clamp(-20rem, -30vh, -2.5rem);
      }
    }
  }

  div {
    @media screen and (min-width: 50rem) {
      width: calc(50% - var(--step-0));
    }
  }

  li.animate {
    pointer-events: none;
    visibility: hidden;

    a {
      pointer-events: all;
    }
  }

  li:nth-child(odd).slide {
    animation: 0.4s ease forwards;
    visibility: visible;
  }

  li.slide:nth-child(odd) {
    animation-name: slide-in-left;
  }

  li.slide:nth-child(even) {
    animation-name: slide-in-right;
  }
</style>

<li
  use:observer={(bool, amnt) =>
    slide === false && amnt >= 0.5 ? (slide = bool) : null}
  class:slide={animate && slide}
  class:animate
>
  <div>
    <h2>There is always room for more!</h2>
    <p>
      Stuur een <a href="mailto:jonahmeijers97@gmail.com">mailtje</a>. Misschien
      kunnen we wat voor elkaar beteken. :)
    </p>
  </div>
</li>
