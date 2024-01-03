// import { useState, useEffect } from "react";
import Homepage from "./componentes/Homepage.jsx";
import Footer from "./componentes/Footer.jsx"
import "./App.css";

function App() {
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   fetch("https://api.themoviedb.org/3/configuration")
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .then((data)=>setData(data));
  // },[]);

  return (
    <>
      <Homepage/>
      <Footer/>
    </>
  );
}

export default App;
