import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../api/Axios";
import { useDispatch, useSelector } from "react-redux";
import { selectPlayState, unplay, play } from "../../features/userSlice";

const Row = ({ title, url, isLarge, isTV }) => {
  const [movies, setMovies] = useState([]);

  // Play/unplay state
  const playState = useSelector(selectPlayState)
  const dispatch = useDispatch()

  const BASE_URL = "https://image.tmdb.org/t/p/w342/"; // IMAGE URL
  const KEY = process.env.REACT_APP_TMDB_KEY; // API KEY


  const handlePlay = async (id) => { // HANDLE  TRAILER  PLAYER 
    if (!id) {
      return;
    } else {
      if (playState) {
        // If trailer is still playing => close it
        dispatch(unplay())
        return;
      }

      let trailer; // trailer dummy

      // request trailer url to database
      if (isTV) {
        trailer = `/tv/${id}/videos?api_key=${KEY}&language=en-US`;
      } else {
        trailer = `movie/${id}/videos?api_key=${KEY}&language=en-US`;
      }

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

  useEffect(() => { // FETCH ALL MOVIES FROM DATABASE
    const fetchData = async () => {
      const request = await axios.get(url);

      setMovies(request.data.results);

      return request;
    };

    fetchData();
  }, [url]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handlePlay(movie?.id)}
            src={`${BASE_URL}${
              isLarge ? movie?.backdrop_path : movie?.poster_path
            }`}
            alt={movie.name}
            className={`row__poster ${isLarge && "row__posterLarge"}`}
          />
        ))}
      </div>

    </div>
  );
};

export default Row;
