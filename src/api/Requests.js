
// API KEY
const KEY = process.env.REACT_APP_TMDB_KEY 

const requests = {
    netflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${KEY}&language=en-US&sort_by=popularity.desc&page=1`
}

export default requests