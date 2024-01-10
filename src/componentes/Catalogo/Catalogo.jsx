import "./Catalogo.css"
import Headercatalogo from "../HeaderCatalogo/Headercatalogo";
import Portada from "../Portada/Portada"
import SliderPeliculas from "../Slider/SliderPeliculas"


export default function Catalogo() {
  return (
    <>
    <div className="background-portada">
    <Headercatalogo/>
    <Portada/>
    </div>
    <SliderPeliculas/>
   
    </>
  )
}
