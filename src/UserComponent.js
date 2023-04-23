import React from "react";
import './stylesheets/styleComponent.css';
import { Link, useHistory } from "react-router-dom";

export function UserComponent (props){

    //Import props values to vars
    const data = {id : props.id, name : props.name, type: props.type, email: props.email}
    const history = useHistory();

    //On click event
    const handleEditClick = (event) => {
        event.preventDefault();

        //Navigate to the modifications page
        history.push({
            pathname: '/panel/modify_user',
            state: data
        });
    }


    //Graph components
    return(
        <div className="generalLayout">
            <div className="horizontalLayout">
                <div className="valLayout">
                    <p>{props.name}</p>
                </div>

                <div className="valLayout">
                    <p>{props.id}</p>
                </div>

                <div className="valLayout">
                    <p>{props.email}</p>
                </div>

                <div className="valLayout">
                    <p>{props.type}</p>
                </div>

                <div className="editButton">
                    <Link onClick={handleEditClick}>Editar o eliminar</Link>
                </div>
                
            </div>

        </div>
    )
}