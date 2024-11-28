import axios from "axios";
import {  getTopRatedMovie } from "../redux/movieSlice";
import { options, TopRatedMovie } from "../utils/constant";
import { useDispatch } from "react-redux";


const useTopRatedMovie= async ()=>{
    const dispatch =useDispatch()
    try {
      const res=await axios.get(TopRatedMovie,options);
      dispatch(getTopRatedMovie(res.data.results))
    } catch (error) {
      console.log(error)
    }
  }
  export default useTopRatedMovie;