import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="tel:+61401969190" className="icon fa-phone"><span className="label-phone">+61 401 969 190</span></a></li>
                        <li><a href="mailto:me@sandracolley.com.au" className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
