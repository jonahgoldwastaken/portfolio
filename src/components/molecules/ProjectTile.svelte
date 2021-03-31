<script lang="ts">
  import ProjectTileImage from '../atoms/ProjectTileImage.svelte'
  import ProjectTileHeading from '../atoms/ProjectTileHeading.svelte'
  import ProjectTileDescription from '../atoms/ProjectTileDescription.svelte'
  import type { TileProject } from '../../../types/project'
  import { onMount, tick } from 'svelte'

  export let project: TileProject
  let div
  let heading
  let hoverHeight = 'px'
  let standardWidth = 'px'
  let full

  async function resizeHandler() {
    full = true
    await tick()
    setTimeout(() => {
      const height = div.offsetHeight
      const width = heading.offsetWidth
      hoverHeight = `${height}px`
      standardWidth = `${width}px`
      full = false
    }, 50)
  }

  onMount(resizeHandler)
</script>

<style lang="scss">
  li {
    flex: 1 1 40rem;
    margin: calc(0.5 * var(--step-0)) calc(0.5 * var(--step-0));
  }

  a {
    display: block;
    width: 100%;
    height: 100%;
    transform: translateY(0px);
    color: var(--secondary);
    text-decoration: none;
    transition: transform 0.1s ease;

    &:hover,
    &:focus {
      transform: translateY(-2px);
      background: none;
      background-clip: initial;
      -webkit-background-clip: initial;
      -webkit-text-fill-color: initial;

      div {
        box-shadow: 0 0 0 rgba(0, 0, 0, 0);
        transform: translate(0, 0);
        width: 100%;
        height: var(--height);

        &:after {
          clip-path: inset(0% 0% 0% 0%);
        }

        :global(div) {
          color: var(--black);
          width: 100%;
          clip-path: inset(0% 0% 0% 0);
        }
      }
    }
    &:focus {
      outline: none;

      article {
        border: var(--focus-border);
      }
    }
    &:active {
      transform: translateY(-2px) scale(0.98);
    }
  }

  article {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 12px;
    transition: all 0.2s ease;
  }

  div {
    position: absolute;
    bottom: 0;
    left: 0;
    display: inline-block;
    width: calc(var(--width) + (var(--step-0) * 2));
    transform: translate(var(--step-0), calc(-1 * var(--step-0)));
    border-radius: 12px;
    height: calc(1.125 * var(--step-1) + (2 * var(--step-0)));
    padding: var(--step-0);
    overflow: hidden;
    background: linear-gradient(
      to top right,
      var(--color-dark),
      var(--color-light)
    );
    -webkit-backdrop-filter: blur(25px);
    backdrop-filter: blur(25px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: all 0.2s ease;
    will-change: width, transform, box-shadow;

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      right: var(--step-0);
      transform: translateY(-50%);
      font-size: var(--step-0);
      color: var(--white);
      clip-path: inset(0% 0% 0% 100%);
      transition: clip-path 0.2s ease;
    }
  }

  :global(body:not(.blue)) div {
    box-shadow: 0 8px 26px 0 rgba(#f08700, 0.37);
  }

  :global(body.blue) div {
    box-shadow: 0 8px 26px 0 rgba(#0074b3, 0.37);
  }

  .full {
    height: auto !important;
    width: 100% !important;
    transition: none !important;
    opacity: 0;
  }
</style>

<svelte:window on:resize={resizeHandler} />

<li>
  <a href="/project/{project.slug}">
    <article>
      <ProjectTileImage
        src={project.image}
        alt="Afbeelding van project {project.title}"
      />
      <div
        style="--height: {hoverHeight};--width: {standardWidth}"
        class:full
        bind:this={div}
      >
        <ProjectTileHeading bind:heading>
          {project.title}
        </ProjectTileHeading>
        <ProjectTileDescription>{project.description}</ProjectTileDescription>
      </div>
    </article>
  </a>
</li>
