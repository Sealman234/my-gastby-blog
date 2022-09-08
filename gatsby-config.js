module.exports = {
  siteMetadata: {
    title: '海豹人的第一個家',
    description: "Sealman's first homepage",
    author: 'Sealman',
    siteUrl: 'https://www.sealman.tw',
  },
  trailingSlash: 'never',
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          'gatsby-remark-prismjs',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 760,
              showCaptions: true,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              isIconAfterHeader: true,
            },
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: '海豹人的第一個家',
        short_name: 'SealmanTW',
        description: "Sealman's first homepage",
        lang: 'zh-Hant-TW',
        id: '/',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#333',
        display: 'standalone',
        // Automatic mode configuration
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-offline',
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {
    //     precachePages: [`/*`],
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-153300681-1',
        head: false,
      },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
  ],
};
