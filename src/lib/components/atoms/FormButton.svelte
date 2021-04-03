<style lang="scss">
  button {
    border: none;
    display: inline-block;
    padding: var(--half-space);
    margin: var(--half-space) 0;
    text-align: center;
    width: 100%;
    font-size: var(--step-1);
    font-family: 'Noto Sans', sans-serif;
    text-decoration: none;
    color: var(--white);
    background: var(--orange);
    transition: all 0.2s ease;
    border-radius: 6px;
    box-shadow: 0 5px 5px -2.5px rgba(#2e3138, 0.5);
    transform: translateY(0px);
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 10px -10px rgba(#2e3138, 0.5);
    }

    @media screen and (min-width: 60rem) {
      font-size: var(--step-0);
    }
  }

  button:hover,
  button:focus {
    background: var(--color-dark);
  }
</style>

<button {...$$restProps}>
  <slot />
</button>
