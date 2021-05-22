<script lang="ts">
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
    width: calc(var(--base-space) + 100%);
    padding: 0;
    margin: var(--base-space) calc(-1 * var(--half-space));

    @media screen and (min-width: 50rem),
      (min-aspect-ratio: 1/1) and (min-width: 40rem) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 100rem) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (min-width: 150rem) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media screen and (min-width: 200rem) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }

  li {
    display: block;
    height: min-content;
    margin: 0 var(--half-space) var(--base-space);

    @media screen and (min-width: 50rem),
      (min-aspect-ratio: 1/1) and (min-width: 40rem) {
      min-height: 20rem;
      &:nth-child(2) {
        margin-top: 50%;
      }

      &:nth-child(2n + 3) {
        margin-top: -50%;
      }
    }

    @media screen and (min-width: 100rem) {
      &:nth-child(2n + 3) {
        margin-top: 0;
      }

      &:nth-child(3n + 4),
      &:nth-child(3n + 6) {
        margin-top: -50%;
      }
    }

    @media screen and (min-width: 150rem) {
      &:nth-child(3n + 4),
      &:nth-child(3n + 6) {
        margin-top: 0;
      }

      &:nth-child(2),
      &:nth-child(4) {
        margin-top: 50%;
      }

      &:nth-child(2n + 5) {
        margin-top: -50%;
      }
    }

    @media screen and (min-width: 200rem) {
      &:nth-child(3n + 5),
      &:nth-child(3n + 7) {
        margin-top: 0;
      }

      &:nth-child(2),
      &:nth-child(4) {
        margin-top: 50%;
      }

      &:nth-child(2n + 6) {
        margin-top: -50%;
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
