import React from "react";
import { app } from "./fb";

const Panel = () =>{
    const signOut = () =>{
        app.auth().signOut()
      }
    
      return(
        <div className="general">
          <div className="supView">
              <h1 className="statText"> Panel de control </h1>
              <button className="signOutButton" onClick={signOut}> Cerrar sesión </button>
          </div>
    
        </div>
          
    )
}

export default Panel