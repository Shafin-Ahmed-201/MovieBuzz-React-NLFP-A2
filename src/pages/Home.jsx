import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <section
  className="flex min-h-[78vh] items-center justify-center bg-[linear-gradient(to_right,rgba(0,0,0,0.85),rgba(0,0,0,0.5)),url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center px-6 text-center text-white"
>
  <div className="max-w-3xl">
    <p className="mb-4 text-lg font-bold  text-red-500">
      WELCOME TO MOVIE BUZZ
    </p>

    <h1 className="mb-6 text-5xl font-bold sm:text-6xl">
      Discover Your
      <span className="block text-red-500">Next Favorite Movie</span>
    </h1>

    <p className="mb-8 text-lg text-gray-300">
      Explore amazing movies from around the world. Discover new stories,
      find your favorite films, and start your next movie adventure today.
    </p>

    <Link
      to="/movies"
      className="rounded-lg bg-red-600 px-8 py-4 font-bold hover:bg-red-700"
    >
      Explore Now →
    </Link>
  </div>
</section>
    </div>
  );
};

export default Home;
