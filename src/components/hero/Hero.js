import Button from "./button/Button";
import Card from "./card/Card";
import heroImage from "./../../images/hero_image@3x.png"
import { useHistory } from "react-router-dom";
function Hero({ locations }) {
  const history = useHistory()
  const handleDetailPage = (item) => {
    console.log('item on click isss', item)
    history.push({
      pathname: `detailpage/${1}/`,
      state:{id:"12e22",name:"kabeer",location:"lahore"}
    })
  }
  const list = locations.map((item) => {
    return (
      <div key={item.id}>
        <Card id={item.id} name={item.name} location={item.location} handlePageDetail={()=>handleDetailPage(item)}/>
      </div>
    );
  });
  return (
    <div class="flex flex-col flex-wrap justify-center">
      <img src={heroImage} class="max-w-full h-auto"  alt="..." />
      {list}
      <Button />
    </div>
  );
}

export default Hero;
