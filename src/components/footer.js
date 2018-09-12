import React from 'react'
import Link from 'gatsby-link'
import github from '../pics/github.svg'
const Footer = () => (
    <div style={{
        postion: 'absolute',
        bottom: '0px'
    }}>
        <h4>© Zachary Banducci</h4>
        <div className="links">
            <a href="https://github.com/zchbndcc9">Github</a>
        </div>
    </div>
)

export default Footer