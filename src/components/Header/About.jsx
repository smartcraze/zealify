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
                <Card.Text>
                  Developer
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-2 mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Jane Smith</Card.Title>
                <Card.Text>
                  Designer
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-2 mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Alice Johnson</Card.Title>
                <Card.Text>
                  Tester
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-2 mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Bob Williams</Card.Title>
                <Card.Text>
                  Project Manager
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-2 mb-4">
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/150" />
              <Card.Body>
                <Card.Title>Eve Brown</Card.Title>
                <Card.Text>
                  Marketing
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          {/* Project Details */}
          <div className="col-md-12 mt-5">
            <h2>About the Project</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              This project was created to provide an innovative solution for [describe project purpose]. We aim to [mention project goals].
            </p>
            <Button href="https://github.com/smartcraze/Allies" target="_blank" variant="primary" className="mt-3 px-4 py-2">
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
