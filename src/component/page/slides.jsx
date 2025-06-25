import Carousel from 'react-bootstrap/Carousel';

function Carosel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}className='slider'>
        <div className='ca' >
            <h3 >Welcome to Explore Naija <br /> Discover the Beauty of Nigeria!</h3>

        </div>
        
      </Carousel.Item>
      <Carousel.Item interval={500}className="slid">
        
        <div className='ca'>
        <h3>Welcome to the heart of Africa – Nigeria</h3> <p style={{fontSize:'20px'}}>a land of breathtaking landscapes, rich culture, and unforgettable adventures. </p>
        </div>
         
        
      </Carousel.Item>
      <Carousel.Item className="sli">
    <div className='ca'>
     <h3>
        Ready to explore?</h3>
<p style={{fontSize:'20px'}}>Dive into our national parks, soak in our vibrant festivals, taste local delicacies, and meet the people that make Nigeria truly unforgettable</p>
     
    </div>
        
      </Carousel.Item>
    </Carousel>
  );
}

export default Carosel;