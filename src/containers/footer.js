import React from "react"
import { github, linkedIn }from "../assets/logos"

import LinkIcon from "../components/link-icon"
import { Row, Col } from "antd";

const footer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "2em",
  marginBottom: "2em",
  bottom: "0"
}

const Footer = () => (
  <div style={ footer }>
    <h4>Contact Me</h4>
    <Row gutter={20}>
      <Col span={12}>
        <LinkIcon name="Github" link="https://github.com/zchbndcc9" icon={github}/>
      </Col>
      <Col span={12}>
        <LinkIcon name="LinkedIn" link="https://www.linkedin.com/in/zachary-banducci-10b402ab/" icon={linkedIn} />
      </Col>
    </Row>
    <h4>© Zachary Banducci 2019</h4>
  </div>
);

export default Footer
