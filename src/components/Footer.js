import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-github.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/aryanarke/"><img src={navIcon1} alt="linkedin" /></a>
              <a href="https://github.com/aryanarke2003"><img src={navIcon2} alt="github" /></a>
            </div>
            <p></p>
            <h5>Made by Arya Narke.</h5>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
