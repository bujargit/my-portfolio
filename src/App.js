import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portfolios from "./pages/Portfolios";
import NavigationBar from "./components/NavigationBar";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/portfolio" exact component={Portfolios} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default App;
