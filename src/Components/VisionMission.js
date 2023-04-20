import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

const VisionMission = () => {
  const [showVisionModal, setShowVisionModal] = useState(false);
  const [showMissionModal, setShowMissionModal] = useState(false);

  const handleVisionButtonClick = () => {
    setShowVisionModal(true);
  };

  const handleMissionButtonClick = () => {
    setShowMissionModal(true);
  };

  const handleCloseModal = () => {
    setShowVisionModal(false);
    setShowMissionModal(false);
  };

  return (
    <Container fluid className='p-0 m-0'>
      <div className="p-3 blueb mnv align-content-center">
        <div className=" imnv mx-auto d-block d-md-flex justify-content-between">
          <div className="d-flex my-2">
            <button className="learn-more my-1" onClick={handleVisionButtonClick}>
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Vision</span>
            </button>
          </div>
          <div className="d-flex my-2 mx-auto">
            <button className="learn-more my-1" onClick={handleMissionButtonClick}>
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Mission</span>
            </button>
          </div>
        </div>
      </div>

       {/* Vision Modal */}
       <Modal show={showVisionModal} onHide={handleCloseModal} size="lg">
        <Modal.Header >
          <Modal.Title className='bluec'>Vision</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>To create and sustain a Godly heritage for the people of God through the teaching of the Word, Prayers, Supplications and True Worship</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


      {/* Mission Modal */}
      <Modal show={showMissionModal} onHide={handleCloseModal} size="lg">
        <Modal.Header >
          <Modal.Title className='bluec'>Mission </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Our mission is to Worship and Praise God in the beauty of His Holiness on an all nations platform; with Salvation through Evangelism as our watch word and the preparation of our members as leaders in their chosen fields and finally align Cherubim & Seraphim Church with Global religious best practices in communication, liturgy and worship.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default VisionMission;
