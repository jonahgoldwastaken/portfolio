<script>
  import ArticleLink from '../../components/atoms/ArticleLink.svelte'
  import Article from '../../components/templates/Article.svelte'
</script>

<svelte:head>
  <title>Extreme Space Invaders - Jonah Meijers</title>
</svelte:head>

<Article
  title="Extreme Space Invaders"
  client="CMD Inleiding Programmeren"
  year={2017}
>
  <img slot="image" src="/xpi.png" alt="Extreme Space Invaders screenshot" />
  <p>
    Extreme Space Invaders is mijn paradepaartje uit de propedeuse. Tijdens het
    vak Inleiding Programmeren ben ik helemaal losgegaan en heb ik in een maand
    tijd een kloon geschreven van de klassieke Space Invaders. Je weet wel, die
    ene met dat ruimteschip en die aliens die je neer moet knallen.
  </p>
  <p>
    Het spel bevat volledige besturing van een eigen character, collision,
    moeilijkheidsgraden en geluidsinstellingen. Dit allemaal samen met een
    flinke dosis HTML elementen maakt het een indrukwekkend eerste JavaScript
    project.
  </p>
  <p>
    Dit project is puur voor educatieve doeleinden gebouwd, de content die niet
    rechtmatig van mij is mag onder voorbehoud gedistribueerd worden, mits een
    licentie is afgekondigd.
  </p>
  <slot slot="links">
    <ArticleLink href="https://oege.ie.hva.nl/~meijerj034/xpi/">
      Spel
    </ArticleLink>
    <ArticleLink href="https://github.com/theonejonahgold/xtremespaceinvaders">
      Code
    </ArticleLink>
  </slot>
</Article>
