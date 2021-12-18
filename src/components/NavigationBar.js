import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./NavigationBar.module.css";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div className={classes.navbar}>      
      <Navbar variant="light" expand="lg">
        <Container>
          <Link className="navbar-brand" to="/">Bujar Hyseni</Link>
          <Navbar.Toggle/>
          <Navbar.Collapse className="justify-content-end">
            <Nav className="me-auto">
              <NavLink
                className="nav-item nav-link"
                exact
                activeClassName={classes.active}
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="nav-item nav-link"
                activeClassName={classes.active}
                to="/portfolio"
              >
                Portfolio
              </NavLink>
              <NavLink
                className="nav-item nav-link"
                activeClassName={classes.active}
                to="/contact"
              >
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
