const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 py-15 md:flex-row">
      
          <div className="text-lg font-bold">
            <p className="text-red-500">
              🎬 Movie Buzz
            </p>
          </div>
          <p className="text-sm text-gray-400">
            © 2026 MovieBuzz. All rights reserved.
          </p>
          
          <div className="flex gap-5">
            <a href="#"
              className="text-gray-400 hover:text-white"
            >
              Youtube
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
