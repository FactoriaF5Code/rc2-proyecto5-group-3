import { useState, useEffect } from "react";
import "../ApiPeliculas/ApiPeliculas.css"

export default function ApiSeries() {
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
    let series = localStorage.getItem("series");
    if (series === null) {
      fetch(
        "https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc",
        options
      )
        .then((response) => response.json())
        .then((tv) => {
          localStorage.setItem("series", JSON.stringify(tv));
          console.log("tv from API:", tv);
          setData(Array.isArray(tv.results) ? tv.results : []);
        })
        .catch((error) => console.error("Error fetching tv:", error));
    } else {
      setData(JSON.parse(series).results);
    }
  }, []);

  return (
    <>
      {data.map((serie, index) => {
        let URL_final = URL_POSTER + serie.backdrop_path;
        return (
          <section key={index} className="carta">
            <div className="populares_restflix" key={serie.id}>
              <img className="peliculas" src={URL_final} alt="peliculas" />
            </div>
            <div className="info">
              <p className="p voto">{serie.vote_average}</p>
              <p className="p titulo">{serie.name}</p>
              <p className="p estreno">{serie.first_air_date}</p>
            </div>
          </section>
        );
      })}
    </>
  );
}
