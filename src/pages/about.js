import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

// import Img from "gatsby-image"

// import { Link, graphql } from 'gatsby'

class About extends React.Component {
  render() {

    const pageTitle = "About Sandra Colley - Mother | Doula | Early Childhood Teacher | Friend | Partner | Sister"
    const pageDescription = "I’m Sandra! I am a mother, doula, early childhood teacher, friend, partner and sister. I live with my beautiful family in the Byron Shire of northern NSW, Australia."

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

          <section id="one">

            <h1>About</h1>
            
          </section>

        </div>

      </Layout>
    )
  }
}

export default About