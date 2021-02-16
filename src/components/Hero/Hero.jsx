import React, { useEffect, useState } from 'react'
import './Hero.css'
import axios from '../../api/Axios'
import requests from '../../api/Requests'
import truncate from '../../utils/truncate'

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';

const Hero = () => {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        
        const fetchAPI = async () => {
            // FETCH MOVIE FROM API
            const request = await axios.get(requests.nowPlaying)

            // PICK RANDOM TO DISPLAY
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            ) 

            return request
        }
        
        fetchAPI()

    }, [])


    return (
        <div className="hero" style={
            {
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`
            }
        }>
            <div className="hero__effect"></div>

            <div className="hero__content">
                <h1 className="hero-title">{movie?.original_name || movie?.title }</h1>
                <div className="hero__button">
                    <button className="hero-button">
                        <PlayArrowIcon/> 
                        <p className="hero-button-text">Play</p>
                    </button>
                    <button className="hero-button">
                        <AddIcon/>
                        <p className="hero-button-text">My List</p>
                    </button>
                </div>
                <h2 className="hero-subtitle">{truncate(movie?.overview, 500)}</h2>
            </div>

            <div className="hero__fade"></div>
        </div>
    )
}

export default Hero
