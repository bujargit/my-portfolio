import React from "react";
import { Link } from "react-router-dom";
import classes from "./Home.module.css";
import Typewriter from "typewriter-effect";
import selfImage from '../assets/laptop-work.png';

const Home = () => {
  return (
    <div className="jumbotron bg-none py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <h6>React JS Developer</h6>
            <h1 className={classes.home_title}>I'm Bujar Hyseni</h1>
            <div className={classes.typewrite__holder}>
              <span>I'm a</span>
              <span>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(1000)
                      .typeString("FrontEnd Developer")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("JS Developer")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("UI/UX Designer")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("React JS Developer")
                      .start();
                  }}
                />
              </span>
            </div>

            <Link
              className={`btn btn-primary ${classes.home__button}`}
              to="/portfolio"
              role="button"
            >
              Learn more
            </Link>
          </div>
          <div className="col-lg-6 col-md-12">
              <img className={classes.my__avatar} src={selfImage} alt="selfavatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
