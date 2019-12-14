import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './layout.css'

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
                {children}
            <Footer />
        </>
    )
}

if (typeof window !== "undefined") {
    require("smooth-scroll")('a[href*="#"]')
  }

export default Layout;