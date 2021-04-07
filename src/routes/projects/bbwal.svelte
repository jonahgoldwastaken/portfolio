<script>
  import Article from '$lib/components/templates/Article.svelte'
  import ArticleLink from '$lib/components/atoms/ArticleLink.svelte'
</script>

<svelte:head>
  <title>Blauwburgwal - Jonah Meijers</title>
</svelte:head>

<Article title="De Blauwburgwal - toen en nu" client="CMD Dataweek" year={2020}>
  <img slot="image" src="/dataweek.png" alt="Screenshot Blauwburgwal project" />
  <p>
    De Blauwburgwal is een doodgewone wal in Amsterdam, met een onbekende en
    diepgaande geschiedenis. De Blauwburgwal is op 11 mei 1940 zwaar getroffen
    door een bombardement, die de een groot deel van de straat in puin
    achterliet, en 44 mensen het leven kostte.
  </p>
  <p>
    In deze data story vertellen Rosa Voogd en ik een paar van de verhalen die
    zijn verzameld over het bombardement en deze samengehangen met hoe de wal er
    nu uitziet. Dit biedt een groot contrast, en brengt de verhalen nog meer
    diepgang dan ze al hadden.
  </p>
  <p>
    De verhalen komen uit een boekje van Fred Geukes Foppen, die alle verhalen
    van de mensen betrokken bij het bombardement heeft verzameld en
    samengevoegd. Grote dank aan de heer Geukes Foppen voor zijn werk. Het heeft
    ons heel erg geholpen met het concept.
  </p>
  <slot slot="links">
    <ArticleLink href="https://dataweek.jonahgold.dev">
      Visualisatie
    </ArticleLink>
    <ArticleLink
      href="https://app.gitbook.com/@jonahmeijers97/s/information-design/dataweek/dataweek"
    >
      Proces
    </ArticleLink>
    <ArticleLink href="http://rosavoogd.nl">Rosa Voogd</ArticleLink>
  </slot>
</Article>
