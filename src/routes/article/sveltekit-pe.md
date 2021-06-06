---
index: 1
title: Waarom Svelte(Kit) hét framework is voor Progressively enhanced web-apps
slug: sveltekit-pe
image: /svelte-kit-machine.png
---

Progressive Enhancement is een web-development term waar steeds meer aandacht aan moet worden besteedt. Sinds veel mensen in het afgelopen decennium op eigen houtje de web-development wereld in zijn gestapt, missen ze veel van de basis die wel op school wordt aangeleerd. Met de opkomst van toegankelijkheid op het web, is progressive enhancement een zo'n basis-element waar geen aandacht aan wordt besteed door velen, wat eigenlijk niet zou moeten zijn. Frameworks maken het (té) makkelijk voor beginnende web-developers om gelijk in hun ecosysteem te stappen, zonder de gevolgen daarvan in te zien.

Denk hierbij aan React en Vue.JS. Out-of-the-box werken de projecten die je bouwt met deze frameworks niet zonder JavaScript. In plaats daarvan krijg je de welbekende "You need JavaScript to run this app" teruggekaatst, en heb je geen andere keus dan mee te spelen als je de web-app wilt gebruiken.

Nu zijn er frameworks als Gatsby, Next.JS en Nuxt.JS die React en Vue.JS aanvullen en de mogelijkheid voor Server-side rendering aan te bieden. Dit betekent dat de pagina die je aanroept ook op de server opgebouwd kan worden, en je de HTML en CSS + de React of Vue.JS app geserveerd krijgt, en je vanaf dat punt de server niet meer nodig hebt mits je JavaScript aan hebt staan.

Svelte pakt dit aan van de andere kant. Svelte is namelijk een _compiler_ voor de code die je in `.svelte` bestanden schrijft. Deze code wordt omgezet in zeer geoptimaliseerde op zichzelf staande code die draait zonder dat je Svelte hoeft te draaien in de browser. Gecompileerde Svelte components kunnen [zichzelf renderen][render], wat een oplossing als `react-dom` of Vue.JS inladen in de browser onnodig maakt.

Dit betekent echter niet dat je Svelte app out-of-the-box zonder JavaScript werkt, maar het dus wel de tooling heeft om dit op eigen houtje makkelijk(er) voor elkaar te krijgen. Het is ook de bedoeling dat dit niet gebeurt in Svelte zelf, want dat gaat in tegen waar het framework voor is gebouwd: De HTML, CSS en JS talen uitbreiden met features om reactive UIs mogelijk en makkelijk te maken, zonder dat interoperabiliteit met de platformen voor die talen verloren gaat. Wat wel kan is dat je specifieke tooling bouwt om het bouwen van je Svelte code en de output ervan aan te passen. Een soort kit voor Svelte als het ware.

Enter SvelteKit: "The fastest way to build Svelte apps" volgens [de website][sveltekit]. SvelteKit voegt, naast o.a. een routing systeem, een aantal handige functionaliteiten toe aan het framework, waardoor je naast de code zelf ook de output kan zetten naar eigen hand. SvelteKit is van de grond opgebouwd om te draaien op zogeheten "serverless" platforms als [Netlify][netlify] en [Vercel][vercel]. Dit gebeurt via `adapters`; stukjes code die de gecompileerde code van SvelteKit zo omvormen dat het werkbaar is op het platform naar keuze. Dat betekent dus dat je ook een adapter kan maken om Svelte code om te zetten in statische HTML en CSS, met JavaScript om interactiviteit toe te voegen. Toevallig bestaat deze al, en en heeft de toepasselijke naam `adapter-static`.

Soms wil je echter dat je Svelte pagina's pas worden gerenderd wanneer iemand ze opvraagt. SvelteKit heeft de functionaliteit voor pre-rendering ingebouwd, wat zeer makkelijk aan en uitgezet kan worden door een variabele met de naam `prerender` te exporteren met de waarde `true` or `false.

```svelte
<!-- De "module" context biedt de mogelijkheid om variabelen te exporteren naast de "default" geëxporteerde Svelte component -->
<script context="module">
  <!-- Prerender deze pagina naar HTML en CSS -->
  export let prerender = true

  <!-- Stuur de gecompileerde JS code voor deze pagina niet mee -->
  export let hydrate = false

  <!-- Stuur de SvelteKit router mee om client-side routing aan te zetten -->
  export let router = true
</script>

<!-- Je Svelte component komt hieronder -->
```

Deze ingebouwde features, plus `adapter-static`, maakt het heel makkelijk om vanuit een progressive enhancement optiek te werk te gaan. Je kan ook heel makkelijk testen of je app zonder JavaScript werkt door het vanuit de app uit te schakelen. Scheelt een hele hoop instellingen checken per device waarop je test.

Nu de tooling het zó makkelijk maakt om PE toe te passen, is het nu aan de developers om hun mindset ernaar om te zetten en het serieus gaan nemen. Mocht jij een van die developers zijn, lees dan vooral [dit artikel van Stuart Langridge][ehjs], waarin hij duidelijk laat zien dat progressive enhancement niet alleen van toepassing is voor mensen die hun JavaScript uit hebben staan.

[render]: https://svelte.dev/docs#Server-side_component_API
[sveltekit]: https://kit.svelte.dev
[netlify]: https://netlify.com
[vercel]: https://vercel.com
[ehjs]: https://kryogenix.org/code/browser/everyonehasjs.html
