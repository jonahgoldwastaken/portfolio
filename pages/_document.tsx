import Document, {
  DocumentContext,
  Html,
  Main,
  NextScript,
} from 'next/document'
import Head from 'next/head'
import { InitializeColorMode } from 'theme-ui'

export default class extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="nl">
        <Head>
          <title>Jonah Meijers</title>
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
