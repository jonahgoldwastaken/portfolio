<script lang="ts">
  import TileListCTA from '../molecules/TileListCTA.svelte'
  import Tile from '../molecules/Tile.svelte'

  export let items: ArticleMetadata[]
  export let animate: 'heading' | 'list' | 'both'
  export let limit = 0
</script>

<style lang="scss">
  ol {
    list-style: none;
    display: grid;
    grid-template-columns: 1fr;
    width: calc(var(--base-space) + 100%);
    padding: 0;
    margin: var(--base-space) calc(-1 * var(--half-space));

    @media screen and (min-width: 50rem),
      (min-aspect-ratio: 1/1) and (min-width: 40rem) {
      grid-template-columns: 1fr 1fr;
    }

    @media screen and (min-width: 100rem) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (min-width: 150rem) {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    @media screen and (min-width: 200rem) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  }

  li {
    display: block;
    height: min-content;
    margin: 0 var(--half-space) var(--base-space);

    @media screen and (min-width: 50rem),
      (min-aspect-ratio: 1/1) and (min-width: 40rem) {
      &:nth-child(2) {
        margin-top: 50%;
      }

      &:nth-child(2n + 3) {
        margin-top: -50%;
      }
    }

    @media screen and (min-width: 100rem) {
      &:nth-child(2n + 3) {
        margin-top: 0;
      }

      &:nth-child(3n + 4),
      &:nth-child(3n + 6) {
        margin-top: -50%;
      }
    }

    @media screen and (min-width: 150rem) {
      &:nth-child(3n + 4),
      &:nth-child(3n + 6) {
        margin-top: 0;
      }

      &:nth-child(2),
      &:nth-child(4) {
        margin-top: 50%;
      }

      &:nth-child(2n + 5) {
        margin-top: -50%;
      }
    }

    @media screen and (min-width: 200rem) {
      &:nth-child(3n + 5),
      &:nth-child(3n + 7) {
        margin-top: 0;
      }

      &:nth-child(2),
      &:nth-child(4) {
        margin-top: 50%;
      }

      &:nth-child(2n + 6) {
        margin-top: -50%;
      }
    }
  }
</style>

<ol>
  {#each items.slice(0, limit > 0 ? limit : items.length) as item, i (item.title + i)}
    <li>
      <Tile
        animate={animate === 'list' || animate === 'both'}
        href="/{item.slug}"
        image={item.image}
      >
        <svelte:fragment slot="title">{item.title}</svelte:fragment>
        <svelte:fragment slot="description">
          {item.description}
        </svelte:fragment>
      </Tile>
    </li>
  {/each}
  <li>
    <slot name="cta">
      <TileListCTA animate={animate === 'list' || animate === 'both'} />
    </slot>
  </li>
</ol>
