<script lang="ts">
	import { navigating } from '$app/stores'
	import VerticalList from './VerticalList.svelte'

	let input: HTMLInputElement

	$: {
		if (input) input.checked = !!$navigating
	}
</script>

<style lang="scss">
	nav {
		--height: calc(var(--base-space) * 0.75);
		@media (pointer: fine) and (min-width: 40rem) {
			display: none;
		}

		input {
			appearance: none;
			margin: 0;
			width: var(--base-space);
			height: var(--height);
			position: relative;
			z-index: 11;

			&:before,
			&:after {
				content: '';
				position: absolute;
				width: var(--base-space);
				height: 2px;
				background: var(--primary);
				transition: transform 0.2s var(--easing);
			}

			&:before {
				top: 0;
				transform-origin: center;
			}

			&:after {
				transform-origin: center;
				bottom: 0;
			}

			&:focus {
				outline-color: var(--color-dark);
				outline-style: double;
				outline-offset: 2px;
			}
		}

		:global {
			ul {
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100vh;
				display: grid;
				place-content: center;
				gap: var(--double-space);
				text-align: center;
				transform: translateX(100%);
				transition: transform 0.2s var(--easing);
				z-index: 10;
				background: var(--secondary);

				@media (prefers-reduced-motion: reduce) {
					opacity: 0;
					pointer-events: none;
					transform: translateX(0);
					transition: opacity 0.2s var(--easing);
				}

				li {
					font-size: var(--step-2);
				}
			}
		}

		input:checked {
			&:before {
				transform: translateY(calc(var(--height) * 0.5 - 1px)) rotate(45deg);
			}

			&:after {
				transform: translateY(calc(var(--height) * -0.5 + 1px)) rotate(-45deg);
			}

			+ :global(ul) {
				transform: translateX(0);

				@media (prefers-reduced-motion: reduce) {
					opacity: 1;
					pointer-events: auto;
				}
			}
		}
	}
</style>

<nav>
	<input
		bind:this={input}
		aria-hidden="true"
		role="switch"
		type="checkbox"
		name="Open menu"
	/>
	<VerticalList markers={false}>
		<slot />
	</VerticalList>
</nav>
