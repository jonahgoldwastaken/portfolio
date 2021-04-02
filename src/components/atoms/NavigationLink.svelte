<script lang="ts">
  import { active } from 'tinro'

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
    use:active
    exact={href === '/'}
    data-active-class="active"
    target={href.startsWith('http') ? '_blank' : ''}
    rel={href.startsWith('http') ? 'noopener noreferrer' : ''}
    {href}
    {...$$restProps}
  >
    <slot />
  </a>
</li>
