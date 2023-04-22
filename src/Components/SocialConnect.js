import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const SocialConnect = () => {

    const handleFacebookClick = () => {
        window.open('https://web.facebook.com/englishservicecsmc?mibextid=ZbWKwL&_rdc=1&_rdr', '_blank');
    };

    const handleTwitterClick = () => {
        window.open('https://www.twitter.com', '_blank');
    };

    const handleInstagramClick = () => {
        window.open('https://www.instagram.com/englishchapel_csmc/', '_blank');
    };

    const handleLinkedinClick = () => {
        window.open('https://www.youtube.com', '_blank');
    };

    return (
        <Container fluid className='bg-light py-3'>
            <div className='hone bluec'>
                <h1>Connect With Us On Social Media</h1>
            </div>
            <div className='connectp mx-auto'>
                <p>we invite you to connect with us on social media. Stay updated with our latest news, 
                    events, and teachings by following our social media profiles. Engage with us through 
                    comments, likes, and shares, and be part of our online community. Join us on social 
                    media to deepen your spiritual journey and stay connected with us.</p>
            </div>
            <section className="social-media-section mx-auto">
                <Container>
                    <Row className="social-media-row">
                        <Col md={3} xs={6} className="social-media-col">
                            <div className="social-media-link" onClick={handleFacebookClick}>
                                <FaFacebook className="social-media-icon" />
                                <p className="social-media-name">Facebook</p>
                            </div>
                        </Col>
                        <Col md={3} xs={6} className="social-media-col">
                            <div className="social-media-link" onClick={handleInstagramClick}>
                                <FaInstagram className="social-media-icon" />
                                <p className="social-media-name">Instagram</p>
                            </div>
                        </Col>
                        <Col md={3} xs={6} className="social-media-col">
                            <div className="social-media-link" onClick={handleTwitterClick}>
                                <FaTwitter className="social-media-icon" />
                                <p className="social-media-name">Twitter</p>
                            </div>
                        </Col>
                        <Col md={3} xs={6} className="social-media-col">
                            <div className="social-media-link" onClick={handleLinkedinClick}>
                                <FaYoutube className="social-media-icon" />
                                <p className="social-media-name">Youtube</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Container>
    );
};

export default SocialConnect;
