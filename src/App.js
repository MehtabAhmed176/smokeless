import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/hero/Hero";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddLocation from "./components/add-location/AddLocation";

function App() {
  return (
    <div className="App">
      Hello Kabeer
      <Router>
      <div>
        <Switch>
          <Route path="/addlocation">
            <AddLocation />
          </Route>
          <Route path="/details">
            <AddLocation />
          </Route>
          <Route path="/">
            <Hero />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
