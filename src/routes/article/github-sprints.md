---
index: 3
title: Agile werken op GitHub
description: met milestones, projects en actions.
slug: article/github-sprints
image: /gh-action.png
---

De afgelopen tijd ben ik projectleider geweest voor een [schoolproject][wzdb] waarvoor we iteratief een prototype bouwen. We doen alles op GitHub; van documentatie tot aan project management. De tools die GitHub biedt zijn erg flexibel, maar je moet wel veel zelf doen om een gestroomlijnde workflow te krijgen op basis van sprints. De workflow die ik op wilde bouwen ging als volgt.

1. We maken milestones aan voor alle sprints.
2. We voegen issues toe aan de huidige of opkomende sprint als we eraan gaan werken.
3. Voor de issue wordt er een branch aangemaakt met het nummer van de issue erin verwerkt.
4. Wanneer nieuwe code wordt gepusht in die branch, wordt de issue omgevormd naar een pull request.
5. Wanneer de pull request is gemerged, wordt de branch automatisch verwijdert.

Een deel van deze stappen is te regelen via GitHub zelf, zoals het automatisch verwijderen van branches wanneer een pull request is gemerged. Toevallig hou ik onwijs van automatisering, dus heb ik de verantwoordelijkheid op me genomen om de missende puzzelstukjes aan te vullen met GitHub actions.

## Wat zijn GitHub actions?

[GitHub actions][actions] zijn kleine stukjes code die je kan laten uitvoeren wanneer je bijvoorbeeld code pusht naar GitHub, een nieuwe issue aanmaakt, een pull request opent of merged, noem het maar op. Deze "events" kan je zelf instellen per repository, waardoor je hele complexe workflows kan opzetten.

## Mijn eigen actions

Om het project management gestroomlijnder te maken voor mijzelf heb ik dus twee actions geschreven om bepaalde delen te automatiseren: [`issue-branch`][issue-branch]
en [`milestone-sprint`][milestone-sprint].

### `milestone-sprint`

Dit is de eerste action die ik heb geschreven. De action is vrij simpel, en werkt op basis van milestones met deadlines. Alle issues die gekoppeld zijn aan de milestone met de dichtstbijzijnde deadline worden verplaatst van een "Backlog" kolom naar een "To do" kolom in een project naar keuze. De issues moeten wel in het desbetreffende project zitten, anders werkt het niet.

Je kan drie opties meegeven:

1. De naam van het project in de repository
2. De naam van de kolom waar alle issues standaard in verschijnen (de "Backlog")
3. De naam van de kolom waar alle issues die in de huidige of opkomende milestone zitten moeten komen te staan (de "To do" lijst)

Zo kan je makkelijk een sprint planning maken, zonder dat je handmatig de sprint hoeft op te zetten in je GitHub project.

De action draait bij ons project elke keer wanneer je een issue een milestone geeft, en elke ochtend rond zes uur. Zo starten we elke dag 100% georganiseerd.

### `issue-branch`

De tweede action, en degene die een stuk geavanceerder is. `issue-branch` zorgt ervoor dat issues en branches goed samen gaan, en doet op meerdere manieren:

1. Maakt een branch waarbij het nummer van de issue in de naam staat.
2. Converteert de issue naar een pull request wanneer je veranderingen pusht naar GitHub in die branch.

De naam van de branch is zelf in te stellen, zolang er maar ergens in het patroon `{number}` staat. Op die plek komt namelijk het nummer van de corresponderende issue te staan. `iss#{number}` wordt bijvoorbeeld `iss#20` voor issue nummer 20.

De complexiteit bij deze action zit vooral in de edge cases. Wanneer er al een pull request bestaat, hoeft er niets te gebeuren. Wanneer je een pull request niet als draft kan openen wordt de pull request als een open request geopend. Als je een branch hebt die niet is aangemaakt met dit systeem, moet er ook niets gebeuren, want je kan geen issue omzetten naar een pull request als je het nummer niet kan vinden.

Al deze edge cases heb ik stapsgewijs uit moeten werken, gezien ze bijna allemaal voorkwamen in het project. Ik heb ook veel nieuwe features van GitHub geleerd, zoals dat issues omgezet kunnen worden naar pull requests en dat je een pull request als "draft" in kan stellen, wat betekent dat het nog een work-in-progress is en niet klaar is om gereviewed en gemerged te worden.

## Conclusie

GitHub Actions bouwen is een goudmijn voor automatisering. Je hebt toegang tot heel veel informatie en events waardoor je heel makkelijk in kan haken op momenten waarop een klein beetje automisering een hoop handmatig werk wegneemt. Ik heb het idee dat ik nog maar de tip van de ijsberg heb meegemaakt in wat er mogelijk is met GitHub Actions, en ben heel benieuwd wat er nog te leren valt. Het heeft ons in ieder geval heel erg geholpen om een gestroomlijnde workflow te creëeren waar we ons makkelijker aan kunnen houden dan niet, en daar ben ik persoonlijk wel blij mee.

[wzdb]: https://github.com/jonahgoldwastaken/wat-zegt-deze-brief
[actions]: https://github.com/marketplace?category=&query=&type=actions
[milestone-sprint]: https://github.com/jonahgoldwastaken/milestone-sprint
[issue-branch]: https://github.com/jonahgoldwastaken/issue-branch
