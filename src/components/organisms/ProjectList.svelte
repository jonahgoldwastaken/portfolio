<script>
  import ProjectTile from '../molecules/ProjectTile.svelte'
  import type { TileProject } from '../../../types/project'

  let dummyData: TileProject[] = [
    {
      title: 'EMPOWER 2.0',
      slug: 'empower',
      description: 'Een toolkit voor beleidsmakers over groene energie.',
      image: '/empower.png',
      year: 2021,
      client: 'CMD Information Design',
      url: 'https://empower.jonahgold.dev',
    },
    {
      title: 'De Blauwburgwal - toen en nu',
      slug: 'bbwal',
      description:
        'Een visualisatie die een vergeten bombardement aan het licht brengt.',
      image:
        'https://raw.githubusercontent.com/theonejonahgold/information_design/master/.gitbook/assets/screenshot_dataweek.png',
      year: 2020,
      client: 'CMD Dataweek',
      url: 'https://dataweek.jonahgold.dev',
    },
    {
      title: 'Interactieve data story',
      slug: 'datastory',
      description:
        'Een data story over de representatie van doelgroepen in parkeergelegenheden.',
      image:
        'https://raw.githubusercontent.com/theonejonahgold/frontend-applications/main/docs/screenshot.png',
      client: 'CMD Tech Track',
      year: 2020,
      url: 'https://fa.jonahgold.dev',
    },
    {
      title: 'Extreme Space Invaders',
      slug: 'xsi',
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
    display: flex;
    flex-wrap: wrap;
    gap: var(--step-2);
    justify-content: center;
    width: 100%;
    margin-bottom: var(--step-2);
  }
</style>

<section>
  <ol>
    {#each dummyData as project, i (project.title + i)}
      <ProjectTile {project} />
    {/each}
  </ol>
</section>
