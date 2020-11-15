import { Theme } from 'theme-ui'

const theme: Theme = {
  space: ['0.5em', '1em', '2em', '4em', '8em', '12em', '16em', '20em', '24em'],
  radii: ['2px', '5px', '0.5em', '1em'],
  sizes: ['8rem', '40rem', '60rem', '80rem', '120rem', '100%'],
  shadows: {
    card: '0px 5px 5px -2.5px rgba(0, 0, 0, 0.5)',
    cardHover: '0px 20px 10px -15px rgba(0, 0, 0, 0.25)',
  },
  breakpoints: ['21rem', '40rem', '60rem', '80rem', '90rem', '120rem'],
  zIndices: [0, 1, 10, 100],
  colors: {
    text: 'black',
    altText: 'white',
    background: 'rgb(250,235,200)',
    primary: 'rgb(232, 146, 65)',
    secondary: 'rgb(230, 148, 71)',
    highlight: 'rgb(217, 76, 79)',
    muted: 'white',
    // modes: {
    //   dark: {
    //     altText: 'black',
    //     text: 'white',
    //     muted: 'rgb(77, 69, 54)',
    //     accent: 'rgb(120, 92, 52)',
    //     highlight: 'rgb(255, 145, 147)',
    //     background: 'black',
    //   },
    // },
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
    largeParagraph: {
      fontSize: 1,
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
      fontSize: [3, null, null, 4],
      my: 0,
      ':first-of-type': {
        mt: '0rem',
      },
    },
    h2: {
      fontSize: [2, null, null, 3],
      my: 0,
      ':first-of-type': {
        mt: '0rem',
      },
    },
    h3: {
      fontSize: [1, null, null, 2],
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
    link: {
      padding: '0rem',
      background: 'none',
      display: 'inline-block',
      position: 'relative',
      fontWeight: 'semi',
      color: 'text',
      fontFamily: 'body',
      textDecoration: 'none',
      cursor: 'pointer',
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
  layout: {
    sectionLayout: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      minHeight: ['1', null, null, '80vh'],
      height: 'min-content',
      my: 3,
    },
  },
  grids: {
    cardGrid: {
      gridTemplateColumns: ['1fr', null, '1fr 1fr'],
      gridAutoRows: ['40rem', '40rem', '40rem', '40rem', '50rem'],
      gap: 2,
    },
    footerGrid: {
      padding: 1,
      marginTop: 1,
      marginX: 'auto',
      maxWidth: ['60rem', null, null, '80rem', '120rem'],
      width: '100%',
      gridTemplateColumns: ['1fr', null, '1fr 1fr'],
    },
  },
  cards: {
    primary: {
      height: '100%',
      willChange: 'box-shadow',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'transparent',
      fontSize: 2,
      fontFamily: 'heading',
      fontWeight: 'heading',
      textDecoration: 'none',
      position: 'relative',
      padding: 1,
      gridColumn: 'span 1',
      gridRow: 'span 1',
      borderRadius: '2',
      backgroundColor: 'muted',
      boxShadow: 'card',
      transition: 'box-shadow 0.2s ease-in-out',
      overflow: 'hidden',
      span: {
        zIndex: 2,
        transition: 'transform 0.2s ease-in-out, color 0.2s ease-in-out',
      },
      '::before, ::after': {
        content: '""',
        position: 'absolute',
        top: '0rem',
        left: '0rem',
        width: '100%',
        height: '100%',
      },
      '::before': {
        filter: 'brightness(1) blur(0px)',
        transition: 'filter 0.2s ease-in-out, transform 0.2s ease-in-out',
        transform: 'scale(1.025)',
        opacity: 1,
        backgroundSize: 'cover',
        backgroundPosition: 'center 60%',
        zIndex: 0,
      },
      '::after': {
        backgroundColor: 'primary',
        opacity: 0.5,
        zIndex: 1,
        transition: 'opacity 0.2s ease-in-out',
      },
      '&:hover, &:focus': {
        boxShadow: 'cardHover',
        span: {
          color: 'text',
          transform: 'scale(1.025)',
        },
        '::before': {
          filter: 'brightness(0.5) blur(2px)',
          transform: 'scale(1)',
        },
        '::after': {
          opacity: 0.75,
        },
      },
    },
  },
}

export default theme
