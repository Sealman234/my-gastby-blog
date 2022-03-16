module.exports = {
  siteMetadata: {
    title: "Sealman's Blog",
    titleTemplate: "%s | Sealman's Blog",
    description:
      '前端工程師，喜歡 San-X 的まめゴマ、旅遊和吃美食，這裡紀錄了我的學習和開發筆記。',
    siteUrl: `https://blog.sealman.tw`,
    icon: './src/images/favicon.png',
    twitterUsername: '@castle2668',
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
    'gatsby-plugin-mdx',
  ],
};
