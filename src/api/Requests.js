// API KEY
const KEY = process.env.REACT_APP_TMDB_KEY;

const requests = {
  trending: `/trending/all/week?api_key=${KEY}&language=en-US`,
  topRated: `/movie/top_rated?api_key=${KEY}&language=en-US&page=1`,
  nowPlaying: `/movie/now_playing?api_key=${KEY}&language=en-US&page=1`,
  upcoming: `/movie/upcoming?api_key=${KEY}&language=en-US&page=1`,
  netflixOriginals: `/discover/tv?api_key=${KEY}&language=en-US&sort_by=popularity.desc&page=1`,
  comedyMovies: `/discover/movie?api_key=${KEY}&with_genres=35`,
  horrorMovies: `/discover/movie?api_key=${KEY}&with_genres=27`,
  romanceMovies: `/discover/movie?api_key=${KEY}&with_genres=10749`,
  documentaries: `/discover/movie?api_key=${KEY}&with_genres=99`,
};

export default requests;
