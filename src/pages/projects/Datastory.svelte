<script>
  import Article from '../../components/templates/Article.svelte'
  import ArticleLink from '../../components/atoms/ArticleLink.svelte'
  // import Text from '../../components/atoms/Text.svelte'
</script>

<Article client="CMD Tech Track" year={2020}>
  <slot slot="title">Interactieve data story</slot>
  <img
    slot="image"
    src="https://raw.githubusercontent.com/theonejonahgold/frontend-applications/main/docs/screenshot.png"
    alt="Screenshot Data story"
  />
  <ArticleLink href="https://fa.jonahgold.dev">
    Bekijk de visualisatie
  </ArticleLink>
</Article>
