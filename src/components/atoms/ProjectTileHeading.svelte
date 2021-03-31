<script lang="ts">
  export let heading
</script>

<style lang="scss">
  h2 {
    font-size: var(--step-1);
    font-weight: bold;
    width: max-content;
    margin: 0;
    color: var(--white);
  }
</style>

<h2 bind:this={heading}>
  <slot />
</h2>
