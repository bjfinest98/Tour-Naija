import Accordion from 'react-bootstrap/Accordion';

function Accordcomp() {
  return (
    <Accordion defaultActiveKey="0" className='accord mt-5'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Tour Niger</Accordion.Header>
        <Accordion.Body>
          The Nigerian Tourism Development Authority started out as Nigerian Tourist Association in 1962 before it was changed to NTDC in 1992 as a Federal Government Corporation under the Ministry of Culture, Tourism, and National Orientation.

The Corporation is responsible for the planning, supervision, development and marketing of tourism in Nigeria. Tourism is a central pillar of economic growth and diversification in any country and the major functions of NTDC among other things include: to encourage people living in Nigeria to take their holiday therein and people from abroad to visit Nigeria and also to encourage the provision and improvement of tourism amenities and facilities in Nigeria.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Nigerian Tourism Development Authority(NTDA)</Accordion.Header>
        <Accordion.Body>
          The TOUR NIGER brand is an ambitious, timely and visionary brand for promoting domestic tourism in Nigeria. The vision of the master brand is to build the premier online destination for authentic Nigerian content, using technology, creativity, arts and culture to push the new national agenda. It will showcase the true spirit of Nigeria and tell the visual story of the most populous black nation in the world.
        </Accordion.Body>
      </Accordion.Item>

    </Accordion>
  );
}

export default Accordcomp;