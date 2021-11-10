<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit'

	export const load: Load = async function ({ fetch }) {
		const items = await fetch('/project/all').then(res => res.json())
		return {
			props: {
				items,
			},
		}
	}
</script>

<script lang="ts">
	import TileList from '$lib/components/organisms/TileList.svelte'
	import textAnimation from '$lib/actions/textAnimation'

	export let items: ArticleMetadata[]
</script>

<svelte:head>
	<title>Projecten - Jonah Meijers</title>
	<meta
		name="descrtiption"
		content="De projecten waar ik aan werk en heb gewerkt."
	/>
</svelte:head>

<main>
	<h1
		use:textAnimation={{
			splitOn: 'letters',
		}}
	>
		Projecten
	</h1>
	<TileList {items} animate="both" />
</main>
