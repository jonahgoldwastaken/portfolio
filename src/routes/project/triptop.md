---
index: 6
title: Triptop
slug: project/triptop
description: Bouw de perfecte playlist voor je roadtrip.
image: /triptop/banner.png
year: 2021
client: CMD Minor WebDev
link: [tool, https://triptop.app]
---

<script>
  import Image from '$lib/components/atoms/Image.svelte'
</script>

Triptop is een tool om de perfecte playlist te generen voor je roadtrip. Je vult je start en eindpunt in, kiest minimaal 1 en maximaal 5 nummers uit je meest beluisterde songs op Spotify, en de tool genereert een playlist die precies lang genoeg is voor de uitgerekende duur van de rit.

<Image src="/triptop/generator.png" caption="Je kan goed bijhouden hoe vol de playlist al zit, zodat je weet hoe lang je nog ongeveer moet wachten op een resultaat" format="caption" />

Met deze playlist hoef je niet gelijk klaar te zijn, je kan nummers toevoegen, verwijderen, previewen en bepaalde nummers omwisselen voor een willekeurig nummer. Als je tevreden bent met je playlist kan je deze gelijk opslaan in je Spotify account en beginnen met luisteren!

<Image src="/triptop/saved.png" format="caption" caption="Aan het einde van de flow krijg je je playlist op een zilveren dienblad aangeboden." />

Nu even de nerdy kant van het verhaal. De app is vanaf nul opgebouwd, met alleen de templating als een externe dependency (namelijk [Handlebars](https://handlebarsjs.com)). De router, state management en alles wat daaromheen komt kijken is volledig custom. Dit heeft veel inzicht geboden in hoe een framework under the hood zou kunnen werken, en wat de tekortkomingen zijn bij frameworks als Vue en React.

Bekijk de [GitHub repository](https://github.com/jonahgoldwastaken/web-app-from-scratch-2021) als je het proces en de aanpak wilt bekijken. Misschien steek je er zelf ook wat van op!
