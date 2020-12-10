<script>
  import { link } from 'svelte-routing'
  export let href: string
</script>

<li>
  <a use:link {href} {...$$restProps}><slot /></a>
</li>
