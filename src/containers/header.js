import React from 'react'
import './header.css'

import skyline from '../assets/pics/skyline.svg'
import background from '../assets/pics/background.svg'

import { Parallax } from 'react-scroll-parallax'

const Header = () => (
  <div id="header">
    <div id="skyline-container">
      <img src={skyline} id="skyline" alt="skyline-background"/>
      <div id="ground"></div>
    </div>
    <Parallax className="caption-container" offsetYMin="-80%" offsetYMax="200%" slowerScrollRate>
      <h1 style={{ color: "white", textShadow: "0px 5px 20px rgba(0, 0, 0, 0.51)"}}>Zachary Banducci</h1>
      <h2 style={{ color: "#f2f2f2", textShadow: "0px 2px 10px rgba(0, 0, 0, .70"}}>Aspiring full stack developer</h2>
    </Parallax>
    <Parallax className="sunset-container" offsetYMin="-50%" offsetYMax="50%" slowerScrollRate>
      <img src={background} id="sunset" alt="sunset-background"/>
    </Parallax>
  </div>
)

export default Header