import axios from "axios";
import React, { useState } from "react";
import { options, Search_Movie } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMovieDetials } from "../redux/searchSlice";
import { setLoading } from "../redux/userSlice";
import MovieList from "./MovieList";

function SearchMovie() {
  const [searchMovie, setSearchMovie] = useState("");
  const [error, setError] = useState(null);
  const isLoading = useSelector((store) => store.app.isLoading);
  const dispatch = useDispatch();
  const { movieName, searchedMovie } = useSelector(
    (store) => store.searchMovie
  );
  console.log(movieName, searchedMovie);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(null);
    if (!searchMovie.trim()) {
      setError("Please enter a movie name.");
      return;
    }
    dispatch(setLoading(true));
    try {
      const res = await axios.get(`${Search_Movie}${searchMovie}`, options);
      const movies = res.data.results;
      dispatch(setSearchMovieDetials({ searchMovie, movies }));
    } catch (err) {
      console.error(err);
      setError("Failed to fetch movies. Please try again.");
    } finally {
      dispatch(setLoading(false));
    }
    setSearchMovie("");
  };

  return (
    <>
      <div className="flex justify-center pt-[10%] w-[100%]">
        <form className="w-[50%]" onSubmit={submitHandler}>
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0 w-full">
            <input
              placeholder="Search Movies..."
              className="w-full sm:w-auto flex-grow outline-none rounded-md text-lg p-3 border-none bg-gray-900 text-white"
              value={searchMovie}
              onChange={(e) => setSearchMovie(e.target.value)}
            />
            <button
              type="submit"
              className="bg-red-800 text-white font-bold rounded-md px-6 py-3 text-base w-full sm:w-auto "
            >
              {isLoading ? "Loading..." : "Search"}
            </button>
          </div>
        </form>
      </div>
      <div>
        <h1 className="text-4xl text-gray-400 p-4 ">
          Your Searchs: {movieName}
        </h1>
        <MovieList movies={searchedMovie} />
      </div>
    </>
  );
}

export default SearchMovie;
