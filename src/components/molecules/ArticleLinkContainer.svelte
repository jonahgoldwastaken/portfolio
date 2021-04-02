<style lang="scss">
  aside {
    max-width: 60rem;
    width: 100%;
    background: var(--secondary);
    border-radius: 12px;

    div {
      margin-top: var(--base-space);
      display: flex;
      align-items: center;
    }

    @media screen and (min-width: 90rem) {
      border: 1px solid rgba(255, 255, 255, 0.37);
      width: max-content;
      min-width: 20rem;
      position: sticky;
      top: var(--base-space);
      grid-column: 3 / span 1;
      grid-row: 2 / span 2;
      align-self: start;
      padding: var(--base-space);

      div {
        display: initial;
        margin-top: 0;
      }
    }
  }
</style>

<aside>
  <h2 class="h3">Links</h2>
  <div>
    <slot />
  </div>
</aside>
