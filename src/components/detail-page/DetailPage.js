import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import arrowLeft from "./../../images/arrow_left@3x.png";
function DetailPage() {
  const history = useHistory();
  const location = useLocation();

  const handleClick = () => history.push("/");
  useEffect(() => {
    console.log("location object", location);
  }, [location]);

  return (
    <div className="container p-5 mx-auto bg-cindigo h-screen sm:max-w-5xl sm:mx-60 lg:mx-96">
      <div>
        <div
          class="rounded-full flex items-center justify-center bg-white mb-5 h-12 w-12"
          onClick={handleClick}>
          <img src={arrowLeft} class="max-w-full flex" alt="..." />
        </div>
        <div className="flex flex-col"></div>

        {/* Experiment */}
        <p class="text-white font-bold text-2xl">Name of the ICECREAM MAKER</p>
        <p class="text-white text-xl">Munich</p>
        <ul class="list-disc">
          <li className="text-white ml-5">
           Flavor
          </li>
          <li className="text-white ml-5">
           Flavor
          </li>
          <li className="text-white ml-5">
           Flavor
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DetailPage;
