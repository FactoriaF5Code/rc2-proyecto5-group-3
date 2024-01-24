import Homepage from "./componentes/Homepage/Homepage.jsx";
import Footer from "./componentes/FooterPrincipal/Footer.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Cambiado de BrowserRouter a Router y agregado Routes
import Catalogo from "./componentes/Catalogo/Catalogo.jsx"
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
