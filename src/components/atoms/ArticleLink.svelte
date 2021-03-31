<script lang="ts">
  export let href: string
</script>

<style lang="scss">
  a {
    display: inline-block;
    padding: var(--step-0);
    margin: var(--step-0) 0;
    text-align: center;
    width: 100%;
    font-size: var(--step-2);
    font-family: 'Noto Sans', sans-serif;
    text-decoration: none;
    color: var(--white);
    background: linear-gradient(
      to top right,
      var(--color-dark),
      var(--color-light)
    );
    transition: all 0.1s ease;
    border-radius: 12px;
    transform: translateY(0px);
    font-weight: bold;
    cursor: pointer;
    background-clip: initial;
    -webkit-background-clip: initial;
    -webkit-text-fill-color: initial;

    &:hover,
    &:focus {
      transform: translateY(-2px);
      color: var(--white);
    }

    &:focus {
      outline: none;
      border: var(--focus-border);
    }

    &:active {
      transform: scale(0.9) translateY(-2px);
    }

    @media screen and (min-width: 60rem) {
      width: auto;
      padding: var(--step--1);
      margin: var(--step--1) 0;
      text-align: left;
      font-size: var(--step-1);

      :global(+ a) {
        margin-left: var(--step-0);
      }
    }
  }
</style>

<a target="_blank" rel="noopener noreferrer" {href} {...$$restProps}>
  <slot />
</a>
