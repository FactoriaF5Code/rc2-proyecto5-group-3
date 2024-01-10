// import { requirePropFactory } from "@material-ui/core";
import "./Peliculas.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Api from "./Api";
import Series from "./Series";
import { useRef, useState } from "react";

export default function Peliculas() {
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
      <p className="titulo_seccion">Populares en Restflix</p>
      <div className="contenedor_slider">
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
      <div className="contenedor_slider">
        <ArrowBackIosNewIcon
          id="flecha_izq"
          onClick={() => click("izq")}
          style={{ display: !isMove && "none" }}
        />
        <div className="contenedor_populares" ref={Referencia}>
          <Series/>
        </div>
        <ArrowForwardIosIcon id="flecha_drch" onClick={() => click("drch")} />
      </div>
    </div>
  );
}
