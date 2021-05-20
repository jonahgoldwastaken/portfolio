<script>
  import observer from '$lib/actions/intersectionObserver'
  import AnimatingHeading from '$lib/components/atoms/AnimatingHeading.svelte'
  import ImageBlock from '$lib/components/atoms/ImageBlock.svelte'
  import Link from '$lib/components/atoms/Link.svelte'
  import HorizontalList from '$lib/components/molecules/HorizontalList.svelte'
  import { onMount } from 'svelte'

  let visibleArticles = [true, true, true]

  onMount(() => {
    visibleArticles = visibleArticles.map(() => false)
  })
</script>

<style lang="scss">
  article {
    font-size: var(--step-0);
    max-width: 80ch;
    width: 100%;
    margin: auto;

    :global(h1) {
      margin-bottom: var(--base-space);
    }
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--step-0);

    > * + * {
      margin-top: var(--double-space);
    }

    p + p {
      margin-top: var(--base-space);
    }

    > article {
      max-width: 80ch;
      width: 100%;
      visibility: hidden;

      &.animate {
        visibility: visible;
        animation: swipe-up var(--base-time) var(--easing) forwards;

        @keyframes swipe-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      }

      h2 {
        margin-bottom: var(--half-space);
      }

      + article {
        display: grid;

        article + article {
          margin-top: var(--base-space);
        }

        h3 {
          margin-bottom: var(--half-space);

          + h4 {
            margin-top: 0;
          }
        }

        h4 {
          margin-bottom: var(--half-space);
          margin-top: var(--base-space);
        }

        @media screen and (min-width: 90rem) {
          article:nth-last-child(3) {
            grid-column: span 2;
          }

          grid-template-columns: 1fr 1fr;
          align-content: start;
          column-gap: var(--base-space);

          h2 {
            grid-column: 1 / span 2;
          }

          article + article:nth-of-type(2):last-child {
            margin-top: 0;
          }
        }
      }
    }
  }
</style>

<svelte:head>
  <title>Over - Jonah Meijers</title>
  <meta
    name="descrtiption"
    content="Een kort verhaal van Jonah, zijn skillset en de tools die hij gebruikt."
  />
</svelte:head>

