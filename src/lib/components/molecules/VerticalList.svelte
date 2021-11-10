<script lang="ts">
	export let ordered = false
	export let markers = true
</script>

<style lang="scss">
	ol,
	ul {
		&:not(.markers) {
			list-style: none;
			padding: 0;
		}

		:global(li + li) {
			margin-top: var(--margin, var(--quarter-space));
		}
	}
</style>

{#if ordered}
	<ol class:markers>
		<slot />
	</ol>
{:else}
	<ul class:markers>
		<slot />
	</ul>
{/if}
