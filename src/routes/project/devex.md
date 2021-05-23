---
index: 7
title: DevEx
slug: devex
description: Deel jouw code sessies met de dev community.
image: /devex/banner.png
year: 2021
client: CMD Real-Time Web
link: [de app, https://devex.jonahgold.dev]
---

<script>
  import Image from '$lib/components/atoms/Image.svelte'
</script>

DevEx is een live-streaming platform voor developers die hun code-sessies willen delen met de wereld. Het is dé live-streaming platform voor programmeurs.

DevEx biedt veel featuers die overeenkomen met andere platforms, zoals [Twitch][twitch]:

- Ontdek de populairste streamers op de "Discover" pagina.
- Kijk naar je favoriete programmeertalen via de "Languages" pagina.
- Volg je favoriete streamers, en krijg real-time updates wanneer ze live zijn in je "Following" tray.
- Praat samen met andere kijkers en de streamer met de real-time chat.
- Stream live met apps als [OBS][obs], en pas je stream aan met een titel en programmeertaal naar keuze.

<Image lazy format="caption" src="/devex/profile.png" caption="Op je profiel pagina kan je alles aan je stream veranderen." />

Het is een app met veel verborgen functionaliteiten die op een bepaalde manier de spotlight moeten krijgen. Dit is gelukt door te focussen op de UI stack en onboarding sequences te introduceren voor first-timers van de app zelf en bepaalde pagina's die extra functionaliteiten aanbieden.

<Image lazy format="caption" src="/devex/zero-state.png" caption="Empty states zorgen ervoor dat er altijd wat te doen is." />

Deze pagina's worden aangemoedigd door lege states, bijvoorbeeld een lege Discovery pagina of Following tray, op te vullen met kleine stukjes tekst die tot actie aanmoedigen. Zo wordt app discovery aangemoedigd, en leren gebruikers stapsgewijs de app kennen.

<Image lazy format="caption" src="/devex/onboarding.png" caption="Onboardings verwelkomen gebruikers en introduceren belangrijke features van de site." />

DevEx draait op een infrastructuur bestaande uit 3 hoofdcomponenten:

1. Een SvelteKit web-app.
2. Een NodeJS app die authenticatie en data-requests afhandeld.
3. Een NodeJS app die stream-data afhandeld.

Op de laateste wil ik focussen, want daar zit de meeste magie in. Op deze NodeJS server draait namelijk een package genaamde [Node Media Server][nms] (NMS). NMS kan video-streams ontvangen van meerdere plekken, waaronder [OBS][obs], en deze terugsturen naar gebruikers. DevEx gebruikt dit om de [RTMP][rtmp] stream van programma's als OBS om te zetten naar [HLS][hls] in meerdere resoluties en maakt deze openbaar aan de gebruiker in de web-applicatie.

Op de [GitHub repository][repo] vind je uitgebreide technische informatie en een reflectie op het project.

[twitch]: https://twitch.tv
[obs]: https://obsproject.com
[rtmp]: https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol
[hls]: https://en.wikipedia.org/wiki/HTTP_Live_Streaming
[repo]: https://github.com/theonejonahgold/devex
[nms]: https://github.com/illuspas/Node-Media-Server
