import React from 'react'
import { Container } from 'react-bootstrap';
import Slider from '../Components/LeaderSlidder';

function Leaders() {
  return (
   <Container fluid className='py-3 bg-light'>
        <div>
            <h1 className='hone bluec'>Our Leaders</h1>
        </div>
        <Slider />
   </Container>
  )
}

export default Leaders