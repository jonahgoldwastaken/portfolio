<style lang="scss">
  img {
    width: 100%;
    height: 100vw;
    border-radius: 12px;
    object-fit: cover;

    @media screen and (min-width: 60rem) {
      width: calc(var(--step-0) * 14);
      height: calc(var(--step-0) * 14);
      border-radius: 50%;
    }
  }
</style>

<!-- svelte-ignore a11y-missing-attribute -->
<img {...$$restProps} alt="Profielfoto Jonah" />
