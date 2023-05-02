import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from '../images/logo2.png'
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className="position-relative container-fluid p-0 overflow-hidden containerr">
      <hr className="hr-or" />
      <span className="span-or">or</span>
      <hr className="hr-or" />
      <hr className="hr-or" />
      <footer className="nb-footer p-0">
        <Container>
          <Row className="p-1">
            <Col sm={12}>
              <div className="footer-about">
                <div className="p-1 text-white fw-bolder fs-2">
                  <img
                    src={logo}
                    className="img-responsive center-block"
                    alt="logo"
                    width="50"
                    height="50"
                  />
                  <span className="p-2 my-auto" id="osh">Our Safe Haven</span>
                </div>
                <p className="text-center">
                  The English Service Chapel, a.k.a Our Safe Haven. Cherubim & Seraphim Movement Church, Surulere District
                  Headquarters, Ayo Ni O.
                </p>
                <div className="social-media">
                  <ul className="list-inline">
                    <li>
                      <a href="https://www.facebook.com/englishservicecsmc?mibextid=ZbWKwL" title="" target="_blank">
                      <i className='bi bi-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/englishchapel_csmc/" target="_blank" title="">
                      <i className='bi bi-instagram'> </i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                      <i className='bi bi-youtube'></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" title="">
                      <i className='bi bi-twitter'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>

            <Col xs={12} md={2} className="flex-column">
              <div className="footer-info-single">
                <h2 className="title">Site Navigation</h2>
                <ul className="list-unstyled">
                  <li>
                  <Link className="linkss" to="/">
                    Home
                  </Link>
                  </li>
                  <li>
                  <Link className="linkss" to="/About">
                    About
                  </Link>
                  </li>
                  <li>
                  <Link className="linkss" to="/Connect">
                    Connect
                  </Link>
                  </li>
                  <li>
                  <Link className="linkss" to="/Contact">
                    Contact
                  </Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col xs={12} md={3} className="flex-column d-flex ">
              <div className="footer-info-single flex-grow-1">
                <h2 className="title">Connect</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="https://www.facebook.com/englishservicecsmc?mibextid=ZbWKwL" title="Facebook" target="_blank">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/englishchapel_csmc/" title="" target="_blank">
                       Instagram
                    </a>
                  </li>
                  <li              >
                <a href="#" title="">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" title="">
                   Twitter
                </a>
              </li>
            </ul>
          </div>
        </Col>

        <Col xs={12} md={3} className="flex-column d-flex">
          <div className="footer-info-single flex-grow-1">
            <h2 className="title">Contact</h2>
            <ul className="list-unstyled">
              <li>
                <a href="mailto:info@escsurulereayonio.org/" title="">
                <i className="bi bi-envelope-fill"></i> info@escsurulereayonio.org
                </a>
              </li>
              <li>
                <a href="#" title="">
                <i className='bi bi-telephone-fill'></i> 08060755553,   07087476700
                </a>
              </li>
              <li>
                <a href="#" title="">
                <i className='bi bi-geo-alt-fill'></i> 78, Muyiwa Opaleye Street,
                  Off Sanya Street KM. 4
                  Apapa Oshodi Expressway,
                  Sanya Bus-stop, Surulere, Lagos.
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={12} md={3} className="flex-column d-flex">
          <div className="footer-info-single flex-grow-1">
            <h2 className="title">Giving</h2>
            <ul className="list-unstyled">
              <li>
              <p>We appreciate all givers very much because your gifts contribute substantially to the work of God in
                reaching the needy. May God bless you, amen.</p>
              </li>
              <li>
              <p className="p-0 m-0 fs-6"><span className="fw-bold">Account Name: </span> English Service Chapel C&S Movement
                Church</p>
              </li>
              <li className="pt-2">
              <p className="p-0 m-0 fs-6"><span className="fw-bold">Tithes: </span> <span className="ms-1">2015375858</span></p>
              <p className="p-0 m-0 fs-6"><span className="fw-bold"> Offerings: </span> <span className="ms-1">3069645007</span></p>
              <p className="p-0 m-0 fs-6"><span className="fw-bold">Bank Name: </span> <span className="ms-1">First Bank</span></p>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
    <div className="copy-right text-white">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="text-center">
              <p className="mb-0">
                &copy; {new Date().getFullYear()} Our Safe Haven. All Rights Reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </footer>
</div>
);
};

export default Footer;
