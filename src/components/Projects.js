import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import expImg1 from "../assets/img/swe.png";
import expImg2 from "../assets/img/si.png";
import expImg3 from "../assets/img/data.png";
import projImg1 from "../assets/img/datavi.png";
import projImg2 from "../assets/img/chatbot.png";
import projImg3 from "../assets/img/langchain.png";
import projImg4 from "../assets/img/weather.png";
import projImg5 from "../assets/img/pacman.png";
import projImg6 from "../assets/img/seniordesign.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Software Engineer Intern",
      description: "Phillips Edison & Company",
      imgUrl: expImg1,
    },
    {
      title: "Supplemental Instructor",
      description: "University of Cincinnati Learning Commons",
      imgUrl: expImg2,
    },
    {
      title: "Data Research Intern",
      description: "Future Wellness Group",
      imgUrl: expImg3,
    },
  ];

  const projectsList = [
    {
      title: "84.51° Data Visualization",
      description: "An interactive data visualization wesite for Kroger customer deomographics",
      imgUrl: projImg1, // Add corresponding image
    },
    {
      title: "CampusQuery – NLP Based Chatbot on GCP",
      description: "NLP based chatbot using Google Dialogflow",
      imgUrl: projImg2, // Add corresponding image
    },
    {
      title: "Langchain and RAG",
      description: "Learning Langchain and RAG model",
      imgUrl: projImg3, // Add corresponding image
    },
    {
      title: "Weather Insights with PySpark",
      description: "Weather analysis and prediction using data across 50 years",
      imgUrl: projImg4, // Add corresponding image
    },
    {
      title: "Pac-Man Simulation AI Projects",
      description: "Optimizing search algoriths for Pac-Man's pathfinding in complex mazes",
      imgUrl: projImg5, // Add corresponding image
    },
    {
      title: "Senior Design",
      description: "Coming Soon...",
      imgUrl: projImg6, // Add corresponding image
    },
  ];
  

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Experiences</h2>
                <p>From hands-on industry experience to academic achievements and personal projects, my journey is a testament to my passion for innovation and growth. Explore how my work, studies, and personal interests shape my multifaceted approach to problem-solving, innovation, and creativity.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Work Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projectsList.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
