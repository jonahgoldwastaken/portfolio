<script>
  import Heading from '../atoms/Heading.svelte'
  import Text from '../atoms/Text.svelte'
  import ProfilePicture from '../atoms/ProfilePicture.svelte'

  export let picture = ''
</script>

<style>
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
      <slot name="heading" />
    </Heading>
    <Text bold>
      <slot name="subheading" />
    </Text>
  </div>
  <ProfilePicture src={picture} />
</section>
