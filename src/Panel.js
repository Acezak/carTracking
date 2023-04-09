import React from "react";
import { app } from "./fb";
import './stylesheets/Panel.css';

const Panel = () =>{
  
      return(
        <div className="general">
          <div className="supView">
              <h1 className="statText"> Panel de control </h1>
              <a href="/">
                <button className="signOutButton"> Regresar </button>
              </a>
          </div>

          <a href="/panel/add_user">
                <button className="addButton"> Añadir usuario </button>
          </a>
    
        </div>
          
    )
}

export default Panel