import React from "react";
import { Card, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Footer from "../Footer/Footer";

const AboutPage = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center align-items-center">
          {/* Profile Cards */}
          <div className="col-md-2 mb-4">
            <Card>
              <Card.Img variant="top" src="src\assets\suraj.jpg" />
              <Card.Body>
                <Card.Title>Suraj Vishwakarma</Card.Title>
                <Card.Text>Developer</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-2 mb-4">
            <Card>
              <Card.Img variant="top" src="src\assets\zap.jpg" />
              <Card.Body>
                <Card.Title>Zap</Card.Title>
                <Card.Text>Designer</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-2 mb-4">
            <Card>
              <Card.Img variant="top" src="src\assets\parna.jpg" />
              <Card.Body>
                <Card.Title>Parna Ghosh</Card.Title>
                <Card.Text>Tester</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-2 mb-4">
            <Card>
              <Card.Img variant="top" src="src\assets\sayan.jpg" />
              <Card.Body>
                <Card.Title>Sayan nayek</Card.Title>
                <Card.Text>Research</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-2 mb-4">
            <Card>
              <Card.Img variant="top" src="src\assets\chaitanya.jpg" />
              <Card.Body>
                <Card.Title> P Chaitanya</Card.Title>
                <Card.Text>Research</Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/* Project Details */}
          <div className="col-md-12 mt-5">
            <h2>About the Project</h2>
            <p>
              "Zeal is a groundbreaking initiative designed to revolutionize how
              children learn and develop essential decision-making skills.
              Through our engaging platform, children embark on a captivating
              journey filled with interactive games and immersive videos, each
              carefully crafted to instill resilience and confidence. Our
              mission is to empower young minds, equipping them with the tools
              and knowledge needed to navigate life's complexities with ease and
              poise. At Zeal, we believe that every child deserves the
              opportunity to thrive, and our innovative approach to learning
              ensures that they emerge as confident, capable individuals ready
              to tackle whatever challenges come their way."
            </p>
            <p>
              This project was created to provide an innovative solution for
              [describe project purpose]. We aim to [mention project goals].
            </p>
            <div className="text-center mt-6">
              <Button
              style={{margin:"20px",padding:"10px"}}
                href="https://github.com/smartcraze/Allies"
                target="_blank"
                variant="primary"
                className="px-4 py-1 container bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700"
              >
                <FontAwesomeIcon icon={faGithub} className="mr-2" /> GitHub
                Repository
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
