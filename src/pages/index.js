import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

// import Img from "gatsby-image"
import get from 'lodash/get'

import { Link, graphql } from 'gatsby'

class Homepage extends React.Component {
  render() {

    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(this, 'props.data.site.siteMetadata.description')

    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">

          <section id="one">
            <header className="major">
              <h2>I’m Sandra! I am a mother, doula, early childhood teacher, friend, partner and sister. </h2>
            </header>
            <p>I live with my beautiful family in the Byron Shire of Northern NSW, Australia.</p>

            <p>I am a devoted mum of two beautiful children who taught me how to truly love and be loved unconditionally. After having a fulfilling career as an early childhood teacher I have finally devoted myself to my dream of being a Doula.</p>

            <ul className="actions">
              <li><Link to="/doula" className="button">Hear about Doula.Sandra</Link></li>
            </ul>

            <p>Cooking ... craft. Unschooling.</p>

          </section>

          <section >
            <h2>Latest Posts</h2>

            {posts.map(({ node }) => {
              const title = get(node, 'frontmatter.title') || node.frontmatter.path
              return (
                <div key={node.frontmatter.path}>
                  <h3>
                    <Link to={node.frontmatter.path}>{title}</Link>
                  </h3>
                  <small>{node.frontmatter.date}</small>
                  <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </div>
              )
            })}

            <ul className="actions">
              <li>
                <Link className="button" to="/posts">See More</Link>
              </li>
            </ul>
              
          </section>

        </div>

      </Layout>
    )
  }
}

export default Homepage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {type: {eq: "post"}}}) {
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