module.exports = {
  siteMetadata: {
    title: "Sandra Colley | Birth Doula, Early Childhood & Special Needs Teacher",
    author: "Sandra Colley",
    description: "I am a loving & passionate mother, birth doula, early childhood & special needs teacher, friend, partner, sister, daughter & involved member of my community.",
    siteURL: 'https://sandracolley.com.au',
    image: "/images/social_share/sandra.png",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#F7C133',
        theme_color: '#DA8E3A',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon-32x32.png', // This path is relative to the root of the site.
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
