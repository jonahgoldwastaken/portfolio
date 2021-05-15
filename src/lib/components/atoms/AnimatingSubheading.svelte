<script lang="ts">
  import observer from '$lib/actions/intersectionObserver'
  import {
    splitTextIntoLetters,
    splitTextIntoWords,
  } from '$lib/utils/textSplitters'

  export let observe = false
  export let content: string
  export let animate = true
  export let delay = false
  export let animationType: 'words' | 'letters' = 'letters'
  let canAnimate = true
</script>

<style lang="scss">
  @use 'sass:selector';

  p {
    font-weight: bold;
    text-align: var(--alignment, center);

    &.animate :global {
      @for $i from 1 through 100 {
        .ch-#{$i} {
          animation-delay: #{($i - 1) / 40}s;

          @at-root #{selector.replace(&,'.animate', '.animate.delay')} {
            animation-delay: #{0.2 + (($i - 1) / 40)}s;
          }
        }

        .w .ch-#{$i} {
          animation-delay: #{(($i - 1) / 80)}s;

          @at-root #{selector.replace(&,'.animate', '.animate.delay')} {
            animation-delay: #{0.2 + (($i - 1) / 80)}s;
          }
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
