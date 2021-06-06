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
const rafCallbacks = new Set()

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
<script>
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
  use:raf={{
    enabled: true,
    cb: () => {
      x = window.pageYOffset
    },
  }}
  style="--x: {x}"
>
  Hallo daar!
</p>
```

Zoals je ziet moet je wat tijd nemen om uit te vogelen hoe je de code werkend krijgt, maar je hoeft er daarna ook niets meer aan te doen.

De `IntersectionObserver` action wordt op dezelfde manier toegepast als de `rAF` action, maar dan met een `IntersectionObserver`:

```javascript
// De variabele voor de IntersectionObserver
let iObserver

// Een set aan objecten met daarin een DOM element en de callback functie die erbij uitgevoerd moet worden.
const observeArray = new Set()

// De functie die wordt gecalled wanneer een item (stopt met) intersect(en)
function callback(entries) {
  entries.forEach(entry => {
    const obj = [...observeArray].find(obj => obj.el === entry.target)
    obj.cb(entry.isIntersecting, entry.intersectionRatio)
  })
}

// De action die de IntersectionObserver initialiseert en elementen toevoegt of verwijdert.
export default function observer(el, cb) {
  if (!iObserver)
    iObserver = new IntersectionObserver(callback, {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      rootMargin: '0px',
    })
  const obj = {
    cb,
    el,
  }
  observeArray.add(obj)
  iObserver.observe(el)

  return {
    destroy: () => {
      iObserver.unobserve(el)
      observeArray.delete(obj)
    },
  }
}
```

```svelte
<script>
  import observer from './intersectionObserver.js'

  let show = false
</script>

<style>
  p {
    transform: translateX(-100%);
    opacity: 0;
    transition: 0.2s ease-in-out;
  }

  p.show {
    transform: translateX(0);
    opacity: 1;
  }
</style>

// Deze p tag animeert in en uit van links als deze intersect met de viewport.
<p
  use:observer={(isIntersecting, intersectionAmount) => {
    show = isIntersecting
  }}
  class:show
>
  Hallo daar!
</p>
```

En dan nog de action met beide gecombineerd. De action bevindt zich op dezelfde plek als die van de regulier `rAF`, en implementeerd de `IntersectionObserver` action. Dit betekent dat er dus altijd maar 1 `requestAnimationFrame` loop en 1 `IntersectionObserver` draait, wat goed is voor de performance:

```js
// Dezelfde observer als de action dus.
import observer from './intersectionObserver.js'

// De action combineert de 'raf' en 'observer' actions om samen een 'iObservedRaf' te creeëren, oftewel een 'rAF' loop die alleen draait als het element in zicht is.
export function iObservedRaf(
  node: HTMLElement,
  cb: () => void
): { update: (cb: () => void) => void, destroy: () => void } {
  node.classlist.add('raf')
  node.classlist.add('visible')
  let enabled = true
  let callback = cb
  const rafAction = raf(node, { cb, enabled })
  const observeAction = observer(node, bool => {
    if (bool !== enabled) {
      enabled = bool
      node.classList[enabled ? 'add' : 'remove']('visible')
      rafAction.update({ cb: callback, enabled })
      return
    }
  })

  return {
    update(cb) {
      callback = cb
      rafAction.update({
        enabled,
        cb: callback,
      })
    },
    destroy() {
      rafAction.destroy()
      observeAction.destroy()
    },
  }
}
```

Zoals je waarschijnlijk al had opgemerkt werkt deze action met de CSS classes `raf` en `visible`. In Svelte kunnen we met deze classes dan de styling automatisch aanpassen.

```svelte
<script>
  import { iObservedRaf } from './requestAnimationFrame.js'

  let scale = 0
</script>

<style global>
  p.visible {
    transform: scale(var(--scale));
  }
</style>

<p
  style="--scale: {scale}"
  use:iObservedRaf={() => {
    // Dit zou voor geen meter werken omdat de schaling niet klopt, maar even als voorbeeldje.
    scale = window.pageYOffset / window.innerHeight
  }}
>
  Hallo daar!
</p>
```

Nu kan ik vette animaties toevoegen aan mijn portfolio, zonder zorgen te maken over performance issues (tenzij ik overal animaties ga toevoegen, maar dat is niet helemaal de bedoeling). Een paar leuke plekken waarop ik deze actions heb gebruikt zijn de titelbladen van alle artikelen (scroll maar eens naar boven), elk tegeltje voor [artikelen](/articles) en [projecten](/projects) en de secties op mijn [about-pagina](/about).

Als sluiter wil ik Fenna de Wilde bedanken voor haar zeer inspirerende talk en de organisatoren van de minor Web Design & Development voor het organiseren van de talk.

[intersection-observer]: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
[raf]: https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
[render-process]: https://developers.google.com/web/fundamentals/performance/rendering
[will-change]: https://developer.mozilla.org/en-US/docs/Web/CSS/will-change
[sveltekit]: https://kit.svelte.dev
[svelte-actions]: https://svelte.dev/docs#use_action
