<script lang="ts">
	import { afterUpdate, onMount, tick } from 'svelte'

	let js = false
	let theme: 'blue' | 'orange' = 'orange'

	onMount(async () => {
		const lsTheme = localStorage.getItem('theme') as 'blue' | 'orange'
		if (lsTheme) theme = lsTheme
		await tick()
		js = true
	})

	afterUpdate(() => {
		localStorage.setItem('theme', theme)
		if (theme === 'blue') return document.body.classList.add('blue')
		document.body.classList.remove('blue')
	})
</script>

<style lang="scss">
	button {
		appearance: none;
		border: none;
		width: var(--base-space);
		height: var(--base-space);
		padding: 0;
		border-radius: 50%;
		overflow: hidden;
		color: transparent;
		user-select: none;
		background: linear-gradient(to bottom left, var(--light), var(--dark));
		margin-left: var(--base-space);
		cursor: pointer;
		transition: var(--interaction-transition);

		&:hover {
			transform: translateY(-2px);
		}

		&:active {
			transform: scale(0.9) translateY(-2px);
		}

		&:focus-within {
			outline: none;
			border: var(--focus-border);
			transform: translateY(-2px);
		}
	}
</style>

<svelte:head>
	<link
		rel="mask-icon"
		href="/logo-simple.svg"
		color={theme === 'orange' ? '#e07f00' : '#0074b3'}
	/>
</svelte:head>

{#if js}
	<button
		on:click={() => {
			theme = theme === 'orange' ? 'blue' : 'orange'
		}}
		style="--light: {theme === 'blue'
			? 'var(--yellow)'
			: 'var(--light-blue)'}; --dark: {theme === 'blue'
			? 'var(--orange)'
			: 'var(--blue)'}">Verander thema</button
	>
{/if}
