import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import Img from "gatsby-image"

import get from 'lodash/get'

import { Link, graphql } from 'gatsby'

class Doula extends React.Component {
  render() {

    const siteTitle = "Doula"
    const siteDescription = "Doula Description"

    const testimonials = get(this, 'props.data.allMarkdownRemark.edges')
    const instagram = get(this, 'props.data.allInstaNode.edges')

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">

          <section id="intro">

            <h1>Doula</h1>

            <p className="lead">Becoming a birthworker has been my dream from a very young age. After giving birth myself the intensity of this dream grew more powerful as life went on. Over the years I gathered a broad knowledge as well as a wide range of personal professional experience and am now a certified doula.</p>
            
          </section>

          <section id="testimonials">
            <h2>What my clients say</h2>

            <ul>
              {testimonials.map(({ node }) => {
                return (
                  <article key={node.frontmatter.path}>
                    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    <strong>{node.frontmatter.name}</strong>
                  </article>
                )
              })}
            </ul>

          </section>

          <section>
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
          </section>

          <section>

            <h2>What i do?</h2>

            <p>As a doula I am your personal, non medical birth support. Birth is a wonderfully and intense journey and if you can you should make use of as much support as possible. It can become vital to have a known, trusted, experienced person with you. I offer guidance and unbiased information on all topics around birth, pregnancy and the prenatal period.</p>
            
            <p>I am experienced in accupressure, breathing/birthing techniques and other pain relief methods to ease the birth of your baby/ies. I can also provide you with nourishing home cooked meals, unlimited phone and messaging/email support and access to my resource library. If this sounds like the kind of birth support you're after, please contact me to schedule a complimentary first interview.</p> 

            <ul className="actions">
              <li>
                <Link className="button" to="/posts">Info Pack</Link>
              </li>
            </ul>

          </section>

          <section>
            <h2>FAQs</h2>

            <h3>Why do I need a Doula?</h3>

            <p><a href="https://www.ncbi.nlm.nih.gov/m/pubmed/23076901/?fbclid=IwAR23D9YAVziONYEudiQR2LKvfZ4ZaCCk5P_FhxDM7JpZ7qazctxw1YsiHg8" target="_blank">Studies show</a> that in 95% of births doulas lead to a shorter labour, more spontaneous vaginal birth (lower chances of induction), less cesareans and instrumental births, fewer pain medication and epidural, less babies with a low 5min. Apgar score and overall more satisfaction with the birth experience.</p>

          </section>

        </div>

      </Layout>
    )
  }
}

export default Doula

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {tag: {eq: "doula"}}}) {
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