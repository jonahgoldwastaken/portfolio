<script lang="ts">
  import ProjectTileImage from '../atoms/ProjectTileImage.svelte'
  import ProjectTileHeading from '../atoms/ProjectTileHeading.svelte'
  import ProjectTileDescription from '../atoms/ProjectTileDescription.svelte'
  import type { TileProject } from '../../../types/project'
  import observer from '../../actions/intersectionObserver'
  import { debounce } from 'debounce'

  export let project: TileProject
  let div = null
  let heading = null
  let hoverHeight = 'px'
  let standardWidth = 'px'
  let full = true
  let canRecalculate = true
  let animate = false
  let slide = false

  $: if (canRecalculate && div && heading) resizeHandler()

  function observeHandler(isIntersecting: boolean) {
    canRecalculate = !isIntersecting
  }

  async function resizeHandler() {
    if (!canRecalculate || !div || !heading) return
    animate = false
    full = true
    setTimeout(async () => {
      const height = div.offsetHeight
      const width = heading.offsetWidth
      hoverHeight = `${height}px`
      standardWidth = `${width}px`
      full = false
      setTimeout(() => {
        animate = true
      }, 1)
    }, 1)
  }
</script>

<style lang="scss">
  li {
    display: block;
    opacity: 0;
    width: 100%;
    height: clamp(10rem, 80vh, 40rem);
    margin: var(--step-0) 0;
    z-index: -1;
    pointer-events: none;
    visibility: hidden;

    @media screen and (min-width: 50rem) {
      &:nth-child(even) a {
        margin-left: auto;
      }
      &:not(:first-child) {
        margin-top: clamp(-20rem, -40vh, -5rem);
      }
    }
  }

  a {
    display: block;
    height: 100%;
    transform: translateY(0px);
    color: var(--secondary);
    text-decoration: none;
    transition: transform 0.1s ease;
    pointer-events: all;

    @media screen and (min-width: 50rem) {
      width: calc(50% - var(--step-0));
    }

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

        :global(body:not(.blue)) & {
          box-shadow: 0 0 0 0 rgba(#f08700, 0);
        }

        :global(body.blue) & {
          box-shadow: 0 0 0 0 rgba(#0074b3, 0);
        }

        :global(p) {
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
    border-radius: 12px;
    overflow: hidden;
  }

  div {
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
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
    will-change: width, height, transform, box-shadow;

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
    height: auto;
    width: 100%;
    visibility: hidden;
  }

  .animate {
    transition: all 0.2s ease;
  }

  .slide {
    animation: 0.4s ease forwards;
    visibility: visible;
  }

  .slide:nth-child(odd) {
    animation-name: slide-in-left;
  }

  .slide:nth-child(even) {
    animation-name: slide-in-right;
  }

  @keyframes -global-slide-in-left {
    from {
      opacity: 0;
      transform: translateX(-10%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  @keyframes -global-slide-in-right {
    from {
      opacity: 0;
      transform: translateX(10%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
</style>

<svelte:window on:resize={debounce(resizeHandler, 200)} />

<li
  use:observer={(bool, amnt) =>
    slide === false && amnt >= 0.5 ? (slide = bool) : null}
  class:slide
>
  <a href="/projects/{project.slug}">
    <article>
      <ProjectTileImage
        src={project.image}
        alt="Afbeelding van project {project.title}"
      />
      <div
        use:observer={observeHandler}
        style="--height: {hoverHeight};--width: {standardWidth}"
        class:full
        class:animate
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
