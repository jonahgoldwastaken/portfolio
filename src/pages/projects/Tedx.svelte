<script>
  import Article from '../../components/templates/Article.svelte'
  import ArticleLink from '../../components/atoms/ArticleLink.svelte'
  import Text from '../../components/atoms/Text.svelte'
</script>

<Article client="Raadhuis" year={2018}>
  <slot slot="title">Stageopdracht: TEDx Alkmaar</slot>
  <img
    slot="image"
    src="/tedx-alkmaar.png"
    alt="Screenshot homepagina TEDx pagina"
  />
  <Text>
    Tijdens mijn korte stage in 2018 heb ik het genoegen gehad om mee te werken
    aan de campagnewebsite voor TEDx Alkmaar. Ik heb voornamelijk bijgedragen
    aan development, en heb onder andere de animatie voor de homepagina gemaakt.
  </Text>
  <ArticleLink href="https://tedxalkmaar.nl">Website</ArticleLink>
  <ArticleLink href="https://raadhuis.nl">Stagebedrijf</ArticleLink>
</Article>
