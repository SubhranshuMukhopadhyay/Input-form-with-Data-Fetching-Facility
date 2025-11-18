import React from 'react'
import {Link} from 'react-router'
import '../Data/NotFound.css'

const NotFound = () => {
  return (
    <div id='NF-body'>
      <h1 id='NF-header'>Page Not Found</h1>
      <div><Link to='/' id='NF-link'>Back to Home</Link></div>
    </div>
  )
}

export default NotFound