import React from 'react'
import {ParallaxProvider} from 'react-scroll-parallax'
import Footer from './footer'

const Layout = ({ children }) => (
  <ParallaxProvider>
    <div style={{position: "relative"}}>
      {children}
      <Footer/>
    </div>
  </ParallaxProvider>
)

export default Layout