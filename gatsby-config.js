module.exports = {
  siteMetadata: {
    title: `Responsive Landing Starter`,
    description: `A responsive landing page made with GatsbyJS`,
    author: `Tim Abrahamson`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Responsive-landing-starter`,
        short_name: `RLS`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
