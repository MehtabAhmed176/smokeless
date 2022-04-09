import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
function DetailPage() {
  const history = useHistory();
  const location = useLocation();
  
  const handleClick = () => history.push("/");
  const [detail, setDetail] = useState({
    id: "",
    name: "",
    location: "",
  });
 useEffect(() => {
  console.log('location object', location)
  }, [location]);

  return (
    <div>
      <div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex"
          onClick={handleClick}>
          Back
        </button>
      </div>
      <div>
        {JSON.stringify(location?.state)}
      </div>
      I am detail Page
    </div>
  );
}

export default DetailPage;
