<script lang="ts">
  export let client: string
  export let year: number
</script>

<style lang="scss">
  p {
    margin: var(--half-space) auto 0;
  }

  small {
    font-family: var(--font-heading);
    font-size: var(--step-1);
    color: var(--primary);
    font-weight: 500;
  }
</style>

<p><small>{client} • {year}</small></p>
