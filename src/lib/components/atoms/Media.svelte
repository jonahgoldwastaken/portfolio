<script>
  import Image from './Image.svelte'
  import Video from './Video.svelte'

  type imageFormat = 'full-width' | 'banner' | 'inline' | 'caption' | 'basic'

  export let src: string
  export let format: imageFormat = 'basic'
</script>

{#if src.includes('.png') || src.includes('.jpg')}
  <Image {format} {src} />
{:else}
  <Video {format} {src} />
{/if}
