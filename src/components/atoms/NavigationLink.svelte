<script>
  export let href: string
</script>

<style>
  li {
    font-size: var(--step-0);
  }
</style>

<li>
  <a {href} {...$$restProps}><slot /></a>
</li>
