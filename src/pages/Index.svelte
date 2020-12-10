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
    Ik ben een Communication & Multimedia Design student gevestigd in Amsterdam.
    Ik draag graag bij aan web- en mobiele apps die geven om de tijd en wensen
    van hun gebruikers.
  </slot>
</Home>
