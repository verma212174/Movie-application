import React from "react";
import { Tmdb_api } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getId, setOpen } from "../redux/movieSlice";
function MovieCard({ movieId, poster }) {
  const dispatch = useDispatch();
  if (!poster) return null;

  const handelOpen = () => {
    dispatch(getId(movieId));
    dispatch(setOpen(true));
  };

  return (
    <div className="w-64 px-6 " onClick={handelOpen} >
      <img src={`${Tmdb_api}/${poster}`} alt="popular movie" className="rounded-lg" />
   
    </div>
  );
}

export default MovieCard;
