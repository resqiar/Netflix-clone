import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../api/Axios";

const Row = ({ title, url, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const BASE_URL = "https://image.tmdb.org/t/p/w342/";

  useEffect(() => {
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
          <img src={`${BASE_URL}${isLarge ? movie?.backdrop_path : movie?.poster_path}`} alt={movie.name} className={`row__poster ${isLarge && 'row__posterLarge'}`}/>
        ))}
      </div>
    </div>
  );
};

export default Row;
