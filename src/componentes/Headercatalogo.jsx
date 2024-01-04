import "./Headercatalogo.css";
import logoNetflix from "../assets/logoNetflix.svg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";

export default function Headercatalogo() {
  return (
    <>
      <header className="netflix-header">
        <section className="section-header-left">
          <img className="logo-netflix-header" src={logoNetflix} alt="Netflix" />
          <ul className="ul-header">
            <li>Inicio</li>
            <li>Series</li>
            <li>Películas</li>
            <li>Novedades más vistas</li>
            <li>Mi lista</li>
          </ul>
        </section>
        <section className="section-header-rigth">
          <SearchIcon className="lupa"/>
          <ul className="ul-header">
            <li>Infantil</li>
          </ul>
          <NotificationsNoneIcon className="campana" />
          <img className="perfil" src="../src/assets/Jaguar.jpg" alt="Perfil" />
        </section>
      </header>
    </>
  );
}
