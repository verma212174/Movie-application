import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ title, movies = [] }) {
  return (
    <div className="px-8">
      <h1 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl text-gray-400 p-4 ">
        {title}
      </h1>
      <div className="flex overflow-x-auto cursor-pointer no-scrollbar m-4">
        <div className="flex items-center">
          {Array.isArray(movies) && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.id}
                movieId={movie.id}
                poster={movie.poster_path}
              />
            ))
          ) : (
            <p className="text-white">No movies available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
