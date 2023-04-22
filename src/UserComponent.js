import React from "react";
import './stylesheets/UserComponent.css';
import { BrowserRouter, Link } from "react-router-dom";

export function UserComponent (props){

    const data = {id : props.id, name : props.name, type: props.type}

    return(
        <div className="generalLayout">
            <div className="horizontalLayout">
                <div className="nameLayout">
                    <p>{props.name}</p>
                </div>

                <div className="idLayout">
                    <p>{props.id}</p>
                </div>

                <div className="emailLayout">
                    <p>{props.email}</p>
                </div>

                <div className="typeLayout">
                    <p>{props.type}</p>
                </div>

                
                <Link to={{ pathname: '/panel/modify_user', state: data }}>Editar</Link>
            </div>

        </div>
    )
}