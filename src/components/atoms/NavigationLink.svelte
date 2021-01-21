<script>
  export let href: string
</script>

<li>
  <a {href} {...$$restProps}><slot /></a>
</li>
