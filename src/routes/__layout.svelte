<script lang="ts">
  import '../app.scss'
  import Header from '$lib/components/organisms/Header.svelte'
  import Footer from '$lib/components/organisms/Footer.svelte'
  import { page } from '$app/stores'

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

      @media screen and (min-width: 60rem) {
        #svelte {
          padding-top: calc(
            var(--quadruple-space) + var(--base-space) +
              (var(--threefold-space) * 2)
          ) !important;
        }
      }
    </style>
  {/if}
</svelte:head>

<Header {heading} />
<slot />
<Footer />
