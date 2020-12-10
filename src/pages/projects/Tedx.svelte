<script>
  import Article from '../../components/templates/Article.svelte'
  import ArticleLink from '../../components/atoms/ArticleLink.svelte'
  // import Text from '../../components/atoms/Text.svelte'
</script>

<Article client="Raadhuis" year={2018}>
  <slot slot="title">Stageopdracht: TEDx Alkmaar</slot>
  <img
    slot="image"
    src="/tedx-alkmaar.png"
    alt="Screenshot homepagina TEDx pagina"
  />
  <ArticleLink href="https://tedxalkmaar.nl">Bekijk de website</ArticleLink>
</Article>
