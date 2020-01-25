import React from 'react';
import './header.css';

import skyline from '../assets/pics/skyline.svg';
import background from '../assets/pics/background.svg';

const Header = () => (
  <div id="header">
    <div id="skyline-container">
      <img src={skyline} id="skyline" alt="skyline-background" />
      <div id="ground" />
    </div>
    <h1
      style={{ color: 'white', textShadow: '0px 5px 20px rgba(0, 0, 0, 0.51)' }}
    >
      Zachary Banducci
    </h1>
    <h2
      style={{ color: '#f2f2f2', textShadow: '0px 2px 10px rgba(0, 0, 0, .70' }}
    >
      Aspiring full stack developer
    </h2>
    <img src={background} id="sunset" alt="sunset-background" />
  </div>
);

export default Header;
