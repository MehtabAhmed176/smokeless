import BackButton from "./back-button/BackButton";
import Input from "./input/Input";
import SaveButton from "./save-button/SaveButton";

function AddLocation({ handleClick, handleSubmit, formData, handleChange }) {
  return (
    <div className="container mx-auto">
      <BackButton/>
      <Input formData={formData} handleChange={handleChange} />
      <SaveButton handleSubmit={handleSubmit} />
    </div>
  );
}

export default AddLocation;
