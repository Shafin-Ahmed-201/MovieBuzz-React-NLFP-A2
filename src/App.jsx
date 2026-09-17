import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Layout from "./Layout";
import MovieListing from "./pages/MovieListing";
import MovieDetailsModal from "./pages/MovieDetailsModal";

const moviesPromise = async () => {
  const res = await fetch("https://api.tvmaze.com/shows");
  const data = await res.json();
  return data;
};

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/movies",
        element: <MovieListing moviesPromise={moviesPromise()}></MovieListing>,
      },
       {
        path: "/movies/:id",
        element: <MovieDetailsModal/>,
        loader: async ({ params }) => {
          const res = await fetch(`https://api.tvmaze.com/shows/${params.id}`);
          if (!res.ok) {
        throw new Error("Movie not found");
      }

      return res.json();
        },
      },
    ],
  },
]);
function Router() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default Router;
