<script>
  import Image from '../atoms/Image.svelte'

  export let easterEgg = false
</script>

<style lang="scss">
  div {
    width: 100%;
    position: relative;
    grid-column: 1;
    animation: slide-in-subtle 0.5s var(--easing) forwards;
    opacity: 0;
    cursor: help;
    border-radius: 12px;
    overflow: hidden;

    @media screen and (min-width: 60rem) {
      grid-column: 2;
      grid-row: 1 / span 2;
    }

    @media (prefers-reduced-motion: reduce) {
      animation-name: fade-in;
    }

    &:after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }
  }

  div :global(img) {
    display: block;
    position: absolute;
  }
</style>

<svelte:head>
  <meta rel="preload" href="/funky.jpg" as="image" type="image/jpeg" />
  <meta
    rel="preload"
    href="/proflile-picture.jpg"
    as="image"
    type="image/jpeg"
  />
</svelte:head>

<div on:click={() => (easterEgg = !easterEgg)}>
  {#if easterEgg}
    <Image
      --fit="cover"
      --position="bottom center"
      src="/funky.jpg"
      alt="Jonah taking a shit in a tulip field"
    />
  {:else}
    <Image
      --fit="cover"
      --position="center center"
      src="/profile-picture.jpg"
      alt="Jonah standing at the Rotterdam Cube houses, smiling softly at the camera."
    />
  {/if}
</div>
