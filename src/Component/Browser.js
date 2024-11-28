
import React, { useEffect } from 'react'
import Header from './Header';
import {  useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import useNowPlayingMovie from '../hooks/useNowPlayingMovie';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovie from '../hooks/useTopRatedMovie';
import useUpcommingMovie from '../hooks/useUpcommingMovie';

import SearchMovie from './SearchMovie';
import Footer from './Footer';


function Browser() {
  const user=useSelector((store)=> store.app.user);
  const toggle =useSelector((store)=>store.movie.toggle)

  const navigate=useNavigate();

  useNowPlayingMovie();
  usePopularMovies();
  useTopRatedMovie();
  useUpcommingMovie();
   useEffect(()=>{
    if(!user){
      navigate('/')
    }
   },[user,navigate])


  return (
    <div>
      <Header />
      <div>
        {toggle ? <SearchMovie /> :(
        <>
        <MainContainer />
        <MovieContainer />
        <Footer />
        </>
       ) }
        
      </div>
     
    </div>
  )
}

export default Browser;