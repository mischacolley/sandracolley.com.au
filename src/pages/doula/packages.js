import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../../components/layout'
import FooterDoula from '../../components/footerDoula'

import get from 'lodash/get'

import { Link, graphql } from 'gatsby'

import doula_deck from '../../assets/images/doula_deck.jpg'
import socialShare from '../../assets/images/social_share/doula_sandra.png'

class Doula extends React.Component {
  render() {

    const pageTitle = "Doula Sandra - Birthworker for your pregnancy, birth & postpartum journey"
    const pageDescription = "As a birth doula I am your personal, non medical birth support servicing all areas in the Byron shire as well as Lennox Head, Lismore, Murwillumbah, Ballina, Tweed Heads & the Gold Coast."

    const testimonials = get(this, 'props.data.testimonials.edges')

    const faqs = get(this, 'props.data.faqs.edges')

    const doulaAbout = get(this, 'props.data.doulaAbout.edges')

    const doulaPackages = get(this, 'props.data.doulaPackages.edges')

    return (
      <Layout>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={pageDescription} />
          <meta property="og:image" content={socialShare} />
          <meta name="twitter:image" content={socialShare} />
          <meta property="og:image:width" content="512" />
          <meta property="og:image:height" content="512" />
          <meta property="twitter:title" content={pageTitle} />
          <meta property="twitter:description" content={pageDescription} />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        <div id="main">

          <img src={doula_deck} className="image" alt="Labouring on Deck" />

          <section id="packages">

            {doulaPackages.map(({ node }) => {
              return (
                <div dangerouslySetInnerHTML={{ __html: node.html }} />
              )
            })}

          </section>

          <FooterDoula />

        </div>

      </Layout>
    )
  }
}

export default Doula

export const pageQuery = graphql`
  query {

    testimonials: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {frontmatter: {tag: {eq: "doula"}, type: {eq: "testimonial"}}}
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            title
            path
          }
        }
      }
    }

    faqs: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {frontmatter: {tag: {eq: "doula"}, type: {eq: "faqs"}}}
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
          }
        }
      }
    }

    doulaAbout: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {frontmatter: {type: {eq: "about"}}}
    ) {
      edges {
        node {
          id
          html
        }
      }
    }

    doulaPackages: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {frontmatter: {type: {eq: "packages"}}}
    ) {
      edges {
        node {
          id
          html
        }
      }
    }

  }
`