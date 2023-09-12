import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "../nav.css";
import launchLogo from "../images/Launch_Logo_.jpg"

function MainNav() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        {/* Brand logo with a link to the home page */}
        <Navbar.Brand href="/"><img className="launchLogo" src={launchLogo}></img></Navbar.Brand>
        {/* Hamburger icon for toggling the navbar on smaller screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Links on the left side of the navbar */}
          <Nav className="me-auto text-color">
            {/* Additional links can be added here if needed */}
          </Nav>
          {/* Links on the right side of the navbar */}
          <Nav className="text-color ms-auto">
            <Nav.Link className="nav-links" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="nav-links" href="/trainees">
              Launch Trainees
            </Nav.Link>
            <Nav.Link className="nav-links" href="/trainees">
              Input Ratings
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;
