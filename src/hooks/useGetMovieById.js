import axios from "axios";
import  { useEffect } from "react";
import { options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getTrailerMovie } from "../redux/movieSlice";

const useGetMovieById = (movieId) =>{
  const dispatch = useDispatch();

  useEffect(() => {
    const getMovieById = async () => {
         console.log(movieId)
      try {
      
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options
        );
         
        const trailers = res?.data?.results?.filter((item) => item.type === "Trailer");
        const trailerToDispatch = trailers.length > 0 ? trailers[0] : null;

       
          dispatch(getTrailerMovie(trailerToDispatch));
       
        console.log("Fetched trailers:", res?.data?.results);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    getMovieById();
  }, []); 

};

export default useGetMovieById;
