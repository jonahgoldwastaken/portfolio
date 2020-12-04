<script>
  import Home from '../components/templates/Home.svelte'
  import Highlight from '../components/atoms/Highlight.svelte'
</script>

<Home
  headerTitle="Jonah Meijers"
  headerLinks={[{ title: 'E-Mail', href: 'mailto:jonahmeijers97@gmail.com' }, { title: 'GitHub', href: 'https://github.com/theonejonahgold' }]}
  heroPicture="/profile-picture.jpg"
>
  <span slot="heroHeading">
    Ik maak
    <Highlight>unieke</Highlight>
    en
    <Highlight>onvergetelijke</Highlight>
    ervaringen.
  </span>
  <span slot="heroSubheading">
    Ik ben een Communication & Multimedia Design student gevestigd in Amsterdam.
    Ik draag graag bij aan web- en mobiele apps die geven om de tijd en wensen
    van hun gebruikers.
  </span>
</Home>
