<script lang="ts">
  import { page } from '$app/stores'
  import Footer from '$lib/components/organisms/Footer.svelte'
  import Header from '$lib/components/organisms/Header.svelte'
  import '../app.scss'

  export let heading = 'Jonah Meijers'

  $: path = $page.path
</script>

<svelte:head>
  {#if !path.startsWith('/project/') && path !== '/'}
    <style type="text/css">
      #svelte {
        padding-top: calc(
          var(--quadruple-space) + var(--base-space) + (var(--double-space) * 2)
        ) !important;
      }
    </style>
  {/if}
</svelte:head>

<Header {heading} />
<slot />
<Footer />
