<script lang="ts">
  import { page } from '$app/stores'

  export let href: string
</script>

<style lang="scss">
  li {
    font-size: var(--step-0);
  }

  a.active {
    background: linear-gradient(
      to top right,
      var(--color-dark),
      var(--color-light)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }
</style>

<li>
  <a
    sveltekit:prefetch={!href.startsWith('http')}
    class:active={$page.path === href}
    target={href.startsWith('http') ? '_blank' : ''}
    rel={href.startsWith('http') ? 'noopener noreferrer external' : ''}
    {href}
    {...$$restProps}
  >
    <slot />
  </a>
</li>
