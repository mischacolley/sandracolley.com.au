/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/components/post.js`)
  const testimonialTemplate = require.resolve(`./src/components/testimonial.js`)

  const result = await graphql(`
    {
      posts: allMarkdownRemark(filter: {frontmatter: {type: {eq: "post"}}}) {
        nodes {
          frontmatter {
            path
            title
            date
            type
          }
        }
      }
      testimonials: allMarkdownRemark(filter: {frontmatter: {type: {eq: "testimonial"}}}) {
        nodes {
          frontmatter {
            path
            title
            type
            tag
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.testimonials.nodes.forEach(testimonial => {
    createPage({
      path: testimonial.frontmatter.path,
      component: testimonialTemplate,
      context: {}, // additional data can be passed via context
    })
  })

  result.data.posts.nodes.forEach(post => {
    createPage({
      path: post.frontmatter.path,
      component: blogPostTemplate,
      context: {}, // additional data can be passed via context
    })
  })

}