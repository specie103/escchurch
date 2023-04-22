import React from 'react'
import {Row, Col, Image, Container} from 'react-bootstrap';
import structure1 from '../images/org2t.png'
import structure2 from '../images/org1.png'
import structure3 from '../images/org3.png'

function ChurchStructure() {
    return (
        <Container fluid className='py-4'>
            <div>
                <h1 className='hone bluec'>Church Stucture</h1>
            </div>
            <Row className='py-2'>
                <Col sm={12}
                    md={12}>
                    <div className="image-column p-3">
                        <Image src={structure1}
                            alt="Example Image"
                            className="image"
                            fluid/>
                    </div>

                </Col>
                <Col sm={12}
                    md={12}>
                    <div className="text-column p-2">
                        <p>
                            The English Chapel congregation like the Main Church is divided into smaller units 
                            (which serve as a form of nuclear family) called Bands to which every member that has been 
                            baptised is placed. These Bands are the Youth & Teens Ministry (Youths), the Bands of 
                            Blessing and Joy (Females), the Bands of Stephen and Love Divine (Males), the Chapel Choir, 
                            the Chapel Wardens and the Daniel Band. These Bands were created for bringing every member 
                            closer – like a family, which serves as the first point of call in the Church.
                        </p>
                    </div>
                </Col>
            </Row>


            <Row className='py-2'>
                <Col sm={12}
                    md={12}>
                    <div className="image-column p-3 d-flex justify-content-center">
                        <div >
                        <Image src={structure2}
                            alt="Example Image"
                            className="image me-5"
                            fluid
                            height="500"
                            width="500"/>
                        </div>
                          <div>
                          <Image src={structure3}
                            alt="Example Image"
                            className="image mx-auto"
                            fluid
                            height="500"
                            width="500"/>
                          </div>
                    </div>
                </Col>
                
                
                <Col sm={12}
                    md={12}>
                    <div className="text-column px-2">
                        <p>
                        Also, the Chapel has an admirable Children Ministry, traditionally made up of the Bands of Emmanuel, Lydia and Samuel. 
                        This very vital organ of the Chapel is led by highly qualified and anointed personnel with gifts of teaching and nurturing. 
                        This Ministry serves as the Sunday school for all children and juveniles in the Chapel. This is a very convenient arrangement 
                        for members who initially found it very difficult to take their children to and from the Main Church Children Ministry because 
                        of the distance. Like other co-shared Institutions in the Church, the Children Ministry of the English Chapel, is under the 
                        main body in. The Children Ministry of the Chapel is a delight of the Church as they excel above equals in competitions that 
                        are held within and outside the Church.


                        </p>
                    </div>
                </Col>

            </Row>

        </Container>
    )
}

export default ChurchStructure
