import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import { Link } from 'gatsby'

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

            <h1>About me, Sandra Colley</h1>

            <p>I am a loving and passionate mother, birth doula, early childhood and special needs teacher, friend, partner, sister, daughter and involved member of my community.</p>

            <p>I am the mother of two beautiful children and have a background in early childhood and special needs care/education.</p>

            <p>Since becoming a mama and being absolutely fascinated, humbled and empowered by the journey of conception, pregnancy, birth and early parenthood I chose to follow my dream and became a certified birth doula (being in service of the birthing woman).</p>

            <p>I live with my beautiful family near Byron Bay in the Northern Rivers region of NSW, Australia. Bundjalung and Yugambeh country. Here I work raising my children, as a Birth Doula and as a carer of both big and little people in my community.</p>
             
          </section>

          <Link to="/" className="button">Home</Link>

        </div>

      </Layout>
    )
  }
}

export default About