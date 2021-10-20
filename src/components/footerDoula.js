import React from 'react'

class footerDoula extends React.Component {
  render() {
    return (
      <section id="contact">
        <h2>I'd love to hear from you</h2>
        <div className="row">
          <div className="4u 12u$(small)">
            <ul className="labeled-icons">
              <li>
                <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                <a href="tel:+61401969190">+61 401 969 190</a>
              </li>
              <li>
                <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                <a href="mailto:me@sandracolley.com.au">me@sandracolley.com.au</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default footerDoula
