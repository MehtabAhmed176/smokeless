import { useHistory } from 'react-router-dom';
function Button() {
    const history = useHistory();
    const handleClick = () => {
        history.push('/addlocation')
    }
  return (
    <div>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" onClick={handleClick}>
        Add Location
      </button>
    </div>
  );
}

export default Button;
