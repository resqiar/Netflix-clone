import axios from 'axios'

// this axios instance is resonsible
// for fetching API from back-end server
// for getting movie from TMDB API ? use Axios.js
const _axios = axios.create({
    baseURL: "https://protected-dusk-73397.herokuapp.com/api/v1",
})

export default _axios