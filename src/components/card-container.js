import React from 'react'
import { Card } from 'antd';

const CardContainer = ({children}) => {
  return(
    <Card.Grid>
      {children}
    </Card.Grid>
  )
}

export default CardContainer