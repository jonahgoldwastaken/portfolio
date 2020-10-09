import { Global } from '@emotion/core'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'theme-ui'
import Layout from '../src/components/Layout'
import components from '../src/components/MDXComponents'
import theme from '../src/theme'

const App: React.FC<AppProps> = ({ pageProps, Component }) => (
  <ThemeProvider theme={theme} components={components}>
    <Head>
      <title>Jonah Meijers</title>
    </Head>
    <Global
      styles={_ => ({
        body: {
          fontSize: '16px',
        },
        '*': {
          boxSizing: 'border-box',
        },
        '#__next': {
          minHeight: '100vh',
          height: '100%',
        },
      })}
    />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>
)

export default App
