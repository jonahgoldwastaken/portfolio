<script lang="ts">
  import Image from '../atoms/Image.svelte'
  import ProjectListCTA from '../molecules/ProjectListCTA.svelte'
  import ProjectTile from '../molecules/ProjectTile.svelte'

  export let projects: ProjectMetadata[]
  export let animate: 'heading' | 'list' | 'both'
  export let limit: number
</script>

<style lang="scss">
  ol {
    list-style: none;
    margin: var(--base-space) auto;
  }

  li {
    display: block;
    width: 100%;
    height: min-content;
    min-height: 20rem;
    margin: 0 0 var(--base-space);

    @media screen and (min-width: 60rem) {
      & > :global(*:only-child) {
        width: calc(50% - var(--base-space));
      }

      &:nth-child(even) > :global(*:only-child) {
        margin-left: auto;
      }

      &:not(:first-child) {
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
      >
        <Image slot="image" src={project.image} --fit="cover" />
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
          Wil jij als stagebedrijf hiertussen staan?
        </svelte:fragment>
        <svelte:fragment slot="button">
          Neem dan vooral contact op!
        </svelte:fragment>
      </ProjectListCTA>
    </slot>
  </li>
</ol>
