import Document, { Html, Head, Main, NextScript } from 'next/document'

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* fonts */}
          <link
            rel="preload"
            as="font"
            href="/assets/fonts/Inter-Medium.ttf"
            type="font/ttf"
            crossOrigin=""
          />
          <link
            rel="preload"
            as="font"
            href="/assets/fonts/Inter-Regular.ttf"
            type="font/ttf"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
export default CustomDocument
