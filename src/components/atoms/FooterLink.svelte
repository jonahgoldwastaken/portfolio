<script>
  export let href: string
</script>

<style>
  a {
    display: block;
    width: max-content;
    font-size: var(--step--1);
    color: var(--primary);
    transition: color 0.2s ease;
    margin: var(--step--2) 0;

    &:hover {
      color: var(--light-orange);
    }
  }
</style>

<a {href}><slot /></a>
