<script>
  import Home from '../components/templates/Home.svelte'
  import Highlight from '../components/atoms/Highlight.svelte'
</script>

<Home heroPicture="/profile-picture.jpg">
  <slot slot="heroHeading">
    Ik maak
    <Highlight>unieke</Highlight>
    en
    <Highlight>onvergetelijke</Highlight>
    ervaringen.
  </slot>
  <slot slot="heroSubheading">
    Mijn passie is om de manier waarop we met technologie omgaan een stuk meer
    in balans is. Dit wil ik bereiken door concepten te ontwikkelen die de
    apparaten die we het meest gebruiken weer de rol geven die ze oorspronkelijk
    hebben gekregen: Utilitair en met het oog om wat je wilt bereiken
    makkelijker te maken.
  </slot>
</Home>
