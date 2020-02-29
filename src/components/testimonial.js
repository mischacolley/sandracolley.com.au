import React from "react"
import Helmet from 'react-helmet'
import { graphql } from "gatsby"
import Layout from '../components/layout'

export default ({ data, location }) => {
  const post = data.markdownRemark
  return (
    <Layout location={location}>
      <Helmet>
        <title>{post.frontmatter.title}</title>
      </Helmet>

      <div id="main">

        <article className="blog-post-container">
          <div className="blog-post">
            <h1>{post.frontmatter.title}</h1>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </article>

      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }, type: { eq: "testimonial" } }) {
      html
      frontmatter {
        title
        path
        tag
      }
    }
  }
`