import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../../assets/unamed 6.webp'
import img2 from '../../assets/unamed 7.webp'
import img3 from '../../assets/unnamed 8.webp'
import img4 from '../../assets/unamed 9.webp'
import img5 from '../../assets/unnamed 10.webp'
import img6 from '../../assets/unnamed 1.webp'
import img7 from '../../assets/unnamed 2.webp'
import img8 from '../../assets/unnamed 3.webp'
import img9 from '../../assets/unnamed 4.webp'
import img10 from '../../assets/unnamed 5.webp'
import img11 from '../../assets/unnamed 11.webp'
import img12 from '../../assets/unnamed 12.webp'
import img13 from '../../assets/unnamed 13.webp'
import img14 from '../../assets/unnamed 14.webp'
import img15 from '../../assets/unnamed 15.webp'
import img16 from '../../assets/abuja1.webp'
import img17 from '../../assets/abuja2.webp'
import img18 from '../../assets/abuja3.webp'
import img19 from '../../assets/abuja4.webp'
import img20 from '../../assets/abuja5.webp'
import img21 from '../../assets/abuja6.webp'
import img22 from '../../assets/abuja7.webp'
import img23 from '../../assets/abuja8.webp'
import img24 from '../../assets/abuja9.webp'
import img25 from '../../assets/abuja10.webp'
import img26 from '../../assets/abuja11.webp'
import img27 from '../../assets/abuja12.webp'
import img28 from '../../assets/abuja13.webp'
import img29 from '../../assets/abuja14.webp'
import img30 from '../../assets/abuja15.webp'
import img31 from '../../assets/osun1.webp'
import img32 from '../../assets/osun2.webp'
import img33 from '../../assets/osun3.webp'
import img34 from '../../assets/osun4.webp'
import img35 from '../../assets/osun5.webp'
import img36 from '../../assets/osun6.webp'
import img37 from '../../assets/osun7.webp'
import img38 from '../../assets/osun8.webp'
import img39 from '../../assets/osun9.webp'
import img40 from '../../assets/osun10.webp'
import img41 from '../../assets/osun11.webp'
import img42 from '../../assets/osun12.webp'
import img43 from '../../assets/osun13.webp'
import img44 from '../../assets/osun14.webp'
import img45 from '../../assets/osun 15.webp'
import { Carousel, Col, Row } from 'react-bootstrap';
function Cardcomps() {
  return (
    <div>
      <h1 style={{textAlign:'center',fontFamily:'lato',marginTop:'10px'}}>Places To Visit</h1>
      <h2 style={{fontFamily:'lato',paddingLeft:'10px'}} className='mt-5 ms-5'>LAGOS</h2>
      <Row >
        <Col ><Card className='mx-auto' style={{ width: '18rem',marginTop:'20px' }}>
      {/* <Card.Img variant="top" src={img1} style={{height:'35vh',objectFit:'cover'}}/> */}
      <Carousel>
           {/* <Carosel.Item  className=''> */}
      {/* <Card.Img variant="top" src={img3} style={{height:'35vh',objectFit:'cover'}}/> */}
      <Carousel.Item>
        <img src={img6} style={{height:'35vh',objectFit:'cover'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img7} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img8} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img9} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img10} style={{height:'35vh',objectFit:'cover'}} alt="" />
      </Carousel.Item>
      {/* </Carosel.Item> */}
         </Carousel>
      <Card.Body>
        <Card.Title>Fun & Nature</Card.Title>
        <Card.Text>
         🏖️ Beach Life Buzz — Enjoy Tarkwa Bay, Elegushi Beach, and vibrant nightlife.
        </Card.Text>
        <Button variant="primary"><a href='https://maps.app.goo.gl/qopMNzvj285uybcX6'style={{color:'white',textDecoration:'none'}}>Location</a></Button>
      </Card.Body>
    </Card></Col>
        <Col><Card className='mx-auto' style={{ width: '18rem',marginTop:'20px' }}>
      {/* <Card.Img variant="top" src={img2} style={{height:'35vh',objectFit:'cover'}}/> */}
      <Carousel>
           {/* <Carosel.Item  className=''> */}
      {/* <Card.Img variant="top" src={img3} style={{height:'35vh',objectFit:'cover'}}/> */}
      <Carousel.Item>
        <img src={img1} style={{height:'35vh',objectFit:'cover'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img4} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img5} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      {/* </Carosel.Item> */}
         </Carousel>
      <Card.Body>
        <Card.Title>History</Card.Title>
        <Card.Text>
          🏛️ Colonial Footprints — Explore the National Museum, Freedom Park, and Tinubu Square.
        </Card.Text>
        <Button variant="primary"><a href='https://maps.app.goo.gl/uL2DzpvshgBF68bh8'style={{color:'white',textDecoration:'none'}}>Location</a></Button>
      </Card.Body>
    </Card></Col>

        <Col>
        <Card className='mx-auto' style={{ width: '18rem',marginTop:'20px' }}>
         <Carousel>
           {/* <Carosel.Item  className=''> */}
      {/* <Card.Img variant="top" src={img3} style={{height:'35vh',objectFit:'cover'}}/> */}
      <Carousel.Item>
        <img src={img11} style={{height:'35vh',objectFit:'cover'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img12} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img13} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img14} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img15} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      {/* </Carosel.Item> */}
         </Carousel>
       
      
      <Card.Body>
        <Card.Title>Culture</Card.Title>
        <Card.Text>
          🎭 Afrobeat & Art — Home of Fela Kuti, African Shrine, Nike Art Gallery, and creative festivals.

        </Card.Text>
        <Button variant="primary"><a href='https://maps.app.goo.gl/BaqGxugNbPb5ijMr9'style={{color:'white',textDecoration:'none'}}>Location</a></Button>
      </Card.Body>
    </Card></Col>
      </Row>
      <h2 style={{fontFamily:'lato',paddingLeft:'10px'}} className='mt-5 ms-5'>ABUJA</h2>
      <Row >
        <Col ><Card className='mx-auto' style={{ width: '18rem',marginTop:'20px' }}>
      {/* <Card.Img variant="top" src={img1} style={{height:'35vh',objectFit:'cover'}}/> */}
      <Carousel>
           {/* <Carosel.Item  className=''> */}
      {/* <Card.Img variant="top" src={img3} style={{height:'35vh',objectFit:'cover'}}/> */}
      <Carousel.Item>
        <img src={img16} style={{height:'35vh',objectFit:'cover'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img17} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img18} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img19} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img20} style={{height:'35vh',objectFit:'cover'}} alt="" />
      </Carousel.Item>
      {/* </Carosel.Item> */}
         </Carousel>
      <Card.Body>
        <Card.Title>History</Card.Title>
        <Card.Text>
          🏛️ Unity Symbolism — Visit National Mosque, National Christian Centre, and monuments that reflect Nigeria's unity.
        </Card.Text>
        <Button variant="primary"><a href='https://maps.app.goo.gl/xJotxfXKwBnWFTn69'style={{color:'white',textDecoration:'none'}}>Location</a></Button>
      </Card.Body>
    </Card></Col>
        <Col><Card className='mx-auto' style={{ width: '18rem',marginTop:'20px' }}>
      {/* <Card.Img variant="top" src={img2} style={{height:'35vh',objectFit:'cover'}}/> */}
      <Carousel>
           {/* <Carosel.Item  className=''> */}
      {/* <Card.Img variant="top" src={img3} style={{height:'35vh',objectFit:'cover'}}/> */}
      <Carousel.Item>
        <img src={img21} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img22} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img23} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img24} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img25} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      {/* </Carosel.Item> */}
         </Carousel>
      <Card.Body>
        <Card.Title>Fun</Card.Title>
        <Card.Text>
          🚤 Lakefront Leisure — Enjoy boating, picnics, and weekend markets around Jabi Lake and Millennium Park.
        </Card.Text>
        <Button variant="primary"><a href='https://maps.app.goo.gl/3JCoUwSnGL4CoCX97'style={{color:'white',textDecoration:'none'}}>Location</a></Button>
      </Card.Body>
    </Card></Col>

        <Col>
        <Card className='mx-auto' style={{ width: '18rem',marginTop:'20px' }}>
         <Carousel>
           {/* <Carosel.Item  className=''> */}
      {/* <Card.Img variant="top" src={img3} style={{height:'35vh',objectFit:'cover'}}/> */}
      <Carousel.Item>
        <img src={img26} style={{height:'35vh',objectFit:'cover'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img27} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img28} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img29} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img30} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      {/* </Carosel.Item> */}
         </Carousel>
       
      
      <Card.Body>
        <Card.Title>Nature</Card.Title>
        <Card.Text>
          ⛰️ Rock Adventures — Hike Zuma Rock, Aso Rock, and relax at Millennium Park.
        </Card.Text>
        <Button variant="primary"><a href='https://maps.app.goo.gl/LkDW4aP3WDYjX1G59'style={{color:'white',textDecoration:'none'}}>Location</a></Button>
      </Card.Body>
    </Card></Col>
      </Row>
      <h2 style={{fontFamily:'lato',paddingLeft:'10px'}} className='mt-5 ms-5'>OSUN</h2>
      <Row >
        <Col ><Card className='mx-auto' style={{ width: '18rem',marginTop:'20px' }}>
      {/* <Card.Img variant="top" src={img1} style={{height:'35vh',objectFit:'cover'}}/> */}
      <Carousel>
           {/* <Carosel.Item  className=''> */}
      {/* <Card.Img variant="top" src={img3} style={{height:'35vh',objectFit:'cover'}}/> */}
      <Carousel.Item>
        <img src={img31} style={{height:'35vh',objectFit:'cover'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img32} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img33} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img34} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img35} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      {/* </Carosel.Item> */}
         </Carousel>
      <Card.Body>
        <Card.Title>Fun</Card.Title>
        <Card.Text>
          🎉 Grove Festivities — Join the vibrant celebrations and dance performances beneath the forest canopy.
        </Card.Text>
        <Button variant="primary"><a href='https://maps.app.goo.gl/ggPaAncaSqRqZtt17'style={{color:'white',textDecoration:'none'}}>Location</a></Button>
      </Card.Body>
    </Card></Col>
        <Col><Card className='mx-auto' style={{ width: '18rem',marginTop:'20px' }}>
      {/* <Card.Img variant="top" src={img2} style={{height:'35vh',objectFit:'cover'}}/> */}
      <Carousel>
           {/* <Carosel.Item  className=''> */}
      {/* <Card.Img variant="top" src={img3} style={{height:'35vh',objectFit:'cover'}}/> */}
      <Carousel.Item>
        <img src={img36} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img37} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img38} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img39} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img40} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      {/* </Carosel.Item> */}
         </Carousel>
      <Card.Body>
        <Card.Title>Nature</Card.Title>
        <Card.Text>
          🌊 Sacred Waters — Wander along the life‑giving banks of the Osun River in its verdant grove.
        </Card.Text>
        <Button variant="primary"><a href='https://maps.app.goo.gl/sA6Aob2CaGjMH3dJ6'style={{color:'white',textDecoration:'none'}}>Location</a></Button>
      </Card.Body>
    </Card></Col>

        <Col>
        <Card className='mx-auto' style={{ width: '18rem',marginTop:'20px' }}>
         <Carousel>
           {/* <Carosel.Item  className=''> */}
      {/* <Card.Img variant="top" src={img3} style={{height:'35vh',objectFit:'cover'}}/> */}
      <Carousel.Item>
        <img src={img41} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img42} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img43} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img44} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img src={img45} style={{height:'35vh',objectFit:'cover',width:'300px'}} alt="" />
      </Carousel.Item>
      {/* </Carosel.Item> */}
         </Carousel>
       
      
      <Card.Body>
        <Card.Title>History</Card.Title>
        <Card.Text>
          🏯 Spiritual Legacy — Explore the Sacred Osun Grove, palaces of Ile-Ife, and Yoruba ancestral roots.
        </Card.Text>
        <Button variant="primary"><a href='https://maps.app.goo.gl/ELfTqgRu3upUHyo39'style={{color:'white',textDecoration:'none'}}>Location</a></Button>
      </Card.Body>
    </Card></Col>
      </Row>
    </div>
    
  );
}

export default Cardcomps;