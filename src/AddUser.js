import React from "react";
import { app } from "./fb";
import './stylesheets/Panel.css';

const AddUser = () =>{
    
      return(
        <div className="general">
          <div className="supView">
              <h1 className="statText"> Añadir usuario </h1>
              <a href="/panel">
                <button className="signOutButton"> Regresar </button>
              </a>
          </div>

          <form>

          </form>
    
        </div>
          
    )
}

export default AddUser