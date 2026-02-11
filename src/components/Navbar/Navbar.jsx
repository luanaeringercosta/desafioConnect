import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Inicio from "../Inicio/Inicio";
import Acoes from "../AcoesDaConnect/AcoesDaConnect";
import QuemSomos from "../QuemSomos/QuemSomos";
import Perfil from "../Perfil/Perfil";

import LogoTrabalho from "../../assets/logotrabalhoFinal.png";
import FotoDoPerfil from "../../assets/perfil.jpg";

import styles from './Navbar.module.scss';

function Navbar() {
    
    return (
        <BrowserRouter>
        
        <nav className= {styles.navBar}>
            <Link to="/">
            <img className={styles.logo} src= {LogoTrabalho} alt="Logo" />
            </Link>

            <ul>
                <li> <Link to = "/"> </Link>Inicio</li>
                <li> <Link to = "/acoes"> </Link>Ações da Connect</li>
                <li> <Link to = "/quemSomos"> </Link>Quem Somos</li>
            </ul>
             <Link to="/perfil">
            <img className={styles.imgPerfil} src= {FotoDoPerfil} alt="Perfil" />
            </Link>
        </nav>

        <Routes>
            <Route path ="/" element={<Inicio />}/>
            <Route path ="/acoes" element= {<Acoes/>}/>
            <Route path= "/quemSomos" element= {<QuemSomos/>}/>
            <Route path = "/perfil" element= {<Perfil/>}/>


        </Routes>
        </BrowserRouter>
    );
}

export default Navbar;