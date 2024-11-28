import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function MovieContainer() {
  const movie = useSelector((store) => store.movie);

  return (
    <div className="bg-black">
      <div className="-mt-10 relative z-10">
        <MovieList title={"Popular Movies"} movies={movie.popularMovie} />
        <MovieList title={"TopRated Movies"} movies={movie.topRatedMovie} />
        <MovieList title={"NowPlaying Movies"} movies={movie.nowPlayingMovie} />
        <MovieList title={"Upcoming Movies"} movies={movie.upcomingMovie} />
      </div>
    </div>
  );
}

export default MovieContainer;
