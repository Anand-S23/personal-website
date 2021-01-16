import React from "react";
import { Current } from "../components";
import { Container, Button, Jumbotron, Row, Col } from "react-bootstrap";
import FontAwesome from "react-fontawesome";

function Home() {
    return(
      <div>
          <Container>
            <Jumbotron className="jumbo bg-dark"> 
              <h1 className="header"> Anand Singh </h1>
              <Row className="jumbo-row">
                <Col xs={8}>
                  <h5 className="header"> About Me </h5>
                  <p className="about-me">
                    I am currently a Computer Science major at Temple University.
                  </p>
                </Col>
                <Col xs={4} className="contact-info">
                  <h5> Contact Info </h5>
                  <p>
                    Email: anandsroopsingh@gmail.com
                  </p>
                  <p>
                    Phone: (610)-850-3013
                  </p>
                  <p>
                    Github: <a className="link-out" href="https://github.com/Anand-S23">https://github.com/Anand-S23</a>
                  </p>
                </Col>
              </Row>
               <Button variant="dark" className="resume">
                   <Row>
                     <Col className="text-center">
                      <FontAwesome name="download" className="download-icon"></FontAwesome>
                       Download Resume
                     </Col>
                   </Row>
               </Button>
            </Jumbotron>
          </Container>
          <Current />
      </div>
    );
};

export default Home;