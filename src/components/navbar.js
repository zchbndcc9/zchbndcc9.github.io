import React from 'react'
import Link from 'gatsby-link'

import '../layouts/index.css'

const activeColor = '#00ab84'
const Navbar = () => (
  <nav>
    <Link exact to="/" activeStyle= {{color: activeColor}}>Home</Link>
    <Link to="/about-me/" activeStyle={{ color: activeColor}}>About Me</Link>
    <Link to="/resume/" activeStyle={{ color: activeColor}}>Resume</Link>
    <Link to="/blog/" activeStyle={{ color: activeColor }}>Blog</Link>
    <Link to="/contact-me/" activeStyle={{ color: activeColor}}>Contact Me</Link>
  </nav>
)

export default Navbar