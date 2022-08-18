module.exports = {
  siteMetadata: {
    title: "Sealman's Blog",
    description: 'Frontend Engineer / Taiwanese / Passion Comes From Mastery',
    author: 'Sealman',
    keywords: [
      'HTML',
      'CSS',
      'JavaScript',
      'Vue',
      'Quasar',
      'React',
      'Sealman',
      '海豹人',
      '海豹人的第一個家',
      'Sealman Blog',
    ],
    siteUrl: 'https://www.sealman.tw',
  },
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Sealman's Blog",
        short_name: 'Sealman Blog',
        description: `前端工程師，喜歡 San-X 的まめゴマ、旅遊和吃美食，這裡紀錄了我的學習和開發筆記`,
        lang: `zh-Hant`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#333`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-W7JN28H',
        includeInDevelopment: false,
      },
    },
    'gatsby-plugin-sitemap',
  ],
};
