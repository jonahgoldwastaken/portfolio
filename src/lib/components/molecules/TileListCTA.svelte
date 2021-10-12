<script lang="ts">
	import observer from '$lib/actions/intersectionObserver'
	import { onMount } from 'svelte'
	import Button from '../atoms/Button.svelte'

	export let href = 'mailto:jonahmeijers97@gmail.com'
	export let animate = false

	let slide = false
	let js = false

	onMount(() => {
		js = true
	})
</script>

<style lang="scss">
	article {
		width: 100%;
		color: var(--primary);
		transition: var(--interaction-transition);
		display: flex;
		flex-direction: column;

		h2 {
			margin-bottom: var(--base-space);
		}

		&.animate {
			pointer-events: none;
			visibility: hidden;
		}

		&.slide {
			animation: slide-in-subtle var(--base-time) var(--easing);
			visibility: visible;

			@media (prefers-reduced-motion: reduce) {
				animation-name: fade-in;
			}
		}
	}
</style>

<article
	use:observer={(bool, amnt) =>
		slide === false && amnt >= 0.5 ? (slide = bool) : null}
	class:slide={!js || (animate && slide)}
	class:animate
>
	<h2><slot name="heading">Zie je jezelf hiertussen staan?</slot></h2>
	<Button --font-size="var(--step-2)" --width="100%" type="anchor" {href}>
		<slot name="button">Laten we iets vets maken!</slot>
	</Button>
</article>
