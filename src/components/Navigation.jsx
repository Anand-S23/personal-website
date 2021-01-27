import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";

function Navigation(props) {
  return (
    <div className="navigation">
      <Navbar variant="dark" bg="dark" expand="lg">
        <div class="container">
          <Navbar.Brand className="nav-part">
            <Link className="navbar-brand" to="/">
              Anand Singh
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto nav-part">
              <NavItem
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </NavItem>
              <NavItem
                class={`nav-item  ${
                  props.location.pathname === "/projects" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
              </NavItem>
              <NavItem
                class={`nav-item  ${
                  props.location.pathname === "/contact-me" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/contact-me">
                  Contact Me
                </Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default withRouter(Navigation);
