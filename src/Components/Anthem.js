import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import Mp3Player from './MP3';

function Anthem() {
    const stanza1 = 
`Who would true valour see,
Let him come hither;
One here will constant be,
Come wind, come weather;
There’s no discouragement 
Shall make him once relent
His first avowed intent
To be a pilgrim.`;
    const stanza2 = 
`Who so beset him round
With dismal stories
Do but themselves confound;
His strength the more is.
No lion can him fright;
He’ll with a giant fight,
But he will have the right`;
    const stanza3 = 
`No goblin nor foul fiend
Can daunt his spirit;
He knows he at the end
Shall life inherit.
Then, fancies fly away;
He’ll not fear what men say;
He’ll labour night and day
To be a pilgrim.`;


    return (
        <Container fluid className='blueb my-5 p-3 text-white'>
            <h1 className='py-2'>Chapel Anthem</h1>
            <Row >
                <Col xs={12}
                    md={3} className='m-auto'>
                    <Mp3Player/>
                </Col>
                <Col xs={12}
                    md={3}
                    style={{whiteSpace: 'pre-wrap'}} className='p-4'>
                    <h2 className='text-start ps-3'>Stanza 1</h2>
                    <div className='px-3'>
                        {stanza1} </div>
                </Col>
                <Col xs={12}
                    md={3}
                    style={{whiteSpace: 'pre-wrap'}}  className='p-4'>
                    <h2 className='text-start ps-3'>Stanza 2</h2>
                    <div className='px-3'>
                        {stanza2} </div>
                </Col>
                <Col xs={12}
                    md={3}
                    style={{whiteSpace: 'pre-wrap'}}  className='p-4'>
                    <h2 className='text-start ps-3'>Stanza 3</h2>
                    <div className='px-3'>
                        {stanza3} 
                    </div>

                </Col>
            </Row>
        </Container>
    )
}

export default Anthem
