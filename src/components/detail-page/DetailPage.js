import { useHistory, useLocation } from "react-router-dom";
import { useEffect } from "react";
import arrowLeft from "./../../images/arrow_left@3x.png";
function DetailPage() {
  const history = useHistory();
  const singleLocation = useLocation();

  const handleClick = () => history.push("/");
  useEffect(() => {
    console.log("location object", singleLocation);
  }, [singleLocation]);

  return (
    <div className="container p-5 mx-auto bg-cindigo h-screen sm:max-w-5xl sm:mx-60 lg:mx-96">
      <div>
        <div
          class="rounded-full flex items-center justify-center bg-white mb-5 h-12 w-12"
          onClick={handleClick}>
          <img src={arrowLeft} class="max-w-full flex" alt="..." />
        </div>
        <div className="flex flex-col"></div>
        <p class="text-white font-bold text-2xl">{singleLocation.state.name}</p>
        <p class="text-white text-xl">{singleLocation.state.location}</p>
        <ul class="list-disc">
          {singleLocation?.state?.sort?.split(",")?.map((item) => (
            <li className="text-white ml-5">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DetailPage;
