import React from 'react'
import LayoutComp from './Layout';
import img1 from '../../assets/osun 15.webp'
const Contact = () => {
  return (
    <div style={{img1}}>
      <div className='bg-success green'><h1 style={{color:'white',paddingTop:'87px',textAlign:'center'}}>Contact Us</h1></div>
      <div>
      <h1 style={{fontFamily:'lato',color:'green',paddingLeft:'20px',paddingTop:'10px',paddingBottom:'10px'}}>If You Have Any Question Please<br></br> dont Hesitate To Contact Us</h1>
      <LayoutComp/></div>
    </div>
  )
}

export default Contact;