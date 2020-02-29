import React from 'react'
import '../assets/scss/main.scss'
import { Location } from '@reach/router'

import Header from './Header'
import HeaderDoula from './headerDoula'

const Layout = ({ children }) => {

  return (
    <>
      <Location>
        {({ location }) => {
          return (location.pathname.split('/')[1] === "doula" ? <HeaderDoula /> : <Header />); 
        }}
      </Location>
      {children}
    </>
  )
}

export default Layout