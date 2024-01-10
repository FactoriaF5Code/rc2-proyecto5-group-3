import "./Portada.css";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export default function Portada() {
  return (
    <>
    <div className="contenedor-portada">
      <p className="parrafo-portada">Película</p>
      <h2>Los Asesinos de la Luna</h2>
      <p className="parrafo-portada">
        Miembros de la tribu Osage de los Estados Unidos, son asesinados bajo
        misteriosas circunstancias en la década de 1920 provocando una
        importante investigación por el FBI involucrando a J. Edgar Hoover.
      </p>
      <section className="botones-portada">
        <button className="boton-portada">
          <PlayArrowRoundedIcon />
          <p>Reproducir</p>
        </button>
        <button className="boton-portada boton-derecho">
          <InfoOutlinedIcon />
          <p>Más información</p>
        </button>
      </section>
      </div>
    </>
  );
}
