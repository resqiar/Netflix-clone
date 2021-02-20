// API KEY
const KEY = process.env.REACT_APP_TMDB_KEY;

const requests = {
  trending: `/trending/all/week?api_key=${KEY}&language=en-US`,
  topRated: `/movie/top_rated?api_key=${KEY}&language=en-US&page=1&sort_by=popularity.desc&page=1`,
  nowPlaying: `/movie/now_playing?api_key=${KEY}&language=en-US&page=1`,
  upcoming: `/movie/upcoming?api_key=${KEY}&language=en-US&page=1`,
  netflixOriginals: `/discover/tv?api_key=${KEY}&language=en-US&sort_by=popularity.desc&page=1`,
  actionMovies: `/discover/movie?api_key=${KEY}&with_genres=28`,
  adventureMovies: `/discover/movie?api_key=${KEY}&with_genres=12`,
  kidsMovies: `/discover/movie?api_key=${KEY}&with_genres=16`,
  scifiMovies: `/discover/movie?api_key=${KEY}&with_genres=878`,
  dramaMovies: `/discover/movie?api_key=${KEY}&with_genres=18`,
  warMovies: `/discover/movie?api_key=${KEY}&with_genres=10752`,
  comedyMovies: `/discover/movie?api_key=${KEY}&with_genres=35`,
  horrorMovies: `/discover/movie?api_key=${KEY}&with_genres=27`,
  romanceMovies: `/discover/movie?api_key=${KEY}&with_genres=10749`,
  history: `/discover/movie?api_key=${KEY}&with_genres=36`,
  tvAiringToday: `/tv/airing_today?api_key=${KEY}&language=en-US&page=1`,
  latest: `/movie/latest?api_key=${KEY}&language=en-US`,
};

export default requests;
