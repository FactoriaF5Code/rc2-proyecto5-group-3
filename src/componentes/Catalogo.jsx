import "./Catalogo.css"
import Headercatalogo from "./Headercatalogo";
import Portada from "./Portada"

// import { useState, useEffect } from "react";
export default function Catalogo() {
  return (
    <>
    <div className="background-portada">
    <Headercatalogo/>
    <Portada/>
    </div>
    </>
  )
}

// const [data, setData] = useState(null);

// useEffect(() => {
//   fetch("https://api.themoviedb.org/3/configuration")
//     .then((response) => response.json())
//     .then((response) => console.log(response))
//     .then((data)=>setData(data));
// },[]);
