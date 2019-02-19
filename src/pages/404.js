import React from 'react'
import { Link } from 'gatsby'
import Layout from '../containers/layout'

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>Whoops! Page not found <span role="img" aria-label="#shrug">🤷‍♂️</span></h1>
      <h2>Try navigating back to the <Link exact to="/">home page</Link></h2>
    </div>
  </Layout>
)

export default NotFoundPage
