import { Link } from "react-router";

const MovieCard = ({ movie }) => {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900">
      <div className="h-80 w-full bg-gray-800">
        <img
          src={movie.image.original}
          alt={movie.name}
          className="h-full w-full object-cover rounded-t-lg"
        />
      </div>

      <div className="p-5">
        <h2 className="mb-2 text-xl font-bold">{movie.name}</h2>

        <p className="mb-2 text-yellow-400">⭐ {movie.rating.average}</p>

        <div className="flex justify-between">
          <p className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300 w-20 text-center">
            {movie.language}
          </p>
          <p className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300 w-10 text-center">
            {movie.runtime}
          </p>
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Released: {movie.premiered}
        </p>
        <p className=" text-sm text-gray-500">Ended: {movie.ended}</p>
      </div>
      <div className="flex justify-center mb-4">
        <Link to={`/movies/${movie.id}`}>
          <button className="bg-blue-600 py-1 px-15 rounded-2xl text-purple-200 cursor-pointer ">
            See Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
