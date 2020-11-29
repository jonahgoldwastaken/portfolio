<style>
  p {
    font-size: var(--step-0);
    margin: 0;
    color: white;
    hyphens: auto;
    display: none;

    @media screen and (min-width: 60rem) {
      display: block;
    }
  }
</style>

<p>
  <slot />
</p>
