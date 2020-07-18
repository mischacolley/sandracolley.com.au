import React from 'react'

// import Footer from './Footer'
import avatar from '../assets/images/avatar_doula.png'
import { Link } from 'gatsby'

class Header extends React.Component {
  render() {
    return (
      <header id="header" className="header-doula">
        <div className="inner">
          <Link to="/doula" className="image avatar">
            <img src={avatar} alt="Face of Sandra Colley"/>
          </Link>
          <h1><strong>I'm Doula.Sandra</strong><br />
          As a birthworker I'm your personal,<br />
          non medical birth support</h1>
        </div>

        <nav className="nav">
          <ul>
            <li><Link to="/doula#about" >About</Link></li>
            <li><Link to="/doula#services" >Services</Link></li>
            <li><Link to="/doula#testimonials" >Testimonials</Link></li>
            <li><Link to="/doula#faqs" >FAQs</Link></li>
            <li><Link to="/doula#contact" >Contact</Link></li>
          </ul>
        </nav>

        {/* <Footer /> */}
      </header>
    )
  }
}

export default Header
