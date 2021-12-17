import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={classes.navbar}>
      <nav className="navbar navbar-expand-lg">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="container collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <Link class="navbar-brand" to="/">
            Navbar
          </Link>
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link" exact activeClassName={classes.active} to="/">
              Home
            </NavLink>
            <NavLink className="nav-item nav-link" activeClassName={classes.active} to="/portfolio">
              Portfolio
            </NavLink>
            <NavLink className="nav-item nav-link" activeClassName={classes.active} to="/contact">
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
