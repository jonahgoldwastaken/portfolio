<script>
  import type { TileProject } from '../../../types/project'
  export let details: Pick<TileProject, 'year' | 'client'>
</script>

<style>
  p {
    margin-top: 0px;

    @media screen and (min-width: 60rem) {
      margin-top: initial;
    }
  }

  small {
    color: var(--white);
    font-size: var(--step--1);
  }
</style>

<p><small>{details?.client} • {details?.year}</small></p>
