<style lang="scss">
  div {
    overflow: hidden;
    transition: all 0.2s ease;
    clip-path: inset(0% 100% 100% 0);
  }

  p {
    display: inline;
    text-overflow: clip;
    font-size: var(--step-0);
    margin: 0;
    color: var(--white);
  }
</style>

<div>
  <p>
    <slot />
  </p>
</div>
