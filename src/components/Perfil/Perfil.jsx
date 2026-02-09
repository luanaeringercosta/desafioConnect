import React from "react";
import styles from "./Perfil.module.scss";
import ImgPerfil from "../../assets/perfil.jpg";

function Perfil () {
    return(
        <section className={styles.containerTelaPerfil}>
        <h2>Perfil</h2>

        <article>

        <img src={ImgPerfil} alt="Foto de Pefil" />
        <div className={styles.cardInfo}>
            <h2>Luana Costa</h2>
            <h3>voluntaria??</h3>
            <p></p>

            <address>
                <p>Nova Friburgo, RJ</p>
                <p>luanascosta19@gmail.com</p>
                <p>membro desde...</p>
            </address>
        
        <ul>
          <li>Educação</li>
          <li>Meio Ambiente</li>
          <li>Assistência Social</li>
          <li>Design</li>
        </ul>
        </div>

        


        </article>
        </section>
    );
}

export default Perfil;