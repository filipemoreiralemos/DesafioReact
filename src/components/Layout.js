import { useMemo } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'

import useCurrentPath from '@hooks/useCurrentPath'

const Layout = ({ pageTitle, description, children }) => {
  const router = useRouter()
  const deployUrl = useMemo(
    () => (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null),
    []
  )
  const currentPath = deployUrl ?? useCurrentPath()
  // siteImage can be used as pageImage on each page if necessary
  const siteImage = `${currentPath}/assets/images/primary-logo.png`
  const pageURL = `${currentPath}${router.asPath}`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
        <meta name="MobileOptimized" content="320" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="theme-color" content="#5d20a2" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* SEO */}
        <meta name="google" content="notranslate" />
        <meta property="og:type" content="website" key="ogtype" />
        <meta property="og:locale" content="en_US" key="oglocale" />
        <meta property="og:image:alt" content="Thumbnail" key="ogimagealt" />
        <meta property="og:image:type" content="image/png" key="ogimagetype" />
        <meta property="og:image:width" content="1200" key="ogimagewidth" />
        <meta property="og:image:height" content="630" key="ogimageheight" />
        <meta property="og:url" content={pageURL} key="ogurl" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:image" content={siteImage} key="ogimage" />
        <meta
          property="og:description"
          content={description}
          key="ogdescription"
        />
        <meta
          property="og:image:secure_url"
          content={siteImage}
          key="ogimagesecure"
        />
        <meta
          property="og:site_name"
          content="Hapu | Join a local nanny share"
          key="ogsitename"
        />
      </Head>
      <Header>
        <Navbar />
      </Header>
      {children}
      <Footer />
    </>
  )
}

export default Layout
