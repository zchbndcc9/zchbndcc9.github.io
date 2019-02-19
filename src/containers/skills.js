import React from 'react'
import Section from '../components/section'
import { Col } from 'antd'
import Fade from 'react-reveal/Fade'
import './skills.css'

const Skills = () => (
  <Section>
    <Fade top>
      <Col span={24}>
        <h1>Skills <span role="img">🛠</span></h1>
      </Col>
      <Col>
        <div className="skill">
          <h2>Detail oriented</h2>
        </div>
      </Col>
      <Col>
        <div className="skill">
          <h2>Adaptable</h2>
        </div>
      </Col>
      <Col>
        <div className="skill">
        
        </div>
      </Col>
      <Col>
        <div className="skill">
          <h2>Hello</h2>
        </div>
      </Col>
    </Fade>
  </Section>
)

export default Skills