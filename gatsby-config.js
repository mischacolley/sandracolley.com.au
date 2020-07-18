module.exports = {
  siteMetadata: {
    title: "Sandra Colley",
    author: "Sandra Colley",
    description: "I’m Sandra! I am a mother, doula, early childhood teacher, friend, partner and sister",
    siteURL: 'https://sandracolley.com.au',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `testimonials`,
        path: `src/testimonials`,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}
