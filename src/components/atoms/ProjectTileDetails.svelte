<script>
  import type { TileProject } from '../../../types/project'
  export let details: Pick<TileProject, 'year' | 'client'>
</script>

<style>
  small {
    color: white;
    font-size: var(--step--1);
  }
</style>

<p><small>{details?.client} • {details?.year}</small></p>
