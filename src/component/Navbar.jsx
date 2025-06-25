import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import img1 from '../assets/logo.png'

function Navbarcomp() {
  return (
    <Navbar expand="lg" className="bg-success" style={{height:'14vh'}} fixed='top'>
      <Container>
        <Navbar.Brand  href="#home" style={{color: 'white'}}><img style={{width:'20%',color:'white',}} src={img1} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" defaultActivekey="/home" className="ms-auto">
            
            <Nav.Link href='/home' ><Link to='/'  style={{color: 'white',textDecoration:'none'}}>Home</Link></Nav.Link>
            <Nav.Link eventKey="link1"><Link to='/Aboutus' style={{color: 'white',textDecoration:'none'}}>About</Link></Nav.Link>
            <Nav.Link eventKey="link2"><Link to='/Contact us' style={{color: 'white',textDecoration:'none'}}>Contact us</Link></Nav.Link>
            <Nav.Link eventKey="link3"><Link to='Our Service' style={{color: 'white',textDecoration:'none'}}>Explore Now</Link></Nav.Link>
             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarcomp;