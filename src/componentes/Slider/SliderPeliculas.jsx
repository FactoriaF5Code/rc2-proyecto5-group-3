// import { requirePropFactory } from "@material-ui/core";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ApiPeliculas from "../ApiPeliculas/ApiPeliculas";
import "./SliderPeliculas.css";
import "../ApiPeliculas/ApiPeliculas.css"

import { useRef, useState } from "react";

export default function SliderPeliculas() {
  const [isMove, setIsMove] = useState(false);
  const [sliderNum, setSliderNum] = useState(0);
  const Referencia = useRef();

  const click = (direccion) => {
    setIsMove(true);
    let distancia = Referencia.current.getBoundingClientRect().x - 60;
    if (direccion === "izq" && sliderNum > 0) {
      setSliderNum(sliderNum - 1);
      Referencia.current.style.transform = `translateX(${255 + distancia}px)`;
    }
    if (direccion === "drch" && sliderNum < 14) {
      setSliderNum(sliderNum + 1);
      Referencia.current.style.transform = `translateX(${-255 + distancia}px)`;
    }
  };

  return (
    <div className="cartelera">
      <p className="titulo_seccion">Populares en Netflix</p>
      <div className="contenedor_slider_movie">
        <ArrowBackIosNewIcon
          id="flecha_izq"
          onClick={() => click("izq")}
          style={{ display: !isMove && "none" }}
        />
        <div className="contenedor_populares" ref={Referencia}>
          <ApiPeliculas />
        </div>
        <ArrowForwardIosIcon id="flecha_drch" onClick={() => click("drch")} />
      </div>
    </div>
  );
}
