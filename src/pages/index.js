import React from 'react'

import headerImg from '../pics/header.jpg'
import node from '../pics/node-dot-js.svg'
import react from '../pics/react.svg'
import css3 from '../pics/css3.svg'
import cplusplus from '../pics/C++-595b40b75ba036ed117d5b19.svg'
import javascript from '../pics/javascript.svg'
import html5 from '../pics/html5.svg'

const headerImage = {
  height: '90vh',
  display: 'flex',
  background: `url(${headerImg}) center bottom`,
  backgroundSize: 'cover',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
}

const caption = {
  display: 'flex',
  transform: 'scale(1.2)',
  flexFlow: 'column',
  alignItems: 'center'
}

const mainContent = {
  margin: 'auto',
  padding: '4em 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  alignSelf: 'center',
  maxWidth: '50em',
}

const section = {
  margin: '0 auto',
  padding: '0 2em',
  width: '50%',
  textAlign: 'center',
  '@media (max-width: 770px)': {
    width: '100%'
  }
}

const container = {
  alignSelf: 'center',
  display: 'flex',
  marginBottom: '2em',
  '@media (max-width: 770px)': {
    flexDirection: 'column',
    width: '80%'
  }
}

const languageContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center'
}

const language = {
  width: '25%',
  margin: '4%',
  transition: '.2s',
  position: 'relative'
}

const IndexPage = () => (
  <div>
    <div style={headerImage}>
      <div style={caption}>
        <h1>Zachary Banducci</h1>
        <h3>Aspiring fullstack developer</h3>
      </div>
    </div>
    <div style={mainContent}>
      <div css={container}>
        <section css={section}>
          <h2>About Me</h2>
          <p>My name is Zach Banducci and my hometown is in Bakersfield, CA. I am a fourth year computer
            science major at SMU aiming to become a fullstack develper.
          </p>
        </section>
        <section css={section}>
          <h2>Languages and Frameworks</h2>
          <div style={languageContainer}>
            <img style={language} src={node} alt="Node.js"/>
            <img style={language} src={javascript} alt="Javascript"/>
            <img style={language} src={react} alt="React"/>
            <img style={language} src={css3} alt="CSS 3"/>
            <img style={language} src={html5} alt="HTML 5"/>
            <img style={language} src={cplusplus} alt="C++"/>
          </div>
        </section>
      </div>
    </div>
  </div>
)

export default IndexPage
