<script>
  import Article from '$lib/components/templates/Article.svelte'
  import ArticleLink from '$lib/components/atoms/ArticleLink.svelte'
</script>

<svelte:head>
  <title>CSS Rubik's Cube - Jonah Meijers</title>
</svelte:head>

<Article title="CSS Rubik's Cube" client="CMD CSS To The Rescue" year={2021}>
  <!--  <ArticleImage-->
  <!--    slot="banner"-->
  <!--    format="full-width"-->
  <!--    caption="coole dingen"-->
  <!--    src="/cube.png"-->
  <!--    alt="Screenshot Cube project"-->
  <!--  />-->
  <p>
    Voor het vak CSS To The Rescue mochten we de kracht CSS onderzoeken en
    uitwerken in een van twee eindopdrachten. Een van de eindopdrachten was het
    bouwen van een Rubik's Cube, en ik vond dat wel een mooie uitdaging.
  </p>
  <p>
    Een van de mogelijke uitwerkingen in de eindopdracht was om de kubus
    interactief te maken. Dit heb ik 2 weken lang geprobeerd uit te werken, maar
    ben uiteindelijk tot de conclusie gekomen dat je interactiviteit niet 100%
    werkend gaat krijgen zonder een soort geschiedenis van de draaiingen die
    zijn gemaakt.
  </p>
  <p>
    Verder heb ik geëxperimenteerd met animaties op basis van viewport size, de
    grootte van de kubus veranderen op bredere schermen en heb ik een leuke
    screensaver gemaakt.
  </p>
  <p>
    Dit project was erg leerzaam voor mij omdat ik nu beter begrijp waar de
    kracht van CSS ophoudt en het met JS aangevuld moet worden om de ervaring
    compleet te maken. Ook heb ik veel nieuwe CSS selectoren geleerd, die veel
    werk wat ik normaal met JS deed uit hand nemen. Nu weet ik zeker dat
    Progressive Enhancement zo goed als altijd binnen handbereik ligt, en
    accessibility van mijn projecten flink zullen stijgen.
  </p>
  <slot slot="links">
    <ArticleLink href="https://theonejonahgold.github.io/css-rubiks-cube">
      Website
    </ArticleLink>
    <ArticleLink href="https://github.com/theonejonahgold/css-rubiks-cube">
      Code
    </ArticleLink>
  </slot>
</Article>
