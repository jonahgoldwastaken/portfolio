<script lang="ts">
  import Heading from '../atoms/Heading.svelte'
  import Text from '../atoms/Text.svelte'
</script>

<style lang="scss">
  section {
    display: grid;
    margin: 0 auto max(20rem, 8.75vh);
    height: max(40rem, 78.75vh);
    place-items: center;
    max-width: 60rem;
    :global(*) {
      text-align: center;
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
</section>
