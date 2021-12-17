import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { Fade } from "@mui/material";
import Typography from "@mui/material/Typography";

const Home = () => {
  
  return (
    <div className="main-text-box">
      <div className="slogan-wrapper">
        <Typography variant="h3" color="primary" gutterBottom>
          <Typewriter
            onInit={(typeWriter) => {
              typeWriter
                .typeString("This is a portfolio with React")
                .pauseFor(1000)
                .start();
            }}
          />
        </Typography>
        <Fade in timeout={{ enter: 10000 }}>
          <Link to="/blog" className="link-to-blog">
            Go to job list
          </Link>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
