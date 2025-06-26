
import { Col, Container, Row } from 'react-bootstrap';
import img1 from '../../assets/map.jpg'

function Gridcomp() {
  return (
    <Container fluid>
        
      <Row className='d-flex align-items-center rw'>
        <Col><h5 style={{paddingBottom:'20px',paddingTop:'10px'}}>Step into a journey of discovery with Tour Nigeria, where every path leads to authentic experiences and untold stories.</h5>
        <h5 style={{paddingBottom:'20px',paddingTop:'10px'}}>From ancient kingdoms and timeless traditions to golden beaches, captivating waterfalls, and colorful cultural festivals — we bring the true spirit of Nigeria to life.</h5>
        <h5 style={{paddingBottom:'20px',paddingTop:'10px'}}>Wander through diverse landscapes, encounter extraordinary wildlife, and witness the grandeur of our highlands and plateaus. This is more than travel — it's a deep connection to the heart and soul of Nigeria.</h5>
        </Col>
        <Col><img className='text-center pin'  src={img1} alt="" /></Col>
      </Row>
      
    </Container>
  );
}

export default Gridcomp;