<article>
  <AnimatingHeading --alignment="left" observe content="Over" />
  <main>
    <article
      use:observer={(bool, amnt) => {
        if (visibleArticles[0] === false && bool && amnt > 0.2)
          visibleArticles[0] = bool
      }}
      class:animate={visibleArticles[0]}
    >
      <h2>Wie is Jonah?</h2>
      <p>
        Jonah is een Interaction Designer en (voornamelijk) Web Developer die de
        puntjes op de i zet. Zijn projecten zijn gebouwd voor een specifiek
        doel, namelijk om het doel van de gebruiker in zo'n kort mogelijke tijd
        te bereiken. Het vergt veel creativiteit, aandacht, empathie en
        doorzettingsvermogen om tot strak uitgewerkte applicaties te komen waar
        mensen echt wat aan hebben.
      </p>
      <p>
        Op zijn opleiding, Communication &amp; Multimedia Design, komt deze
        skillset zeer goed van pas. Jonah bedenkt concept na concept waar de
        docenten van onder de indruk zijn. Hij zit daar echt op zijn plek.
      </p>
      <p>
        Naast zijn studie maakt Jonah tijd om nieuwe muziek te ontdekken, een
        lekker potje te gamen en af en toe ook lekker te niksen. Dat laatste
        doet hij niet al te vaak, want hij werkt ook graag eigen concepten uit.
        Hierover kan binnenkort hopelijk meer over verteld worden.
      </p>
      <p>
        Op dit moment is hij vooral druk op zoek naar een stage. Mocht je nog
        een stageplek vrij hebben, <Link
          noGradient
          href="mailto:jonahmeijers97@gmail.com"
        >
          neem dan vooral contact op</Link
        >!
      </p>
    </article>
    <article
      use:observer={(bool, amnt) => {
        if (visibleArticles[1] === false && bool && amnt > 0.2)
          visibleArticles[1] = bool
      }}
      class:animate={visibleArticles[1]}
    >
      <h2>Skills</h2>
      <article>
        <h3>Algemeen</h3>
        <ul>
          <li>Nederlands zowel Engels beheersend op C2 niveau</li>
          <li>Samenwerken in teamverband</li>
          <li>Presentaties maken en geven</li>
          <li>Projectmanagement</li>
          <li>Presteren onder druk</li>
          <li>Snel leren en dingen eigen maken</li>
        </ul>
      </article>
      <article>
        <h3>WebDev</h3>
        <ul>
          <li>Progressive enhancement</li>
          <li>Breakdown schetsen</li>
          <li>FP & OOP</li>
          <li>BEM</li>
          <li>PWA</li>
          <li>CSS-in-JS</li>
          <li>CRUD via REST en GraphQL</li>
          <li>Deployment</li>
        </ul>
      </article>
      <article>
        <h3>Design</h3>
        <ul>
          <li>Human-centered Design</li>
          <li>Interaction Design</li>
          <li>UI Design</li>
          <li>UI Stack</li>
          <li>Design (pattern) research</li>
          <li>Usability testing</li>
          <li>Motion Design</li>
        </ul>
      </article>
    </article>
    <article
      use:observer={(bool, amnt) => {
        if (visibleArticles[2] === false && bool && amnt > 0.2)
          visibleArticles[2] = bool
      }}
      class:animate={visibleArticles[2]}
    >
      <h2>Tools</h2>
      <article>
        <h3>Algemeen</h3>
        <h4>Weapons of choice</h4>
        <HorizontalList --margin="var(--quarter-space)">
          <li>
            <ImageBlock
              href="https://trello.com"
              src="/trello.svg"
              name="Trello"
            />
          </li>
          <li>
            <ImageBlock
              href="https://culturedcode.com"
              src="/things.png"
              name="Things 3"
            />
          </li>
          <li>
            <ImageBlock href="https://craft.do" src="/craft.png" name="Craft" />
          </li>
          <li>
            <ImageBlock
              href="https://stayinsession.com"
              src="/session.png"
              name="Session"
              noPadding
            />
          </li>
        </HorizontalList>
      </article>
      <article>
        <h3>WebDev</h3>
        <h4>Weapons of choice</h4>
        <HorizontalList --margin="var(--quarter-space)">
          <li>
            <ImageBlock
              href="https://svelte.dev"
              src="/svelte.svg"
              name="Svelte"
            />
          </li>
          <li>
            <ImageBlock
              href="https://www.typescriptlang.org"
              src="/ts.svg"
              colour="#3178c6"
              name="TypeScript"
            />
          </li>
          <li>
            <ImageBlock
              href="https://sass-lang.com"
              src="/sass.svg"
              colour="#cd6699"
              name="Sass"
            />
          </li>
          <li>
            <ImageBlock
              href="https://golang.org"
              src="/golang.svg"
              name="Golang"
            />
          </li>
          <li>
            <ImageBlock
              href="https://code.visualstudio.com"
              src="/vscode.svg"
              name="VSCode"
            />
          </li>
        </HorizontalList>
        <h4>Gewerkt met (en kennis van)</h4>
        <HorizontalList --margin="var(--quarter-space)">
          <li>
            <ImageBlock src="/html.svg" name="HTML5" />
          </li>
          <li>
            <ImageBlock src="/css.svg" name="CSS3" />
          </li>
          <li>
            <ImageBlock
              src="/js.svg"
              colour="#f7df1e"
              name="JavaScript (ES2020)"
            />
          </li>
          <li>
            <ImageBlock
              href="https://reactjs.org"
              src="/react.svg"
              colour="#282c34"
              name="React"
            />
          </li>
          <li>
            <ImageBlock
              href="https://nextjs.org"
              src="/nextjs.svg"
              name="Next.js"
            />
          </li>
          <li>
            <ImageBlock
              href="https://nodejs.org"
              src="/nodejs.svg"
              colour="#fff"
              name="NodeJS"
            />
          </li>
          <li>
            <ImageBlock
              href="https://docker.com"
              src="/docker.png"
              colour="#007bff"
              name="Docker"
            />
          </li>
          <li>
            <ImageBlock
              href="https://nova.app"
              src="/nova.png"
              colour="#3d147f"
              name="Panic Nova"
            />
          </li>
          <li>
            <ImageBlock
              href="https://www.jetbrains.com/webstorm/"
              src="/webstorm.svg"
              colour="#fff"
              name="Webstorm"
            />
          </li>
        </HorizontalList>
      </article>
      <article>
        <h3>Design</h3>
        <h4>Weapons of choice</h4>
        <HorizontalList --margin="var(--quarter-space)">
          <li>
            <ImageBlock
              href="https://sketch.com"
              src="/sketch.svg"
              name="Sketch"
            />
          </li>
          <li>
            <ImageBlock
              href="https://affinity.serif.com"
              src="/affinity.svg"
              colour="#000"
              name="Affinity"
            />
          </li>
        </HorizontalList>
        <h4>Gewerkt met (en kennis van)</h4>
        <HorizontalList --margin="var(--quarter-space)">
          <li>
            <ImageBlock
              href="https://adobe.com"
              src="/adobe.svg"
              name="Adobe CC"
            />
          </li>
          <li>
            <ImageBlock
              href="https://figma.com"
              src="/figma.svg"
              colour="rgb(56, 58, 66)"
              name="Figma"
            />
          </li>
          <li>
            <ImageBlock
              href="https://www.framer.com"
              src="/framer.svg"
              colour="#000"
              name="Framer"
            />
          </li>
        </HorizontalList>
      </article>
    </article>
  </main>
</article>
