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
    height: 100%;
    transform: translateY(0px);
    color: white;
    text-decoration: none;
    transition: transform 0.2s ease;

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

    @media screen and (min-width: 60rem) {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: 'image content';

      div {
        grid-area: content;
        padding-left: var(--step-0);
      }
    }
  }
</style>

<a href={project.url} target="_blank" rel="noopener noreferrer">
  <article>
    <ProjectTileImage
      src={project.image}
      alt="Afbeelding van project {project.title}"
    />
    <div>
      <ProjectTileHeading>{project.title}</ProjectTileHeading>
      <ProjectTileDetails
        details={{ year: project.year, client: project.client }}
      />
      <ProjectTileDescription>{project.description}</ProjectTileDescription>
    </div>
  </article>
</a>
