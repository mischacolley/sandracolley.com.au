import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="tel:+61401969190" className="icon fa-phone"><span className="label-phone">+61401969190</span></a></li>
                        <li><a href="#contact" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                        <li><a href="https://www.instagram.com/doula.sandra/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                    </ul>
                    {/* <ul className="copyright">
                        <li>&copy; Gatsby Starter Strata</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                    </ul> */}
                </div>
            </div>
        )
    }
}

export default Footer
