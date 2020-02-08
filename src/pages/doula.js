import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'

// import Img from "gatsby-image"

// import { Link, graphql } from 'gatsby'

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

          <section id="one">

            <h1>Doula</h1>
            
          </section>

        </div>

      </Layout>
    )
  }
}

export default Doula