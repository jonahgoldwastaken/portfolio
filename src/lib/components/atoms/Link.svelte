<script lang="ts">
	import { page } from '$app/stores'
	import External from '$lib/svg/external.svelte'

	export let href: string
	export let noGradient = true

	const external = href.startsWith('http')

	$: active = $page.path === href
</script>

<style lang="scss">
	div {
		display: inline-flex;
		align-items: center;

		:global(svg) {
			font: inherit;
			width: 1em;
			height: 1em;
			margin-left: var(--quarter-space);
			color: var(--primary);
		}
	}

	a {
		position: relative;
		color: currentColor;
		font: inherit;
		transition: color var(--half-time) var(--easing);
		text-decoration: none;
		font-weight: var(--weight, 700);
	}

	a:hover:not(.no-gradient),
	a:focus:not(.no-gradient),
	a.active:not(.no-gradient) {
		background: linear-gradient(
			to right,
			var(--color-dark),
			var(--color-light)
		);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.no-gradient:before {
		background-image: linear-gradient(
			to right,
			var(--hover-color, var(--color-dark)),
			var(--hover-color, var(--color-dark))
		);
	}

	a.active.no-gradient {
		color: var(--hover-color, var(--color-dark));
	}

	a.active:before {
		background-size: 100% 1px;
	}

	@media (pointer: fine) {
		a:hover.no-gradient,
		a:focus.no-gradient,
		a.active.no-gradient {
			color: var(--hover-color, var(--color-dark));
		}

		a:focus {
			outline: none;
		}

		a:hover:before,
		a:focus:before,
		a.active:before {
			background-size: 100% 1px;
		}
	}

	a:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(to right, var(--color-dark), var(--color-light))
			no-repeat bottom left/0 1px;
		transition: background-size var(--half-time) var(--easing);
	}
</style>

{#if external}
	<div>
		<a
			class:active
			class:no-gradient={noGradient}
			target="_blank"
			rel="noopener noreferrer external"
			{href}
			{...$$restProps}
		>
			<slot /><External />
		</a>
	</div>
{:else}
	<a class:active class:no-gradient={noGradient} {href} {...$$restProps}>
		<slot />
	</a>
{/if}
