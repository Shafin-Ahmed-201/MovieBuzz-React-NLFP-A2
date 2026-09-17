import { Link } from "react-router";

const Header = () => {
  return (
    
      <nav className="border-b border-gray-800 sticky top-0 z-50 bg-gray-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between py-2">
         
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <span className="text-3xl">🎬</span>
            <p className="text-red-500">
              Movie Buzz
            </p>
          </Link>
          
          <div className="hidden items-center gap-8 md:flex">
            <Link to="/" className="text-gray-300 transition hover:text-white">
              Home
            </Link>
            <Link
              to="/movies"
              className="text-gray-300 transition hover:text-white"
            >
              Movies
            </Link>
          </div>
         
          <Link
            to="/movies"
            className="rounded-lg bg-red-600 px-5 py-2.5 font-semibold transition hover:bg-red-700"
          >
            Explore Movies
          </Link>
        </div>
      </nav>
   
  );
};

export default Header;
