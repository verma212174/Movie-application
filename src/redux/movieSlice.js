import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovie:null,
        popularMovie:null,
        upcomingMovie:null,
        topRatedMovie:null,
        toggle:false,
        trailerMovie:null,
        open:false,
        id:""
    },
    reducers:{
        getNowPlayingMovie:(state,action)=>{
            state.nowPlayingMovie=action.payload;
        },
        getPopularMovie:(state,action)=>{
            state.popularMovie=action.payload;
        },
        getTopRatedMovie:(state,action)=>{
            state.topRatedMovie=action.payload
        },
        getUpcomingMovie:(state,action)=>{
            state.upcomingMovie=action.payload
        },
        setToggle:(state)=>{
          state.toggle=!state.toggle;
        },
        getTrailerMovie:(state, action)=>{
        state.trailerMovie=action.payload;
        },
        setOpen:(state,action)=>{
            state.open=action.payload;
        },
        getId:(state, action)=>{
            state.id=action.payload;
        }
    }
});
export const {getNowPlayingMovie,getPopularMovie, getTrailerMovie,setOpen,getId,
    getTopRatedMovie,getUpcomingMovie,setToggle,}=movieSlice.actions;
export default movieSlice.reducer;