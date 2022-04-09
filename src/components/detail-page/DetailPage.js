import { useHistory } from "react-router-dom";

function DetailPage() {
  const history = useHistory();
  const handleClick = () => history.push('/');
  return (
    <div>
      <div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex"
          onClick={handleClick}>
          Back
        </button>
      </div>
      I am detail Page
    </div>
  );
}

export default DetailPage;
