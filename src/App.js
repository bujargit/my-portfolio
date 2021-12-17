import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import Signup from "./pages/Signup";
import PrivateRoute from "./pages/PrivateRoute";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
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
<<<<<<< HEAD
        <Navbar theme={theme} />
        <div className="contentBg" style={{ backgroundImage: `url(${bgImg})` }}>
          {loading ? (
            <div className="loader__wrapper">
              <BounceLoader
                className="loader__icon"
                size={30}
                color={"#800080"}
                loading={loading}
              />
            </div>
          ) : (
            <Container>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/blog" component={Blog} />
                <AuthProvider>
                  <PrivateRoute path="/dashboard" component={Dashboard} />
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={Signup} />
                </AuthProvider>
              </Switch>
            </Container>
          )}
=======
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
>>>>>>> parent of a979d86 (Works list updated)
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
