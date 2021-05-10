<script lang="ts">
  import observer from '$lib/actions/intersectionObserver'
  import {
    splitTextIntoLetters,
    splitTextIntoWords,
  } from '$lib/utils/textSplitters'

  export let observe = false
  export let content: string
  export let animate = false
  export let delay = false
  export let animationType: 'words' | 'letters' = 'letters'
  let canAnimate = true
</script>

<style lang="scss">
  h1 {
    text-align: var(--alignment, center);

    :global {
      [class*='ch'] {
        display: inline-block;
        opacity: 0;
      }
    }

    &.animate :global {
      @for $i from 1 through 50 {
        .ch-#{$i} {
          animation: slide-in 0.4s #{($i - 1) / 120}s var(--easing) forwards;
        }
        &.delay .ch-#{$i} {
          animation-delay: #{0.4 + (($i - 1) / 120)}s;
        }
      }
    }

    &.animate.delay :global {
      @for $i from 1 through 50 {
        .ch-#{$i} {
          animation-delay: #{0.4 + (($i - 1) / 120)}s;
        }
      }
    }
  }
</style>

{#if !observe}
  <h1 class:delay class:animate on:animationend {...$$restProps}>
    {#if animationType === 'letters'}
      {@html splitTextIntoLetters(content)}
    {:else}
      {@html splitTextIntoWords(content)}
    {/if}
  </h1>
{:else}
  <h1
    use:observer={(bool, amnt) =>
      canAnimate === false && amnt >= 0.75 ? (canAnimate = bool) : null}
    class:animate={canAnimate}
    on:animationend
    {...$$restProps}
  >
    {#if animationType === 'letters'}
      {@html splitTextIntoLetters(content)}
    {:else}
      {@html splitTextIntoWords(content)}
    {/if}
  </h1>
{/if}
