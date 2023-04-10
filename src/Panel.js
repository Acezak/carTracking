import React from "react";
import { app } from "./fb";
import './stylesheets/Panel.css';
import { Link } from "react-router-dom";

const Panel = () =>{

      return(
        <div className="general">
          <div className="supView">
              <h1 className="statText"> Panel de control </h1>
              <a href="/">
                <button className="signOutButton"> Regresar </button>
              </a>
          </div>

          <div className="itemContainer">


            <a href="/panel/add_user">
                  <button className="addButton"> Añadir usuario </button>
            </a>

            <a href="/panel/modify_user">
                  <button className="addButton"> Modificar usuario </button>
            </a>

            <a href="/panel/add_vehicle">
                  <button className="addButton"> Añadir vehículo </button>
            </a>

            <a href="/panel/modify_vehicle">
                  <button className="addButton"> Modificar vehículo </button>
            </a>

            

          </div>
    
        </div>
          
    )
}

export default Panel