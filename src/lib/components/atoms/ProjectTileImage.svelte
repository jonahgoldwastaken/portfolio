<script lang="ts">
  export let src = ''
  export let alt = ''
</script>

<style lang="scss">
  img {
    display: block;
    width: 100%;
    height: clamp(5rem, 60vh, 40rem);
    object-fit: cover;
    object-position: center;
    border-radius: 12px;
  }
</style>

<img {src} {alt} />
