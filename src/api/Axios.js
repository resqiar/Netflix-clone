import axios from 'axios'



// this axios instance is resonsible
// for fetching API from TMDB API
// for getting data from Back-end Server ? use Server.js
const _axios = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

export default _axios