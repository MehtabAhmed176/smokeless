function SaveButton({handleSubmit,handleClick}) {
  return (
    <div>
      <button class="text-pink hover:bg-dblue h-12 bg-white font-extrabold w-full rounded-full py-1 p-2.5 uppercase " onClick={handleSubmit}>
        Save
      </button>
    </div>
  );
}

export default SaveButton;
