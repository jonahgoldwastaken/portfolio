<script>
  export let label: string
  export let name: string
  export let type: 'text' | 'email' | 'textarea' = 'text'
</script>

<style>
  label {
    font: var(--step--1) bold;
    line-height: 1;
    height: 100%;

    input,
    textarea {
      all: unset;
      box-sizing: border-box;
      display: block;
      padding: 6px;
      width: 100%;
      border-radius: 6px;
      border: 2px solid var(--primary);
      font-weight: 400;
      cursor: text;
    }
  }
</style>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label>
  {label}
  {#if type === 'textarea'}
    <textarea rows="6" {name} />
  {:else}<input {name} {type} />{/if}
</label>
