<script>
  export let src: string
  export let alt: string
</script>

<style>
  img {
    display: block;
    margin-top: calc(var(--step-0) * -1);
    margin-left: calc(var(--step-0) * -1);
    margin-bottom: var(--step-0);
    width: calc(var(--step-0) * 2 + 100%);
    height: 15rem;
    object-fit: cover;

    @media screen and (min-width: 60rem) {
      margin-bottom: 0px;
      width: calc(var(--step-0) + 100%);
      height: calc(var(--step-0) * 2 + 100%);
      grid-area: image;
    }
  }
</style>

<img {src} {alt} />
