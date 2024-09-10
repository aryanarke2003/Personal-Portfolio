import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import resumePdf from "../assets/img/resume.pdf"; // Make sure to replace this with the correct path to your resume file

export const Contact = () => {

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <div style={{ marginBottom: '20px' }}>
                  <h2>Explore My Full Professional Story</h2>
                  <h4>Learn about my journey, my skills, and my experience. I am always looking for new opportunities to learn and grow.</h4>
                </div>
                <a href={resumePdf} download="Arya_Narke_Resume.pdf">
                  <button className="download-btn">Resume</button>
                </a>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
