import React from 'react'
import { Card as ACard, Divider } from 'antd'
import IconSmall from './icon/icon-small';
import IconList from './icon-list';
import LinkIcon from './link-icon';

const Card = ({title, children, languages, company = null, img = null, link= null }) => (
  <ACard title={title} extra={<LinkIcon icon={img} alt={company} link={link} style={{width: "7em"}}/>} style={{margin: "1em 0", borderRadius: "1em"}} bordered={false}>
    <IconList>
      {languages.map(lang => <IconSmall icon={lang}></IconSmall>)}
    </IconList>
    <Divider></Divider>
    {children}
  </ACard>
)

export default Card