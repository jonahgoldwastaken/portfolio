<script context="module">
  import type { Load } from '@sveltejs/kit'

  export const load: Load = async function ({ fetch }) {
    const items = await fetch('/article/all.json').then(res => res.json())
    return {
      props: {
        items,
      },
    }
  }
</script>

<script>
  import TileList from '$lib/components/organisms/TileList.svelte'
  import textAnimation from '$lib/actions/textAnimation'
  import TileListCTA from '$lib/components/molecules/TileListCTA.svelte'

  export let items: ArticleMetadata[]
</script>

<svelte:head>
  <title>Artikelen - Jonah Meijers</title>
  <meta
    name="descrtiption"
    content="Artikelen die ik heb geschreven over onderwerpen die ik interessant vind."
  />
</svelte:head>

<main>
  <h1
    use:textAnimation={{
      splitOn: 'letters',
    }}
  >
    Artikelen
  </h1>
  <TileList {items} animate="both">
    <TileListCTA slot="cta">
      <svelte:fragment slot="heading">Verder kletsen hierover?</svelte:fragment>
      <svelte:fragment slot="button">Knoop het gesprek aan!</svelte:fragment>
    </TileListCTA>
  </TileList>
</main>
