import React from 'react'
import { Row, Col } from 'antd';

const IconList = ({children, style}) => {
  if(!Array.isArray(children)) children = [children]

  return (
    <Row type="flex" justify="space-around" gutter={9}>
      {children.map(child => <Col span={12}>{child}</Col>)}
    </Row>
  )
}

export default IconList