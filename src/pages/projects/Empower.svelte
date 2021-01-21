<script>
  import Article from '../../components/templates/Article.svelte'
  import ArticleLink from '../../components/atoms/ArticleLink.svelte'
  import Text from '../../components/atoms/Text.svelte'
</script>

<Article client="CMD Information Design" year={2021}>
  <slot slot="title">EMPOWER 2.0</slot>
  <img
    slot="image"
    src="/empower.png"
    alt="Screenshot homepage EMPOWER 2.0 toolkit"
  />
  <Text>
    EMPOWER 2.0 is een toolkit voor beleidsmakers om prosumers te worden op het
    gebied van hernieuwbare energie. Op veel plekken vind je informatie
    hierover, maar nergens is een duidelijk overzicht aanwezig.
  </Text>
  <Text>
    Enter onze toolkit. <a href="https://rosavoogd.nl" trinco-ignore>Rosa</a>,
    <a href="http://fleurvanson.com" trinco-ignore>Fleur</a> en ik zijn druk
    bezig geweest om in 5 weken tijd een prachtproduct neer te zetten die
    beleidsmakers <i>empowered</i> om meer kennis te vergaren over hernieuwbare energie.
  </Text>
  <Text>
    Het product bevat twee pagina's. De homepagina biedt een overzicht van de
    gemeenten in Nederland, met nuttige maar oppervlakkige informatie. Door
    maximaal 3 gemeenten te selecteren, kan je de tweede pagina openen waar de
    data bloot wordt gelegd en je duidelijk kan zien wat je goed doet of beter
    kan doen als gemeente.
  </Text>
  <Text>
    Ik heb met dit project erg veel geleerd over het integreren van een robuust
    design in hoog tempo. Niets wat je ziet is dummy, alles is op basis van
    echte data berekent of opgebouwd. Dit vergde veel expertise op het gebied
    van data-management en data-consumption, en ik ben persoonlijk erg trots op
    het resultaat.
  </Text>
  <ArticleLink href="https://empower.jonahgold.dev">Prototype</ArticleLink>
</Article>
