import React from "react";
import "./styles.css";
import { CardVideo } from "./Componente/CardVideo";

export default function App() {
  const video1 = {
    imagem:"https://s3.amazonaws.com/assets-fluminense/player_pictures/1389/CANO_3x4_-_FRESCATTO_%281%29_slider.png?1660157206",
    titulo: "Vídeo 1",
    usuario: "Germán Cano",
    foto:"https://s3.amazonaws.com/assets-fluminense/player_pictures/1389/CANO_3x4_-_FRESCATTO_%281%29_slider.png?1660157206"
  }

  const video2 = {
    imagem:"https://www.ogol.com.br/img/jogadores/37/696637_med__20200831113012_caio_paulista.png",
    titulo: "Vídeo 2",
    usuario: "Caio Paulista",
    foto:"https://www.ogol.com.br/img/jogadores/37/696637_med__20200831113012_caio_paulista.png"
  }

    const video3 = {
      imagem:"https://s3.amazonaws.com/assets-fluminense/player_pictures/1386/PH_GANSO_3x4_-_SO_FRESCATTO_profile.png?1660157066",
      titulo: "Vídeo 3",
      usuario: "Paulo H. Ganso",
      foto:"https://s3.amazonaws.com/assets-fluminense/player_pictures/1386/PH_GANSO_3x4_-_SO_FRESCATTO_profile.png?1660157066"
    }

    const video4 = {
      imagem:"https://s3.amazonaws.com/assets-fluminense/player_pictures/1383/YAGO_FELIPE_3x4_-_SERIO_profile.png?1660156859",
      titulo: "Vídeo 4",
      usuario: "Yago Felipe",
      foto:"https://s3.amazonaws.com/assets-fluminense/player_pictures/1383/YAGO_FELIPE_3x4_-_SERIO_profile.png?1660156859"
    }

    const video5 = {
      imagem:"https://www.footyrenders.com/render/jhon-arias-1.png",
      titulo: "Vídeo 5",
      usuario: "Jhon Arias",
      foto:"https://www.footyrenders.com/render/jhon-arias-1.png"
    }

    const video6 = {
      imagem:"https://s3.amazonaws.com/assets-fluminense/player_pictures/1366/FABIO_3x4_-_SO_FRESCATTO_profile.png?1660155674",
      titulo: "Vídeo 6",
      usuario: "Fábio",
      foto:"https://s3.amazonaws.com/assets-fluminense/player_pictures/1366/FABIO_3x4_-_SO_FRESCATTO_profile.png?1660155674"
    }

    const video7 = {
      imagem:"https://www.ogol.com.br/img/jogadores/09/807309_med__20210730161916_luccas_claro.png",
      titulo: "Vídeo 7",
      usuario: "Luccas Claro",
      foto:"https://www.ogol.com.br/img/jogadores/09/807309_med__20210730161916_luccas_claro.png"
    }

    const video8 = {
      imagem:"https://s3.amazonaws.com/assets-fluminense/player_pictures/1378/MARTINELLI_3x4_-_SERIO_slider.png?1660156579",
      titulo: "Vídeo 8",
      usuario: "Martinelli",
      foto:"https://s3.amazonaws.com/assets-fluminense/player_pictures/1378/MARTINELLI_3x4_-_SERIO_slider.png?1660156579"
    }

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <h1>LabeNense</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
          <nav className="menu-vertical">
            <ul>
              <li className="botoes-meunu-vertical">Início</li>
              <li className="botoes-meunu-vertical">Em alta</li>
              <li className="botoes-meunu-vertical">Inscrições</li>
              <hr />
              <li className="botoes-meunu-vertical">Originais</li>
              <li className="botoes-meunu-vertical">Histórico</li>
            </ul>
          </nav>

          <section className="painel-de-videos">
            <CardVideo video ={video1}/>
            <CardVideo video ={video2}/>
            <CardVideo video ={video3}/>
            <CardVideo video ={video4}/>
            <CardVideo video ={video5}/>
            <CardVideo video ={video6}/>
            <CardVideo video ={video7}/>
            <CardVideo video ={video8}/>
          </section>
        </main>

        <footer>
          <h4>Fluminense Football Club - Guerreiros Desde 1902</h4>
        </footer>
      </div>
    </div>
  );
}

