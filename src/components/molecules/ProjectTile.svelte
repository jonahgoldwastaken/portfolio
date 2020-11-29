<script>
  import ProjectTileImage from '../atoms/ProjectTileImage.svelte'
  import ProjectTileHeading from '../atoms/ProjectTileHeading.svelte'
  import ProjectTileDetails from '../atoms/ProjectTileDetails.svelte'
  import ProjectTileDescription from '../atoms/ProjectTileDescription.svelte'
  import type { TileProject } from '../../../types/project'

  export let project: TileProject
</script>

<style>
  a {
    display: block;
    color: white;
    text-decoration: none;
    transition: transform 0.2s ease;
    transform: translateY(0px);
    height: 100%;

    &:hover {
      transform: translateY(-2px);

      article {
        box-shadow: 0 15px 5px -7.5px rgba(#2e3138, 0.25);
      }
    }
  }

  article {
    width: 100%;
    height: 100%;
    padding: var(--step-0);
    overflow: hidden;
    background: var(--light-orange);
    border-radius: 12px;
    box-shadow: 0 5px 5px -2.5px rgba(#2e3138, 0.5);
    transition: box-shadow 0.2s ease;
  }
</style>

<a href={project.title}>
  <article>
    <ProjectTileImage
      src={project.image}
      alt="Afbeelding van project {project.title}"
    />
    <ProjectTileHeading>{project.title}</ProjectTileHeading>
    <ProjectTileDetails
      details={{ year: project.year, client: project.client }}
    />
    <ProjectTileDescription>{project.description}</ProjectTileDescription>
  </article>
</a>
