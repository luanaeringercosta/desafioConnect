import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Inicio from "../Inicio/Inicio";
import Acoes from "../AcoesDaConnecct/AcoesDaConnect";
import QuemSomos from "../QuemSomos/QuemSomos";
import Perfil from "../Perfil/Perfil";


import React from "react";
import LogoTrabalho from "../../assets/logotrabalhoFinal.png";
import FotoDoPerfil from "../../assets/perfil.jpg";

import styles from "./NavBar.module.scss";

function NavBar() {
    
    return(
        <BrowserRouter>
        
        <nav className= {styles.navBar}>
            <Link to="/">
            <img className={logo} src= "{LogoTrabalho}" alt="Logo" />
            </Link>

            <ul>
                <li> <Link to = "/"> </Link>Inicio</li>
                <li> <Link to = "/acoes"> </Link>Ações da Connect</li>
                <li> <Link to = "/quemSomos"> </Link>Quem Somos</li>
            </ul>

            <img className={styles.imgPerfil} src= {FotoDoPerfil} alt="Perfil" />
        </nav>

        <Routes>
            <Route path ="/" element={<Inicio />}/>
            <Route path ="/Acoes" element= {<Acoes/>}/>
            <Route path= "/QuemSomos" element= {<QuemSomos/>}/>
            <Route path = "/Perfil" element= {<Perfil/>}/>


        </Routes>
        </BrowserRouter>
    );
}

export default NavBar;