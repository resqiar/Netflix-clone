import React, { useEffect, useState } from 'react'
import './Hero.css'
import axios from '../../api/Axios'
import requests from '../../api/Requests'
import truncate from '../../utils/truncate'

import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch, useSelector } from 'react-redux'
import { play, selectPlayState, unplay } from '../../features/userSlice'

const Hero = () => {
    const [movie, setMovie] = useState([])
    const playState = useSelector(selectPlayState)
    const dispatch = useDispatch()
    const KEY = process.env.REACT_APP_TMDB_KEY;

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

    const handlePlay = async (id) => { // HANDLE  TRAILER  PLAYER 
        if (!id) {
            return;
        } else {
            if (playState) {
                // If trailer is still playing => close it
                dispatch(unplay())
                return;
            }

            // request trailer url to database
            const trailer = `movie/${id}/videos?api_key=${KEY}&language=en-US`;

            const request = await axios.get(trailer);

            // if request is null => return
            if (!request.data.results[0]) return;

            // if not => set to playing
            dispatch(play({
                id: id,
                url: request.data.results[0].key,
            })) // set state to true
        }
    };

    return (
        <div className="hero" style={
            {
                backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`
            }
        }>
            <div className="hero__effect"></div>

            <div className="hero__content">
                <h1 className="hero-title">{movie?.original_name || movie?.title}</h1>
                <div className="hero__button">
                    <button className="hero-button" onClick={ () => handlePlay(movie?.id)}>
                        <PlayArrowIcon />
                        <p className="hero-button-text">Play</p>
                    </button>
                    <button className="hero-button">
                        <AddIcon />
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
