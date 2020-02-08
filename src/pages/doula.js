import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

// import Img from "gatsby-image"

import { Link, graphql } from 'gatsby'

class Doula extends React.Component {
  render() {

    const siteTitle = "Doula"
    const siteDescription = "Doula Description"

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
              <li>
                <article>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </article>
                <article>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </article>
                <article>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </article>
              </li>
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