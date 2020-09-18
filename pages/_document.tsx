import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'
import { InitializeColorMode } from 'theme-ui'

export default class extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="nl">
        <Head />
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
          <link
            href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;600&family=Merriweather:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
        </body>
      </Html>
    )
  }
}
