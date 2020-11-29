<script>
  import ProjectTile from '../molecules/ProjectTile.svelte'
  import type { TileProject } from '../../../types/project'

  let dummyData: TileProject[] = [
    {
      title: 'Interactieve data story',
      description:
        'Een data story over de representatie van doelgroepen in parkeergelegenheden.',
      image:
        'https://raw.githubusercontent.com/theonejonahgold/frontend-applications/main/docs/screenshot.png',
      client: 'CMD Tech Track',
      year: 2020,
      url: 'https://frontend-applications.jonahmeijers.nl',
    },
    {
      title: 'Stageopdracht: TEDx Alkmaar',
      description:
        'Website die ik samen met een collega heb gebouwd tijdens mijn korte stage.',
      image: '/tedx-alkmaar.png',
      client: 'Raadhuis',
      year: 2018,
      url: 'https://tedxalkmaar.nl',
    },
    {
      title: 'Extreme Space Invaders',
      description:
        'Met 4 weken aan JavaScript kennis heb ik de klassieke Space Invaders nagemaakt.',
      image: '/xpi.png',
      client: 'CMD Inleiding Programmeren',
      year: 2017,
      url: 'https://oege.ie.hva.nl/~meijerj034/xpi/',
    },
  ]
</script>

<style>
  ol {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 20rem;
    grid-gap: var(--step-2);
    width: 100%;
    margin-bottom: var(--step-2);

    @media screen and (min-width: 60rem) {
      grid-template-columns: repeat(
        2,
        minmax(calc(100% / 3 - var(--step-2) * 2), 45rem)
      );
    }

    @media screen and (min-width: 80rem) {
      grid-template-columns: repeat(
        3,
        minmax(calc(100% / 3 - var(--step-2) * 2), 45rem)
      );
    }
  }
</style>

<section>
  <ol>
    {#each dummyData as project, i (project.title + i)}
      <li>
        <ProjectTile {project} />
      </li>
    {/each}
  </ol>
</section>
