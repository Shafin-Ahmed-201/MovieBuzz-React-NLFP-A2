import { useLoaderData, useNavigate } from "react-router";

const MovieDetailsModal = () => {
  const movie = useLoaderData();
  const navigate = useNavigate();

  const closeModal = () => {
    navigate("/movies");
  };

  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" max-h-[80vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-gray-900 shadow-2xl"
      >
        <div className="flex justify-end p-3">
        <button
          onClick={closeModal}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-xl text-red-600 hover:bg-black"
        >
          ✕
        </button>
        </div>

        <div className="h-72 w-full bg-gray-900 md:h-96 flex justify-center">
          <img
            src={movie.image.original}
            alt={movie.name}
            className="h-96 w-100 object-cover"
          />
        </div>

        <div className="p-6 md:p-8">
          <h2 className="text-3xl text-gray-300 font-bold md:text-4xl">
            {movie.name}
          </h2>

          <div className="mt-4 flex flex-wrap gap-4">
            <p className="rounded-lg bg-yellow-500/10 px-3 py-2 text-yellow-400">
              ⭐ Rating: {movie.rating.average}
            </p>

            <p className="rounded-lg bg-blue-500/10 px-3 py-2 text-blue-400">
              📅 Release: {movie.premiered}
            </p>
          </div>

          <div className="mt-6">
            <h3 className="mb-3 text-lg font-semibold text-purple-400">
              Genre
            </h3>

            <div className="flex flex-wrap gap-2">
              {movie.genres.map((genre) => (
                <p
                  key={genre}
                  className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-300"
                >
                  {genre}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="mb-3 text-lg font-semibold text-purple-400">
              Overview
            </h3>

            <div
              className="leading-7 text-gray-400"
              dangerouslySetInnerHTML={{
                __html: movie.summary,
              }}
            />
          </div>

          <button
            onClick={closeModal}
            className="mt-8 w-full rounded-lg bg-gray-800 px-5 py-3 font-semibold hover:bg-gray-700 text-red-600 text-xl"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
