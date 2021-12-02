import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./HeaderLinks.module.css";
// import { useAuth } from "../context/AuthContext";

export default function HeaderLinks() {
  return (
    <>
      <ul className={classes.mainmenu}>
        <li>
          <NavLink to="/" exact activeClassName={classes.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/blog" activeClassName={classes.active}>
            Works
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeClassName={classes.active}>
            Login
          </NavLink>
        </li>
      </ul>
    </>
  );
}
