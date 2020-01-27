import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import PostLink from "../components/PostLink"

import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', source: full01, thumbnail: thumb01, caption: 'Photo 1', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '2', source: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '3', source: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '4', source: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '5', source: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    { id: '6', source: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

const Homepage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    
const Homepage = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

const siteTitle = "Gatsby Starter - Strata"
const siteDescription = "Site description"

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
                        <li><a href="#" className="button">About me</a></li>
                        <li><a href="#" className="button">doula.sandra</a></li>
                    </ul>
                </section>

                <section >
                    <h2>Latest Posts</h2>

                    {Homepage}
                    
                </section>

                <section id="two">
                    <h2>Latest</h2>

                    <Gallery images={DEFAULT_IMAGES.map(({ id, source, thumbnail, caption, description }) => ({
                        source,
                        thumbnail,
                        caption,
                        description
                    }))} />

                    <ul className="actions">
                        <li><a href="#" className="button">View all</a></li>
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
                                    1234 Somewhere Rd.<br />
                                    Nashville, TN 00000<br />
                                    United States
                                </li>
                                <li>
                                    <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                    +61401969190
                                </li>
                                <li>
                                    <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                    <a href="#">me@sandracolley.com.au</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

            </div>

        </Layout>
    )
}

export default Homepage

export const pageQuery = graphql`
  query {
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
  }
`