function Input({ formData, handleChange }) {
  return (
    <div>
      <form class="bg-cindigo shadow-md rounded">
        <div class="mb-4 bg-cindigo">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 bg-cindigo placeholder-white text-white leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div class="mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 bg-cindigo placeholder-white text-white leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
          />
        </div>
        <div class="mb-4">
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 bg-cindigo placeholder-white text-white leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="sort"
            placeholder="Sort(comma seperated)"
            value={formData.sort}
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default Input;
