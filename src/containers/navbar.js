import React from 'react'
import Link from 'gatsby-link'
import { Menu, Row, Col } from 'antd'
import './navbar.css'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: 'home'
    }
  }

  render() {
    return(
      <Row id="navbar" type="flex" justify="end">
        <Col>
          <Menu id="menu" mode="horizontal" selectedKeys={[this.state.current]}>
            <Menu.Item key="home">
              <Link to="/home">Home</Link>
            </Menu.Item>
            <Menu.Item key="blog">
              <Link to="/blog">Blog</Link>
            </Menu.Item>
            <Menu.Item key="contactMe">
              <Link to="/contact-me">Contact</Link>
            </Menu.Item>
          </Menu>  
        </Col>
      </Row>
    )
  }
}

export default Navbar