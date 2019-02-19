import React from 'react'
import 'antd/dist/antd.css'
import './index.css'

import { Row, Col } from 'antd';

import { 
  smu,
  veryable, 
  postgres, 
  react,
  node, 
  cpp,
} from '../assets/logos'


import Fade from 'react-reveal/fade'
import { Layout, Header, AboutMe, Skills, Projects } from '../containers'
import Card from '../components/card';

const content = {
  maxWidth: "70%",
  marginTop: "10em",
  marginLeft: "auto",
  marginRight: "auto"
}

const IndexPage = () => (
  <Layout>
    <Header />
      <div style={content}>
        <AboutMe />
        <Skills />
          <div>
          <h2>Work Experience <span role="img" aria-label="#shirt">👔</span></h2>
          <Row gutter={20}>
            <Col md={12}>
              <Card title="Web Engineer Intern" company="Veryable, Inc" link="https://veryableops.com" img={veryable} languages={[node, postgres, react]}>
                <section>
                   <p>Over the summer of 2018, I had the oportunity to work wth
                   a startup in Dallas called Veryable. I worked as a web
                   engineer intern, working with the Veryable API to implement
                   new features and provide </p>
                </section>
              </Card>
            </Col>
            <Col md={12}>
              <Card title="Data Structures Teaching Assistant" company="SMU" link="https://smu.edu" img={smu} languages={[cpp]}>
                <section>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor felis massa, vel commodo felis maximus in. Proin non eleifend felis. Proin posuere varius lacus, eget gravida libero. Mauris dignissim sagittis ullamcorper. Aliquam erat volutpat. Suspendisse in ante ac eros dictum ullamcorper sit amet sed lorem. Donec volutpat ullamcorper risus nec feugiat. Phasellus at placerat risus.</p>
                </section>
              </Card>
            </Col>
          </Row>
        </div>
      <Projects />
    </div> 
  </Layout>
)

export default IndexPage
