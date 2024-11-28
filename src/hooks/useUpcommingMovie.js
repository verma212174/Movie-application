import axios from "axios";
import {   getUpcomingMovie } from "../redux/movieSlice";
import { options,  UpcommingMovie } from "../utils/constant";
import { useDispatch } from "react-redux";


const useUpcommingMovie= async ()=>{
    const dispatch =useDispatch()
    try {
      const res=await axios.get(UpcommingMovie,options);
      dispatch(getUpcomingMovie(res.data.results))
    } catch (error) {
      console.log(error)
    }
  }
  export default useUpcommingMovie;