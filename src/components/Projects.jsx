import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import instaclone from "../assests/img/instaclone.png";
import cellular from "../assests/img/cellular.png";
import chess from "../assests/img/chess.png";
import maze from "../assests/img/maze.png";
import tasks from "../assests/img/tasks.png";
import server from "../assests/img/term-server.png";

function Projects() {
  return (
    <div className="content-space">
      <Container>
        <h2 className="header"> Projects </h2>
        <div className="project-cards">
          <Row>
            <Col className="project">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={instaclone} />
                <Card.Body>
                  <Card.Title>InstaClone</Card.Title>
                  <Card.Text>
                      Clone of the popular social media app Instagram, where users can post, 
                      like and comment on posts, and follow other users. 
                  </Card.Text>
                  <a href="https://github.com/Anand-S23/Instagram-Clone">
                  <Button variant="dark">Github</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="project">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={maze} />
                <Card.Body>
                  <Card.Title>Maze</Card.Title>
                  <Card.Text>
                    A program that generates random mazes
                    using depth first search alogrithm.
                  </Card.Text>
                  <a href="https://github.com/Anand-S23/Maze">
                  <Button variant="dark">Github</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="project">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={chess} />
                <Card.Body>
                  <Card.Title>Chess</Card.Title>
                  <Card.Text>
                    A program that allows people to play chess locally. It
                    allows users to undo moves and stops them from making illegal ones.
                  </Card.Text>
                  <a href="https://github.com/Anand-S23/Chess">
                  <Button variant="dark">Github</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="project">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={cellular} />
                <Card.Body>
                  <Card.Title>Cellular Automata</Card.Title>
                  <Card.Text>
                    A program that allows user to mess around with the 
                    game of life and see it action.
                  </Card.Text>
                  <a href="https://github.com/Anand-S23/Cellular-Automata">
                  <Button variant="dark">Github</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="project">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={server} />
                <Card.Body>
                  <Card.Title>HTTP Server</Card.Title>
                  <Card.Text>
                    Simple HTTP Server written from scratch in python, 
                    which can be used to make simple websites.
                  </Card.Text>
                  <a href="https://github.com/Anand-S23/HTTP_Server">
                  <Button variant="dark">Github</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col className="project">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={tasks} />
                <Card.Body>
                  <Card.Title>Tasks</Card.Title>
                  <Card.Text>
                    A website that allows users to keep track of thier tasks.
                  </Card.Text>
                  <a href="https://github.com/Anand-S23/Tasks">
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

export default Projects;
