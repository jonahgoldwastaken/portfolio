<style>
  strong {
    color: var(--orange);
    font-weight: inherit;
    background: linear-gradient(
      to top right,
      var(--light-orange),
      var(--orange)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>

<strong><slot /></strong>
