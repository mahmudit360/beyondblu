module.exports = {
  siteMetadata: {
    title: `Beyond Bleu`,
    author: {
      name: `Tumee Bayanbileg`,
      summary: `I’m a qualified psychotherapist working in private practice with people of all age groups and backgrounds. I have a Master’s degree in Clinical Psychology and completed a postgraduate internship program at Robert J Murney clinic in USA.`,
    },
    description: `BeyondBleu`,
    siteUrl: `https://www.beyondbleu.com`,
    social: {
      twitter: ``,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {
          "/static/*": ["cache-control: public, max-age=31536000"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-M9JPNBB",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-179517731-1`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Beyond Bleu`,
        short_name: `Beyond Bleu`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // Ensure you have this icon file in your directory
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
        prefixDefault: false,
        pagesPaths: [`${__dirname}/src/pages`, `${__dirname}/content/blog`],
      },
    },
  ],
}
