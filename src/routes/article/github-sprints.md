---
index: 3
title: Agile werken op GitHub
description: met milestones, projects en actions.
slug: optimised-animations
image: /svelte-kit-machine.png
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



### `issue-branch`



[wzdb]: https://github.com/theonejonahgold/wat-zegt-deze-brief
[actions]: https://github.com/marketplace?category=&query=&type=actions
[milestone-sprint]: https://github.com/theonejonahgold/milestone-sprint
[issue-branch]: https://github.com/theonejonahgold/issue-branch