import BackButton from "./back-button/BackButton";
import Input from "./input/Input";
import SaveButton from "./save-button/SaveButton";

function AddLocation({ handleSubmit, formData, handleChange }) {
  return (
    <div className="container mx-auto bg-cindigo sm:max-w-5xl sm:mx-60 lg:mx-96">
      <div className="p-5">
        <BackButton />
        <div className="flex flex-col h-screen">
          <div>
            <Input formData={formData} handleChange={handleChange} />
          </div>
          <div className="mt-350 sm:mt-1 md:bg-cindigo md:mt-1 lg:mt-1">
            <SaveButton handleSubmit={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddLocation;
