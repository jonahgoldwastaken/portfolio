import { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import Layout from '../components/Layout'
import components from '../components/MDXComponents'
import theme from '../theme'
import { Global } from '@emotion/core'

const App: React.FC<AppProps> = ({ pageProps, Component }) => (
  <ThemeProvider theme={theme} components={components}>
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
