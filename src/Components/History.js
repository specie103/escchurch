import React, {useState} from "react";
import {
    Container,
    Row,
    Col,
    Button,
    Modal,
    Image
} from "react-bootstrap";
import family from '../images/happyc.jpg'

const History = () => {
    const [showModal, setShowModal] = useState(false);

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleReadMore = () => {
        setShowModal(true);
    };

    return (
        <Container fluid className="p-3">
            <Row>
                <Col md={7}
                    className="d-flex align-items-center">
                    <div className="text-center text-md-start w-100">
                        <h1 className="mb-4 hone bluec">a family of ONE!</h1>
                        <p>
                        The mighty ship of the Cherubim & Seraphim Church Movement Surulere Ayo Ni O set sail in January 1971 and berthed in Kilometre 4, Apapa/Oshodi Expressway, Sanya, Surulere Lagos for close to twenty years. Pilgrims, real ones, know that it was never smooth, discouragements did not make them relent, with full apologies to John Bunyan, they laboured night and day to be true pilgrims.
                        </p>
                        <div className="centered-container mb-2">
                            <Button variant="primary" onClick={handleReadMore}
                                className="mx-auto">
                                Read More
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col md={5}>
                    <div className="text-center text-md-end">
                        <Image src={family} alt="Image" rounded fluid/>
                    </div>
                </Col>
            </Row>

            <Modal show={showModal}
                onHide={handleModalClose}
                size="lg">
                <Modal.Header >
                    <Modal.Title className="text-center bluec">a family of ONE!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                    The mighty ship of the Cherubim & Seraphim Church Movement Surulere Ayo Ni O set sail in January 1971 and berthed in Kilometre 4, Apapa/Oshodi Expressway, Sanya, Surulere Lagos for close to twenty years. Pilgrims, real ones, know that it was never smooth, discouragements did not make them relent, with full apologies to John Bunyan, they laboured night and day to be true pilgrims.
The Captain of the Ship is Jesus Christ while Late Prophet Gabriel Olubunmi Fakeye and his team of capable men and women managed the sails. However, for Prophet Fakeye and his co-labourers, something was missing. More non-Yoruba speakers were finding their ways into the Church to partake of the heavenly blessings and grace given freely by Jesus Christ. It was time to think out of the box. This led to the birth of “The English Service Chapel” in 1992 to cater for the non-Yoruba speaking members of the growing fold of God. <br></br><br></br>

From this huge Ship, that berthed, the Main Church had come forth, the Children Ministry also emerged, all vibrant replicas of Christ’s commission that disciples be made of all Nations. However, the Evangelical efforts of the Church spoke one language -Yoruba after all, the Church was founded by a Yoruba man and the Liturgy and Worship were all inscribed in Yoruba language. It was true that the predominantly Yoruba Service was being translated into English, the Late Prophet Fakeye and the Elders in Council felt that the likes of Pastor Jeje Philips, a vibrant non-Yoruba in the fold be given the opportunity to build a place of worship totally dedicated to worship in English Language to give a sense of belonging to non-Yorubas and provide a worship platform for those who feel more convenient worshipping in the English language. The Chapel was also meant to be a new window through which outsiders can see the Church clearly. <br></br><br></br>

The English Service Chapel started its journey from the little space at the extreme right of the block housing the Church’s Clinic, the space now being used as the Office of the Bands Coordinating Ministry. There the pilgrims started out before eventually docking on the other side of the canal. It was a journey worth its efforts. Originally referred to as the Holy Ghost Chapel, until mid-2016, the Chapel, is now known as “Our Safe Haven”.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary"
                        onClick={handleModalClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default History;
