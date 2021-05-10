<script lang="ts">
  import ProjectTile from '../molecules/ProjectTile.svelte'
  import AnimatingHeading from '../atoms/AnimatingHeading.svelte'
  import Image from '../atoms/Image.svelte'
  import Link from '../atoms/Link.svelte'

  export let projects: ProjectMetadata[]
  export let animate: 'heading' | 'list' | 'both'
  let animateHeading = false
</script>

<style lang="scss">
  ol {
    list-style: none;
    margin: var(--base-space) auto;
  }
</style>

<section>
  {#if animate === 'both' || animate === 'heading'}
    <AnimatingHeading
      --alignment="left"
      observe
      animate={animateHeading}
      content={'Projecten'}
    />
  {:else}
    <h1>Projecten</h1>
  {/if}
  <ol>
    {#each projects as project, i (project.title + i)}
      <ProjectTile
        animate={animate === 'list' || animate === 'both'}
        href="/project/{project.slug}"
      >
        <Image slot="image" src={project.image} --fit="cover" />
        <svelte:fragment slot="title">{project.title}</svelte:fragment>
        <svelte:fragment slot="description"
          >{project.description}</svelte:fragment
        >
      </ProjectTile>
    {/each}
    <ProjectTile animate={animate === 'list' || animate === 'both'}>
      <svelte:fragment slot="title"
        >There's always room for more!</svelte:fragment
      >
      <svelte:fragment slot="description">
        Stuur een <Link href="mailto:jonahmeijers97@gmail.com">mailtje</Link>.
        Misschien kunnen we wat voor elkaar beteken. :&#41;
      </svelte:fragment>
    </ProjectTile>
  </ol>
</section>
