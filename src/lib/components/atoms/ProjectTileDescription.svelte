<style lang="scss">
  p {
    overflow: hidden;
    transition: clip-path 0.2s ease;
    clip-path: inset(0% 100% 100% 0);
    will-change: clip-path;
    font-size: var(--step-0);
    margin: 0;
    color: var(--white);
  }
</style>

<p>
  <slot />
</p>
