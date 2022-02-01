import * as React from 'react'
import { Helmet } from 'react-helmet'
import useSiteMetadata from '@hooks/use-site-metadata'

type Props = {
  title?: string
  description?: string
  pathname?: string
  image?: string
  children?: React.ReactNode
}

const SEO = ({
  title = ``,
  description = ``,
  pathname = ``,
  children = null,
}: Props) => {
  const site = useSiteMetadata()

  const {
    siteTitle,
    siteTitleAlt: defaultTitle,
    siteUrl,
    siteDescription: defaultDescription,
    siteLanguage,
    author,
  } = site

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
    author: author,
  }
  return (
    <Helmet
      title={title}
      defaultTitle={defaultTitle}
      titleTemplate={`%s | ${siteTitle}`}
    >
      <html lang={siteLanguage} />
      <meta name='description' content={seo.description} />
      <meta name='author' content={seo.author} />
      <meta property='og:title' content={seo.title} />
      <meta property='og:url' content={seo.url} />
      <meta property='og:description' content={seo.description} />
      <meta property='og:type' content='website' />
      <meta property='og:image:alt' content={seo.description} />
      {children}
    </Helmet>
  )
}

export default SEO
