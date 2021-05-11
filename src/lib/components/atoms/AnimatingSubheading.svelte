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
  p {
    font-weight: bold;
    text-align: var(--alignment, center);

    :global {
      [class*='w'],
      [class*='ch'] {
        display: inline-block;
      }
      [class*='ch'] {
        opacity: 0;
      }
    }

    &.animate :global {
      @for $i from 1 through 100 {
        .ch-#{$i} {
          animation: slide-in
            0.4s
            #{($i - 1) /
            120 +
            0.2}s
            var(--easing)
            forwards;

          @media (prefers-reduced-motion: reduce) {
            animation-name: fade-in;
          }
        }
      }
    }

    &.animate.delay :global {
      @for $i from 1 through 100 {
        .ch-#{$i} {
          animation-delay: #{0.4 + (($i - 1) / 120) + 0.2}s;
        }
      }
    }
  }
</style>

{#if !observe}
  <p class:delay class:animate on:animationend {...$$restProps}>
    {#if animationType === 'letters'}
      {@html splitTextIntoLetters(content)}
    {:else}
      {@html splitTextIntoWords(content)}
    {/if}
  </p>
{:else}
  <p
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
  </p>
{/if}
