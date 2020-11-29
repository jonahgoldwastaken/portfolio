<script>
  export let href: string
</script>

<style>
  a {
    font: normal var(--step-0) 'Noto Sans', sans-serif;
    text-decoration: none;
    text-decoration: underline;
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
