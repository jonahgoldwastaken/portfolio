<script lang="ts">
  import { page } from '$app/stores'

  export let href: string
  export let noGradient = false

  $: active = $page.path === href
</script>

<style lang="scss">
  a {
    position: relative;
    color: currentColor;
    font: inherit;
    transition: color 0.2s var(--easing);
    text-decoration: none;
    font-weight: var(--weight, 700);
  }

  a:hover:not(.no-gradient),
  a:focus:not(.no-gradient),
  a.active:not(.no-gradient) {
    background: linear-gradient(
      to right,
      var(--color-dark),
      var(--color-light)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  a:hover.no-gradient,
  a:focus.no-gradient,
  a.active.no-gradient {
    color: var(--color-dark);
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
  a:focus:before,
  a.active:before {
    background-size: 100% 1px;
  }
</style>

<a
  class:active
  class:no-gradient={noGradient}
  target={!href.startsWith('/') ? '_blank' : ''}
  rel={!href.startsWith('/') ? 'noopener noreferrer external' : ''}
  {href}
  {...$$restProps}
>
  <slot />
</a>
