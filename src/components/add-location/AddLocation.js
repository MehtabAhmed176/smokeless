import BackButton from "./back-button/BackButton";
import Input from "./input/Input";
import SaveButton from "./save-button/SaveButton";

function AddLocation() {
    return (<div>
        <BackButton/>
        <Input />
        <SaveButton/>
    </div> );
}

export default AddLocation;