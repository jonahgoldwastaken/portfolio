import NextApp from 'next/app'
import { ThemeProvider } from 'theme-ui'
import Layout from '../components/Layout'
import components from '../components/MDXComponents'
import theme from '../theme'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme} components={components}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    )
  }
}
