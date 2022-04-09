import Button from "./button/Button";
import Card from "./card/Card";
import { useHistory } from "react-router-dom";
function Hero({ locations }) {
  const history = useHistory()
  const handleDetailPage = (id) => {
    history.push(`detailpage/${id}/`)
  }
  const list = locations.map((item) => {
    return (
      <div key={item.id}>
        <Card id={item.id} name={item.name} location={item.location} handleDetailPage={handleDetailPage}/>
      </div>
    );
  });
  return (
    <div>
      {list}
      <Button />
    </div>
  );
}

export default Hero;
