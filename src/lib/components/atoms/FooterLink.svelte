<script lang="ts">
  export let href: string
</script>

<style lang="scss">
  a {
    display: block;
    width: max-content;
    font-size: var(--step--1);
    color: var(--primary);
    transition: color 0.2s var(--easing);
    margin: var(--half-space) 0;

    &:hover {
      color: var(--orange);
    }
  }
</style>

<a {href}><slot /></a>
