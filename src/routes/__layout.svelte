<script lang="ts">
	import '../app.scss'
	import { page } from '$app/stores'
	import Footer from '$lib/components/organisms/Footer.svelte'
	import Header from '$lib/components/organisms/Header.svelte'

	$: path = $page.path
</script>

<svelte:head>
	{#if !path.startsWith('/project/') && !path.startsWith('/article/') && path !== '/'}
		<style type="text/css">
			@media screen and (min-width: 50rem) {
				#svelte {
					padding-top: calc(
						var(--quadruple-space) + var(--base-space) +
							(var(--double-space) * 2)
					) !important;
				}
			}
		</style>
	{/if}
</svelte:head>

<Header />
<slot />
<Footer />
