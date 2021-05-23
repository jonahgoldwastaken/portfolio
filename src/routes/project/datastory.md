---
index: 2
title: Representatie in parkeerplekken
slug: datastory
description: Is er genoeg plek om bij jouw favoriete plek te parkeren?
image: /datastory/banner.png
client: CMD Tech Track
year: 2020
link: [visualisatie, https://fa.jonahgold.dev]
---

<script>
  import Image from '$lib/components/atoms/Image.svelte'
</script>

Voor de Volkskrant heb ik een datastory gemaakt om representatie op het gebied van parkeermogelijkheden aan het licht te brengen. Met een zeer unieke interactieve diagram kan je zien hoeveel parkeerplekken in de buurt van hot spots in Amsterdam liggen.

Dit bied inzicht in hoe makkelijk het is voor doelgroepen van die hotspots om ze te bereiken met de auto. Vanzelfsprekend zijn de resultaten zeer interessant, en niet hoe je zou verwachten.

<Image src="/datastory/visualisation.png" format="caption" caption="De visualisatie heeft een ongewone klokvorm, wat extra uitdaging bood in het uitleggen ervan." />

De visualisatie is gebouwd op basis van verwerkte RDW data om het bruikbaar te maken in de visualisatie. Deze dataset is erg uitgebreid, maar niet compleet. Aangezien het vooral data is wat ingevoerd moet worden door mensen, zitten er veel buitenstaanders in de data. Dit moest op een bepaalde manier opgelost worden, wat een grote uitdaging bleek te zijn. Deze edge cases kunnen aan- en uitgezet worden in de visualisatie, zodat je een gecureerde dataset en de volledige dataset kan inzien.

<Image src="/datastory/paragraph.png" format="caption" caption="Naast de visualisatie staat een stukje tekst over de data die in de visualisatie staat. Zo kan je goede verbanden leggen tussen hoe de data eruit ziet en wat het daadwerkelijk betekent." />

Naast deze optie heb je veel verschillende filters waar je uit kan kiezen, die de visualisatie zelf en de tekst die de visualisatie uitleggen updaten. Alles is dus volledig dynamisch, waardoor je zelf kan uitzoeken hoe het zit met parkeerplekken in de buurt van jouw hotspot.

<Image src="/datastory/banner.png" format="caption" caption="Aan het einde van het artikel mag je zelf aan de slag met de data, en kan je met de filters zelf uitzoeken hoe de parkeersituatie eruitziet bij jouw favoriete plek(ken) in de stad." />
