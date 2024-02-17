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
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>John Doe</Card.Title>
                <Card.Text>Developer</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-2 mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Jane Smith</Card.Title>
                <Card.Text>Designer</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-2 mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Alice Johnson</Card.Title>
                <Card.Text>Tester</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-2 mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Bob Williams</Card.Title>
                <Card.Text>Project Manager</Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-2 mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Eve Brown</Card.Title>
                <Card.Text>Marketing</Card.Text>
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
            <Button
              href="https://github.com/smartcraze/Allies"
              target="_blank"
              variant="primary"
              className="mt-3 px-4 py-2"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub Repository
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
