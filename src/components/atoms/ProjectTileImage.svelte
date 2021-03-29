<script>
  export let src: string
  export let alt: string
</script>

<style>
  img {
    display: block;
    width: 100%;
    aspect-ratio: 4/3;
    object-fit: cover;
  }
</style>

<img {src} {alt} />
