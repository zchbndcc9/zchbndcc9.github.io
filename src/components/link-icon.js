import React from 'react'

const linkIcon = {
  width: "3em"
}

const LinkIcon = ({ link, icon, name, style = {} }) => (
  <a href={link}>
    <img src={icon} alt={name} style={{...linkIcon, ...style}} />
  </a>
)

export default LinkIcon