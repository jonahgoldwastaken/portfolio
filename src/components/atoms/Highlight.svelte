<style lang="scss">
  strong {
    color: var(--color-dark);
    font-weight: inherit;
    background: linear-gradient(
      to top right,
      var(--color-dark),
      var(--color-light)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>

<strong><slot /></strong>
