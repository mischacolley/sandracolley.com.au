import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'
import { Link } from 'gatsby'

class Header extends React.Component {
  render() {
    return (
      <header id="header" className="header-doula">
        <div className="inner">
          <Link to="/" className="image avatar">
            <img src={avatar} alt="Face of Sandra Colley"/>
          </Link>
          <h1><strong>I'm Doula.Sandra</strong><br />
          As a birthworker I'm your personal,<br />
          non medical birth support</h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
