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
  h1 {
    text-align: var(--alignment, center);

    &.animate :global {
      @for $i from 1 through 50 {
        .ch-#{$i} {
          animation-delay: #{($i - 1) / 60}s;

          @at-root #{selector.replace(&,'.animate', '.animate.delay')} {
            animation-delay: #{0.2 + (($i - 1) / 60)}s;
          }
        }

        .w .ch-#{$i} {
          animation-delay: #{(($i - 1) / 120)}s;

          @at-root #{selector.replace(&,'.animate', '.animate.delay')} {
            animation-delay: #{0.2 + (($i - 1) / 120)}s;
          }
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
