import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavigationBar.module.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div className={classes.navbar}>
      <Navbar collapseOnSelect variant="light" expand="lg">
        <Container>
          <Link className="navbar-brand" to="/">
            Bujar Hyseni
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <Nav.Link
                className="nav-item nav-link"
                exact="true"                
                to="/"
                as={Link}
                eventKey="0"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className="nav-item nav-link"                
                to="/portfolio"
                as={Link}
                eventKey="1"
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                className="nav-item nav-link"                
                to="/contact"
                as={Link}
                eventKey="2"
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
