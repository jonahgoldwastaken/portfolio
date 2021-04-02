<script lang="ts">
  export let href: string
</script>

<style lang="scss">
  a {
    display: block;
    padding: 0.75em;
    margin: 0;
    text-align: center;
    line-height: 1em;
    width: 100%;
    font-size: var(--step-0);
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
    border: 1px solid rgba(255, 255, 255, 0.3);
    cursor: pointer;
    background-clip: initial;
    -webkit-background-clip: initial;
    -webkit-text-fill-color: initial;

    &:not(:last-child) {
      margin-right: 1em;
    }

    &:hover,
    &:focus {
      transform: translateY(-2px);
    }

    &:focus {
      outline: none;
      border: var(--focus-border);
    }

    &:active {
      transform: scale(0.9) translateY(-2px);
    }

    &:last-of-type {
      margin-bottom: 0;
    }

    @media screen and (min-width: 90rem) {
      margin: var(--base-space) 0;
      &:last-child {
        margin: var(--base-space) 0 0;
      }
    }
  }
</style>

<a target="_blank" rel="noopener noreferrer" {href} {...$$restProps}>
  <slot />
</a>
