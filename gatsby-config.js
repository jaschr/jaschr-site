module.exports = {
  siteMetadata: {
    siteTitle: `Jacob Schroeder - Portfolio`,
    siteTitleAlt: `Jacob Schroeder`,
    siteUrl: `https://jaschr.com`,
    siteDescription: `Personal portfolio for Jacob Schroeder`,
    siteLanguage: `en`,
    author: `Jacob Schroeder <me@jaschr.com>`,
  },
  plugins: [
    {
      resolve: `@chakra-ui/gatsby-plugin`,
      options: {
        isResettingCSS: true,
        isUsingColorMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@pages': 'src/pages',
          '@comps': 'src/components',
          '@hooks': 'src/hooks',
          '@images': 'src/images',
        },
        extensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `./src/pages/`,
      },
      __key: `pages`,
    },
  ],
}
