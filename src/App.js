import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import bgImg from "./assets/img/app-bg.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff"      
    },
    secondary: {
      main: "#800080"
    },
    typography: {
      fontFamily: 'Quicksand',
      fontWeightLight: 400,
      fontWeightRegular: 500,
      fontWeightMedium: 600,
      fontWeightBold: 700
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar theme={theme}/>
        <div
          className="content-wrapper"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="container">
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
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
