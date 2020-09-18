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
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#faebc8" />
          <meta name="msapplication-TileColor" content="#faebc8" />
          <meta name="theme-color" content="#000000" />
        </Head>
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
