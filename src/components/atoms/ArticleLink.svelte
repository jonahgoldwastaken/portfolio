<script>
  export let href: string
</script>

<style>
  a {
    display: inline-block;
    padding: var(--step-0);
    font-size: var(--step-0);
    font-family: 'Noto Sans', sans-serif;
    text-decoration: none;
    color: var(--white);
    background: var(--light-orange);
    transition: all 0.2s ease;
    border-radius: 6px;
    box-shadow: 0 5px 5px -2.5px rgba(#2e3138, 0.5);
    transform: translateY(0px);

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 10px -7.5px rgba(#2e3138, 0.5);
    }

    :global(+ a) {
      margin-left: var(--step-0);
    }
  }

  a:hover,
  a:focus {
    background: var(--orange);
  }
</style>

<a target="_blank" rel="noopener noreferrer" {href} {...$$restProps}><slot
  /></a>
