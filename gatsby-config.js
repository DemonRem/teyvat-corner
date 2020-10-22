module.exports = {
    pathPrefix: '/teyvat-corner',
    siteMetadata: {
        title: `Teyvat Corner`,
        description: `Your one stop shop for anything Genshin!`,
        author: `@gatsbyjs`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
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
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/teyvat-logo.png`, // This path is relative to the root of the site.
            },
        },
        "gatsby-plugin-sass",
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `wikidata`,
              path: `${__dirname}/src/data/`,
            },
        },
        `gatsby-transformer-remark`,
    ],
}
