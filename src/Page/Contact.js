import React from 'react';
import {Container} from 'react-bootstrap';
import LocationMap from '../Components/LocationMap';
import ContactUs from '../Components/Contacts';
import Footer from '../Components/Footer'
function Contact() {
    return (
        <Container fluid className='m-0 p-0'>
            <div className='hone bluec'>
                <h1>Locate US</h1>
                <p className='text-center mt-2'>Find us using the map. Click the direction icon to follow the route to our location.</p>
            </div>
          <LocationMap />
          <ContactUs />
          <Footer />
        </Container>
    )
}

export default Contact
