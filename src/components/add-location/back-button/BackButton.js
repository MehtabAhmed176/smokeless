import { useHistory } from "react-router-dom";
import arrowLeft from "./../../../images/arrow_left@3x.png";
function BackButton() {
  const history = useHistory();
  const handleClick = () => history.goBack();
  return (
    <div>
      <div
        class="rounded-full flex items-center justify-center bg-white mb-5 h-12 w-12"
        onClick={handleClick}>
        <img src={arrowLeft} class="max-w-full flex" alt="..." />
      </div>
    </div>
  );
}

export default BackButton;
