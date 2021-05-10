<script>
  export let hovering = false

</script>

<style lang="scss">
  div {
    width: 100%;
    position: relative;
    grid-column: 1;
    animation: slide-in 0.5s var(--easing);
    cursor: help;

    @media screen and (min-width: 60rem) {
      grid-column: 2;
      grid-row: 1 / span 2;
    }

    &:after {
      content: '';
      display: block;
      padding-bottom: 100%;
    }
  }

  img {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
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

<div on:click={() => (hovering = !hovering)}>
  {#if hovering}
    <img src="/funky.jpg" alt="Jonah taking a shit in a tulip field" />
  {:else}
    <img
      src="/profile-picture.jpg"
      alt="Jonah taking a shit in a tulip field"
    />
  {/if}
</div>
