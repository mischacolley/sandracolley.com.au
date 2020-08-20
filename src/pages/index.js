import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

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
              <h2>I’m Sandra Colley!</h2>
            </header>
            
            <p>I am a loving and passionate mother, birth doula, early childhood and special needs teacher, friend, <a href="https://mischacolley.com.au" target="_blank">partner</a>, sister, daughter and involved member of my community.</p>

            <p>I live with my beautiful family near Byron Bay in the Northern Rivers region of NSW, Australia. Bundjalung and Yugambeh country. Here I work raising my children, as a Birth Doula and as a carer of both big and little people in my community.</p>

            <ul className="actions">
              <li><Link to="/doula" className="button special">Hear about my work as Doula.Sandra</Link></li>
              <li><Link to="/about" className="button">Hear more about me, Sandra Colley</Link></li>
            </ul>

          </section>

          <section >
            <h2>Read my latest posts</h2>

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