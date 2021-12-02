import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typewriter from "typewriter-effect";
import { Fade } from "@mui/material";
import Typography from "@mui/material/Typography";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <Container>
      <div className={classes.main__text__box}>
        <Grid container >
          <Grid item xs={12} md={6} lg={8} textAlign="center" mb={4}>
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
          </Grid>
          <Grid item xs={12} md={6} lg={8} textAlign="center">
            <Fade in timeout={{ enter: 10000 }}>
              <Link
                to="/blog"
                className={classes.link__to__blog}                
              >
                Go to job list
              </Link>
            </Fade>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};

export default Home;
