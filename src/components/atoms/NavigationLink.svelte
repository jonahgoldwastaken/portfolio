<script lang="ts">
  export let href: string
</script>

<style lang="scss">
  li {
    font-size: var(--step-0);
  }
</style>

<li>
  <a {href} {...$$restProps}><slot /></a>
</li>
