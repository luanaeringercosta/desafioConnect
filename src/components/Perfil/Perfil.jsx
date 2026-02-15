import React from "react";
import styles from "./Perfil.module.scss";
import ImgPerfil from "../../assets/perfil.jpg";

function Perfil () {
    return(
        <section className={styles.containerTelaPerfil}>
        <article>

        <img src={ImgPerfil} alt="Foto de Pefil" />
        <div className={styles.cardInfo}>
            <h2>Luana Costa</h2>
            <h3>Estudante</h3>
            <p className= {styles.paragrafoSobreMim}>
                Curiosa por tecnologia, acredito que design e dados transformam ideias em experiências reais. Estou sempre buscando aprender e evoluir.</p>

            <address>
                <p> Nova Friburgo, RJ </p>
                <p> luanascosta19@gmail.com </p>
                <p> Membro desde Setembro, 2025 </p>
            </address>
        
        <ul className={styles.listaInteresses}>
          <li>Saúde</li>
          <li>Alimentação</li>
          <li>Assistência Social</li>
          <li>Design</li>
        </ul>
        </div>

        


        </article>
        </section>
    );
}

export default Perfil;