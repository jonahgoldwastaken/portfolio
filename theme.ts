import { Theme } from 'theme-ui'

const theme: Theme = {
  space: ['0.5em', '1em', '2em', '4em', '8em'],
  breakpoints: ['40rem', '60rem', '80rem', '90rem', '120rem'],
  colors: {
    text: 'black',
    background: 'rgb(250,235,200)',
    primary: 'rgb(244,146,52)',
    secondary: 'rgb(234,131,94)',
    accent: 'rgb(234,182,105)',
    highlight: 'rgb(217,76,79)',
    muted: 'white',
  },
  fontWeights: {
    body: 400,
    heading: 700,
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
  },
  links: {
    nav: {
      ml: 1,
      fontFamily: 'body',
      fontWeight: 'semi',
      cursor: 'pointer',
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
    },
    h2: {
      fontSize: 2,
      my: 0,
    },
    h3: {
      fontSize: 1,
      my: 0,
    },
    a: {
      fontSize: 0,
      fontWeight: 'semi',
      color: 'text',
      textDecoration: 'none',
      ':hover': {
        color: 'highlight',
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
        width: 0,
        mr: 1,
        counterIncrement: 'orderedlist',
        content: 'counter(orderedlist)',
      },
    },
  },
}

export default theme
