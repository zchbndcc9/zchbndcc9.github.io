import React from 'react'
import { Card } from 'antd';

const WorkExperience = ({company, title, start, end, children}) => (
  <Card title={title}>
    <div>
      <h4>{start + " - " + end}</h4>
    </div>
    <h4><i>{company}</i></h4>
    {children}
  </Card>
)

export default WorkExperience