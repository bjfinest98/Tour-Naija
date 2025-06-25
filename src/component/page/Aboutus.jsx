import React from 'react'
import Accordcomp from './Accordion';
import img1 from '../../assets/imgy.jpg'
const Aboutus = () => {
  return (
    <div className='about container-fluid ' style={{backgroundColor:'white',marginTop:'14vh'}}>
      <div className='bg-success green'><h1 style={{color:'white',paddingTop:'60px',textAlign:'center'}}>About Us</h1></div>
      <div style={{display:'flex',alignItems:'center', justifyContent:'space-between'}}>
        <Accordcomp />
        <div style={{marginTop:'50px'}}>
          <img style={{width:'500px'}} src={img1} alt="" />
        </div>
          
      </div>
       <div style={{paddingBottom:'30px',paddingTop:'10px'}}>
     <h6>Tour Nigeria</h6>  is more than just a travel guide — it's your gateway to discovering the soul of Nigeria.
Our mission is to showcase the beauty, culture, and spirit of Nigeria through unforgettable experiences. From the iconic Olumo Rock and Obudu Mountain Resort to the vibrant streets of Lagos and the sacred shrines of Ife, we invite you to explore the wonders that define our nation.

We believe tourism is not just about visiting places — it’s about <h6>connecting with people, experiencing culture, and uncovering stories.</h6> Every destination we feature has its own heartbeat, and we’re here to help you feel it.

Whether you're seeking adventure, culture, relaxation, or heritage —<h6> Tour Nigeria</h6> is your trusted companion in creating lasting memories.

Come explore, experience, and fall in love with Nigeria — one journey at a time.
</div>
    </div>
  )
}

export default Aboutus;