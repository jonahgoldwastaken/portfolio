---
index: 8
title: Body chat
slug: project/bodychat
description: 
image: /bbwal/banner.png
year: 2021
client: CMD Minor WebDev
link: [app, https://hcd-chat.netlify.app]
---

<script>
  import Image from '$lib/components/atoms/Image.svelte'
</script>

Body chat is een concept wat ik heb opgeleverd voor het vak Human-Centered Design. Met dit vak hebben we een écht probleem van iemand voorgeschoteld gekregen, en hebben samen met diegene gekeken naar hoe dit probleem het beste opgelost kan worden voor hen. Ons testpersoon was Eric Groot Kormelink, een man die zijn hele leven in een rolstoel meemaakt. Tijdens de zwangerschap zijn zijn ledematen vergroeid geraakt, waardoor het moeilijk is voor hem om taken uit te voeren die fijne motoriek vereisen.

Het probleem wat hij mij voorschotelde is echter niet per sé een probleem wat aansluit op zijn beperking. Hij vindt het namelijk lastig om emoties af te lezen van chatberichten; emojis hebben geen universele betekenissen, sarcasme is moeilijk te spotten, onder andere. Het was dus aan mij om te onderzoeken hoe je emoties het beste af kan lezen van mensen, en hoe je dit het beste kan tonen bij elk chatbericht.

Door iteratief en nauw samen te werken met Eric heb ik uiteindelijk een chat app ontwikkeld die op drie verschillende manieren meet welke emotie je mee wilt geven aan een bericht:

1. Gezichtsuitdrukking
2. Typsnelheid
3. Woordgebruik

Deze drie inputs zijn individueel aan en uit te zetten. Typsnelheid en woordgebruik worden met een snelle onboarding gekalibreerd naar hoe snel de gebruiker typt en hoe schuin hun woordenschat is.

<!-- TODO: Screenshots van inputs bij onboarding toevoegen -->

De manier waarop emoties worden getoond is ook in te stellen op verschillende manieren:

1. Achtergrondkleur voor de chatbubbels, de chatachtergrond of beide.
2. Animaties voor de chatbubbels, de chatachtergrond of beide.
3. De tekstberichten op een verhalende wijze vertellen.
4. Een emoji die past bij de emotie toevoegen aan chatberichten.

<!-- TODO: Screenshot van output onboarding toevoegen toevoegen -->

Al deze inputs en outputs zijn tot stand gekomen door te kijken hoe Eric omgaat met zijn computer en hoe hij is als persoon. Speelse elementen als animaties passen goed bij zijn gevoel voor humor. Ik heb hem meerdere keren aan het lachen gekregen bij het testen!

Ook heb ik ook nog achievements toegevoegd. Eric houdt namelijk van spelletjes spelen in zijn vrije tijd. Gamification past dus ook goed bij zijn persoonlijkheid, en maakt Body chat alleen maar leuker voor hem om te gebruiken.

<!-- TODO: Screenshot van achievements toevoegen -->

Als allerlaatste toevoeging heb ik een proof-of-concept gemaakt van een chat waarbij emoties reageren op elkaar door extra animaties te gebruiken. Het is volledig gestaged, maar wel een interessant idee om verder te onderzoeken in een volgende iteratie (mocht die er zijn).

<!-- TODO: Screenshot toevoegen van proof-of-concept chat -->

Het was een aangename ervaring om voor één persoon een concept te bedenken en te testen. Het heeft me doen beseffen hoe belangrijk het is om in contact te zijn met je doelgroep en hoe waardevol de feedback is die ze geven, positief en negatief. Ik ga deze kennis zeker toepassen in mijn carrière als CMD'er. Hoe het proces precies in zijn werk is gegaan kan je [hier in mijn procesverslag vinden](https://github.com/jonahgoldwastaken/human-centered-design-2021).
