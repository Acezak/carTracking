import React from "react";

export function userComponent (props){

    return(
        <div className="generalLayout">
            <div className="horizontalLayout">
                <div className="nameLayout">
                    <p>Nombre</p>
                    <p>{props.name}</p>
                </div>

                <div className="idLayout">
                    <p>Identificación</p>
                    <p>{props.id}</p>
                </div>

                <div className="emailLayout">
                    <p>Dirección de correo</p>
                    <p>{props.email}</p>
                </div>

                <div className="typeLayout">
                    <p>Tipo de usuario</p>
                    <p>{props.type}</p>
                </div>

            </div>



        </div>
    )
}