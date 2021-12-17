import React from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className="jumbotron py-5">
      <div className="container">
        <h1 className={classes.title}>Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>

        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <Link class="btn btn-primary btn-lg" to="/portfolio" role="button">
            Learn more
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Home;
