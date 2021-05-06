<script lang="ts">
  import ProjectTile from '../molecules/ProjectTile.svelte'
  import observer from '$lib/actions/intersectionObserver'
  import ProjectCTA from '../molecules/ProjectCTA.svelte'
  import { splitTextIntoLetters } from '$lib/utils/textSplitters'
  import { projectsStore } from '$lib/stores/projects'

  export let animate: 'heading' | 'list' | 'both'
  let animateHeading = false
</script>

<style lang="scss">
  ol {
    list-style: none;
    margin: var(--base-space) auto;
  }

  h1.animate :global {
    [class*='ch'] {
      display: inline-block;
      opacity: 0;
    }

    @for $i from 1 through 9 {
      .ch-#{$i} {
        animation: slide-in 0.4s #{$i / 80}s var(--easing) forwards;
      }
    }
  }
</style>

<section>
  {#if animate === 'both' || animate === 'heading'}
    <h1
      use:observer={(bool, amnt) =>
        animateHeading === false && amnt >= 0.75
          ? (animateHeading = bool)
          : null}
      class:animate={animateHeading}
    >
      {@html splitTextIntoLetters('Projecten')}
    </h1>
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
