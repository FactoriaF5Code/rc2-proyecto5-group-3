// import { requirePropFactory } from "@material-ui/core";
import "./Peliculas.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Api from "./Api";

import { useRef, useState } from "react";
import ApiSeries from "./ApiSeries";

export default function Peliculas() {
  const [isMove, setIsMove] = useState(false);
  const [sliderNum, setSliderNum] = useState(0);
  const Referencia = useRef();

  const [isMoveSeries, setIsMoveSeries] = useState(false);
  const [sliderNumSeries, setSliderNumSeries] = useState(0);
  const ReferenciaSeries = useRef();

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

  const clickSeries = (direccionSeries) => {
    setIsMoveSeries(true);
    let distanciaSeries =
      ReferenciaSeries.current.getBoundingClientRect().x - 60;
    if (direccionSeries === "izqSeries" && sliderNumSeries > 0) {
      setSliderNumSeries(sliderNumSeries - 1);
      ReferenciaSeries.current.style.transform = `translateX(${
        255 + distanciaSeries
      }px)`;
    }
    if (direccionSeries === "drchSeries" && sliderNumSeries < 14) {
      setSliderNumSeries(sliderNumSeries + 1);
      ReferenciaSeries.current.style.transform = `translateX(${
        -255 + distanciaSeries
      }px)`;
    }
  };

  return (
    <div className="cartelera">
      <p className="titulo_seccion">Populares en Restflix</p>
      <div className="contenedor_slider_movie">
        <ArrowBackIosNewIcon
          id="flecha_izq"
          onClick={() => click("izq")}
          style={{ display: !isMove && "none" }}
        />
        <div className="contenedor_populares" ref={Referencia}>
          <Api />
        </div>
        <ArrowForwardIosIcon id="flecha_drch" onClick={() => click("drch")} />
      </div>
      <p className="titulo_seccion">Originales de Restflix </p>
      <div className="contenedor_slider_series">
        <ArrowBackIosNewIcon
          id="flecha_izqSeries"
          onClick={() => clickSeries("izqSeries")}
          style={{ display: !isMoveSeries && "none" }}
        />
        <div className="contenedor_populares" ref={ReferenciaSeries}>
          <ApiSeries />
        </div>
        <ArrowForwardIosIcon
          id="flecha_drchSeries"
          onClick={() => clickSeries("drchSeries")}
        />
      </div>
    </div>
  );
}
