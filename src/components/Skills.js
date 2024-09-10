import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import pythonimg from "../assets/img/python-img.png"
import cppimg from "../assets/img/cpp-img.png"
import sqlimg from "../assets/img/sql-img.png"
import jsimg from "../assets/img/js-img.png"
import htmlimg from "../assets/img/html-img.png"
import cssimg from "../assets/img/css-img.png"
import azureimg from "../assets/img/azure-img.png"
import gcpimg from "../assets/img/gcp-img.png"
import awsimg from "../assets/img/aws-img.png"
import reactimg from "../assets/img/react-img.png"
import nodeimg from "../assets/img/node-img.png"
import tailwindimg from "../assets/img/tailwind-img.png"
import matlabimg from "../assets/img/matlab-img.png"
import labviewimg from "../assets/img/labview-img.png"
import gitimg from "../assets/img/git-img.png"
import dockerimg from "../assets/img/docker-img.png"
import devopsimg from "../assets/img/devops-img.png"


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>My Tech Stack</h2>
                        <p>Passionate about technology, I am constantly working to enhance my skill set and incorporate the latest advancements into my tech stack.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={pythonimg} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={cppimg} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={sqlimg} alt="Image" />
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={jsimg} alt="Image" />
                                <h5>JavaScript</h5> 
                            </div>
                            <div className="item">
                                <img src={htmlimg} alt="Image" />
                                <h5>HTML</h5> 
                            </div>
                            <div className="item">
                                <img src={cssimg} alt="Image" />
                                <h5>CSS</h5> 
                            </div>
                            <div className="item">
                                <img src={azureimg} alt="Image" />
                                <h5>Azure</h5> 
                            </div>
                            <div className="item">
                                <img src={gcpimg} alt="Image" />
                                <h5>GCP</h5> 
                            </div>
                            <div className="item">
                                <img src={awsimg} alt="Image" />
                                <h5>AWS</h5> 
                            </div>
                            <div className="item">
                                <img src={reactimg} alt="Image" />
                                <h5>React.js</h5> 
                            </div>
                            <div className="item">
                                <img src={nodeimg} alt="Image" />
                                <h5>Node.js</h5> 
                            </div>
                            <div className="item">
                                <img src={tailwindimg} alt="Image" />
                                <h5>Tailwind CSS</h5> 
                            </div>
                            <div className="item">
                                <img src={matlabimg} alt="Image" />
                                <h5>MATLAB</h5> 
                            </div>
                            <div className="item">
                                <img src={labviewimg} alt="Image" />
                                <h5>LabView</h5> 
                            </div>
                            <div className="item">
                                <img src={gitimg} alt="Image" />
                                <h5>Git/GitHub</h5> 
                            </div>
                            <div className="item">
                                <img src={dockerimg} alt="Image" />
                                <h5>Docker</h5> 
                            </div>
                            <div className="item">
                                <img src={devopsimg} alt="Image" />
                                <h5>Devops</h5> 
                            </div>
                            

                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
