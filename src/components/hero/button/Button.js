import { useHistory } from "react-router-dom";
function Button() {
  const history = useHistory();
  const handleClick = () => {
    history.push("/addlocation");
  };
  return (
    <div>
      <button
        class="bg-cblue hover:bg-dblue h-12 text-white font-extrabold w-full rounded-full py-1 p-2.5 uppercase"
        onClick={handleClick}>
        Add Location
      </button>
    </div>
  );
}

export default Button;
