import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Inicio from "../Inicio/Inicio.jsx";
import Acoes from "../AcoesDaConnect/AcoesDaConnect.jsx";
import QuemSomos from "../QuemSomos/QuemSomos.jsx";
import Perfil from "../Perfil/Perfil.jsx";

import LogoTrabalho from "../../assets/logo.png";
import FotoDoPerfil from "../../assets/perfil.jpg";

import styles from './Navbar.module.scss';

function Navbar() {
    
    return (
        <BrowserRouter>
        
        <nav className= {styles.navbar}>
            <Link to="/">
            <img className={styles.logo} src= {LogoTrabalho} alt="Logo" />
            </Link>

             <ul>
          <li>
            <Link to="/"> Início </Link>
          </li>
          <li>
            <Link to="/acoes"> Ações da Connect</Link>
          </li>
          <li>
            <Link to="/quemSomos"> Quem Somos </Link>
          </li>
        </ul>

             <Link to="/perfil">
            <img className={styles.imgPerfil} src= {FotoDoPerfil} alt="Perfil" />
            </Link>
        </nav>

         <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/acoes" element={<Acoes />} />
        <Route path="/quemSomos" element={<QuemSomos />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
    );
}

export default Navbar;