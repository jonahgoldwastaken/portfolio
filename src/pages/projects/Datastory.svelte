<script>
  import Article from '../../components/templates/Article.svelte'
  import ArticleLink from '../../components/atoms/ArticleLink.svelte'
  import Text from '../../components/atoms/Text.svelte'
</script>

<Article client="CMD Tech Track" year={2020}>
  <slot slot="title">Interactieve data story</slot>
  <img slot="image" src="/datastory.png" alt="Screenshot Data story" />
  <Text>
    De Volkskrant heeft de Tech Track de opdracht gegeven om met data van het
    RDW een interactieve data story te schrijven die journalistisch interessant
    is, met als doel om te leren hoe je data kan verwerken, en die verwerkte
    data kan verwerken in een applicatie die er een interessant verhaal van
    maakt.
  </Text>
  <Text>
    Ik heb gekozen voor een unieke datavisualisatie. De klokvisualisatie laat
    zien hoe ver parkeerplekken van een hotspot liggen, en wanneer ze openen of
    sluiten.
  </Text>
  <Text>
    Ik heb veel ontwerpbeslissingen moeten nemen over data die niet overeenkomt
    met de ideale verwachtingen. Het resultaat is dat edge cases aan en uit
    kunnen worden gezet, wat ervoor zorgt dat de gebruiker de visualisatie zo
    simpel of ingewikkeld mogelijk kan houden.
  </Text>
  <ArticleLink href="https://fa.jonahgold.dev">Visualisatie</ArticleLink>
  <ArticleLink href="https://github.com/theonejonahgold/frontend-data/wiki">
    Dataverwerking- en visualisatie-proces
  </ArticleLink>
  <ArticleLink
    href="https://github.com/theonejonahgold/frontend-applications/wiki"
  >
    Data story proces
  </ArticleLink>
</Article>
