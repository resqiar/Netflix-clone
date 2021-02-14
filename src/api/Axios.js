import axios from 'axios'

const _axios = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

export default _axios