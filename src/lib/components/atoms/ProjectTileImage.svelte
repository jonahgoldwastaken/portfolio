<script lang="ts">
  export let src: string
  export let alt: string
</script>

<style lang="scss">
  img {
    display: block;
    width: 100%;
    height: clamp(10rem, 80vh, 40rem);
    object-fit: cover;
    object-position: center;
    border-radius: 12px;
  }
</style>

<img {src} {alt} />
