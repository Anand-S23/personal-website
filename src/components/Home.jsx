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
                <Col lg={8}>
                  <h5 className="header"> About Me </h5>
                  <p className="about-me">
                    I am currently a Computer Science major at Temple University.
                    I am interested in the large array of application of computing, 
                    and as well as the applications of computing and programming in 
                    solving real world problems. I aspire to join current industry
                    professionals in pushing the bounderies of what is possible with 
                    computers. 
                  </p>
                </Col>
                <Col lg={4} className="custom-center">
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
                <div class="text-center">
                  <Button variant="dark" className="resume">
                      <FontAwesome name="download" className="download-icon"></FontAwesome>
                       Download Resume
                  </Button>
                </div>
            </Jumbotron>
          </Container>
          <Current />
      </div>
    );
};

export default Home;