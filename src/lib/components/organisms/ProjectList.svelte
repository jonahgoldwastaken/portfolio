<script lang="ts">
  import Image from '../atoms/Image.svelte'
  import ProjectListCTA from '../molecules/ProjectListCTA.svelte'
  import ProjectTile from '../molecules/ProjectTile.svelte'

  export let projects: ProjectMetadata[]
  export let animate: 'heading' | 'list' | 'both'
  export let limit = 0
</script>

<style lang="scss">
  ol {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    margin: var(--base-space) calc(-1 * var(--half-space));

    @media screen and (min-width: 80rem) {
      grid-template-columns: 1fr 1fr;
    }
    @media screen and (min-width: 120rem) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (min-width: 180rem) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media screen and (min-width: 240rem) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }

  li {
    display: block;
    height: min-content;
    min-height: 20rem;
    margin: 0 var(--half-space) var(--base-space);

    @media screen and (min-width: 80rem) {
      &:nth-child(2) {
        margin-top: 20rem;
      }

      &:nth-child(2n + 3) {
        margin-top: -20rem;
      }
    }

    @media screen and (min-width: 120rem) {
      &:nth-child(2n + 3) {
        margin-top: 0;
      }

      &:nth-child(3n + 4),
      &:nth-child(3n + 6) {
        margin-top: -20rem;
      }
    }

    @media screen and (min-width: 180rem) {
      &:nth-child(3n + 4),
      &:nth-child(3n + 6) {
        margin-top: 0;
      }

      &:nth-child(2),
      &:nth-child(4) {
        margin-top: 20rem;
      }

      &:nth-child(2n + 5) {
        margin-top: -20rem;
      }
    }

    @media screen and (min-width: 240rem) {
      &:nth-child(3n + 5),
      &:nth-child(3n + 7) {
        margin-top: 0;
      }

      &:nth-child(2),
      &:nth-child(4) {
        margin-top: 20rem;
      }

      &:nth-child(2n + 6) {
        margin-top: -20rem;
      }
    }
  }
</style>

<ol>
  {#each projects.slice(0, limit > 0 ? limit : projects.length) as project, i (project.title + i)}
    <li>
      <ProjectTile
        animate={animate === 'list' || animate === 'both'}
        href="/project/{project.slug}"
        image={project.image}
      >
        <svelte:fragment slot="title">{project.title}</svelte:fragment>
        <svelte:fragment slot="description">
          {project.description}
        </svelte:fragment>
      </ProjectTile>
    </li>
  {/each}
  <li>
    <slot name="cta">
      <ProjectListCTA animate={animate === 'list' || animate === 'both'}>
        <svelte:fragment slot="heading">
          Hiertussen staan als stagebedrijf?
        </svelte:fragment>
        <svelte:fragment slot="button">Neem contact op!</svelte:fragment>
      </ProjectListCTA>
    </slot>
  </li>
</ol>
