import Form from 'react-bootstrap/Form';
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { FaYoutube } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
function LayoutComp() {
  return (
    <div className='d-flex who'>
      <div className='form'>
        <h4 style={{fontFamily:'lato', textAlign:'center',paddingTop:'20px',color:'white'}}>Drop Us a Message</h4>
    <Form className='why'>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label></Form.Label>
        <Form.Control type="email" placeholder="Enter your email address" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword" >
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label></Form.Label>
        <Form.Control type="text" placeholder="Enter your subject" />
      </Form.Group>
      <Form.Group  className="mb-3" controlId="formGroupPassword">
        <Form.Label></Form.Label>
        <Form.Control as='textarea' rows={3} type="text" placeholder="Enter your message" />
      </Form.Group>
    </Form>
    <button style={{marginLeft:'20px',height:'50px',width:'200px',border:'none',marginBottom:'10px',borderRadius:'5px'}} onClick={()=> alert("Booking details confirmation will be sent to your email, Contact: +234 9058120048 to confirm reservation")} type="button">Send Message</button>
    </div>
    <div className='mon' style={{backgroundColor:'none',maxHeight:'100vh',marginLeft:'50px',width:'375px',borderRadius:'10px'}}>
            <h4 style={{textAlign:'center',color:'green'}}>INFORMATION</h4>
            <div style={{marginTop:'20px'}}>
           <a href='https://web.facebook.com/abdulmalik98729/videos' style={{color:'green',textDecoration:'none',fontFamily:'lato'}}> <RiFacebookFill   style={{color:'green',width:'100px',fontSize:'30px',marginTop:''}}/>@naijatour</a>
         </div>
         <div style={{marginTop:'20px'}}>
           <a href='https://web.facebook.com/abdulmalik98729/videos' style={{color:'green',textDecoration:'none',fontFamily:'lato'}}><FaInstagram    style={{color:'green',width:'100px',fontSize:'30px',marginTop:''}}/>@Tournaija23</a>
           </div>
           <div style={{marginTop:'20px'}}>
           <a href='https://web.facebook.com/abdulmalik98729/videos' style={{color:'green',textDecoration:'none'}}><FaWhatsapp    style={{color:'green',width:'100px',fontSize:'30px',marginTop:'',fontFamily:'lato'}}/>Chat on whatApp +234 4223 6690</a>
           </div>
           <div style={{marginTop:'20px'}}>
           <a href='https://web.facebook.com/abdulmalik98729/videos' style={{color:'green',textDecoration:'none'}}><FaTwitter    style={{color:'green',width:'100px',fontSize:'30px',marginTop:''}}/>@discovernaija</a>
           </div>
           <div style={{marginTop:'20px'}}>
           <a href='https://web.facebook.com/abdulmalik98729/videos' style={{color:'green',textDecoration:'none',fontFamily:'lato'}}><TfiEmail    style={{color:'green',width:'100px',fontSize:'30px',marginTop:''}}/>@exploretournaija</a>
           </div>
           <div style={{marginTop:'20px'}}>
           <a href='https://web.facebook.com/abdulmalik98729/videos' style={{color:'green',textDecoration:'none',fontFamily:'lato'}}><FaYoutube    style={{color:'green',width:'100px',fontSize:'30px',marginTop:''}}/>@naijatravelguide</a>
         </div>
         <div style={{marginTop:'20px'}}>
           <a href='https://web.facebook.com/abdulmalik98729/videos' style={{color:'green',textDecoration:'none',fontFamily:'lato'}}><LuPhoneCall    style={{color:'green',width:'100px',fontSize:'30px',marginTop:''}}/>call now +234 8121307658</a>
         </div>
    </div>
    </div>
  );
}

export default LayoutComp;