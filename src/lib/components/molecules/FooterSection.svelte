<script lang="ts">
  import FooterHeading from '../atoms/FooterHeading.svelte'

  export let heading: string
</script>

<section>
  <FooterHeading>{heading}</FooterHeading>
  <slot />
</section>
