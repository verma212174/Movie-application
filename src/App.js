import React from "react";
import Body from "./Component/Body";
import { Toaster } from 'react-hot-toast';
import MovieDialog from "./Component/MovieDialog";


function App() {
  return (
    <div>
    <Body />
    <Toaster />
    <MovieDialog />
   
    </div>
  );
}

export default App;
