import React from 'react'
import Carosel from './slides';
import Cardcomps from './cards';

const Services = () => {
  return (
    <div>
<div className='bg-success green'><h1 style={{color:'white',paddingTop:'107px',textAlign:'center'}}>Explore Now</h1></div>
      <Carosel/>
      <Cardcomps/>
      
    </div>
  )
}

export default Services;