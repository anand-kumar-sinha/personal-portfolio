import { Container, Row, Col } from "react-bootstrap";
import logo from '../assests/img/logo.png'
import navIcon1 from "../assests/img/nav-icon1.svg";
import navIcon2 from "../assests/img/nav-icon2.svg";
import navIcon3 from "../assests/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6} className="my-2">
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end my-3">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/uchiha-obito/?_l=en_US" target="_blank">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/mrconqureror/" target="_blank">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/babu_.patel_._/" target="_blank">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>© 2022 Hello Engineers, Inc. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
