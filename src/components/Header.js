import React from 'react'

import Footer from './Footer'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div className="inner">
          <h1><strong>I'm Sandra.</strong><br />
          Mother. Birth Doula. <br />
          Early Childhood & <br />
          Special Needs Teacher.<br />
          Friend. Partner. Sister. Daughter.</h1>
        </div>
        <Footer />
      </header>
    )
  }
}

export default Header
