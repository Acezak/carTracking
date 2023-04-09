import React from "react";
import { app } from "./fb";
import './stylesheets/Panel.css';

const Map = () =>{

  const signOut = () =>{
    app.auth().signOut()
  }

  return(
    <div className="general">
      <div className="supView">
          <h1 className="statText"> Seguimiento vehicular </h1>
          <button className="signOutButton" onClick={signOut}> Cerrar sesión </button>
      </div>

    </div>  
)

}

export default Map