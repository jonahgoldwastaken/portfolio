<script>
  import ProjectTile from '../molecules/ProjectTile.svelte'
  import type { TileProject } from '../../../types/project'

  let dummyData: TileProject[] = [
    {
      title: 'Frontend-Applications',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tenetur amet nisi vitae alias unde. In ad, reiciendis deleniti earum alias quaerat doloremque, laboriosam eum beatae similique minus, error vero. Reprehenderit natus sunt aut sequi qui in iste minus recusandae odio consequatur voluptatum hic, dolores, pariatur deleniti?',
      image: '/profile-picture.jpg',
      client: 'Aernoud Laurense',
      year: 2020,
    },
    {
      title: 'Frontend-Applications',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tenetur amet nisi vitae alias unde. In ad, reiciendis deleniti earum alias quaerat doloremque, laboriosam eum beatae similique minus, error vero. Reprehenderit natus sunt aut sequi qui in iste minus recusandae odio consequatur voluptatum hic, dolores, pariatur deleniti?',
      image: '/profile-picture.jpg',
      client: 'Aernoud Laurense',
      year: 2020,
    },
    {
      title: 'Frontend-Applications',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tenetur amet nisi vitae alias unde. In ad, reiciendis deleniti earum alias quaerat doloremque, laboriosam eum beatae similique minus, error vero. Reprehenderit natus sunt aut sequi qui in iste minus recusandae odio consequatur voluptatum hic, dolores, pariatur deleniti?',
      image: '/profile-picture.jpg',
      client: 'Aernoud Laurense',
      year: 2020,
    },
    {
      title: 'Frontend-Applications',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab tenetur amet nisi vitae alias unde. In ad, reiciendis deleniti earum alias quaerat doloremque, laboriosam eum beatae similique minus, error vero. Reprehenderit natus sunt aut sequi qui in iste minus recusandae odio consequatur voluptatum hic, dolores, pariatur deleniti?',
      image: '/profile-picture.jpg',
      client: 'Aernoud Laurense',
      year: 2020,
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

    @media screen and (min-width: 60rem) {
      grid-template-columns: minmax(auto, 45rem) minmax(auto, 45rem);
    }

    @media screen and (min-width: 80rem) {
      grid-template-columns: minmax(auto, 45rem) minmax(auto, 45rem) minmax(
          auto,
          45rem
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
