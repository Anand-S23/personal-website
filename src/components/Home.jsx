import React from "react";
import { Projects } from "../components";
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
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </Col>
                <Col xs={4}>
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
          <Projects />
      </div>
    );
};

export default Home;