import { Theme } from 'theme-ui'

const theme: Theme = {
  space: ['0.5em', '1em', '2em', '4em', '8em', '16em', '24em'],
  radii: ['2px', '5px', '0.5em', '1em'],
  sizes: ['8rem', '40rem', '60rem', '80rem', '120rem', '100%'],
  shadows: {
    card: '0px 5px 5px -2.5px rgba(0, 0, 0, 0.5)',
  },
  breakpoints: ['40rem', '60rem', '80rem', '90rem', '120rem'],
  colors: {
    text: 'black',
    background: 'rgb(250,235,200)',
    primary: 'rgb(244,146,52)',
    secondary: 'rgb(234,131,94)',
    accent: 'rgb(234,182,105)',
    highlight: 'rgb(217,76,79)',
    muted: 'white',
    modes: {
      dark: {
        text: 'white',
        muted: 'rgb(77, 69, 54)',
        accent: 'rgb(120, 92, 52)',
        highlight: 'rgb(255, 145, 147)',
        background: 'black',
      },
    },
  },
  fontWeights: {
    body: 400,
    heading: 700,
    medium: 500,
    semi: 600,
    bold: 700,
  },
  fontSizes: ['1rem', '1.5rem', '2rem', '2.5rem', '3rem'],
  fonts: {
    heading: "'Merriweather', serif",
    body: "'Inconsolata', monospace",
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    aboutParagraph: {
      fontSize: [1, 3, 3, 3, 3],
      fontFamily: 'heading',
      fontWeight: 'body',
      my: [3, 3, 3, 4, 4],
    },
  },
  styles: {
    root: {
      margin: '0rem',
      boxSizing: 'border-box',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    h1: {
      fontSize: [3, 3, 3, 4, 4],
      my: 0,
      ':first-of-type': {
        mt: '0rem',
      },
    },
    h2: {
      fontSize: [2, 2, 2, 3, 3],
      my: 0,
      ':first-of-type': {
        mt: '0rem',
      },
    },
    h3: {
      fontSize: [1, 1, 1, 2, 2],
      my: 0,
      ':first-of-type': {
        mt: '0rem',
      },
    },
    a: {
      display: 'inline-block',
      position: 'relative',
      fontWeight: 'semi',
      color: 'text',
      textDecoration: 'none',
      ':hover': {
        color: 'highlight',
        '::before': {
          backgroundColor: 'highlight',
        },
      },
      '::before': {
        content: '""',
        width: '100%',
        height: '2px',
        position: 'absolute',
        bottom: '1px',
        left: '0px',
        backgroundColor: 'text',
      },
    },
    ul: {
      listStyleType: 'square',
      pl: 1,
      ul: {
        listStyleType: 'disc',
      },
    },
    ol: {
      p: '0rem',
      listStyle: 'none',
      counterReset: 'orderedlist',
      'li::before': {
        display: 'inline-block',
        width: '0rem',
        fontWeight: 'bold',
        mr: '1.5rem',
        counterIncrement: 'orderedlist',
        content: 'counter(orderedlist)"."',
      },
    },
  },
  links: {
    nav: {
      position: 'relative',
      ml: 1,
      fontFamily: 'body',
      fontWeight: 'semi',
      textDecoration: 'none',
      ':hover': {
        color: 'highlight',
        '::before': {
          backgroundColor: 'highlight',
        },
      },
      '::before': {
        content: '""',
        width: '100%',
        height: '2px',
        position: 'absolute',
        bottom: '1px',
        left: '0px',
        backgroundColor: 'text',
      },
    },
  },
  buttons: {
    icon: {
      'svg *': {
        fill: 'text',
      },
      ':hover': {
        '> svg *': {
          fill: 'highlight',
        },
      },
    },
  },
  images: {
    default: {},
    cardImage: {
      borderRadius: 2,
      width: 5,
      height: 0,
      objectFit: 'cover',
    },
  },
  cards: {
    primary: {
      padding: 1,
      gridColumn: 'span 1',
      gridRow: 'span 1',
      borderRadius: '2',
      backgroundColor: 'muted',
      boxShadow: 'card',
      transition: 'box-shadow 0.1s ease-in-out',
    },
  },
  grids: {
    cardGrid: {
      gridTemplateColumns: [
        '1fr',
        '1fr 1fr',
        '1fr 1fr',
        '1fr 1fr 1fr',
        '1fr 1fr 1fr 1fr',
      ],
      gap: 2,
    },
    footerGrid: {
      padding: 1,
      marginTop: 1,
      marginX: 'auto',
      maxWidth: ['80rem', '80rem', '60rem', '80rem', '120rem'],
      width: '100%',
      gridTemplateColumns: [
        '1fr',
        '1fr',
        '8rem 1fr',
        '10rem 10rem 1fr',
        '10rem 10rem 1fr',
      ],
    },
  },
}

export default theme
