import React from 'react'
import { Row } from 'antd'
const Section = ({children}) => (
  <Row gutter={2} type="flex" justify="space-around" align="middle" style={{minHeight: "50vh"}}>
    {children}
  </Row>
)

export default Section