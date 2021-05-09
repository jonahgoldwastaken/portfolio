<script lang="ts">
  import { page } from '$app/stores'

  export let href: string
</script>

<style lang="scss">
  a {
    position: relative;
    color: currentColor;
    font: inherit;
    transition: color 0.2s var(--easing);
    text-decoration: none;
    font-weight: var(--weight, inherit);
  }

  a:hover,
  a:focus,
  a.active {
    background: linear-gradient(
      to right,
      var(--color-dark),
      var(--color-light)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  a:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, var(--color-dark), var(--color-light))
      no-repeat bottom left/0 1px;
    transition: background-size 0.2s var(--easing);
  }

  a:focus {
    outline: none;
  }

  a:hover:before,
  a:focus:before {
    background-size: 100% 1px;
  }

  a.active {
    font-weight: normal;

    &:before {
      background-size: 100% 1px;
    }
  }
</style>

<a
  class:active={$page.path === href}
  target={!href.startsWith('/') ? '_blank' : ''}
  rel={!href.startsWith('/') ? 'noopener noreferrer external' : ''}
  {href}
  {...$$restProps}
>
  <slot />
</a>
