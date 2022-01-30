import { graphql, useStaticQuery } from 'gatsby'

type UseSiteMetadataProps = {
  site: {
    siteMetadata: {
      siteTitle: string
      siteTitleAlt: string
      siteUrl: string
      siteDescription: string
      siteLanguage: string
      author: string
      [key: string]: unknown
    }
  }
}

const useSiteMetadata = () => {
  const data = useStaticQuery<UseSiteMetadataProps>(graphql`
    query {
      site {
        siteMetadata {
          siteTitle
          siteTitleAlt
          siteUrl
          siteDescription
          siteLanguage
          author
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata
