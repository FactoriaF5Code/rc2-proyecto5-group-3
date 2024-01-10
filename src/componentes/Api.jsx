import { useState, useEffect } from "react";
import "./Api.css";

export default function Api() {
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
    let pelis = localStorage.getItem("pelis");
    if (pelis === null) {
      fetch(
        "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc&with_genres=12",
        options
      )
        .then((response) => response.json())
        .then((movies) => {
          localStorage.setItem("pelis", JSON.stringify(movies));
          console.log("Movies from API:", movies);
          setData(Array.isArray(movies.results) ? movies.results : []);
        })
        .catch((error) => console.error("Error fetching movies:", error));
    } else {
      setData(JSON.parse(pelis).results);
    }
  }, []);

  return (
    <>
      {data.map((movie, index) => {
        let URL_final = URL_POSTER + movie.backdrop_path;
        return (
          <section key={index} className="carta">
            <div className="populares_restflix" key={movie.id}>
              <img className="peliculas" src={URL_final} alt="peliculas" />
            </div>
            <div className="info">
              <p className="p voto">{movie.vote_average}</p>
              <p className="p titulo">{movie.title}</p>
              <p className="p estreno">{movie.release_date}</p>
            </div>
          </section>
        );
      })}
    </>
  );
}
