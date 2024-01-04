import "./Catalogo.css"
import Headercatalogo from "./Headercatalogo";
import Portada from "./Portada"
import Peliculas from "./Peliculas";


export default function Catalogo() {
  return (
    <>
    <div className="background-portada">
    <Headercatalogo/>
    <Portada/>
    </div>
    <Peliculas/>
    </>
  )
}
