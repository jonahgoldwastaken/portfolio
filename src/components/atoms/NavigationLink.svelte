<script>
  export let href: string
</script>

<style>
  a {
    font-size: var(--step-0);
    font-family: 'Noto Sans', sans-serif;
    text-decoration: none;
    text-decoration: underline;
    color: var(--black);
  }

  a:visited {
    color: initial;
  }

  a:hover,
  a:focus {
    color: var(--orange);
  }
</style>

<li>
  <a {href} target="_blank" rel="noopener noreferrer" {...$$restProps}><slot
    /></a>
</li>
