<script lang="ts">
  export let src = ''
  export let alt = ''
</script>

<style lang="scss">
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: 12px;
  }
</style>

<img {src} {alt} />
