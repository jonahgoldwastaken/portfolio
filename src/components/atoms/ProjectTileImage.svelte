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
      width: calc(var(--step-0) + 50%);
      height: calc(var(--step-0) * 2 + 100%);
      float: left;
      margin-right: var(--step-0);
    }
  }
</style>

<img {src} {alt} />
