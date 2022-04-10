import Button from "./button/Button";
import Card from "./card/Card";
import background from "../../images/hero_image@3x.png";
import { useHistory } from "react-router-dom";
function Hero({ locations }) {
  const history = useHistory();
  const handleDetailPage = (item) => {
    console.log("item on click isss", item);
    history.push({
      pathname: `detailpage/${1}/`,
      state: { id: "12e22", name: "kabeer", location: "lahore" },
    });
  };
  const list = locations.map((item) => {
    return (
      <div key={item.id}>
        <Card
          id={item.id}
          name={item.name}
          location={item.location}
          handlePageDetail={() => handleDetailPage(item)}
        />
      </div>
    );
  });
  return (
    <div class="flex flex-col flex-wrap justify-center md:max-w-5xl md:mx-60 lg:mx-96">
     
     
      <div className="relative">
        <div className="bg-no-repeat bg-center h-60 bg-cover" style={{ backgroundImage: `url(${background})` }}>
          <div className="flex justify-center">
          <p class="text-white font-bold text-2xl  pt-25 absolute uppercase w-72 text-center" style={{top:"45%"}}>Build up your icecream Universe</p>
          </div>
      
        </div>
      </div>
     
      <div className="">{list}</div>
      <Button />
    </div>
  );
}

export default Hero;
