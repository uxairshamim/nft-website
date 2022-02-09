import { Link } from "react-router-dom";

import "../styles/Navbar.css";

import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function Navigation() {
  return (
    <div className="nav-main-box">
      <Navbar expand="lg">
        <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Link to="/">Roadmap</Link>
              <Link to="about">About</Link>
              <Link to="contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigation;
