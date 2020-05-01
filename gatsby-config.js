require('dotenv').config();
const queries = require("./src/utils/algolia_queries")

module.exports = {
  siteMetadata: {
    title: `Nutricionista Charline Tormen`,
    description: `Sempre fui apaixonada por tudo que envolve a Nutrição, e fascinada pelo poder
    que os alimentos possuem de transformar cada célula do nosso corpo.
    Estou muito feliz por você ter me encontrado. Espero que possamos, juntos, TRANSFORMAR o seu estilo de vida`,
    position: 'Nutricionista',
    author: `@charlinetormen`,
    siteUrl: `https://nutricionistacharline.com.br/`
  },
  plugins: [
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    //needs to be the first one to work with gatbsy-remark-images
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'uploads',
        path: `${__dirname}/static/assets/img`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName:  process.env.GATSBY_ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000, // default: 1000

        enablePartialUpdates: true, // default: false
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `crtormen`,
        short_name: `crtormen`,
        start_url: `/`,
        background_color: `#16202c`,
        theme_color: `#16202c`,
        display: `minimal-ui`,
        icon: 'src/images/favicon.ico'
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false
            }
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts/`
      }
    },
    // {
    //   resolve: "gatsby-source-wordpress",
    //   options: {
    //     baseUrl: "nutricionistacharline.com.br/blog",
    //     protocol: "https",
    //     hostingWPCOM: false,
    //     useACF: true,
    //     acfOptionPageIds: [],
    //     verboseOutput: false,
    //     perPage: 100,
    //     // Search and Replace Urls across WordPress content.
    //     searchAndReplaceContentUrls: {
    //       sourceUrl: "https://nutricionistacharline.com.br/blog",
    //       replacementUrl: "https://localhost:8000",
    //     },
    //     concurrentRequests: 10,
    //     includedRoutes: [
    //       "**/categories",
    //       "**/posts",
    //       "**/pages",
    //       "**/media",
    //       "**/tags",
    //       "**/taxonomies",
    //       "**/users",
    //     ],
    //     excludedRoutes: [],
      
    //     normalizer: function ({ entities }) {
    //       return entities
    //     },
    //   }
    // },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify-cms`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
