import React from "react";
import {InfosUsuario} from "./InfosUsuario";

export function CardVideo(props) {
    
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido");
    }

    console.log(props.video)
return(
    <div className="box-pagina-principal" onClick={reproduzVideo}>
    <img src={props.video.imagem} alt="" />
    <h4>{props.video.titulo}</h4>
    <InfosUsuario usuario={props.video} />
  </div>

  
)
}