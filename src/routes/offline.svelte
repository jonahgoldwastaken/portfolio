<script lang="ts" context="module">
	export const hydrate = false
</script>

<script lang="ts">
	import Link from '$lib/components/atoms/Link.svelte'
</script>

<svelte:head>
	<title>Offline - Jonah Meijers</title>
</svelte:head>

<svelte:window on:online={() => window.location.reload()} />

<h1>Oeps, het lijkt erop dat je offline bent!</h1>
<p>
	Maar niet getreurd. Je kan gewoon doorneuzen met de links op deze pagina, of
	gelijk door naar mijn nieuwste project: <Link href="/project/cube">
		CSS Rubik's Cube</Link
	>.
</p>
