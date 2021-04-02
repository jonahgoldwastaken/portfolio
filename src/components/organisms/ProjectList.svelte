<script lang="ts">
  import ProjectTile from '../molecules/ProjectTile.svelte'
  import type { TileProject } from '../../../types/project'

  let dummyData: TileProject[] = [
    {
      title: "CSS Rubik's Cube",
      slug: 'cube',
      description:
        'Verschillende HTML en CSS only experimenten met de wereldberoemde kubus.',
      image: '/cube.png',
      year: 2021,
      client: 'CMD Minor Web Design & Development',
      url: 'http://theonejonahgold.github.io/css-rubiks-cube',
    },
    {
      title: 'Triptop',
      slug: 'triptop',
      description: 'Bouw de perfecte playlist voor je roadtrip.',
      image: '/triptop.png',
      year: 2021,
      client: 'CMD Minor Web Design & Development',
      url: 'https://triptop.app',
    },
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
      image: '/dataweek.png',
      year: 2020,
      client: 'CMD Dataweek',
      url: 'https://dataweek.jonahgold.dev',
    },
    {
      title: 'Interactieve data story',
      slug: 'datastory',
      description:
        'Een data story over de representatie van doelgroepen in parkeergelegenheden.',
      image: '/datastory.png',
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

<style lang="scss">
  ol {
    list-style: none;
    margin: var(--base-space) auto;
  }
</style>

<section>
  <h1>Projecten</h1>
  <ol>
    {#each dummyData as project, i (project.title + i)}
      <ProjectTile {project} />
    {/each}
  </ol>
</section>
