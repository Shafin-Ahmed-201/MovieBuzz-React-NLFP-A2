import { use, useState } from "react";
import MovieCard from "../components/MovieCard";

const MovieListing = ({ moviesPromise }) => {
  const movies = use(moviesPromise);

  const [search, setSearch] = useState("");

  const filterMovies = movies.filter((movie) => {
    return movie.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <main className="min-h-screen bg-gray-950 px-4 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">Movie Library</h1>

          <p className="mt-3 text-gray-400">
            Search your favorite movies and TV shows
          </p>
        </div>

        <div className="mx-auto mb-10 max-w-3xl">
          <div className="flex items-center rounded-xl border border-gray-700 bg-gray-900 px-4 shadow-lg">
            <span className="mr-3 text-xl">🔍</span>

            <input
              type="text"
              placeholder="Search for a movie..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-4 text-white outline-none placeholder:text-gray-500"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filterMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MovieListing;
