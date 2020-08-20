import React from "react"
import Helmet from 'react-helmet'
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (

    <Layout>

      <Helmet>
        <title>{post.frontmatter.title}</title>
      </Helmet>

      <div id="main">

        <article className="blog-post-container">
          <div className="blog-post">
            <h1>{post.frontmatter.title}</h1>
            <h2>{post.frontmatter.date}</h2>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </article>

        <Link to="/" className="button">Home</Link>

      </div>

    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }, type: { eq: "post" } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`