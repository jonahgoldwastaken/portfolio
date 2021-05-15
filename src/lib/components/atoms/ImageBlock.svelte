<script>
  import Image from './Image.svelte'

  export let src: string
  export let name: string
  export let href = ''
  export let colour = '#ffffff'
</script>

<style lang="scss">
  div {
    width: calc(var(--quadruple-space) * 1.25);
    height: calc(var(--quadruple-space) * 1.25);
    border-radius: 12px;
    overflow: hidden;
    display: grid;
    place-items: center;
    position: relative;
    z-index: 0;

    :global(figure) {
      padding: var(--base-space);
      min-height: 0;
      background: var(--bg);
      width: 100%;
      height: 100%;
      grid-row: 1;
      grid-column: 1;
      position: relative;
      z-index: -1;
      transition: opacity var(--half-time) var(--easing),
        transform var(--half-time) var(--easing);
      transform: translateZ(0);
    }

    p,
    a {
      text-decoration: none;
      width: 100%;
      height: 100%;
      font-weight: bold;
      text-align: center;
      padding: var(--half-space);
      grid-row: 1;
      grid-column: 1;
      align-self: stretch;
      display: grid;
      place-items: center;
      place-content: center;
      font-size: var(--step--1);
      color: var(--primary);
    }

    a span {
      background: linear-gradient(var(--primary), var(--primary)) 0% 100%/0% 2px
        no-repeat;
    }

    span {
      display: inline-block;
      transform: translateY(20%) translateZ(1em) rotateX(-45deg);
      transition: var(--half-time) var(--easing);
      opacity: 0;
    }

    &:hover {
      :global(figure) {
        opacity: 0.4;
        transform: scale(1.1) translateZ(0);
      }

      span {
        transform: translateY(0) translateZ(1em) rotateX(0);
        opacity: 1;
        background-size: 100% 2px;
      }
    }
  }
</style>

<div style="--bg: {colour}">
  {#if src}
    <Image --fit="contain" {src} format="basic" alt={name} />
  {/if}
  {#if href}
    <a target="_blank" rel="noopener noreferrer external" {href}>
      {#if name.length >= 10}
        {#each name.split(' ') as word (word)}
          <span>{word}</span>
        {/each}
      {:else}
        <span>{name}</span>
      {/if}
    </a>
  {:else}
    <p lang="en">
      {#if name.length >= 10}
        {#each name.split(' ') as word (word)}
          <span>{word}</span>
        {/each}
      {:else}
        <span>{name}</span>
      {/if}
    </p>
  {/if}
</div>
