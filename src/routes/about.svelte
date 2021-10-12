<script lang="ts">
	import observer from '$lib/actions/intersectionObserver'
	import { iObservedTextAnimation } from '$lib/actions/textAnimation'
	import ImageBlock from '$lib/components/atoms/ImageBlock.svelte'
	import HorizontalList from '$lib/components/molecules/HorizontalList.svelte'
	import { onMount } from 'svelte'

	let visibleArticles = [true, true, true]

	onMount(() => {
		visibleArticles = visibleArticles.map(() => false)
	})
</script>

<style lang="scss">
	article {
		font-size: var(--step-0);
		max-width: 80ch;
		width: 100%;
		margin: auto;

		:global(h1) {
			margin-bottom: var(--base-space);
		}
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		font-size: var(--step-0);

		> * + * {
			margin-top: var(--double-space);
		}

		p + p {
			margin-top: var(--base-space);
		}

		> article {
			max-width: 80ch;
			width: 100%;
			visibility: hidden;

			&.animate {
				visibility: visible;
				animation: swipe-up var(--base-time) var(--easing) forwards;

				@keyframes swipe-up {
					from {
						opacity: 0;
						transform: translateY(40px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
			}

			h2 {
				margin-bottom: var(--half-space);
			}

			+ article {
				display: grid;

				article + article {
					margin-top: var(--base-space);
				}

				h3 {
					margin-bottom: var(--half-space);

					+ h4 {
						margin-top: 0;
					}
				}

				h4 {
					margin-bottom: var(--half-space);
					margin-top: var(--base-space);
				}

				@media screen and (min-width: 90rem) {
					article:nth-last-child(3) {
						grid-column: span 2;
					}

					grid-template-columns: 1fr 1fr;
					align-content: start;
					column-gap: var(--base-space);

					h2 {
						grid-column: 1 / span 2;
					}

					article + article:nth-of-type(2):last-child {
						margin-top: 0;
					}
				}
			}
		}
	}
</style>

<svelte:head>
	<title>Over - Jonah Meijers</title>
	<meta
		name="descrtiption"
		content="Een kort verhaal van Jonah, zijn skillset en de tools die hij gebruikt."
	/>
</svelte:head>

<article>
	<h1
		use:iObservedTextAnimation={{
			threshold: 0.75,
			splitOn: 'letters',
		}}
	>
		Over
	</h1>
	<main>
		<article
			use:observer={(bool, amnt) => {
				if (visibleArticles[0] === false && bool && amnt > 0.2)
					visibleArticles[0] = bool
			}}
			class:animate={visibleArticles[0]}
		>
			<h2>Wie is Jonah?</h2>
			<p>
				Ik ben een Interaction Designer en (voornamelijk) Web Developer die de
				puntjes op de i zet. Ik bouw mijn projecten voor een specifiek doel,
				namelijk om het doel van de gebruiker in zo'n kort mogelijke tijd te
				bereiken. Het vergt veel creativiteit, aandacht, empathie en
				doorzettingsvermogen om tot strak uitgewerkte applicaties te komen waar
				mensen echt wat aan hebben.
			</p>
			<p>
				Op mijn opleiding, Communication &amp; Multimedia Design, komt deze
				skillset zeer goed van pas. Ik bedenk concept na concept waar de
				docenten van onder de indruk zijn. Ik zit dus echt goed op mijn plek.
			</p>
			<p>
				Naast mijn studie maak ik tijd om nieuwe muziek te ontdekken en te
				draaien, af en toe een potje te gamen en vooral veel te ondernemen. Als
				deel van de activiteitencommissie in mijn studentenflat organiseer ik
				veel verschillende activiteiten samen met andere studenten voor iedereen
				in het gebouw.
			</p>
		</article>
		<article
			use:observer={(bool, amnt) => {
				if (visibleArticles[1] === false && bool && amnt > 0.2)
					visibleArticles[1] = bool
			}}
			class:animate={visibleArticles[1]}
		>
			<h2>Skills</h2>
			<article>
				<h3>Algemeen</h3>
				<ul>
					<li>Nederlands zowel Engels beheersend op C2 niveau</li>
					<li>Samenwerken in teamverband</li>
					<li>Presentaties maken en geven</li>
					<li>Projectmanagement</li>
					<li>Presteren onder druk</li>
					<li>Snel leren en dingen eigen maken</li>
				</ul>
			</article>
			<article>
				<h3>WebDev</h3>
				<ul>
					<li>Progressive enhancement</li>
					<li>Breakdown schetsen</li>
					<li>FP & OOP</li>
					<li>BEM</li>
					<li>PWA</li>
					<li>CSS-in-JS</li>
					<li>CRUD via REST en GraphQL</li>
					<li>Deployment</li>
				</ul>
			</article>
			<article>
				<h3>Design</h3>
				<ul>
					<li>Human-centered Design</li>
					<li>Interaction Design</li>
					<li>UI Design</li>
					<li>UI Stack</li>
					<li>Design (pattern) research</li>
					<li>Usability testing</li>
					<li>Motion Design</li>
				</ul>
			</article>
		</article>
		<article
			use:observer={(bool, amnt) => {
				if (visibleArticles[2] === false && bool && amnt > 0.2)
					visibleArticles[2] = bool
			}}
			class:animate={visibleArticles[2]}
		>
			<h2>Tools</h2>
			<article>
				<h3>Algemeen</h3>
				<h4>Weapons of choice</h4>
				<HorizontalList --margin="var(--quarter-space)">
					<li>
						<ImageBlock
							href="https://trello.com"
							src="/logos/trello.svg"
							name="Trello"
						/>
					</li>
					<li>
						<ImageBlock
							href="https://culturedcode.com"
							src="/logos/things.png"
							name="Things 3"
						/>
					</li>
					<li>
						<ImageBlock
							href="https://craft.do"
							src="/logos/craft.png"
							name="Craft"
						/>
					</li>
					<li>
						<ImageBlock
							href="https://stayinsession.com"
							src="/logos/session.png"
							name="Session"
							noPadding
						/>
					</li>
				</HorizontalList>
			</article>
			<article>
				<h3>WebDev</h3>
				<h4>Weapons of choice</h4>
				<HorizontalList --margin="var(--quarter-space)">
					<li>
						<ImageBlock
							href="https://svelte.dev"
							src="/logos/svelte.svg"
							name="Svelte"
						/>
					</li>
					<li>
						<ImageBlock
							href="https://www.typescriptlang.org"
							src="/logos/ts.svg"
							colour="#3178c6"
							name="TypeScript"
						/>
					</li>
					<li>
						<ImageBlock
							href="https://sass-lang.com"
							src="/logos/sass.svg"
							colour="#cd6699"
							name="Sass"
						/>
					</li>
					<li>
						<ImageBlock
							href="https://golang.org"
							src="/logos/golang.svg"
							name="Golang"
						/>
					</li>
					<li>
						<ImageBlock
							href="https://code.visualstudio.com"
							src="/logos/vscode.svg"
							name="VSCode"
						/>
					</li>
				</HorizontalList>
				<h4>Gewerkt met (en kennis van)</h4>
				<HorizontalList --margin="var(--quarter-space)">
					<li>
						<ImageBlock src="/logos/html.svg" name="HTML5" />
					</li>
					<li>
						<ImageBlock src="/logos/css.svg" name="CSS3" />
					</li>
					<li>
						<ImageBlock
							src="/logos/js.svg"
							colour="#f7df1e"
							name="JavaScript (ES2020)"
						/>
					</li>
					<li>
						<ImageBlock
							href="https://reactjs.org"
							src="/logos/react.svg"
							colour="#282c34"
							name="React"
						/>
					</li>
					<li>
						<ImageBlock
							href="https://nextjs.org"
							src="/logos/nextjs.svg"
							name="Next.js"
						/>
					</li>
					<li>
						<ImageBlock
							href="https://nodejs.org"
							src="/logos/nodejs.svg"
							colour="#fff"
							name="NodeJS"
						/>
					</li>
					<li>
						<ImageBlock
							href="https://docker.com"
							src="/logos/docker.png"
							colour="#007bff"
							name="Docker"
						/>
					</li>
					<li>
						<ImageBlock
							href="https://nova.app"
							src="/logos/nova.png"
							colour="#3d147f"
							name="Panic Nova"
						/>
					</li>
					<li>
						<ImageBlock
							href="https://www.jetbrains.com/webstorm/"
							src="/logos/webstorm.svg"
							colour="#fff"
							name="Webstorm"
						/>
					</li>
				</HorizontalList>
			</article>
			<article>
				<h3>Design</h3>
				<h4>Weapons of choice</h4>
				<HorizontalList --margin="var(--quarter-space)">
					<li>
						<ImageBlock
							href="https://sketch.com"
							src="/logos/sketch.svg"
							name="Sketch"
						/>
					</li>
					<li>
						<ImageBlock
							href="https://affinity.serif.com"
							src="/logos/affinity.svg"
							colour="#000"
							name="Affinity"
						/>
					</li>
				</HorizontalList>
				<h4>Gewerkt met (en kennis van)</h4>
				<HorizontalList --margin="var(--quarter-space)">
					<li>
						<ImageBlock
							href="https://adobe.com"
							src="/logos/adobe.svg"
							name="Adobe CC"
						/>
					</li>
					<li>
						<ImageBlock
							href="https://figma.com"
							src="/logos/figma.svg"
							colour="rgb(56, 58, 66)"
							name="Figma"
						/>
					</li>
					<li>
						<ImageBlock
							href="https://www.framer.com"
							src="/logos/framer.svg"
							colour="#000"
							name="Framer"
						/>
					</li>
				</HorizontalList>
			</article>
		</article>
	</main>
</article>
