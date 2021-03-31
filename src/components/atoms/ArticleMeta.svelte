<script lang="ts">
  export let client: string
  export let year: number
</script>

<style lang="scss">
  p {
    margin: var(--step--1) 0 var(--step-1);
  }

  strong {
    font-family: var(--font-heading);
    font-size: var(--step-1);
    color: var(--primary);
    font-weight: 500;
  }
</style>

<p><strong>{client} • {year}</strong></p>
