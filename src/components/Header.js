import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

import { Link } from 'gatsby'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <Link to="/" className="image avatar">
            <img src={avatar} alt="Profile photo of Sandra Colley"/>
          </Link>
          <h1><strong>I'm Sandra.</strong> Mother.<br />
          Doula. Early Childhood Teacher. <br />
          Friend. Partner. Sister.</h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
