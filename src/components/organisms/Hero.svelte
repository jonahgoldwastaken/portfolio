<script>
  import Highlight from '../atoms/Highlight.svelte'
  import Heading from '../atoms/Heading.svelte'
  import Text from '../atoms/Text.svelte'
  import ProfilePicture from '../atoms/ProfilePicture.svelte'
</script>

<style lang="scss">
  section {
    display: grid;
    grid-auto-rows: min-content;
    grid-auto-flow: row;
    grid-gap: auto;
    margin: 0 auto var(--step-5);

    @media screen and (min-width: 60rem) {
      grid-auto-flow: column;
      justify-content: space-between;
    }

    @media screen and (min-width: 100rem) {
      grid-template-columns: 60rem auto;
    }

    @media screen and (min-width: 120rem) {
      grid-template-columns: 80rem auto;
    }
  }
</style>

<section>
  <div>
    <Heading>
      Ik maak
      <Highlight>unieke</Highlight>
      en
      <Highlight>onvergetelijke</Highlight>
      ervaringen.
    </Heading>
    <Text bold>
      Ik ben een Communication & Multimedia Design student gevestigd in
      Amsterdam. Ik draag graag bij aan web- en mobiele apps die geven om de
      tijd en wensen van hun gebruikers.
    </Text>
  </div>
  <ProfilePicture src="/profile-picture.jpg" />
</section>
