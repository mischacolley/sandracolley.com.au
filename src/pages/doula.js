import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import get from 'lodash/get'

import { Link, graphql } from 'gatsby'

import doula_deck from '../assets/images/doula_deck.jpg'
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

          <section id="about">

            {doulaAbout.map(({ node }) => {
              return (
                <div dangerouslySetInnerHTML={{ __html: node.html }} />
              )
            })}

            <img src={doula_deck} className="image" alt="Labouring on Deck" />
  
          </section>

          <section id="services">

            {doulaServices.map(({ node }) => {
              return (
                <div dangerouslySetInnerHTML={{ __html: node.html }} />
              )
            })}

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

          <section id="contact">
            <h2>I'd love to hear from you</h2>
            <div className="row">
              <div className="8u 12u$(small)">
                {/* <form method="post" action="#">
                  <div className="row uniform 50%">
                    <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                    <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                    <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                  </div>
                </form>
                <ul className="actions">
                  <li><input type="submit" value="Send Message" /></li>
                </ul> */}
              </div>
              <div className="4u 12u$(small)">
                <ul className="labeled-icons">
                  {/* <li>
                    <h3 className="icon fa-home"><span className="label">Address</span></h3>
                    Ocean Shores,
                    NSW, 2483,
                    Australia
                  </li> */}
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