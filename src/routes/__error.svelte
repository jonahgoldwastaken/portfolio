<script context="module">
  export function load({ error, status }) {
    return {
      props: {
        error,
        status,
      },
    }
  }

</script>

<script lang="ts">
  import { setContext } from 'svelte'

  export let status: number
  export let error: any

  setContext('header', {
    compact: false,
    transparent: false,
    padding: true,
  })

</script>

<svelte:head>
  <title>{status} - Jonah Meijers</title>
</svelte:head>

{#if status === 404}
  <h1>{status} - Jouw pagina is niet hier</h1>
  <p>
    Stuur een <a href="mailto:jonahmeijers97@gmail.com">e-mail</a>, trakteer ik
    je op bier.
  </p>
{:else}
  <h1>{status}</h1>
  <p>{error.message}</p>
{/if}
