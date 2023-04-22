import React from "react";

export function VehicleComponent (props){

    return(
        <div className="generalLayout">
            <div className="horizontalLayout">
                <div className="plateLayout">
                    <p>Placa</p>
                    <p>{props.plate}</p>
                </div>

                <div className="brandLayout">
                    <p>Marca</p>
                    <p>{props.brand}</p>
                </div>

                <div className="modelLayout">
                    <p>Modelo</p>
                    <p>{props.model}</p>
                </div>

                <div className="statusLayout">
                    <p>Estado</p>
                    <p>{props.status}</p>
                </div>

                <div className="driverIdLayout">
                    <p>CC del Conductor</p>
                    <p>{props.driverId}</p>
                </div>

            </div>



        </div>
    )
}