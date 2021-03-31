<script lang="ts">
  import Home from '../components/templates/Home.svelte'
  import Highlight from '../components/atoms/Highlight.svelte'
</script>

<Home>
  <slot slot="heroHeading">
    Ik bouw producten die iets <Highlight>bereiken</Highlight>.
  </slot>
  <slot slot="heroSubheading">
    Dit komt doordat de balans tussen technologie en het echte leven voor mij op
    nummer één staat. Ik werk aan producten die mensen verder brengen, in plaats
    van hun tijd roven.
  </slot>
</Home>
