<script>
  import Article from '../../components/templates/Article.svelte'
  import Text from '../../components/atoms/Text.svelte'
  import ArticleLink from '../../components/atoms/ArticleLink.svelte'
</script>

<Article client="CMD Dataweek" year={2020}>
  <slot slot="title">De Blauwburgwal - toen en nu</slot>
  <img
    slot="image"
    src="https://raw.githubusercontent.com/theonejonahgold/information_design/master/.gitbook/assets/screenshot_dataweek.png"
    alt="Screenshot Blauwburgwal project"
  />
  <Text>
    De Blauwburgwal is een doodgewone wal in Amsterdam, met een onbekende en
    diepgaande geschiedenis. De Blauwburgwal is op 11 mei 1940 zwaar getroffen
    door een bombardement, die de een groot deel van de straat in puin
    achterliet, en 44 mensen het leven kostte.
  </Text>
  <Text>
    In deze data story vertellen
    <a href="http://rosavoogd.nl" target="_blank">Rosa Voogd</a>
    en ik een paar van de verhalen die zijn verzameld over het bombardement en
    deze samengehangen met hoe de wal er nu uitziet. Dit biedt een groot
    contrast, en brengt de verhalen nog meer diepgang dan ze al hadden.
  </Text>
  <Text>
    De verhalen komen uit een boekje van Fred Geukes Foppen, die alle verhalen
    van de mensen betrokken bij het bombardement heeft verzameld en
    samengevoegd. Grote dank aan de heer Geukes Foppen voor zijn werk. Het heeft
    ons heel erg geholpen met het concept.
  </Text>
  <ArticleLink href="https://dataweek.jonahgold.dev">
    Bekijk de visualisatie
  </ArticleLink>
</Article>
