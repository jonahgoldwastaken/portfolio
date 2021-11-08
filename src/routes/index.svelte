<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit'

	export const load: Load = async function ({ fetch }) {
		const projectNames = ['devex', 'cube', 'triptop', 'empower', 'bbwal']
		const params = new URLSearchParams(
			projectNames.map(project => ['projects', project])
		)
		const projects = await fetch(`/project/select?${params.toString()}`)
			.then(res => res.json())
			.catch(console.error)

		return {
			props: {
				projects,
			},
		}
	}
</script>

<script lang="ts">
	import TileListCTA from '$lib/components/molecules/TileListCTA.svelte'
	import Hero from '$lib/components/organisms/Hero.svelte'
	import TileList from '$lib/components/organisms/TileList.svelte'

	export let projects: ArticleMetadata[]
</script>

<style lang="scss">
	@media screen and (min-width: 120rem) {
		section :global(li:last-child) {
			grid-column: 3;
			margin-top: -20rem;
		}
	}
</style>

<svelte:head>
	<title>Jonah Meijers</title>
	<meta name="description" content="De portfolio van Jonah Meijers" />
</svelte:head>

<Hero />
<section>
	<h1>Werk waar ik trots op ben</h1>
	<TileList items={projects} animate="list">
		<TileListCTA slot="cta" animate href="/projects">
			<svelte:fragment slot="heading">Maar dat was niet alles!</svelte:fragment>
			<svelte:fragment slot="button">Bekijk de rest</svelte:fragment>
		</TileListCTA>
	</TileList>
</section>
