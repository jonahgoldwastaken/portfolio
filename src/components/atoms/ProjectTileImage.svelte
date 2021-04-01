<script lang="ts">
  export let src: string
  export let alt: string
</script>

<style lang="scss">
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 12px;
  }
</style>

<img {src} {alt} />
