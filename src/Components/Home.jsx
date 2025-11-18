import React from 'react'
import '../Data/Home.css'
import {Link} from 'react-router'

const Home = () => {
  return (
    <div className='home-body'>
      <h1 id='home-h1'>Production Form</h1>
      <h2 id='home-h2'>Choose the particular form, want to fill</h2>
      <div className='link-div'>
        <span><Link to='/rproductionform'>R Production Form</Link></span>
        <span><Link to='/sproductionform'>S Production Form</Link></span>
      </div>
    </div>
  )
}

export default Home
