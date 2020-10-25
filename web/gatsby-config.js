require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
})

const clientConfig = require("./client-config")

const isProd = process.env.NODE_ENV === "production"

module.exports = {
  siteMetadata: {
    title: `Sanity Gatsby Template`,
    description: `Sanity Gatsby Starter Template`,
    author: `@eytyy`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-41603547-2",
        head: false,
        anonymize: true,
        respectDNT: true,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    "gatsby-plugin-emotion",
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/pp.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
