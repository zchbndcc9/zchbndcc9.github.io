import React from 'react'
import { Col } from 'antd';
import Section from '../components/section'
import profilePic from '../assets/pics/IMG_0543.jpg'
import { Fade } from 'react-reveal'

const AboutMe = () => (
  <Fade top>
    <Section>
      <Col xl={12} sm={24}>
        <h1>About Me <span role="img" aria-label="#man-computer">👨‍💻</span></h1>
        <p style={{fontSize: "1.4em"}}>
           My name is <strong>Zach Banducci</strong> and my hometown is
           Bakersfield, CA. I am a fourth year computer science major at SMU
           aiming to become a fullstack developer. I have a love for UI/UX and
           my design philosophy is to produce products that are <strong>fun and
           easy to use</strong>. My perferred and most preficient languages are <strong style={{color:
           "#44d62c"}}>Javascript</strong> and <strong style={{color:
           "#7424ea"}}>Elixir</strong>.
        </p>
      </Col>
      <Col xl={8} sm={12} >
        <img src={profilePic} alt="profile" style={{borderRadius: "5%", width: "100%", boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)"}}/>
      </Col>
    </Section>
  </Fade>
)

export default AboutMe