<script>
  export let href: string
</script>

<style>
  a {
    display: inline-block;
    padding: var(--step-0);
    margin: var(--step-0) 0;
    text-align: center;
    width: 100%;
    font-size: var(--step-1);
    font-family: 'Noto Sans', sans-serif;
    text-decoration: none;
    color: var(--white);
    background: linear-gradient(
      to top right,
      var(--light-orange),
      var(--orange)
    );
    transition: all 0.2s ease;
    border-radius: 6px;
    box-shadow: 0 5px 5px -2.5px rgba(#f55e00, 0.5);
    transform: translateY(0px);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 10px -10px rgba(#f55e00, 0.5);
      color: var(--white);
    }

    @media screen and (min-width: 60rem) {
      width: auto;
      padding: var(--step--1);
      margin: var(--step--1) 0;
      text-align: left;
      font-size: var(--step-0);

      :global(+ a) {
        margin-left: var(--step-0);
      }
    }
  }
</style>

<a target="_blank" rel="noopener noreferrer" {href} {...$$restProps}>
  <slot />
</a>
