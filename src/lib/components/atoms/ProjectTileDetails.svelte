<script>
  import { TileProject } from '../../../../types/project'

  export let details: Pick<TileProject, 'year' | 'client'>
</script>

<style lang="scss">
  p {
    margin: 0;
  }

  small {
    color: var(--white);
    font-size: var(--step--1);
  }
</style>

<p><small>{details?.client} • {details?.year}</small></p>
