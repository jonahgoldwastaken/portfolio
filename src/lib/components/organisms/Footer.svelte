<script lang="ts">
  import Link from '../atoms/Link.svelte'
  import Copyright from '../atoms/Copyright.svelte'
  import VerticalList from '../molecules/VerticalList.svelte'
  import { iObservedTextAnimation } from '$lib/actions/textAnimation'
</script>

<style lang="scss">
  footer {
    position: sticky;
    top: 100vh;
    padding: var(--double-space) 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, 25rem);
    grid-template-rows: [sections] auto auto [copyright] min-content;
    row-gap: var(--base-space);
    column-gap: var(--base-space);

    > :global(p) {
      grid-row-start: copyright;
      grid-column-end: -1;
    }
  }

  h2 {
    margin-bottom: var(--half-space);
  }
</style>

<footer>
  <section>
    <h2
      use:iObservedTextAnimation={{ splitOn: 'letters', threshold: 0.5 }}
      class="h3"
    >
      Beste projecten
    </h2>
    <VerticalList markers={false}>
      <li><Link href="/project/devex">DevEx</Link></li>
      <li><Link href="/project/cube">CSS Rubik's Cube</Link></li>
      <li><Link href="/project/triptop">Triptop</Link></li>
      <li><Link href="/project/empower">EMPOWER 2.0</Link></li>
      <li><Link href="/project/bbwal">De Blauwburgwal</Link></li>
    </VerticalList>
  </section>
  <section id="contact">
    <h2
      use:iObservedTextAnimation={{ splitOn: 'letters', threshold: 0.5 }}
      class="h3"
    >
      Contact
    </h2>
    <VerticalList markers={false}>
      <li><Link href="https://github.com/theonejonahgold">GitHub</Link></li>
      <li><Link href="mailto:jonahmeijers97@gmail.com">Email</Link></li>
    </VerticalList>
  </section>
  <Copyright />
</footer>
