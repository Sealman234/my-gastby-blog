module.exports = {
  siteMetadata: {
    title: "Sealman's Blog",
    description:
      '前端工程師，喜歡 San-X 的まめゴマ、旅遊和吃美食，這裡紀錄了我的學習和開發筆記',
    author: 'Sealman',
    keywords: ['Sealman', 'blog', 'gatsby'],
    siteUrl: 'https://blog.sealman.tw',
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
  ],
};
