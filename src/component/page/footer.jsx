import React from 'react'
import img1 from '../../assets/image-18.png'
import { Link } from 'react-router-dom';
const Footercomp = () => {
  return (
    <div>
        <img style={{width:'1440px',paddingTop:'50px'}} src={img1} alt="" />
        <div>
            <div style={{listStyleType:'none',display:'flex',justifyContent:'space-evenly',paddingTop:'20px',textAlign:'center'}}>
                <div c>
                 <h4>Tour nigeria</h4>
            <ul style={{listStyleType:'none',color:'black'}}>
                <li><Link style={{textDecoration:'none',color:'black'}} to='/Home'> Home</Link></li>
                <li><Link  style={{textDecoration:'none',color:'black'}} to='/aboutus'> About Us</Link></li>
                <li><Link style={{textDecoration:'none',color:'black'}} to='/Contact'> Contact Us</Link></li>
                <li><Link style={{textDecoration:'none',color:'black'}} to='/Service'> Our service</Link></li>
            </ul>   
                </div>
                <div>
                    <h4>Explore Nigeria</h4>
            <ul style={{listStyleType:'none',color:'black'}}>
                <li>Cultural Destinations</li>
                <li>Nature & Wildlife</li>
                <li>Beaches & Waterfalls</li>
                <li>Historical Sites</li>
            </ul>
                </div>
                <div>
                    <ul style={{listStyleType:'none',color:'black'}}>
                <h4>Contact Information</h4>
                <li>Address: Lagos, Nigeria</li>
                <li>Phone: +234 812 130 7658</li>
                <li><link rel="stylesheet" href=""/>Email: alaoopeyemi740@gmail</li>
            </ul>
                </div>
           
            
            </div>
        </div> <div>
                <h6 className='text-center mb-0 my-auto p-3 bg-success' style={{color:'white', }}> &copy; 2025 by:Bamigbola abdulmalik opeyemi</h6>
            </div>
    </div>
  )
}

export default Footercomp;