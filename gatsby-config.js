module.exports = {
  siteMetadata: {
    title: `Swintons Premier League Predictions`,
    description: `This is a family predictions league where we try our best to predict which teams win which fixtures each week`,
    author: `@Swinny96`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
