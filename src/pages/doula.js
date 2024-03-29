import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import FooterDoula from '../components/footerDoula'

import get from 'lodash/get'

import { Link, graphql } from 'gatsby'

import wild_ocean_warrioress from '../assets/images/wild_ocean_warrioress.jpg'
import socialShare from '../assets/images/social_share/doula_sandra.png'

class Doula extends React.Component {
  render() {

    const pageTitle = "Doula Sandra - Birthworker for your pregnancy, birth & postpartum journey"
    const pageDescription = "As a birth doula I am your personal, non medical birth support servicing all areas in the Byron shire as well as Lennox Head, Lismore, Murwillumbah, Ballina, Tweed Heads & the Gold Coast."

    const testimonials = get(this, 'props.data.testimonials.edges')

    const faqs = get(this, 'props.data.faqs.edges')

    const doulaAbout = get(this, 'props.data.doulaAbout.edges')

    const doulaServices = get(this, 'props.data.doulaServices.edges')

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

          <img src={wild_ocean_warrioress} className="image" alt="Wild Ocean Warrioress" />

          <section id="about">

            {doulaAbout.map(({ node }) => {
              return (
                <div dangerouslySetInnerHTML={{ __html: node.html }} />
              )
            })}

            <ul className="actions">
              <li><Link to="/doula/packages" className="button special">View my Packages</Link></li>
              <li><Link to="/doula#testimonials" className="button">See some Testimonials</Link></li>
            </ul>

          </section>

          <section id="testimonials">
            <h2>What my clients say</h2>

            <ul className="clientList">
              {testimonials.map(({ node }) => {
                return (
                  <article key={node.frontmatter.path}>
                    <h3>{node.frontmatter.title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    <Link to={node.frontmatter.path} className="button">Read more</Link>
                  </article>
                )
              })}
            </ul>

          </section>

          <section id="faqs">
            <h2>FAQs</h2>

            <ul className="faqsList">
              {faqs.map(({ node }) => {
                return (
                  <article key={node.frontmatter.id}>
                    <h3>{node.frontmatter.title}</h3>
                    <div
                      className="faq-content"
                      dangerouslySetInnerHTML={{ __html: node.html }}
                    />
                  </article>
                )
              })}
            </ul>

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

    doulaServices: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {frontmatter: {type: {eq: "services"}}}
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