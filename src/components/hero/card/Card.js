function Card({ id, name, location, handlePageDetail }) {
  return (
    <div
      className="sm:p-5 my-10 bg-pink rounded-clarge border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      key={id}
      onClick={handlePageDetail}>
      <div className="p-5 ">
        <h6 class="mb-2 text-white  text-xl font-extrabold uppercase">
          {name}
        </h6>
        <p class="mb-3 font-normal text-15 text-white leading-5"> {location}</p>
      </div>
    </div>
  );
}

export default Card;
