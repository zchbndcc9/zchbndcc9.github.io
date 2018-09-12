import React from 'react'
import PropTypes from 'prop-types'

import Footer from '../components/footer'
import Navbar from '../components/navbar'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
      <Navbar/>
      {children()}
      <Footer/>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
