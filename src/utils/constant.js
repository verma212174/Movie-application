export const API_END_POINT = "http://192.168.252.10:5000/api/user";

export const options = {
  method: "GET",
  url: "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmQzZDkyZGEwNTY5MzgyM2MwMWIyZWM3N2IzOTQ2ZSIsIm5iZiI6MTczMjExMTkyNS41NDI0NjUyLCJzdWIiOiI2NmQxZWJlOWFmOTU5YmVhYWIwYzI3ZTUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.VtISPJWtf2me_5myswjMm7SGizFjvIxIihGFMaawiw8",
  },
};

export const Now_Playing_Movie =
  "https://api.themoviedb.org/3/movie/now_playing";
export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular";
export const TopRatedMovie = "https://api.themoviedb.org/3/movie/top_rated";
export const UpcommingMovie = "https://api.themoviedb.org/3/movie/upcoming";

export const Search_Movie = "https://api.themoviedb.org/3/search/movie?query=";
export const Tmdb_api = "https://image.tmdb.org/t/p/w500";
