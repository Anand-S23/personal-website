import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Projects() {
    return(
      <div className="content">
        <Container>
          <h2 className="header"> Projects </h2>
          <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                  <Button variant="Dark">Go somewhere</Button>
                </Card.Body>
                </Card>
        </Container>
      </div>
    );
};

export default Projects;