import React from "react";
import './stylesheets/styleComponent.css';
import { Link, useHistory } from "react-router-dom";

export function VehicleComponent (props){

    //Import props values to vars
    const data = {plate : props.plate, model : props.model, brand : props.brand}
    const history = useHistory();

    //On click event
    const handleEditClick = (event) => {
        event.preventDefault();

        //Navigate to the modifications page
        history.push({
            pathname: '/panel/modify_vehicle',
            state: data
        });
    }


    //Graph components
    return(
        <div className="generalLayout">
            <div className="horizontalLayout">
                <div className="valvhLayout">
                    <p>{props.plate}</p>
                </div>

                <div className="valvhLayout">
                    <p>{props.brand}</p>
                </div>

                <div className="valvhLayout">
                    <p>{props.model}</p>
                </div>

                <div className="valvhLayout">
                    <p>{props.status}</p>
                </div>

                <div className="valvhLayout">
                    <p>{props.driverId}</p>
                </div>

                <div className="editvhButton">
                    <Link onClick={handleEditClick}>Editar o eliminar</Link>
                </div>
            </div>

        </div>
    )
}