import "./Peliculas.css";
import { useState, useEffect } from "react";

export default function Peliculas() {
  let URL_POSTER = "https://image.tmdb.org/t/p/original";
  const [data, setData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDU3MDM4YWQ5OGRhMjAyNWM5OTBlNGY1ZTg4NDlkOSIsInN1YiI6IjY1OTNlYzE1NmFhOGUwNjE1M2VjYzdkZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Wv1AA5JuWT7VwVOAlfi8HQXuNU0QM2RH2gdESalmpP4",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=12",
      options
    )
      .then((response) => response.json())
      .then((movies) => {
        console.log("Movies from API:", movies);
        setData(Array.isArray(movies.results) ? movies.results : []);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div>
      {data.map((movie) => {
        let URL_final = URL_POSTER + movie.poster_path;
        return (
          <div key={movie.id}>
            <p>{movie.title}</p>
            <img src={URL_final} alt="peliculas" />
          </div>
        );
      })}
    </div>
  );
}
