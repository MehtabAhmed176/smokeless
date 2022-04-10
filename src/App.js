import "./App.css";
import Hero from "./components/hero/Hero";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import AddLocation from "./components/add-location/AddLocation";
import { useState } from "react";
import DetailPage from "./components/detail-page/DetailPage";
function App() {
  const history = useHistory();
  const [locations, setLocation] = useState([]);
  const [value, setValue] = useState({
    id: "1",
    name: "Ballabeni Icecream Stammhaus",
    location: "munich",
    sort: "vanilla ,chocolate , strawberry",
  });
  const handleChange = (e) =>
    setValue({ ...value, [e.target.name]: e.target.value });
  const handleSubmit = () => {
    const randomId = Math.floor(Math.random() * 200 + 1);
    let newLocation = { ...value, id: randomId };
    setValue(newLocation); // just to generate a bew random key for it
    const updatedLocationArray = [...locations, value];
    setLocation(updatedLocationArray);
    history.goBack();
  };
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Hero locations={locations} />
        </Route>
        <Route path="/addlocation">
          <AddLocation
            handleSubmit={handleSubmit}
            formData={value}
            handleChange={handleChange}
          />
        </Route>
        <Route path="/detailpage/:id">
          <DetailPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
