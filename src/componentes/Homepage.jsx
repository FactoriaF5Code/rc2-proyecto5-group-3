import logo from "../assets/logoNetflix.svg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import "./Homepage.css";

const theme = createTheme({
  palette: {
    primary:{
        main:'#e50914'
    } 
  },
});

export default function Homepage() {
  return (
    <>
      <div className="body">
        <header>
          <img src={logo} alt="Netflix" />
          <button className="inicio">Iniciar Sesión</button>
        </header>
        <div className="texto">
          <h1>Películas y series ilimitadas y mucho más</h1>
          <p className="parrafoHomePage">
            Disfruta donde quieras. Cancela cuando quieras
          </p>
          <p className="parrafoHomePage">
            ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
            reiniciar tu membresía de Netflix.
          </p>
        </div>
        <section>
          <input type="text" placeholder="Dirección de correo" />
          <ThemeProvider theme={theme}>
            <Button className="comenzar" variant="contained" color="primary">
              Comenzar <ArrowForwardIosIcon />
            </Button>
          </ThemeProvider>
        </section>
      </div>
    </>
  );
}
