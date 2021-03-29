<script>
  import ProjectTileImage from '../atoms/ProjectTileImage.svelte'
  import ProjectTileHeading from '../atoms/ProjectTileHeading.svelte'
  import ProjectTileDetails from '../atoms/ProjectTileDetails.svelte'
  import ProjectTileDescription from '../atoms/ProjectTileDescription.svelte'
  import type { TileProject } from '../../../types/project'

  export let project: TileProject
</script>

<style>
  li {
    max-width: 40rem;
  }

  a {
    display: block;
    height: 100%;
    transform: translateY(0px);
    color: var(--secondary);
    text-decoration: none;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-2px);

      article {
        box-shadow: 0 15px 10px -10px rgba(#f55e00, 0.125);
      }
    }
  }

  article {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: linear-gradient(
      to top right,
      var(--light-orange),
      var(--orange)
    );
    border-radius: 12px;
    box-shadow: 0 5px 5px -2.5px rgba(#f55e00, 0.25);
    transition: all 0.2s ease;
  }

  div {
    padding: var(--step-0);
  }
</style>

<li>
  <a href="/project/{project.slug}">
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
</li>
