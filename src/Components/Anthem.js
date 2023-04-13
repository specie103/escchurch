import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Mp3Player from './MP3';

function Anthem() {
  return (
    <Container fluid className='blueb my-5 p-3 text-white'>
        <h1 className='py-3'>Chapel Anthem</h1>
      <Row>
        <Col xs={12} md={3}>
          <Mp3Player />
        </Col>
        <Col xs={12} md={3}>
          col 2
        </Col>
        <Col xs={12} md={3}>
          Col 3
        </Col>
        <Col xs={12} md={3}>
          Col 4
        </Col>
      </Row>
    </Container>
  )
}

export default Anthem