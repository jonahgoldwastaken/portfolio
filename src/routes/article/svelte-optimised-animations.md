---
index: 2
title: Hoe mijn portfolio-animaties smooth werken.
slug: optimised-animations
image: /svelte-kit-machine.png
---

Dit artikel gaat ervan uit dat je kennis hebt van [`IntersectionObserver`s][intersection-observer] en [`requestAnimationFrame`][raf] (ofwel `rAF`). Deze technologieën worden lichtelijk besproken in dit artikel. Meer informatie kan je vinden achter de links in deze paragraaf.

Ik heb altijd een grote waardering gehad voor graphical animation. Van jongs-af-aan speel ik af en toe met After Effects, en eens in de zoveel tijd komt er dan ook wel iets uit waar ik best trots op ben. De afgelopen jaren is deze waardering meer overgelopen naar Motion Design, wat vooral komt door de opleiding die ik ben gaan volgen (Communication & Multimedia Design).

Op het web kan je op hele creatieve manieren statische websites meer leven inblazen door kleine animaties en transities toe te voegen op plekken waar mensen dit instinctief verwachten. Hierdoor voelt het web natuurlijker, intuïtiever en fijner aan in het gebruik. Er zijn weinig bedrijven die hier grote nadruk op leggen, maar de bedrijven die dit doen springen er wel altijd uit.

Een zo'n bedrijf is Build in Amsterdam. Op 1 april 2021 kwam creative front-ender Fenna de Wilde namens Build in Amsterdam een gastcollege geven over webanimatie, en hoe je dit met bepaalde technieken goed kan optimaliseren voor het web. Ze kwam met zeer interessante en creatieve oplossingen om animaties buttery smooth te maken, en ik kon niet wachten om deze technieken zelf toe te passen.

De technieken die ze benoemde waren:

- Gebruik alleen `transform` en `opacity`, omdat deze niet voor layout shifts zorgen (meer hierover in [dit artikel][render-process]).
- Verberg elementen met animaties als ze niet zichtbaar zijn met `visibility: hidden;` en `IntersectionObserver`s
- Gebruik `rAF` voor animaties in plaats van event listeners. Combineer met `IntersectionObserver` om rAF alleen aan te zetten wanneer het nodig is.
- Gebruik `will-change` alleen als een last resort. De reden hiervoor is dat het veel browser optimalisaties uit het raam gooit. Meer details hierover vindt je [hier][will-change], met een aantal tips hoe je `will-change` op de juiste manier kan gebruiken.

Deze info kwam goed van pas, want ik stond net op het punt om mijn portfolio website een flinke opknapbeurt te geven. Nu kon ik dus deze kennis gebruiken om animaties die ik wil toevoegen aan mijn website buttery-smooth te krijgen. 100% van de tijd.

Mijn portfolio website heb ik gebouwd in [SvelteKit][sveltekit]. Dit betekent dat ik [Svelte actions][svelte-actions] kan gebruiken om `rAF` en `IntersectionObserver` toe te voegen aan mijn Svelte components.

Deze actions heb ik opgedeeld in 3 delen, eentje voor `rAF`, eentje voor `IntersectionObserver`, en eentje die beide combineert.

De `rAF` action valt een beetje out-of-context, aangezien het niets doet met het HTML element dat wordt meegegeven. Het maakt het toevoegen en verwijderen van callback functions wel heel makkelijk, omdat er geen extra code in Svelte components nodig is om dit af te handelen:

```javascript
// SvelteKit variabele die aangeeft of de code in de browser draait of niet
import { browser } from '$app/env'

// Een ES6 Set voor alle callback functions die draaien in dezelfde rAF loop
const rafCallbacks = new Set<() => void>()

// De initiële rAF looop
let id = browser ? requestAnimationFrame(rafLoop) : null

// De Svelte action, die een `_` HTML element, `cb` callback function en een `enabled` boolean meekrijgt
export function raf(_, { cb, enabled }) {
  let updatedCb = cb
  if (enabled) rafCallbacks.add(cb)

  return {
    update({ cb: newCb, enabled: animate }) {
      if (!animate) {
        rafCallbacks.delete(updatedCb)
        return updateRafLoop()
      }
      
      rafCallbacks.delete(updatedCb)
      updatedCb = newCb
      rafCallbacks.add(updatedCb)
      updateRafLoop()
    },
    destroy() {
      rafCallbacks.delete(updatedCb)
    },
  }
}

// De function die elke rAF loop draait.
function rafLoop() {
  rafCallbacks.forEach(cb => cb())
  updateRafLoop()
  if (!id) return
  requestAnimationFrame(rafLoop)
}

// Zet de rAF aan of uit op basis van of er callback functions in de `rafCallbacks` Set zitten
function updateRafLoop() {
  if (rafCallbacks.size && !id) {
    id = requestAnimationFrame(rafLoop)
    return
  }
  if (rafCallbacks.size && id) return
  cancelAnimationFrame(id)
  id = null
}
```

De `raf` function kan ik nu importeren in een Svelte component, en aan een HTML element koppelen:

```svelte
<script lang="ts">
  import raf from './requestAnimationFrame.js'
  
  let x = 0
</script>

<style>
  p {
    transform: translateX(var(--x));
  }
</style>

<!-- Deze <p> tag schijft van links naar rechts als je scrollt. -->
<p
  use:raf={
    enabled: true,
    cb: () => {
      x = window.pageYOffset
    }
  }
  style="--x: {x}"
>
  Hallo daar!
</p>
```

[intersection-observer]: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
[raf]: https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
[render-process]: https://developers.google.com/web/fundamentals/performance/rendering
[will-change]: https://developer.mozilla.org/en-US/docs/Web/CSS/will-change
[sveltekit]: https://kit.svelte.dev
[svelte-actions]: https://svelte.dev/docs#use_action