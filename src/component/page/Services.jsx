import React from 'react'
import Carosel from './slides';
import Cardcomps from './cards';

const Services = () => {
  return (
    <div style={{backgroundColor:'white',marginTop:'14vh'}}>
<div className='bg-success green'><h1 style={{color:'white',paddingTop:'60px',textAlign:'center'}}>Explore Now</h1></div>
      <Carosel/>
      <Cardcomps/>
      
    </div>
  )
}

export default Services;