import React from "react"
import { Link, graphql } from "gatsby"
import PostLink from "../components/PostLink"
import Helmet from 'react-helmet'

import Layout from '../components/layout'

const Posts = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Helmet>
        <title>Posts</title>
      </Helmet>

      <div id="main">

        <section>
          <h1>Posts</h1>
          {Posts}
        </section>

        <Link to="/" className="button">Home</Link>

      </div>

    </Layout>
  ) 
}

export default Posts

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`