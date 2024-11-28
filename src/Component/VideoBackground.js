import React from "react";
import useGetMovieById from "../hooks/useGetMovieById";
import { useSelector } from "react-redux";

function VideoBackground({ movieId, bool }) {
  const trailerMovie = useSelector((store) => store.movie.trailerMovie);

  useGetMovieById(movieId);

  return (
    <div className="w-screen overflow-hidden">
      <iframe
        className={bool ? "w-1/2 h-96" : "w-screen aspect-video"}
        src={`https://www.youtube.com/embed/${trailerMovie?.key}?autoplay=1&mute=1&modestbranding=1&rel=0&disablekb=1&playlist=${trailerMovie?.key}`}
        title="Movie Trailer Player"
        style={{
          border: "none",
        
        }}
        allowFullScreen
        loading="lazy"
        aria-label="YouTube Movie Trailer Player"
      />
    </div>
  );
}

export default VideoBackground;
