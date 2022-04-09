import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/hero/Hero";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AddLocation from "./components/add-location/AddLocation";
import { useState } from "react";
import DetailPage from "./components/detail-page/DetailPage";
function App() {
  const history = useHistory()
  const [locations, setLocation] = useState([]);
  const [value, setValue] = useState({ id: "1", name: "clean", location: "munich", sort:"" });
  const handleChange = (e) => setValue({ ...value, [e.target.name]: e.target.value })
  const handleSubmit = () => {
    console.log("submit is working..." );
    const randomId = Math.floor((Math.random() * 200) + 1)
    let newLocation = { ...value, id:randomId }
    setValue(newLocation) // just to generate a bew random key for it
    const updatedLocationArray = [...locations, value];
    setLocation(updatedLocationArray);
    history.goBack()
  };
  const handleClick = () => {
    console.log("kabeer is working...");
  };

  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/">
            <Hero locations={locations}/>
        </Route>
        <Route path="/addlocation">
            <AddLocation handleClick={handleClick} handleSubmit={handleSubmit} formData={value} handleChange={handleChange}/>
          </Route>
          <Route path="/detailpage/:id">
            <DetailPage />
        </Route>
      </Switch>
    </div>
  </Router>)
}



export default App;
