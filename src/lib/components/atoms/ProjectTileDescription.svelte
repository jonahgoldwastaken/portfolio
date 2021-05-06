<style lang="scss">
  p {
    transition: clip-path 0.2s var(--easing);
    will-change: clip-path;
    font-size: var(--step-0);
    margin: 0;
    color: var(--white);
  }
</style>

<p>
  <slot />
</p>
