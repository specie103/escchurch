import React from 'react';
import {Container} from 'react-bootstrap';
import LocationMap from '../Components/LocationMap';
function Contact() {
    return (
        <Container fluid className='py-5'>
            <div className='hone bluec'>
                <h1>Locate US</h1>
                <p className='text-center mt-2'>Find us using the map. Click the direction icon to follow the route to our location.</p>
            </div>
          <LocationMap />
        </Container>
    )
}

export default Contact
