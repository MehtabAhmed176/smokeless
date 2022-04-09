import { useHistory } from "react-router-dom";
function BackButton() {
  const history = useHistory();
  const handleClick = () => history.goBack();
  return (
    <div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex"
        onClick={handleClick}>
        Back
      </button>
    </div>
  );
}

export default BackButton;
