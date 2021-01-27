import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import pixelate from "../assests/img/pixelate.png";
import a_star from "../assests/img/a_star.png";
import solver from "../assests/img/solver.png";

function Current() {
  return (
    <div className="content">
      <Container>
        <h2 className="header"> Check Out What I am Currently Working On </h2>
        <h5 className="header"> To look at my some of my completed projects click <Link className="link-out-dark" to="/projects">HERE</Link></h5>
        <div className="project-cards">
          <Row>
            <Col className="project">
              <Card style={{ width: "18rem" }}>
                <Card.Img className="project-img" variant="top" src={pixelate} />
                <Card.Body>
                  <Card.Title>Pixelate</Card.Title>
                  <Card.Text>
                    A pixel editor made from scratch with C. 
                  </Card.Text>
                  <a href="https://github.com/Anand-S23/Pixelate">
                    <Button variant="dark">Github</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="project">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={a_star} />
                <Card.Body>
                  <Card.Title>A*</Card.Title>
                  <Card.Text>
                    Implementation of the A* pathfinding algorithm.
                  </Card.Text>
                  <a href="https://github.com/Anand-S23/A-Star">
                    <Button variant="dark">Github</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="project">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={solver} />
                <Card.Body>
                  <Card.Title>Sudoku Solver</Card.Title>
                  <Card.Text>
                    A program that lets user inputs sudokus and solves them.
                  </Card.Text>
                  <a href="https://github.com/Anand-S23/Sudoku-Solver">
                    <Button variant="dark">Github</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Current;
