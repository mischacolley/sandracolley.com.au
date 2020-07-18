import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <ul className="icons">
                        <li><a href="tel:+61401969190"><span className="label-phone">+61 401 969 190</span></a></li>
                        <li><a href="mailto:me@sandracolley.com.au" ><span className="label">me@sandracolley.com.au</span></a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
