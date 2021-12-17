import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default App;
