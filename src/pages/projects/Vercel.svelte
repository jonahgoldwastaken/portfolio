<script>
  import Article from '../../components/templates/Article.svelte'
  import ArticleLink from '../../components/atoms/ArticleLink.svelte'
  import Text from '../../components/atoms/Text.svelte'
</script>

<Article client="CMD Frontend-development" year={2020}>
  <slot slot="title">Vercel remake</slot>
  <img
    slot="image"
    src="/vercel.png"
    alt="Screenshot homepagina Vercel remake"
  />
  <Text>
    De eindopdracht voor het vak frontend-development was het namaken van 2
    pagina's van een website. De website die ik heb nagemaakt is de website van
    Vercel. Ik heb de
    <a href="https://fd.jonahgold.dev" target="_blank">homepagina</a>
    en
    <a href="https://fd.jonahgold.dev/pricing" target="_blank">prijspagina</a>
    nagemaakt.
  </Text>
  <ArticleLink href="https://fd.jonahgold.dev">Eigen versie</ArticleLink>
  <ArticleLink href="https://vercel.com">Originele website</ArticleLink>
  <ArticleLink href="https://github.com/theonejonahgold/frontend-development">
    Code
  </ArticleLink>
</Article>
