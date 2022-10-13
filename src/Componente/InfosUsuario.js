import React from "react";

export function InfosUsuario(props) {

return(
    <div className="usuario">
<img src={props.usuario.foto} className="img"></img>
<h5>{props.usuario.usuario}</h5>

</div>

)
}
