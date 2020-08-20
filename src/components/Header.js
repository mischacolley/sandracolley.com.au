import React from 'react'

import Footer from './Footer'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
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
