import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default App;
