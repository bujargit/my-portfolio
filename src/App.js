import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import bgImg from "./assets/img/app-bg.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import BounceLoader from "react-spinners/BounceLoader";
// import { red } from "@mui/material/colors";
// import classes from "./"

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#800080",
    },
    typography: {
      fontFamily: "Quicksand",
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700,
    },
  },
});

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <div className="loader__wrapper">
          <BounceLoader className="loader__icon" size={30} color={"#800080"} loading={loading} />
        </div>
      ) : (
        <Router>
          <Navbar theme={theme} />
          <div
            className="contentBg"
            style={{ backgroundImage: `url(${bgImg})` }}
          >
            <Container>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/blog">
                  <Blog />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
              </Switch>
            </Container>
          </div>
        </Router>
      )}
    </ThemeProvider>
  );
}

export default App;
