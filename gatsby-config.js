module.exports = {
  siteMetadata: {
    title: "海豹人的第一個家",
    description: "Sealman's first homepage",
    author: "Sealman",
    siteUrl: "https://www.sealman.dev",
  },
  trailingSlash: "never",
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          "gatsby-remark-prismjs",
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
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "海豹人的第一個家",
        short_name: "SealmanTW",
        description: "Sealman's first homepage",
        lang: "zh-Hant-TW",
        id: "/",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#333",
        display: "standalone",
        icon: "src/images/favicon.png", // This path is relative to the root of the pre-rendered site
        icons: [
          // Paths relative to the static folder
          {
            src: `favicon/favicon-256.png`,
            sizes: `256x256`,
            type: `image/png`,
          },
          {
            src: `favicon/favicon-128.png`,
            sizes: `128x128`,
            type: `image/png`,
          },
          {
            src: `favicon/favicon-64.png`,
            sizes: `64x64`,
            type: `image/png`,
          },
          {
            src: `favicon/favicon-32.png`,
            sizes: `32x32`,
            type: `image/png`,
          },
          {
            src: `favicon/favicon-maskable.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `maskable`,
          },
        ],
        cache_busting_mode: "none",
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-153300681-1",
        head: false,
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        output: "/",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://www.sealman.dev",
        sitemap: "https://www.sealman.dev/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
