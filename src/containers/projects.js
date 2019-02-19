import React from 'react'
import Section from '../components/section';
import Card from '../components/card '

import { Row, Col } from 'antd'

import { 
  hapi, 
  postgres, 
  angular, 
  react,
  mysql, 
  node, 
  cpp,
  html,
  css,
  phoenix,
  elixir,
  gatsby
} from '../assets/logos'

const Projects = () => (
  <Section>
    <div>
          <h2>School Projects <span role="img" aria-label="#school">🏫</span></h2>
          <Row gutter={20}>
            <Col md={12}>
              <Card title="Stack Overflow Search Engine" languages={[cpp]}>
                <section>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor felis massa, vel commodo felis maximus in. Proin non eleifend felis. Proin posuere varius lacus, eget gravida libero. Mauris dignissim sagittis ullamcorper. Aliquam erat volutpat. Suspendisse in ante ac eros dictum ullamcorper sit amet sed lorem. Donec volutpat ullamcorper risus nec feugiat. Phasellus at placerat risus.</p>
                </section>
              </Card>
            </Col>
            <Col md={12}>
                <Card title="Honeyscape (Backend)" languages={[node, hapi, mysql]}>
                  <section>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor felis massa, vel commodo felis maximus in. Proin non eleifend felis. Proin posuere varius lacus, eget gravida libero. Mauris dignissim sagittis ullamcorper. Aliquam erat volutpat. Suspendisse in ante ac eros dictum ullamcorper sit amet sed lorem. Donec volutpat ullamcorper risus nec feugiat. Phasellus at placerat risus.</p>
                  </section>
                </Card>  
            </Col>
            <Col md={12}>
              <Card title="Fam.ly (Frontend)" languages={[angular, html, css]}>
                <section>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor felis massa, vel commodo felis maximus in. Proin non eleifend felis. Proin posuere varius lacus, eget gravida libero. Mauris dignissim sagittis ullamcorper. Aliquam erat volutpat. Suspendisse in ante ac eros dictum ullamcorper sit amet sed lorem. Donec volutpat ullamcorper risus nec feugiat. Phasellus at placerat risus.</p>
                </section>
              </Card>
            </Col>
            <Col md={12}>
              <Card title="Spotify Playlist Curator" languages={[phoenix, elixir, react]}>
                <section>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor felis massa, vel commodo felis maximus in. Proin non eleifend felis. Proin posuere varius lacus, eget gravida libero. Mauris dignissim sagittis ullamcorper. Aliquam erat volutpat. Suspendisse in ante ac eros dictum ullamcorper sit amet sed lorem. Donec volutpat ullamcorper risus nec feugiat. Phasellus at placerat risus.</p>
                </section>
              </Card>
            </Col>
          </Row>
        </div>
          <h2>Personal Projects <span role="img" aria-label="#pen">🖋</span></h2>
          <Row gutter={20}>
            <Col md={12}>
              <Card title="ChExers" languages={[phoenix, elixir, react]}>
                <ul>
                  <li>Checkers implemented using Elixir</li>
                </ul>
              </Card>
            </Col>
            <Col md={12}>
              <Card title="Personal Website" languages={[html, gatsby]} ></Card>
            </Col>
          </Row>
  </Section>
)

export default Projects