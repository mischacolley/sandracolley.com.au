import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

import get from 'lodash/get'

import { Link, graphql } from 'gatsby'

import doula_deck from '../assets/images/doula_deck.jpg'

class Doula extends React.Component {
  render() {

    const pageTitle = "Doula.Sandra - Birthworker for your pregnancy, birth & postpartum journey"
    const pageDescription = "As a birth doula I am your personal, non medical birth support servicing all areas in the Byron shire as well as Lennox Head, Lismore, Murwillumbah, Ballina, Tweed Heads & the Gold Coast."

    const testimonials = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout>
        <Helmet>
          <title>{pageTitle}</title>
          <meta property="og:title" content={pageTitle} />
          <meta name="description" content={pageDescription} />
          <meta property="og:description" content={pageDescription} />
          {/* <meta property="og:image" content={ogImg} /> */}
        </Helmet>

        <div id="main">

          <section id="about">

            <h1>Doula.Sandra</h1>

            <p className="lead">I am a loving, emapathic and passionate birth doula.</p>

            <p>I have mastered the art of following my intuition to put my knowledge into practice so you can get the best possible support in your birth journey.</p> 

            <p><a href="#testimonials">My clients describe me as</a> the calm in the storm, being both nurturing and grounding while staying focused on what lies ahead. I have a great sense of consistency, clarity and organisation.</p>

            <p>You, your family and your birth experience are unique and it’s my practice to support your individual choices in a loving and respectful way. It is vital that you feel safe, loved and nurtured as you embark on the journey to birth your baby/s. I am here to support you and advocate for your needs with all my capacities.</p>

            <p>I live with my beautiful family near Byron Bay in the Northern Rivers region of NSW, Australia. Bundjalung and Yugambeh country. I service all areas in the Byron shire as well as Lennox Head, Lismore, Muhrwullumbah, Ballina, Tweed Heads and the Gold Coast.</p>

            <img src={doula_deck} className="image" alt="Labouring on Deck" />
  
          </section>

          <section id="services">

            <h2>What I offer</h2>

            <p>As a birth doula I am your personal, non medical birth support.</p>

            <p>I offer individualised educational, physical and emotional support during your pregnancy, birth and postnatal period.</p>

            <p>Some days this might be a chat and a laugh or cry and on another it might be practical or physical support. Some things you may choose to be part of your individual birth support include:</p>

            <ul>
              <li>Support of  your knowledge on how to safely birth your baby (i.e. personal birth prep. for you and your team)</li>
              <li>Unbiased support in making informed decisions through pregnancy, birth and early parenthood</li>
              <li>Clear picture of the choices you make and creating a unique Birth Plan</li>
              <li>Emotional support (overcoming fear, anxiety and embracing joy)</li>
              <li>Physical support (acupressure, movement, positioning for an optimal birth)</li>
              <li>Passing on my professional knowledge as a birth keeper as well as unlimited access to my birth library</li>
              <li>Alternative/natural pain relief methods</li>
              <li>Support in creating the perfect birthing environment, catered to your needs</li>
              <li>Nurishment (wholesome home cooked meals)</li>
              <li>Commitment to you and your birth</li>
              <li>Advocacy</li>
            </ul>

            <p>I'm prepared to stand up for you to support you in your choice and advocate for you. Ultimately support you in creating the birth you and your baby need for a bright future.</p>

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

            <h3>Why do I need a Doula?</h3>

            <p><a href="https://www.ncbi.nlm.nih.gov/m/pubmed/23076901/?fbclid=IwAR23D9YAVziONYEudiQR2LKvfZ4ZaCCk5P_FhxDM7JpZ7qazctxw1YsiHg8" target="_blank" rel="noopener noreferrer">Studies show</a> that in 95% of births doulas lead to a shorter labour, more spontaneous vaginal birth (lower chances of induction), less cesareans and instrumental births, fewer pain medication and epidural, less babies with a low 5min. Apgar score and overall more satisfaction with the birth experience.</p>

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
    allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {tag: {eq: "doula"}, type: {eq: "testimonial"}}}) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`