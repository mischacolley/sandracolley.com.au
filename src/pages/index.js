import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import Img from "gatsby-image"
import get from 'lodash/get'

import { Link, graphql } from 'gatsby'

class Homepage extends React.Component {
  render() {

    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(this, 'props.data.site.siteMetadata.description')

    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const instagram = get(this, 'props.data.allInstaNode.edges')

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
            <p>I live with my beautiful family in the Byron Shire of northern NSW, Australia.</p>
            <ul className="actions">
              <li><Link to="/about" className="button">About me</Link></li>
              <li><Link to="/doula" className="button">doula.sandra</Link></li>
            </ul>
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

          <section id="two">
            <h2>Latest Images</h2>

            <ul className="latest-posts">
              {instagram.map(({ node }) => {
                return (
                  <li>
                    <a href={"https://www.instagram.com/p/" + node.id} target="_blank" rel="noopener noreferrer">
                      <Img fluid={node.localFile.childImageSharp.fluid} />
                    </a>
                  </li>
                )
              })}
            </ul>

            <ul className="actions">
              <li>
                <a href="https://www.instagram.com/doula.sandra/" className="icon fa-instagram button" target="_blank"><span className="label">Instagram</span> See More</a>
              </li>
            </ul>

          </section>

          <section id="three">
            <h2 id="contact">Get In Touch</h2>
            <p>Accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque lorem ipsum dolor.</p>
            <div className="row">
              <div className="8u 12u$(small)">
                <form method="post" action="#">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                    <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                    <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                  </div>
                </form>
                <ul className="actions">
                  <li><input type="submit" value="Send Message" /></li>
                </ul>
              </div>
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-home"><span className="label">Address</span></h3>
                  Ocean Shores,
                  NSW, 2483,
                  Australia
                </li>
                <li>
                  <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                    <a href="tel:+61401969190">+61 401 969 190</a>
                </li>
                <li>
                  <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                    <a href="mailto:me@sandracolley.com.au">me@sandracolley.com.au</a>
                </li>
              </ul>
            </div>
          </div>
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
    allInstaNode(
      sort: { fields: timestamp, order: DESC }
      limit: 6
      ) {
      edges {
        node {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          caption
          localFile {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          # Only available with the public api scraper
          thumbnails {
            src
            config_width
            config_height
          }
          dimensions {
            height
            width
          }
        }
      }
    }
  }
`