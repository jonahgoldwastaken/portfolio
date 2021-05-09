<script lang="ts">
  import ProjectTile from '../molecules/ProjectTile.svelte'
  import ProjectCTA from '../molecules/ProjectCTA.svelte'
  import { projectsStore } from '$lib/stores/projects'
  import AnimatingHeading from '../atoms/AnimatingHeading.svelte'

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
    {#each $projectsStore as project, i (project.title + i)}
      <ProjectTile
        animate={animate === 'list' || animate === 'both'}
        {project}
      />
    {/each}
    <ProjectCTA animate={animate === 'list' || animate === 'both'} />
  </ol>
</section>
